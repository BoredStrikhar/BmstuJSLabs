# Лаборатоная 7

## Как запустить

```sh
cd LAB7 # заходим в папку, где расположен файл, который вы читаете
npm i # ставим зависимости
npm start # запускаем сервер
```

## Как пользоваться тестовым API

Сервер старует на `http://127.0.0.1:3000`

Есть 3 API эндпоинта:

 - `/api/hello` - hello world чтобы проверить что все работает
 - `/api/weather?city=<город по которому вы хотите погоду>` - получение погоды в каком-то городе
 - `/api/cities` - получение списка городов

## Куда писать клиентский код

Код клиента писать в папку `client`. Там уже лежит базовый html. Клиентский код доступен по `http://127.0.0.1:3000` - его раздает тот же сервер, что и отдает данные API

## Задание:
1. Используя тестовое api, сверстать страницу погоды по городам
2. Нужно реализовать поиск - должен быть инпут для ввода названия города
3. Если api не вернуло информацию, необходимо показать информацию об ошибке на странице
4. Изначальный город должен быть Moscow