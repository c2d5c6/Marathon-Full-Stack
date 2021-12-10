let x, y;
let stone = document.querySelectorAll('#picture');

stone.forEach(item =>{
    item.addEventListener('mouseover', clickEgg);
});    

function dragOnStart(event){
    x = event.offsetX;
    y = event.offsetY;
}

function dragOnEnd(event){
    this.style.top = (event.pageY - y) + 'px';
    this.style.left = (event.pageX - x) + 'px';
}

function clickEgg(){
    this.classList.toggle('active');  
    if(this.classList.contains('active') && this.getAttribute("value") == "on") {
        this.addEventListener('dragstart', dragOnStart);
        this.addEventListener('dragend', dragOnEnd);
        this.draggable = 'false';
    } else {
        this.removeEventListener('dragstart', dragOnStart);
        this.removeEventListener('dragend', dragOnEnd);
        this.draggable = 'true';  
    }
}