let stars = document.getElementById('stars');
let moon = document.getElementById('moon'); 
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let mountains7 = document.getElementById('mountains7');
let kambel = document.querySelector('.kambel');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value * 0.5 + 'px';
    moon.style.top = value * 2 + 'px';
    mountains3.style.top = value * 1.2 + 'px';
    mountains4.style.top = value  + 'px';
    river.style.top = value  + 'px';
    boat.style.top = value  + 'px';
    boat.style.left = value  + 'px';
    kambel.style.fontSize = value  + 'px';
    if(scrollY >= 67){
        kambel.style.fontSize = 67 + 'px';
        kambel.style.position = 'fixed';
        if(scrollY >= 470){
            kambel.style.display = 'none';
        }else{
            kambel.style.display = 'block';
        }
        
    }
    if(scrollY >= 127){
        document.querySelector('.main').style.background = 'linear-gradient(rgb(235, 219, 78), #92abbf)';

    }else{
        document.querySelector('.main').style.background = 'linear-gradient(#8a360f, rgb(235, 219, 78))';
        }
}