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




window.onscroll = function(){
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
}




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
    },400)
    
});

