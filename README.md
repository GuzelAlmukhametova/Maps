# Maps
Альмухаметова Гузель Маратовна, группа 154, работаю над проектом создание схем общественного транспорта на основе геоданных.

Я из города Уфа, однако сейчас обучаюсь в Москве, поэтому в качестве города, для построения карты выберу Уфу или Москву.

На данный момент существует не мало схем общественного транспорта, однако у многих из них есть существенные недостатки:
-	Неподходящая цветовая гамма
-	Большое наличие ненужного текста 
-	Визуально непонятный дизайн
-	Отображение всех видов транспорта на карте одновременно

Один из дизайнеров схемы московского метрополитена также описывает множество проблем, возникающие при моделировании новой карты: http://artgorbunov.ru/bb/soviet/20160105/

В большинстве случаев это связано с огромными трудозатратами, в чем можно убедиться почитав историю создания новой схемы линий московского метро: https://www.artlebedev.ru/metro/map3/

 В нашем случае, будут браться данные с источников, где имеются маршруты города и прорисовываться путь, учитывая основные проблемы схем.

Также, в ходе проекта есть желание реализовать карту – схему общественного транспорта с возможностью поиска ресторанов по пути движения. 
>Пример: Вам необходимо добраться от дома до работы, готовить времени нет. Благодаря функции поиска ресторанов, Вы сможете сэкономить свое время и потрать его с пользой. 

Так как современный человек очень занятой и не у всех есть время приготовить поесть или человек просто не знает куда можно зайти утолить голод, не потеряв при этом много времени, считаю, что готовый продукт будет очень актуален для современного общества.

###План:

- Основная часть проекта будет разработана на языке JavaScript. Так как его можно использовать на различных платформах и Web-браузерах, и он ни в чем не отстает от обычных языков программирования.  А также, существует множество библиотек, которые помогают при программировании на JavaScript, ускоряют процесс разработки. Одним из вспомогающих фреймворков, которым мы будем пользоваться, я является Node.JS — это серверная реализация языка программирования JavaScript. Таким образом, благодаря Node.js сможет реализовать своё сервер-клиент приложение и обмениваться данными между ними 

- В данной работе уделяется большое внимание принципам разработки на стороне клиента, так как при создании приложения использовались различные инструменты и библиотеки frontend – разработки. По этой причине, в нашей работе будет присутствовать разработка с использованием HTML, SCC
