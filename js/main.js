//  typed js code

 var typed = new Typed(".typing", {
     strings: ["" , "Mahadi Hasan","Freelancer" , "Web Designer"],
     typeSpeed: 100,
     backSpeed: 60,
     loop:true
 })

// sticky scrolled  navbar

 window.onscroll = function (){
     if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 ){
         document.getElementById('navbar').classList.add('scrolled');
     }else{
         document.getElementById('navbar').classList.remove('scrolled')
     }
 }

//  Aos animation

AOS.init({
    duration:800,
});

