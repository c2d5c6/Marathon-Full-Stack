document.querySelector('button').addEventListener('click', (e)=>{
    e.preventDefault();
    e.target.setAttribute('disabled', true);
    fetch('/show')
    .then(response => response.json())
    .then(data => {
        document.querySelector('#content').innerHTML = getHtml(data)
       })
})
function getHtml(data){
   let result = '';
   for(let key in data) {
       if(typeof data[key]  === "object") {
           result += `<div class="box"><b class="key">${key}</b>: ${getHtml(data[key])}</div>`;
       } else {
           result += `<div class="box"><b>${key}</b>: ${data[key]}</div>`;
       }
   }
   return result;
}