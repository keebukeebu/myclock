const clockE1 = document.querySelector('.clock');
const buttons = document.querySelector('.format button');
let format  ;

setInterval(generateTime, 1000); 

function generateTime(){
    format = clockE1.getAttribute('data-format')
    const date = new Date;
    let hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    if(format === '12'){
        hour = (hour > 12) ? hour % 12 : hour;
    }

    clockE1.innerHTML = `<h1>${hour} : ${min} : ${sec} AM</h1>`
}

buttons.forEach(buttons=>{
    button.addEventListener('click',()=>{
        format = button.getAttribute('data-format');
        clockE1.setAttribute('data-format', format);
    })
})
