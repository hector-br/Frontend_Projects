
const firstTab =document.getElementById("tab-first");

firstTab.addEventListener('click', function(){


    const firstTab = document.getElementById("one-tab");
    const secondTab = document.getElementById("two-tab");
    const thirdTab = document.getElementById("three-tab");
    const fourthTab = document.getElementById("four-tab");

    
    console.log(firstTab);

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
    
    console.log(firstTab);

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
    
    console.log(firstTab);


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
    
    console.log(firstTab);

    firstTab.style.display = 'none';    
    secondTab.style.display = 'none';
    thirdTab.style.display = 'none';
    fourthTab.style.display = 'block';
});
