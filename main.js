

document.getElementById('boton-proyecto-anterior').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(lists[0]);
}

document.getElementById('boton-proyecto-siguiente').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(lists[lists.length - 1]);
}