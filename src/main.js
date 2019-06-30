var isOnTop = true;


function changeNavPosition(){
    let navbar = $("#nav-bar");
    if (isOnTop == true){
        navbar.css({
            position : 'fixed',
            top: navbar.height()*-1 + 'px',
            backgroundColor: 'rgba(101, 153, 143, 0.9)'
        });
        navbar.animate({top:0},200);
    } 
    else{
        navbar.animate({top:'-60px'},200);
        let delay = setInterval(function(){
            navbar.css({
                position : 'absolute',
                top: '0',
                backgroundColor: 'rgba(0,0,0,0)'
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