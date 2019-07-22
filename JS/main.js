
/* Resizing the header and slide the logo to the left */
let header = document.getElementById('header');
let logo = document.getElementById('logo');
let y;
function headerStyle(){
    y = window.pageYOffset; 
    if(y>200){
        header.style.height = '70px';
        logo.style.fontSize = '35px';
        logo.style.left = '8%';
    } else{
        header.style.height = '140px';
        logo.style.fontSize = '60px';
        logo.style.left = '50%';
    }
} 
window.addEventListener('scroll',headerStyle);


/* appear h1 and p from the left */
let h1 = document.getElementById('h1InHome');
let p = document.getElementById('pInHome');
function homeStyle(){
    h1.style.left = '5%'; 
    p.style.left = '5%';
}
window.addEventListener('load',homeStyle);


/* appear the pictures one by one */
let figureInServices = document.querySelectorAll('figure');

function servicesStyle(){
    y = window.pageYOffset;
    if(y>370){
        for(i=0; i<figureInServices.length-1; i++){
            figureInServices[i].style.transform = 'translateY(0)';
            figureInServices[i].style.transition = `transform .25s ${i*1/4}s`;
        } 
    } else {
        for(i=0; i<figureInServices.length-1; i++){
            figureInServices[i].style.transform = 'translateY(400px)'; 
            figureInServices[i].style.transition = `transform .25s`;
        } 
    }
} 
window.addEventListener('scroll',servicesStyle);  

/* appear figure and article */
let article = document.getElementById('articleInAboutUs');
let figureInAboutUs = document.getElementById('figureInAboutUs');
function aboutUsStyle(){
    y = window.pageYOffset;
    if(y>1100){
       article.style.transform = 'translateX(0)';
       figureInAboutUs.style.transform = 'translateX(0)';
    } else {
       article.style.transform = 'translateX(1000px)';
       figureInAboutUs.style.transform = 'translateX(-1000px)';
    }
}
window.addEventListener('scroll',aboutUsStyle); 

/* bottom */

let bottom = document.getElementById('bottom');
function bottomStyle(){
    y = window.pageYOffset; 
    if(y>300){
        bottom.style.display = 'block';
    } else {
        bottom.style.display = 'none';
    }
}
window.addEventListener('scroll',bottomStyle);

