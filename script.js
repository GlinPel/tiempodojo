const tempsMax = [24, 27, 21, 26];
const tempsMin = [18, 19, 16, 21];
const tempmax1 = document.querySelector('#tempmax1');
const tempmax2 = document.querySelector('#tempmax2');
const tempmax3 = document.querySelector('#tempmax3');
const tempmax4 = document.querySelector('#tempmax4');
const tempmin1 = document.querySelector('#tempmin1');
const tempmin2 = document.querySelector('#tempmin2');
const tempmin3 = document.querySelector('#tempmin3');
const tempmin4 = document.querySelector('#tempmin4');

const cookie = document.querySelector('#cookie');

setTempsCel();

function setTempsCel(){
    tempmax1.innerText = tempsMax[0];
    tempmax2.innerText = tempsMax[1];
    tempmax3.innerText = tempsMax[2];
    tempmax4.innerText = tempsMax[3];
    tempmin1.innerText = tempsMin[0];
    tempmin2.innerText = tempsMin[1];
    tempmin3.innerText = tempsMin[2];
    tempmin4.innerText = tempsMin[3];
}

function setTempsFar(){
    tempmax1.innerText = Math.round((tempsMax[0]*1.8)+32);
    tempmax2.innerText = Math.round((tempsMax[1]*1.8)+32);
    tempmax3.innerText = Math.round((tempsMax[2]*1.8)+32);
    tempmax4.innerText = Math.round((tempsMax[3]*1.8)+32);
    tempmin1.innerText = Math.round((tempsMin[0]*1.8)+32);
    tempmin2.innerText = Math.round((tempsMin[1]*1.8)+32);
    tempmin3.innerText = Math.round((tempsMin[2]*1.8)+32);
    tempmin4.innerText = Math.round((tempsMin[3]*1.8)+32);
}

function removeCookie(){
    cookie.remove();
}

function changeTemp(e){
    if(e.value === 'far'){
        setTempsFar();
    }else{
        setTempsCel();
    }
}