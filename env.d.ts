// Данный файл необходим для корренктной работы ts-линтера импортом .env переменных в клиентские приложения

declare module 'env' {
  const NODE_ENV: string
  const DEBOUNCE_UPDATE_TODO: string
  const SCROLL_ITEMS_COUNT: string
}
