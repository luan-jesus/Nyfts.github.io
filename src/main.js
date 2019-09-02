/* GOOGLE MAPS START */

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




/* FUNCTION CHANGE NAVBAR POSITION */

var isOnTop = true;


function changeNavPosition(){
    let navbar = $("#nav-bar");
    if (isOnTop == true){
        navbar.css({
            position : 'fixed',
            top: navbar.height()*-1 + 'px',
            backgroundColor: 'rgba(101, 153, 143, 0.9)',
            opacity: 0
        });
        navbar.animate({
            top:0,
            opacity: 1
        },200);
    } 
    else{
        navbar.animate({
            top:'-60px',
            opacity: 0
        },200);
        let delay = setInterval(function(){
            navbar.css({
                position : 'absolute',
                top: '0',
                backgroundColor: 'rgba(0,0,0,0)',
                opacity: 1
            });
            clearInterval(delay);
        },300);
    }
}


/* ON SCROLL FUNCTION */


window.onscroll = function(){

    /* NAV POSITION */

    if (window.pageYOffset >= $('#header').height()) {
        if (isOnTop==true){
            changeNavPosition();
            isOnTop=false;
        }
    }
    else{
        if (isOnTop==false){
            changeNavPosition();
            isOnTop=true;
        }
    }

    /* WINDOW POSITION */


    if(window.pageYOffset >= document.body.offsetHeight - window.innerHeight -(window.innerHeight * 0.1)){
        if (windowPos !== 4){
            $("#nav-link-blog").removeClass("nav-link-active");
            $("#nav-link-contact").addClass("nav-link-active");
            windowPos = 4;
        }
        //CONTACT
    }
    else if(window.pageYOffset < document.getElementById("services").offsetTop){
        if (windowPos !== 0){
            $("#nav-link-about").addClass("nav-link-active");
            $("#nav-link-service").removeClass("nav-link-active");
            windowPos = 0;
        }
        //ABOUT
    }
    else if(window.pageYOffset < document.getElementById("work").offsetTop){
        if (windowPos !== 1){
            $("#nav-link-about").removeClass("nav-link-active");
            $("#nav-link-service").addClass("nav-link-active");
            $("#nav-link-work").removeClass("nav-link-active");
            windowPos = 1;
        }
        
        //SERVICE
    }
    else if(window.pageYOffset < document.getElementById("blog").offsetTop){
        if (windowPos !== 2){
            $("#nav-link-service").removeClass("nav-link-active");
            $("#nav-link-work").addClass("nav-link-active");
            $("#nav-link-blog").removeClass("nav-link-active");
            windowPos = 2;
        }
        //WORK
    }
    else if(window.pageYOffset < document.getElementById("contact").offsetTop){
        if (windowPos !== 3){
            $("#nav-link-work").removeClass("nav-link-active");
            $("#nav-link-blog").addClass("nav-link-active");
            $("#nav-link-contact").removeClass("nav-link-active");
            windowPos = 3;
        }
        //blog
    }


}

var windowPos = 0; //0 = about - 4 = contact


/* OPEN AND CLOSE MAP */

$("#open-map").click(function(){
    $("#open-map").animate({
        opacity: 0
    },400);
    $("#mapa").animate({
        height: "400px"
    },400);
    let abudaba = setInterval(function(){
        $("#open-map").css('display','none');
        clearInterval(abudaba);
        $("#btn-closemap").animate({
            opacity: 1
        },200)
    },400) 
});

$("#btn-closemap").click(function(){
    $("#btn-closemap").animate({
        opacity: 0
    },400)
    $("#open-map").css('display','flex');
    $("#open-map").animate({
        opacity: 1
    },400);
    $("#mapa").animate({
        height: "250px"
    },400);
});


/* SCROLL FUNCTIONS */

function ScrollToIntro(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#header").offset().top
    }, 1000);
    isOnTop = true;
}
function ScrollToWork(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#work").offset().top
    }, 1000);
    isOnTop = true;
}
function ScrollToAbout(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#about").offset().top
    }, 1000);
    isOnTop = true;
}
function ScrollToContact(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
    isOnTop = true;
}
function ScrollToService(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#services").offset().top
    }, 1000);
    isOnTop = true;
}
function ScrollToBlog(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#blog").offset().top
    }, 1000);
    isOnTop = true;
}

/* NAV LINKS  */

$("#nav-link-about").click(function(){
    ScrollToIntro()
});
$("#nav-link-service").click(function(){
    ScrollToService()
});
$("#nav-link-work").click(function(){
    ScrollToWork()
});
$("#nav-link-blog").click(function(){
    ScrollToBlog()
});
$("#nav-link-contact").click(function(){
    ScrollToContact()
});


/* HEADER BOTTOM MENU */


$("#header-menu-intro").click(function(){
    ScrollToIntro()
});
$("#header-menu-work").click(function(){
    ScrollToWork()
});
$("#header-menu-about").click(function(){
    ScrollToAbout()
});
$("#header-menu-contact").click(function(){
    ScrollToContact()
});



