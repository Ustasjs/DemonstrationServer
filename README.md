# Сервер для сайта-портфолио

Демонстрационный сервер для сайта-портфолио. Сервер отдает статику и рендерит небольшие шаблоны динамических частей. Также реализовано простое API для взаимодействия с MongoDB.

В данном репозитории уже есть вся статика для фронтенд части приложения. Но вы также можете скачать исходный код фронтенд части и запустить в dev режиме с этим сервером.

Ссылки:

[портфолио](https://github.com/Ustasjs/Portfolio)
[админка](https://github.com/Ustasjs/adminPanel)

Сервер не требует локальной установки MongoDB. База данных размещена в облачном хранилище.

По умолчанию портфолио доступно по адресу http://localhost:3000/
Админка http://localhost:3000/adminpanel/

Для доступа в админку необходимо авторизоваться через портфолио. Логин: admin, пароль: admin.

> Сборка проекта с помощью Webpack версии 3.0.0^.

## Старт проекта

##### Склонируйте репозиторий и перейдите в папку проекта

```
git clone https://github.com/Ustasjs/DemonstrationServer
```

##### Установите модули локально

```
npm install | yarn install
```

##### Отправка письма

```
Если вы желаете протестировать функционал отправки писем, то вам необходимо заполнить своими данными поле mail в файле config/config.json
```

##### Запустите сборку проекта

```
npm start | yarn start
```
