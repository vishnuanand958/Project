//global variable declaration
let num = document.getElementById('number');
let score = document.getElementById('value');
let value = 0;
let high = document.getElementById('high-score');
let btn = [document.getElementById('btn1'), document.getElementById('btn2'), document.getElementById('btn3'), document.getElementById('btn4'), document.getElementById('btn5'), document.getElementById('btn6'), document.getElementById('btn7'), document.getElementById('btn8'), document.getElementById('btn9'), document.getElementById('btn10'), document.getElementById('btn11'), document.getElementById('btn12'), document.getElementById('btn13'), document.getElementById('btn14'), document.getElementById('btn15'), document.getElementById('btn16'), document.getElementById('btn17'), document.getElementById('btn18'), document.getElementById('btn19'), document.getElementById('btn20')];



//restrt button

let re = document.getElementById("stop-btn");
re.onclick = function () {
    location.reload();
}

let stop;
high.textContent = 0;
// when start button click number will change randomly
var start = document.getElementById("start-btn");
start.onclick = function () {
    let i;
    let t = 60;
    value = 0;
    score.textContent = "";
    num.textContent = parseInt(Math.random() * 10);
    var timer = document.getElementById('timer');
    // high.innerHTML = score.textContent;
    function time() {
        t = t - 1;
        timer.innerHTML = t;
        if (t == 0) {
            clearInterval(stop);
            alert("Game Over Score is " + score.textContent);

            if (score.textContent > high.textContent) {
                high.innerHTML = score.textContent;
            }

        }
    }

    stop = setInterval(time, 1000);
    for (i = 0; i < 20; i++) {
        btn[i].textContent = parseInt(Math.random() * 10);
    }

    // when pass button click
    var pass = document.getElementById('pass');
    pass.onclick = function () {
        for (i = 0; i < 20; i++) {
            btn[i].textContent = parseInt(Math.random() * 10);
        }
    }

    // when button one click 
    var btn1 = document.getElementById('btn1');
    btn1.onclick = function () {
        if (num.textContent == btn1.textContent) {
            value = value + 10;
            score.innerHTML = value;

        }
        else {
            value = value - 10;
            score.innerHTML = value;
        }
        let i;
        num.textContent = parseInt(Math.random() * 10);
        for (i = 0; i < 20; i++) {
            btn[i].textContent = parseInt(Math.random() * 10);
        }
    }
    //when button two click
    var btn2 = document.getElementById('btn2');
    btn2.onclick = function () {
        if (num.textContent == btn2.textContent) {
            value = value + 10;
            score.innerHTML = value;
        }
        else {
            value = value - 10;
            score.innerHTML = value;
        }
        let i;
        num.textContent = parseInt(Math.random() * 10);
        for (i = 0; i < 20; i++) {
            btn[i].textContent = parseInt(Math.random() * 10);
        }

    }
    //when button three click
    var btn3 = document.getElementById("btn3");
    btn3.onclick = function () {
        if (btn3.textContent == num.textContent) {
            value = value + 10;
            score.innerHTML = value;
        }
        else {
            value = value - 10;
            score.innerHTML = value;
        }
        let i;
        num.textContent = parseInt(Math.random() * 10);
        for (i = 0; i < 20; i++) {
            btn[i].textContent = parseInt(Math.random() * 10);
        }

    }
    //when button four click
    var btn4 = document.getElementById("btn4");
    btn4.onclick = function () {
        if (num.textContent == btn4.textContent) {
            value = value + 10;
            score.innerHTML = value;
        }
        else {
            value = value - 10;
            score.innerHTML = value;
        }
        let i;
        num.textContent = parseInt(Math.random() * 10);
        for (i = 0; i < 20; i++) {
            btn[i].textContent = parseInt(Math.random() * 10);
        }
    }
    //when button five click
    var btn5 = document.getElementById("btn5");
    btn5.onclick = function () {
        if (num.textContent == btn5.textContent) {
            value = value + 10;
            score.innerHTML = value;
        }
        else {
            value = value - 10;
            score.innerHTML = value;
        }
        let i;
        num.textContent = parseInt(Math.random() * 10);
        for (i = 0; i < 20; i++) {
            btn[i].textContent = parseInt(Math.random() * 10);
        }

    }
    //when button six click
    var btn6 = document.getElementById("btn6");
    btn6.onclick = function () {
        if (num.textContent == btn6.textContent) {
            value = value + 10;
            score.innerHTML = value;
        }
        else {
            value = value - 10;
            score.innerHTML = value;
        }
        let i;
        num.textContent = parseInt(Math.random() * 10);
        for (i = 0; i < 20; i++) {
            btn[i].textContent = parseInt(Math.random() * 10);
        }

    }
    //when button seven click
    var btn7 = document.getElementById("btn7");
    btn7.onclick = function () {
        if (num.textContent == btn7.textContent) {
            value = value + 10;
            score.innerHTML = value;
        }
        else {
            value = value - 10;
            score.innerHTML = value;
        }
        let i;
        num.textContent = parseInt(Math.random() * 10);
        for (i = 0; i < 20; i++) {
            btn[i].textContent = parseInt(Math.random() * 10);
        }

    }
    //when button eight click
    var btn8 = document.getElementById("btn8");
    btn8.onclick = function () {
        if (num.textContent == btn8.textContent) {
            value = value + 10;
            score.innerHTML = value;
        }
        else {
            value = value - 10;
            score.innerHTML = value;
        }
        let i;
        num.textContent = parseInt(Math.random() * 10);
        for (i = 0; i < 20; i++) {
            btn[i].textContent = parseInt(Math.random() * 10);
        }

    }
    //when button nine click
    var btn9 = document.getElementById("btn9");
    btn9.onclick = function () {
        if (num.textContent == btn9.textContent) {
            value = value + 10;
            score.innerHTML = value;
        }
        else {
            value = value - 10;
            score.innerHTML = value;
        }
        let i;
        num.textContent = parseInt(Math.random() * 10);
        for (i = 0; i < 20; i++) {
            btn[i].textContent = parseInt(Math.random() * 10);
        }

    }
    //button 10
    var btn10 = document.getElementById("btn10");
    btn10.onclick = function () {
        if (num.textContent == btn10.textContent) {
            value = value + 10;
            score.innerHTML = value;
        }
        else {
            value = value - 10;
            score.innerHTML = value;
        }
        let i;
        num.textContent = parseInt(Math.random() * 10);
        for (i = 0; i < 20; i++) {
            btn[i].textContent = parseInt(Math.random() * 10);
        }

    }
    //button 11
    var btn11 = document.getElementById("btn11");
    btn11.onclick = function () {
        if (num.textContent == btn11.textContent) {
            value = value + 10;
            score.innerHTML = value;
        }
        else {
            value = value - 10;
            score.innerHTML = value;
        }
        let i;
        num.textContent = parseInt(Math.random() * 10);
        for (i = 0; i < 20; i++) {
            btn[i].textContent = parseInt(Math.random() * 10);
        }

    }
    //button 12
    var btn12 = document.getElementById("btn12");
    btn12.onclick = function () {
        if (num.textContent == btn12.textContent) {
            value = value + 10;
            score.innerHTML = value;
        }
        else {
            value = value - 10;
            score.innerHTML = value;
        }
        let i;
        num.textContent = parseInt(Math.random() * 10);
        for (i = 0; i < 20; i++) {
            btn[i].textContent = parseInt(Math.random() * 10);
        }

    }
    //button 13
    var btn13 = document.getElementById("btn13");
    btn13.onclick = function () {
        if (num.textContent == btn13.textContent) {
            value = value + 10;
            score.innerHTML = value;
        }
        else {
            value = value - 10;
            score.innerHTML = value;
        }
        let i;
        num.textContent = parseInt(Math.random() * 10);
        for (i = 0; i < 20; i++) {
            btn[i].textContent = parseInt(Math.random() * 10);
        }

    }
    //button 14
    var btn14 = document.getElementById("btn14");
    btn14.onclick = function () {
        if (num.textContent == btn14.textContent) {
            value = value + 10;
            score.innerHTML = value;
        }
        else {
            value = value - 10;
            score.innerHTML = value;
        }
        let i;
        num.textContent = parseInt(Math.random() * 10);
        for (i = 0; i < 20; i++) {
            btn[i].textContent = parseInt(Math.random() * 10);
        }

    }
    //button 15
    var btn15 = document.getElementById("btn15");
    btn15.onclick = function () {
        if (num.textContent == btn15.textContent) {
            value = value + 10;
            score.innerHTML = value;
        }
        else {
            value = value - 10;
            score.innerHTML = value;
        }
        let i;
        num.textContent = parseInt(Math.random() * 10);
        for (i = 0; i < 20; i++) {
            btn[i].textContent = parseInt(Math.random() * 10);
        }

    }
    //button 16
    var btn16 = document.getElementById("btn16");
    btn16.onclick = function () {
        if (num.textContent == btn16.textContent) {
            value = value + 10;
            score.innerHTML = value;
        }
        else {
            value = value - 10;
            score.innerHTML = value;
        }
        let i;
        num.textContent = parseInt(Math.random() * 10);
        for (i = 0; i < 20; i++) {
            btn[i].textContent = parseInt(Math.random() * 10);
        }

    }
    //button 17
    var btn17 = document.getElementById("btn17");
    btn17.onclick = function () {
        if (num.textContent == btn17.textContent) {
            value = value + 10;
            score.innerHTML = value;
        }
        else {
            value = value - 10;
            score.innerHTML = value;
        }
        let i;
        num.textContent = parseInt(Math.random() * 10);
        for (i = 0; i < 20; i++) {
            btn[i].textContent = parseInt(Math.random() * 10);
        }

    }
    //button 18
    var btn18 = document.getElementById("btn18");
    btn18.onclick = function () {
        if (num.textContent == btn18.textContent) {
            value = value + 10;
            score.innerHTML = value;
        }
        else {
            value = value - 10;
            score.innerHTML = value;
        }
        let i;
        num.textContent = parseInt(Math.random() * 10);
        for (i = 0; i < 20; i++) {
            btn[i].textContent = parseInt(Math.random() * 10);
        }

    }
    //button 19
    var btn19 = document.getElementById("btn19");
    btn19.onclick = function () {
        if (num.textContent == btn19.textContent) {
            value = value + 10;
            score.innerHTML = value;
        }
        else {
            value = value - 10;
            score.innerHTML = value;
        }
        let i;
        num.textContent = parseInt(Math.random() * 10);
        for (i = 0; i < 20; i++) {
            btn[i].textContent = parseInt(Math.random() * 10);
        }

    }
    //button 20
    var btn20 = document.getElementById("btn20");
    btn20.onclick = function () {
        if (num.textContent == btn20.textContent) {
            value = value + 10;
            score.innerHTML = value;
        }
        else {
            value = value - 10;
            score.innerHTML = value;
        }
        let i;
        num.textContent = parseInt(Math.random() * 10);
        for (i = 0; i < 20; i++) {
            btn[i].textContent = parseInt(Math.random() * 10);
        }

    }
}