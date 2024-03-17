# Вступительное задание на стажировку в VK Маркет

## Задача
Создать React-приложение для [Корзины](https://laizerlzr.github.io/React-VK-Market/) товаров магазина на основе компонентов-функций.

## Что было реализовано

- Отображение карточки товара с названием, описанием, стоимостью и количеством.
- Функционал увеличения/уменьшения количества товара.
- Функционал удаления товара из корзины.
- Вывод и автоматический персчет итоговой стоимости товаров .
- Вывод и пересчет стоимости одного товара при изменении его количества. 

## Стек технологий
- React для создания пользовательского интерфейса.
- Redux Toolkit для хранения состояния приложения.
- typeScript
- Axios. Предоставляет простой интерфейс для выполнения запросов на сервер и обработки ответов.
- [VKUI](https://dev.vk.com/ru/libraries/vkui), библиотека ui компонентов для React.
- CSS. Добавление перпроцессоров в проект считаю нецелесообразным, так как использваоние стилей минимальное за счет ui кита.


## Как работать с проектом

### npm start
Запускает приложение в режиме разработки
- Откройте [http://localhost:3000](http://localhost:3000) чтобы просмотреть приложение в браузере.
- Страница перезагружается автоматичесие при вне внесении изменений

### npm run build
Собирает приложение для продакшена
- Собирает приложеине в продашен режиме в папке build и опитимизирует сборку для улучшения производительности.
- Приложение готово для деплоя!