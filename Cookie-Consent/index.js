
function opacidad(n){
    const header = document.querySelector('header');
    const main = document.querySelector('main');

    header.style.opacity = n;
    main.style.opacity = n;
};
opacidad(.3);

const cerarVentanaCookies = document.getElementById('close');
cerarVentanaCookies.addEventListener('click', function(){
    let ventanaCookie = document.getElementById('windowCookie');
    ventanaCookie.style.display = 'none';
    opacidad(1);
});

const button = document.getElementById('btn');
button.addEventListener('click', function(){
    let ventanaCookie = document.getElementById('windowCookie');
    ventanaCookie.style.display = 'none';
    opacidad(1);
});

