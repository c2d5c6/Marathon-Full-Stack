let keys = {
    apiKey: '675ee9b7f2a7cd322e79ff8ac140bdc2',
}

let listCard = document.querySelector('.box-card');
for (let i = 0; i < 5; i++) {
    listCard.insertAdjacentHTML('afterbegin',
    `<div id="card" class="weather">
        <div class="details">
            <div class="temp"></div>
            <div class="right">
                <div id="city"></div>
                <div id="summary"></div>
                <div id="data"></div>
                <div id="cardWeather"><img></div>
            </div>
        </div>
    </div>`)
}

let cardList = document.querySelectorAll('#card');
let form = document.querySelector('.cityName');

let cityKey;

form.addEventListener('submit', function(params) {
    params.preventDefault();

    let formData = new FormData(this);
    cityKey = formData.get('cityKey');
    Params(cityKey);
});

function Params(dataKey) {
    let keyCnt = 0;
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${dataKey}&cnt=40&appid=${keys.apiKey}`)
        .then(function (resp) { return resp.json() })
        .then(function(data) {
            for (let j = 0; j < 5; j++) {
                cardList[j].querySelector('.temp').innerHTML = Math.round(data.list[keyCnt].main.temp - 273) + '&deg;';
                cardList[j].querySelector('#city').innerHTML = data.city['name'];
                cardList[j].querySelector('#summary').innerHTML = data.list[keyCnt].weather[0]['main'];
                cardList[j].querySelector('#data').innerHTML =  new Date(data.list[keyCnt].dt * 1000).toLocaleDateString("ru", {weekday: "long"});
                if (data.list[keyCnt].weather[0]['main'] === 'Rain') {
                    cardList[j].querySelector('#cardWeather img').src = 'assets/images/3.png';
                } 
                else if (data.list[keyCnt].weather[0]['main'] === 'Clouds') {
                    cardList[j].querySelector('#cardWeather img').src = 'assets/images/2.png'
                }
                else if (data.list[keyCnt].weather[0]['main'] === 'Clear') {
                    cardList[j].querySelector('#cardWeather img').src = 'assets/images/1.png'
                }
                else if (data.list[keyCnt].weather[0]['main'] === 'Snow') {
                    cardList[j].querySelector('#cardWeather img').src = 'assets/images/6.png'
                } 
                else {
                    return falsel
                }
                keyCnt += 8;
            }
        })
        .catch(function() {
            return false
        })
}

Params('Kiev');