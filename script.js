let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('color');
    }
    else{
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('color');
    }
};


let manu = document.querySelector('#manu-icon');
let navlist = document.querySelector('.nav-list');

manu.onclick = () => {
    manu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}