const text = document.querySelector('p.text');
const innerText = 'Привет, мама!iiЯ тебя очень сильно люблю и поздравляю ClДнем Святого Валентина.iЖелаю, чтобы ты наконец-то закончила ремонт и любви.iiС любовью,iТвой Ратмир.';

let index = 0;
const writeOneChar = () => {
    if(index < innerText.length) {
        switch (innerText[index]) {
            case 'i':
                text.innerHTML += '<br />'
                break;
            case 'l':
                text.innerHTML += '&nbsp;'
                break;
            default:
                text.innerHTML += innerText[index];
                break;
        }

        index++;
        setTimeout(writeOneChar, 100);
    } else {
        setTimeout(drawHeart, 100);
    }
}

writeOneChar();

function drawHeart(){
    canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    canvas.x = 150;
    canvas.y = 150;
    var w = 200, h = 200;
    context.strokeStyle = "#000000";
    context.strokeWeight = 3;
    context.shadowOffsetX = 4.0;
    context.shadowOffsetY = 4.0;
    context.lineWidth = 10.0;
    context.fillStyle = "#FF0000";
    var d = Math.min(w, h);
    var k = 120;
    context.moveTo(k, k + d / 4);
    context.quadraticCurveTo(k, k, k + d / 4, k);
    context.quadraticCurveTo(k + d / 2, k, k + d / 2, k + d / 4);
    context.quadraticCurveTo(k + d / 2, k, k + d * 3/4, k);
    context.quadraticCurveTo(k + d, k, k + d, k + d / 4);
    context.quadraticCurveTo(k + d, k + d / 2, k + d * 3/4, k + d * 3/4);
    context.lineTo(k + d / 2, k + d);
    context.lineTo(k + d / 4, k + d * 3/4);
    context.quadraticCurveTo(k, k + d / 2, k, k + d / 4);
    context.stroke();
    context.fill();
}