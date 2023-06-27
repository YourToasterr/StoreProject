window.onscroll = function() {myFunction()};
var header = document.getElementById("header");
var sticky = header.offsetTop
function myFunction(){
    if (window.pageYOffset > sticky+190){
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

const ppdbtn = document.getElementById("ppdOpen");
const ppdContent = document.querySelector(".ppdContent");
const ppd = document.querySelector(".ppd");
const ppdClose = document.getElementById("ppdClose")
ppdbtn.addEventListener("click", function(){
    ppdContent.classList.remove("hide");
    ppdClose.classList.remove("hide");
    ppdbtn.classList.add("hide");
})
ppdClose.addEventListener("click", function(){
    ppdContent.classList.add("hide");
    ppdClose.classList.add("hide");
    ppdbtn.classList.remove("hide");
})

const slides = document.querySelectorAll(".slide");
slides.forEach((slide, indx)=>{
    slide.style.transform = `translateX(${indx*100}%)`;
})
let curSlide = 0;
let maxSlide = slides.length - 1;
const nextSlide = document.querySelector(".btn-next");
nextSlide.addEventListener("click",function(){
    if (window.innerWidth <601){
        if (curSlide === maxSlide){
            curSlide=0;
        } else {
            curSlide++;
        }
    } else {
        if (curSlide === maxSlide-2){
            curSlide=0;
        } else {
            curSlide++;
        }
    }
    slides.forEach((slide,indx)=>{
        slide.style.transform = `translateX(${100*(indx-curSlide)}%)`;
    });
});
const prevSlide = document.querySelector(".btn-prev");
prevSlide.addEventListener("click",function(){
    if (window.innerWidth <601){
        if (curSlide === 0){
            curSlide=maxSlide;
        } else {
            curSlide--;
        }
    } else {
        if (curSlide === 0){
            curSlide=maxSlide-2;
        } else {
            curSlide--;
        }
    }

    slides.forEach((slide,indx)=>{
        slide.style.transform = `translateX(${100*(indx-curSlide)}%)`;
    });
});

const storeChalongSlides = document.querySelectorAll(".storeChalongSlide");
storeChalongSlides.forEach((storeChalongSlide, storeChalongIndx)=>{
    storeChalongSlide.style.transform = `translateX(${storeChalongIndx*100}%)`;
})
let curStoreChalongSlide = 0;
let maxStoreChalongSlide = storeChalongSlides.length - 1;
const nextStoreChalongSlide = document.querySelector(".storeChalongBtn-next");
nextStoreChalongSlide.addEventListener("click",function(){
    if (curStoreChalongSlide === maxStoreChalongSlide){
        curStoreChalongSlide=0;
    } else {
        curStoreChalongSlide++;
    }
    storeChalongSlides.forEach((storeChalongSlide,storeChalongIndx)=>{
        storeChalongSlide.style.transform = `translateX(${100*(storeChalongIndx-curStoreChalongSlide)}%)`;
    });
});
const prevStoreChalongSlide = document.querySelector(".storeChalongBtn-prev");
prevStoreChalongSlide.addEventListener("click",function(){
    if (curStoreChalongSlide === 0){
        curStoreChalongSlide=maxStoreChalongSlide;
    } else {
        curStoreChalongSlide--;
    }
    storeChalongSlides.forEach((storeChalongSlide,storeChalongIndx)=>{
        storeChalongSlide.style.transform = `translateX(${100*(storeChalongIndx-curStoreChalongSlide)}%)`;
    });
});

const storeFestivalSlides = document.querySelectorAll(".storeFestivalSlide");
storeFestivalSlides.forEach((storeFestivalSlide, storeFestivalIndx)=>{
    storeFestivalSlide.style.transform = `translateX(${storeFestivalIndx*100}%)`;
})
let curStoreFestivalSlide = 0;
let maxStoreFestivalSlide = storeFestivalSlides.length - 1;
const nextStoreFestivalSlide = document.querySelector(".storeFestivalBtn-next");
nextStoreFestivalSlide.addEventListener("click",function(){
    if (curStoreFestivalSlide === maxStoreFestivalSlide){
        curStoreFestivalSlide=0;
    } else {
        curStoreFestivalSlide++;
    }
    storeFestivalSlides.forEach((storeFestivalSlide,storeFestivalIndx)=>{
        storeFestivalSlide.style.transform = `translateX(${100*(storeFestivalIndx-curStoreFestivalSlide)}%)`;
    });
});
const prevStoreFestivalSlide = document.querySelector(".storeFestivalBtn-prev");
prevStoreFestivalSlide.addEventListener("click",function(){
    if (curStoreFestivalSlide === 0){
        curStoreFestivalSlide=maxStoreFestivalSlide;
    } else {
        curStoreFestivalSlide--;
    }
    storeFestivalSlides.forEach((storeFestivalSlide,storeFestivalIndx)=>{
        storeFestivalSlide.style.transform = `translateX(${100*(storeFestivalIndx-curStoreFestivalSlide)}%)`;
    });
});

const storeThalangSlides = document.querySelectorAll(".storeThalangSlide");
storeThalangSlides.forEach((storeThalangSlide, storeThalangIndx)=>{
    storeThalangSlide.style.transform = `translateX(${storeThalangIndx*100}%)`;
})
let curStoreThalangSlide = 0;
let maxStoreThalangSlide = storeThalangSlides.length - 1;
const nextStoreThalangSlide = document.querySelector(".storeThalangBtn-next");
nextStoreThalangSlide.addEventListener("click",function(){
    if (curStoreThalangSlide === maxStoreThalangSlide){
        curStoreThalangSlide=0;
    } else {
        curStoreThalangSlide++;
    }
    storeThalangSlides.forEach((storeThalangSlide,storeThalangIndx)=>{
        storeThalangSlide.style.transform = `translateX(${100*(storeThalangIndx-curStoreThalangSlide)}%)`;
    });
});
const prevStoreThalangSlide = document.querySelector(".storeThalangBtn-prev");
prevStoreThalangSlide.addEventListener("click",function(){
    if (curStoreThalangSlide === 0){
        curStoreThalangSlide=maxStoreThalangSlide;
    } else {
        curStoreThalangSlide--;
    }
    storeThalangSlides.forEach((storeThalangSlide,storeThalangIndx)=>{
        storeThalangSlide.style.transform = `translateX(${100*(storeThalangIndx-curStoreThalangSlide)}%)`;
    });
});
