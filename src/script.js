var degree = 0;


var timer = setInterval(function(){
    if (degree <= -356){
        degree = 0;    
    } else{
        degree -= 4;
    }  
    document.getElementById("load-image").style.transform = 'rotateZ('+degree+'deg)';
},10)


function dropLoadPage(){
    $("#loader-outer").animate({
        height:"0px",
    });
    let displayNone = setInterval(function(){
        $("#loader-outer").css('display','none');
        clearInterval(displayNone);
    },500);
    
}


var cleari = setInterval(function(){
    dropLoadPage();
    clearInterval(cleari);
},1000);


function inicializar() {
        var coordenadas = {lat: -23.087244, lng: -46.953936};
 
        var mapa = new google.maps.Map(document.getElementById('mapa'), {
          zoom: 15,
          center: coordenadas 
        });
 
        var marker = new google.maps.Marker({
          position: coordenadas,
          map: mapa,
          title: 'Meu marcador'
        });
      }

//===============================
//      NAV scale
//===============================
/*
$(document).ready(function(){
    if (window.pageYOffset > 200){
        $('.navbar-brand img').css('height' , '80px');
        $('.nav-link').css('line-height' , '74px');
    }
});
    


window.onscroll = function(){
    if ($(window).width()>1200){
    if (window.pageYOffset >= 25){
        if(window.pageYOffset <= 200){
            $('.navbar-brand img').css('height' , 80 - window.pageYOffset * 0.15 + 'px');
            $('.nav-link').css('line-height' , 74 - window.pageYOffset * 0.20 + 'px');
        }
    } else{
        $('.nav-bar img').css('height' , '80px');
    }
    }
}*/
