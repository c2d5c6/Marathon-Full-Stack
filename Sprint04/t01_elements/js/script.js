// className - отвечает за значение атрибута class элемента

// hasAttribute(name) - проверяет наличие атрибута
// getAttribute(name) - получает значение атрибута
// setAttribute(name, value)  - устанавливает значение атрибута
// removeAttribute(name) - удаляет атрибут

function listAttributes() {
    let listAtt = document.getElementById('characters').children;

    for (let i = 0; i < listAtt.length; i++) {
        let nameClass = listAtt[i].getAttribute('class');
        let nameData = listAtt[i].getAttribute('data-element')

        if (nameClass !== 'good' && nameClass !== 'evil' || !nameClass) {
            listAtt[i].className = 'unknown'
        }
        if (!nameData) {
            listAtt[i].setAttribute('data-element', 'none');
        }
        listAtt[i].appendChild(document.createElement('br'));

        if (listAtt[i].getAttribute('data-element') === 'none') {
            let cirlce = document.createElement('div');
            let line = document.createElement('div');

            cirlce.setAttribute('class', `elem ${nameData}`);
            listAtt[i].appendChild(cirlce);
            line.setAttribute('class', 'line');
            cirlce.appendChild(line)
        }
        else {
            nameData = listAtt[i].getAttribute('data-element').split(' ');
            for (let j = 0; j < nameData.length; j++) {
                let circle = document.createElement('div');

                circle.setAttribute('class', `elem ${nameData[j]}`);
                listAtt[i].appendChild(circle);
            }
        }
    }
}

listAttributes()