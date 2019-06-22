var isOnTop = true;

window.onscroll = function(){
    if (window.pageYOffset != 0){
        if (isOnTop == true){
            //console.log('ta fora do top');
            $('#nav-bar').css('background-color','rgba(101,153,143,.9)');
            isOnTop = false;
        }
    } else{
        //console.log('ta no topo');
        $('#nav-bar').css('background-color','rgba(0,0,0,0)');
        isOnTop = true;
    }
}