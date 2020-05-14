let plate = document.querySelector('.plate');
// 鐘面

for(let i = 1; i<73; i++){
    let dot = document.createElement('div');
    dot.style.transform = `rotate(${(i*5)}deg)`;
    if(i%6 ==0){
        dot.classList.add('line');
        dot.innerHTML = `<span class="pm" style="transform:rotate(${-i*5}deg);">${i / 6 + 12}</span>
        <span class="am" style="transform:rotate(${-i*5}deg);">${i / 6}</span>`;
    }else if(i%3 == 0){
        dot.classList.add('star');
    }else{
        dot.classList.add('white');
    }
    plate.appendChild(dot);
}

// 時間計算
const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
let secCount = 0;
function turn(){
    let today = new Date();
    let hours = today.getHours();
    let mins = today.getMinutes();
    let secs = today.getSeconds();
    let hourdeg = (hours*30 + mins*30/60) - 180;
    let mindeg = mins*6 + secs*6/60 - 180;
    let secdeg = secs*6 - 180;
    hour.style.transform = `rotate(${hourdeg}deg)`;
    min.style.transform = `rotate(${mindeg}deg)`;
    sec.style.transform = `rotate(${secdeg}deg)`;
}
turn();
setInterval(turn,1000);