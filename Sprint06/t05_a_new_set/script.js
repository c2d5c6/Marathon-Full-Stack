let result = [];
const form = document.getElementsByTagName('form');

form[0].addEventListener('submit', showData);

function showData(el) {
    let render = 'POST</br></br>Array</br>(</br><pre>';
    el.preventDefault();
    [...form[0]].map(item => {
        if (item.name) {
            result.push([item.name, item.value]);
            render += `\t [${item.name}] => ${item.value}\n`;
        }
    });
    render += '</pre>)</br>';
    document.querySelector('#result').innerHTML = render;
}
