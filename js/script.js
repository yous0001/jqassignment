//sidebar
$('.open-sidebar').click(function(){
    $('.sidebar').animate({left:'0px'},500);
    $('.layer').animate({marginLeft:'250px'},500)
})
$('.close-sidebar').click(function(){
    $('.sidebar').animate({left:'-250px'},500);
    $('.layer').animate({marginLeft:'0px'},500)
})
$('.slides h3').click(function(){
    let display=$(this).siblings().css("display");
    if(display=='none'){
    $('.slides p').slideUp(1000)
    $(this).siblings().slideDown(1000);
    }else{
        $('.slides p').slideUp(1000)
    }
    
})
//sidebar link
$('.sidebar-link').click(function(){
    let section=$(this).attr("href");
    let sectiontop=$(section).offset().top
    console.log(sectiontop)
    $('html,body').animate({
        scrollTop:sectiontop
    },3000)
})


//count down
let daycountdown=document.getElementById("day-count");
let hourcountdown=document.getElementById("hour-count");
let minutecountdown=document.getElementById("minute-count");
let secondcountdown=document.getElementById("second-count");

var countDownDate = new Date("oct 25, 2023 12:0:0").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    daycountdown.innerHTML=days+" d";
    hourcountdown.innerHTML=hours+" h";
    minutecountdown.innerHTML=minutes+" m";
    secondcountdown.innerHTML=seconds+" s";
})

//message count
function countmessagechars(){
 let chars=document.getElementById("messageinput").value;
 let remaining=100-chars.length
 console.log(remaining)
 document.getElementById("messagechar").innerText=remaining
}
