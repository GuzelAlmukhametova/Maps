# Maps

### Альмухаметова Гузель Маратовна, группа 154
### Проект: создание схем общественного транспорта на основе геоданных.

#### Описание:

В качестве города для построения карты выбрала Москву.

На данный момент существует немало схем общественного транспорта, однако у многих из них есть существенные недостатки:

#### -     Неподходящая цветовая гамма

![img](http://kolia.pp.ru/creative/busmap/images/troll1.png)

#### -     Наличие большого количества ненужного текста 

![img](https://img.artlebedev.ru/everything/metro/map3/process-1/moscow-metro-map3-process-06.gif)

#### -     Визуально непонятный дизайн

![img](http://artgorbunov.ru/bb/soviet/20160105/london-night-buses@fx.png)

#### -     Отображение всех видов транспорта на карте одновременно

![img](http://artgorbunov.ru/bb/soviet/20160105/budapest@fx.jpg)

Один из дизайнеров схемы московского метрополитена также описывает множество проблем, возникающих при моделировании новой карты: http://artgorbunov.ru/bb/soviet/20160105/

В большинстве случаев это связано с огромными трудозатратами, в чем можно убедиться, почитав историю создания новой схемы линий московского метро: https://www.artlebedev.ru/metro/map3/

 В нашем случае, будут браться данные из источников, где имеются маршруты города и прорисовываться путь, учитывая основные проблемы схем.

Также, в ходе проекта есть желание реализовать карту – схему общественного транспорта с возможностью поиска ресторанов по пути движения. 
>Пример: Вам необходимо добраться от дома до работы, готовить времени нет. Благодаря функции поиска ресторанов, Вы сможете сэкономить свое время и потрать его с пользой. 

Так как современный человек очень занятой и не у всех есть время приготовить поесть или человек просто не знает куда можно зайти утолить голод, не потеряв при этом много времени, считаю, что готовый продукт будет очень актуален для современного общества.

#### Используемые технологии:

- Основная часть проекта будет разработана на языке JavaScript. Так как его можно использовать на различных платформах и Web-браузерах, и он ни в чем не отстает от обычных языков программирования.  А также, существует множество библиотек, которые помогают при программировании на JavaScript, ускоряют процесс разработки. Одним из вспомогающих фреймворков, которым мы будем пользоваться, является Node.JS — это серверная реализация языка программирования JavaScript. Таким образом, благодаря Node.js мы сможем реализовать своё сервер-клиент приложение.

- В данной работе уделяется большое внимание принципам разработки на стороне клиента, так как при создании приложения использовались различные инструменты и библиотеки frontend – разработки. По этой причине, в основном, я буду использовать HTML и CSS.


#### План:
- Сбор данных о всех маршрутах города (сложность 4/10):

    В качестве источника всех маршрутов будут использоваться следующие сайты:
    - http://www.eway24.ru/ru/cities/msk/routes
    - http://www.maxikarta.ru/msk/transport
    - http://www.24tr.ru/moscow
    - http://wikiroutes.info/msk/catalog
    
    Так как это не просто карта, также необходима информация о всех ресторанах Москвы, которая будет доставаться из:
    - http://msk.allcafe.ru/restaurants
    - http://www.spr.ru/all/restorani/

    А также, помимо это, будет опора на
    - https://yandex.ru/maps/
    - https://www.google.ru/maps
    
- Отрисовка схем. (сложность 10/10)
    
- Группировка похожих маршрутов. (сложность 6/10)
 
- Окраска в визуально приятную и понятную цветовую гамму (сложность 2/10)
     - Для полной уверенности корректой цветовой гаммы будут проводиться тесты на людях с проблемами цветовосприятия.
     
- Разметка ресторанов рядом с остановками по пути следования. (сложность 5/10)
 
- Разделение ресторанов на категории и поиск по категориям. (сложность 8/10)
 





