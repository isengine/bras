# Среда разработки

BRAS - сокращенно от Backend RESTful API Server, backend сервер API запросов в формате REST.

Это сервер, построенный на базе Node.js, который может использоваться в качестве backend части для ваших веб приложений.

# Оглавление

- [Быстрый старт](#быстрый-старт)
- [О проекте](#о-проекте)
  - [Состав](#состав)
  - [Структура](#структура)

# Быстрый старт

Быстрый запуск в 5 простых шагов.

**1**. Выполните клонирование данного репозитория в текущий каталог backend части вашего проекта.

```shell script
git clone https://github.com/isengine/bras .
```

**2**. Выполните компиляцию

Рекомендуем использовать **yarn**.

```shell script
yarn
```

**3**. Сделайте настройки

Разверните базу данных.

Внесите необходимые настройки в файл **.env**.

Запрограммируйте нужные пути и методы.

**4**. Соберите проект

В режиме **production**:

```shell script
yarn start
```

В режиме разработки **development**:

```shell script
yarn dev
```

Вывод проекта через node.js на 8080 порт: http://localhost:8080

Вывод статики из каталога "./public/" через сервер nginx + php-fpm на 80 порт: http://localhost

> В случае необходимости изменить конфигурацию сервера, возникновения ошибок и прочих вопросов, смотрите полное руководство.

[^ к оглавлению](#оглавление)

# О проекте

## Состав

Backend использует следующие технологии:

- apollo
- axios
- express
- graphql
- jwt
- mysql
- nodejs
- postgres
- prisma
- yarn

[^ к оглавлению](#оглавление)

## Структура

```
bras
├── .env
└── app
    ├── .ssh
    ├── mongo
    ├── mysql
    ├── nginx
    ├── php
    ├── postgres
    └── redis
```

[^ к оглавлению](#оглавление)
