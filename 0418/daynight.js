function dayNight(mode){
    if(mode==='night'){
        night();
    }else{
        day();
    }
}
function night(){
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('body').style.color = 'white';
    //$('body').css('backgroundColor','black').css('color','white');
    let as = document.querySelectorAll('a');
    for(let i=0; i<as.length; i=i+1){
        as[i].style.color='white';
    }
    //$('a').css('color','white');
}
function day(){
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';
    let as = document.querySelectorAll('a');
    for(let i=0; i<as.length; i=i+1){
        as[i].style.color='black';
    } 
    
}