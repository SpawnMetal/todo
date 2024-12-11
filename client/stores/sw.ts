import {makeAutoObservable} from 'mobx'
import {IPeople, Resource} from '@utils'
import {getSw} from '@api'

type RequestStatuses = 'loading' | 'success' | 'error' | null

export type PathTypes = 'app' | 'people' | 'films' | 'homeworld' | 'species' | 'starships' | 'vehicles'

interface RequestStatusInterface extends Record<PathTypes, RequestStatuses> {}

interface PeopleOriginalNamesInterface {
  [key: string]: string
}

// Основное состояние приложения
class Sw {
  requestStatusLoading: RequestStatuses = 'loading' // Статус получения данных с сервера - загрузка
  requestStatusSuccess: RequestStatuses = 'success' // Статус получения данных с сервера - успех
  requestStatusError: RequestStatuses = 'error' // Статус получения данных с сервера - ошибка
  // Статус получения данных с сервера
  populateStatus: RequestStatusInterface = {
    app: null,
    people: null,
    films: null,
    homeworld: null,
    species: null,
    starships: null,
    vehicles: null,
  }
  peoples: {
    resources: Resource<IPeople>[]
    populateAll(path: string): Promise<any>
  }
  value: IPeople
  newValue: Partial<IPeople>
  peopleUrlName: string = ''
  peopleOriginalNames: PeopleOriginalNamesInterface = {}

  constructor() {
    makeAutoObservable(this)
  }

  // Устанавливает статус получения данных с сервера - загрузка
  setRequestStatusLoading(path: PathTypes) {
    this.populateStatus[path] = this.requestStatusLoading
  }

  // Устанавливает статус получения данных с сервера - успех
  setRequestStatusSuccess(path: PathTypes) {
    this.populateStatus[path] = this.requestStatusSuccess
  }

  // Устанавливает статус получения данных с сервера - ошибка
  setRequestStatusError(path: PathTypes) {
    this.populateStatus[path] = this.requestStatusError
  }

  // Получает результат загрузки данных с сервера - загрузка
  isRequestStatusLoading(path: PathTypes) {
    return this.populateStatus[path] === this.requestStatusLoading
  }

  // Получает результат загрузки данных с сервера - успех
  isRequestStatusSuccess(path: PathTypes) {
    return this.populateStatus[path] === this.requestStatusSuccess
  }

  // Получает результат загрузки данных с сервера - ошибка
  isRequestStatusError(path: PathTypes) {
    return this.populateStatus[path] === this.requestStatusError
  }

  // Обновляет значения на новые
  updateValue() {
    for (const key in this.newValue) {
      if (!this.newValue[key].length) this.newValue[key] = 'unknown'
      key === 'name' && this.peopleChangeName(this.value[key], this.newValue[key])
    }
    this.value = {...this.value, ...this.newValue}
  }

  // Заполняет данные в состояние
  setSwResult(result) {
    this.peoples = result
    this.peoples.resources.sort((a, b) => a.value.name.localeCompare(b.value.name))
  }

  // Получает основные данные
  getSwApp() {
    this.setRequestStatusLoading('app')
    this.setRequestStatusLoading('people')
    getSw()
      .then(result => {
        this.setSwResult(result)
        this.setRequestStatusSuccess('app')
        this.setRequestStatusSuccess('people')
        this.fillPeopleOriginalNames()
      })
      .catch(() => {
        this.setRequestStatusError('app')
        this.setRequestStatusError('people')
      })
  }

  // Заполнение данных результатами поиска
  getSwSearch(searchString: string, isAppLoading: boolean = false) {
    isAppLoading && this.setRequestStatusLoading('app')
    this.setRequestStatusLoading('people')
    getSw(searchString)
      .then(result => {
        isAppLoading && this.setRequestStatusSuccess('app')
        this.setRequestStatusSuccess('people')
        this.setSwResult(result)
        isAppLoading && this.fillPeopleOriginalNames()
      })
      .catch(() => {
        isAppLoading && this.setRequestStatusError('app')
        this.setRequestStatusError('people')
      })
  }

  // Заполнение конкретных дополнительных данных
  populate(path: PathTypes, index: number) {
    if ((typeof this.peoples.resources[index].value[path][0] !== 'string' && this.peoples.resources[index].value[path][0] !== undefined) || this.peoples.resources[index].value[path]?.name) return

    this.setRequestStatusLoading(path)
    this.peoples.resources[index]
      .populate(path)
      .then(() => this.setRequestStatusSuccess(path))
      .catch(() => this.setRequestStatusError(path))
  }

  // Заполнение всех дополнительных данных
  populateAll(index: number) {
    this.populate('films', index)
    this.populate('homeworld', index)
    this.populate('species', index)
    this.populate('starships', index)
    this.populate('vehicles', index)
  }

  // Запоминает оригинальные имена персонажей
  fillPeopleOriginalNames() {
    for (const {value} of this.peoples.resources) this.peopleOriginalNames[value.name] = value.name
  }

  // Смена имени персонажу
  peopleChangeName(oldName: string, newName: string) {
    for (const key in this.peopleOriginalNames)
      if (this.peopleOriginalNames[key] === oldName) {
        this.peopleOriginalNames[key] = newName
        break
      }
  }

  // Поиск оригинального имени персонажа
  peopleFindOriginalName() {
    for (const key in this.peopleOriginalNames) if (this.peopleOriginalNames[key] === this.value.name) return key
  }
}

export const sw = new Sw()
