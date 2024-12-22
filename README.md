# Список задач todos

Desctop MVP demo todos

## Оглавление

- [Команды запуска скриптов](#Команды-запуска-скриптов)
- [Стек](#Стек)
- [config.json](#configjson)

## Команды запуска скриптов

- `npm start` - запуск приложения на http://localhost:3000
- `npm run build` - сборка билда для прома
- `npm test` - запуск тестов

## Стек

- `Typescript` - язык, на котором разработано приложение
- `ReactJS` - библиотека на которой разработан интерфейс
- `MobX` - стейт менеджер
- `Redux Toolkit` - стейт менеджер
- `MaterialUI` - инструмент для построения интерфейса в стиле Material Design
- `React Testing Library` - библиотека для тестирования компонентов React
- `Jest` - библиотека для тестирования
- `esbuild` - быстрый сборщик

## config.json

`mode` - Выбор мода использующего разные менеджеры состояний, поддерживаются: `mobx`, `rtk` - Redux Toolkit

Задумка одновременного использования в проекте разных менеджеров состояний с целью собственного исследования, помогающего прийти к универсальной архитектуре приложения, привела меня к подобному решению, импортируя необходимые компоненты, т. к. реакт не поддерживает динамическую загрузку компонентов кроме как с помощью lazy

`debounceUpdateTodo` - Время отложенного сохранения данных

`scrollItemsCount` - Количество отображаемых элементов при скролле, используется для пагинации
