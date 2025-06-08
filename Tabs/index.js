
const firstTab =document.getElementById("tab-first");

firstTab.addEventListener('click', function(){


    const firstTab = document.getElementById("one-tab");
    const secondTab = document.getElementById("two-tab");
    const thirdTab = document.getElementById("three-tab");
    const fourthTab = document.getElementById("four-tab");

    const first  =document.getElementById('first');
    const second  =document.getElementById('second');
    const third  =document.getElementById('third');
    const fourth  =document.getElementById('fourth');
    first.style.borderBottom =  'solid 4px';     
    second.style.borderBottom =  'none';     
    third.style.borderBottom =  'none';     
    fourth.style.borderBottom =  'none';     
    

    firstTab.style.display = 'block';    
    secondTab.style.display = 'none';
    thirdTab.style.display = 'none';
    fourthTab.style.display = 'none';

});

const secondTab =document.getElementById("tab-second");

secondTab.addEventListener('click', function(){

    const firstTab = document.getElementById("one-tab");
    const secondTab = document.getElementById("two-tab");
    const thirdTab = document.getElementById("three-tab");
    const fourthTab = document.getElementById("four-tab");

    const first  =document.getElementById('first');
    const second  =document.getElementById('second');
    const third  =document.getElementById('third');
    const fourth  =document.getElementById('fourth');
    first.style.borderBottom =  'none';     
    second.style.borderBottom =  'solid 4px';     
    third.style.borderBottom =  'none';     
    fourth.style.borderBottom =  'none';     
    
    
    firstTab.style.display = 'none';    
    secondTab.style.display = 'block';
    thirdTab.style.display = 'none';
    fourthTab.style.display = 'none';

});

const thirdTab =document.getElementById("tab-third");

thirdTab.addEventListener('click', function(){

    const firstTab = document.getElementById("one-tab");
    const secondTab = document.getElementById("two-tab");
    const thirdTab = document.getElementById("three-tab");
    const fourthTab = document.getElementById("four-tab");
    
    const first  =document.getElementById('first');
    const second  =document.getElementById('second');
    const third  =document.getElementById('third');
    const fourth  =document.getElementById('fourth');
    first.style.borderBottom =  'none';     
    second.style.borderBottom =  'none';     
    third.style.borderBottom =  'solid 4px';     
    fourth.style.borderBottom =  'none';


    firstTab.style.display = 'none';
    secondTab.style.display = 'none';
    thirdTab.style.display = 'block';
    fourthTab.style.display = 'none';
});


const fourthTab =document.getElementById("tab-fourth");

fourthTab.addEventListener('click', function(){

    const firstTab = document.getElementById("one-tab");
    const secondTab = document.getElementById("two-tab");
    const thirdTab = document.getElementById("three-tab");
    const fourthTab = document.getElementById("four-tab");
    

    const first  =document.getElementById('first');
    const second  =document.getElementById('second');
    const third  =document.getElementById('third');
    const fourth  =document.getElementById('fourth');
    first.style.borderBottom =  'none';     
    second.style.borderBottom =  'none';     
    third.style.borderBottom =  'none';     
    fourth.style.borderBottom =  'solid 4px';

    firstTab.style.display = 'none';    
    secondTab.style.display = 'none';
    thirdTab.style.display = 'none';
    fourthTab.style.display = 'block';
});
