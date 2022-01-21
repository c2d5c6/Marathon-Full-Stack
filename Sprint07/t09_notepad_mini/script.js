let content = document.getElementById('content');
let list = document.getElementById('list');

if(content.innerHTML.length < 5) {
    content.classList.add('hide');
}
if(list.innerHTML.length < 5) {
    list.classList.add('hide');
}

window.onload = function() {
    fetch('/list')
        .then(response => response.json())
        .then(data => {
            render(data);
            console.log(data);
        });
};

function render(data, name = "") {
    if(data.list) {
        let html = '<ul>';
        console.log(data.list);
        data.list.map(item => {
            html += `<li><a href="/show/?id=${item[0]}">${item[1].date} > ${item[1].name}</a> <a href="/delete/?id=${item[0]}">DELETE</a></li>`;
        });
        list.innerHTML = "<h2>List of note:</h2>" + html;
        list.classList.remove('hide');
    }
    if(data.content) {
        let render = "<h2>Selected file: </h2>";
        render += `<h2>${name}</h2>` + '</br>';
        render += data.content;
        render += `<div><button id="deletefile">Delete</button></div>`

        content.innerHTML = '<pre>' + render + '</pre>';
        content.classList.remove('hide');
        document.querySelector('#deletefile').addEventListener('click',
        () => {location.href = '/delete/?file=' + name}
        );
    }
}

function showFile(e) {
    // e.target.dataset.file ;
    fetch('/show?file=' + e.target.dataset.file)
        .then(response => response.json())
        .then(data => {
            render(data, e.target.dataset.file);
            console.log(data);
        });
}