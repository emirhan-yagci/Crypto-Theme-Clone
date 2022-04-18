document.body.addEventListener('touchmove', function(e){ e.preventDefault(); });


const nav_toggle_btn = document.querySelector(".burger-menu-icon");
const nav_close_btn = document.querySelector(".navclose");
const nav_item_container = document.querySelector(".nav-item-container");
const navbar_bg_close = document.querySelector(".navbar-bg-close");
const nav_items = document.querySelectorAll(".nav-item");
const hide_menu_logo = document.querySelector(".hide-menu-logo");
const navbar_item_wrapper= document.querySelector(".navbar-item-wrapper");
const home_image = document.querySelector(".home-image");

    
nav_toggle_btn.addEventListener("click",()=>{
    navbar_item_wrapper.style.display = "block";
    setTimeout(()=>{
        nav_item_container.classList.toggle("nav-active");
        navbar_bg_close.classList.toggle("nav-bg-passive");
    },150)

})
nav_close_btn.addEventListener("click",()=>{
    nav_item_container.classList.toggle("nav-active");
    navbar_bg_close.classList.toggle("nav-bg-passive");
})
navbar_bg_close.addEventListener("click",()=>{
    nav_item_container.classList.toggle("nav-active");
    navbar_bg_close.classList.toggle("nav-bg-passive");
})
nav_items.forEach((elems)=>{
    elems.addEventListener("click",()=>{
        nav_item_container.classList.remove("nav-active");
    navbar_bg_close.classList.remove("nav-bg-passive");
    })
})


let moveFN;
home_image.addEventListener("mouseenter",function(e){
    home_image.style.animation = "home-img-move 1s ease-out infinite alternate-reverse";
})

home_image.addEventListener("mouseleave",function(e){
    home_image.style.animation = "";
})
//TOKEN SECTİON

const token_countdown_container = document.querySelector(".token-countdown");
const buy_token_btn = document.querySelector(".buy-token-btn");
const $t_day = document.querySelector(".t-countdown-day");
const $t_hours = document.querySelector(".t-countdown-hours");
const $t_munite = document.querySelector(".t-countdown-munite");
const $t_second = document.querySelector(".t-countdown-second");

let t_year = Number(token_countdown_container.getAttribute("t-year"));
let t_month = Number(token_countdown_container.getAttribute("t-month"));
let t_day = Number(token_countdown_container.getAttribute("t-day"));
let t_hour = Number(token_countdown_container.getAttribute("t-hour"));
    
let time = new Date(t_year,t_month,t_day,t_hour)
        
function token_countDown(){
            let remainder = time.getTime() - new Date();
            let day = Math.floor(remainder/1000/60/60/24)
            let hour = (Math.floor(remainder/1000/60/60))%24;
            let munite = (Math.floor(remainder/1000/60))%60;
            let second = (Math.floor(remainder/1000))%60;
            
            $t_day.textContent = day;
            $t_hours.textContent = hour;
            $t_munite.textContent = munite;
            $t_second.textContent = second;
            

            
}
setInterval(token_countDown,1000)



/*----------------NAVBAR HİGHTLİGHT*/

const pageSections = document.querySelectorAll(".Nsections");
const navItems_hight = document.querySelectorAll(".nav-item > a")
let hightActive= false;
window.addEventListener("scroll",navHight);


function navHight(){

    pageSections.forEach((Nsection,Nindex)=>{
        let sec_positions = Nsection.getBoundingClientRect();
       
        if(Nindex == 2 && -(sec_positions.top) > (sec_positions.height)/8){
            navItems_hight[Nindex +2].classList.add("nav-hightlight2"); 
            navItems_hight[3].classList.remove("nav-hightlight");
            hightActive=true;
            
            
        }else if(sec_positions.top <= 130  && sec_positions.top > -(sec_positions.height)){
            if(hightActive){
                navItems_hight[4].classList.remove("nav-hightlight2");
            }
           
            navItems_hight[Nindex +1].classList.add("nav-hightlight");
           
           
        }else{
            navItems_hight[Nindex +1].classList.remove("nav-hightlight");

        }
        
    })


}


