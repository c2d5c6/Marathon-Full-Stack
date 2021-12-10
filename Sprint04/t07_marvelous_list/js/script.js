let listIndex = 0;

const movie = [
    {
        title: "Iron Man",
        date: 'Apreil 14 2008',
        actors: ['Robert Downey Jr', 'Gwyneth Paltrow', 'Terrence Howard'],
        img: '<img src="assets/images/1.jpg" class="images" alt="1"/>',
        infoBox: ` «Железный человек» (англ. Iron Man) — фильм режиссёра 
        Джона Фавро с Робертом Дауни-младшим в главной роли, 
        мировая премьера которого состоялась 14 апреля 2008 года. 
        Является первым фильмом кинематографической вселенной Marvel. 
        Фильм получил множество положительных отзывов и был включён 
        Американским институтом киноискусства в десятку лучших фильмов 
        2008 года.`
    },
    {
        title: "Iron Man 2",
        img: '<img src="assets/images/2.jpg" class="images" alt="1">',
        date: 'May 10 2010',
        actors: ['Robert Downey Jr', 'Robert Downey Jr', 'Don Cheadle'],
        infoBox: `Продолжение одного из самых зрелищных проектов от создателей 
        фильма "Железный человек", сценаристов фильма "Солдаты неудачи" и
         продюсеров фильмов "Человек-паук" и "Люди Икс". В 2008 году мир 
         содрогнулся, узнав о Тони Старке, мультимиллионере, плейбое и 
         гениальном инженере, надевшим доспехи Железного человека. В 2010 
         году вы вновь встретитесь с Тони Старком –на этот раз он столкнётся 
         с русским бизнесменом и соблазнительным агентом.`
    },
    {
        title: "Iron Man 3",
        img: '<img src="assets/images/3.jpg" class="images" alt="1">',
        date: 'Apreil 18 2013',
        actors: ['Robert Downey Jr', 'Robert Downey Jr', 'Don Cheadle'],
        infoBox: `Третий фильм серии о супергерое Тони Старке. 
        Режиссером картины выступил Шейн Блэк, а главную роль исполнил 
        известный американский актер Роберт Дауни-мл. Фильм «Железный человек 3»
         – седьмой по счету проект в рамках кинематографической вселенной Marvel.
        Мировая премьера картины назначена на 24 апреля 2013 года.`
    },
];

function showList(list) {
    let body = document.body;
    body.innerHTML =`
    <header id="pageHeader">Marvelous list</header>
    <article id="mainArticle">
        <div class="box-prev">
            <h1 class="title">${movie[list].title}</h1>
            <span class="date">${movie[list].date}</span>
        </div>
        <div class="box-actors">
            <div class="info">${movie[list].actors[0]}</div>
            <div class="info">${movie[list].actors[1]}</div>
            <div class="info">${movie[list].actors[2]}</div>
        </div>
    </article>
    <nav id="mainNav">
        <button id="btn" onclick="list1()">Iron-man 1</button>
        <button id="btn" onclick="list2()">Iron-man 2</button>
        <button id="btn" onclick="list3()">Iron-man 3</button>
    </nav>
    <div id="siteAds">
        ${movie[list].img}
    </div>
    <footer id="pageFooter">
        <div class="info-box">
            ${movie[list].infoBox}
        </div>
    </footer>`
}

function list1() {
    showList(listIndex = 0);
}

function list2() {
    showList(listIndex = 1);  
}

function list3() {
    showList(listIndex = 2);
}

showList(listIndex);