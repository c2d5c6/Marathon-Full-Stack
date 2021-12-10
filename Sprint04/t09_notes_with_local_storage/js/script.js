let input = document.querySelector('.textarea-input');
let arh = document.querySelector('.textarea-arh');

let count = 0;

function btnAdd() {
    let date = new Date;
    date.setDate(date.getDate() + 30);
    if (input.value === '') {
        alert('Entry text');
    }
    else {
        localStorage.setItem(count.toString(), input.value + `[${date.toUTCString()}]`);
        if (arh.innerHTML === '[Empty]') {
            arh.innerHTML = '';
            arh.insertAdjacentHTML('beforeend', `--> ${localStorage.getItem(count.toString())}\n`);
        }
        else
            arh.insertAdjacentHTML('beforeend', `--> ${localStorage.getItem(count.toString())}\n`);
            count++;
    }
    
}

function btnClear() {
    let question = confirm('Delete cookies?')
    if (question === true) {
      localStorage.clear();
      arh.innerHTML = '[Empty]';
    }
  }

if (localStorage.length === 0) {
    arh.innerHTML = '[Empty]';
}
else {
  translation();
}

function translation() {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.getItem(i.toString());
    if(i === 0) arh.innerHTML = `--> ${key}`;
    else arh.innerHTML += `<div>--> ${key}</div>`;
  }
}