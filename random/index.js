var a1 = [];
var a2 = [];
var a3 = [];
var a4 = [];
var a5 = [];
var a6 = [];
var k = 0;
var i1 = prompt('取數範圍?', )
var i2 = prompt('取數範圍?', )
var i3 = prompt('陣列幾項相等?', )
var i4 = prompt('共幾項相等?', )
var s = false;
RR()
$('.abc').click(function() {
    while (true) {
        re()
        if (s == true) {
            return;
        } else {
            RR();
            k++;

        }

    }



})


// 重複取值
function RR() {
    a1.splice(0, a1.length);
    a2.splice(0, a2.length);
    a3.splice(0, a3.length);
    a4.splice(0, a4.length);
    a5.splice(0, a5.length);
    a6.splice(0, a6.length);
    R(a1);
    R(a2);
    R(a3);
    R(a4);
    R(a5);
    R(a6);
}

// 取得陣列
function R(v) {
    for (var i = 0; i < i4; i++) {
        var a = getRandomIntInclusive(Number(i1), Number(i2));
        v.push(a)

    }

}
// 更新畫面
function text() {
    $('#gg').text(k)
    $('.e1').text('A1:' + a1)
    $('.e2').text('A2:' + a2)
    $('.e3').text('A3:' + a3)
    $('.e4').text('A4:' + a4)
    $('.e5').text('A5:' + a5)
    $('.e6').text('A6:' + a6)
    setTimeout(text, 10)
}
// 陣列比對(把值轉成字串)
function re() {

    if (i3 == 2) {
        if (JSON.stringify(a1) == JSON.stringify(a2)) {
            s = true
        }
    }
    if (i3 == 3) {
        if (JSON.stringify(a1) == JSON.stringify(a2) && JSON.stringify(a2) == JSON.stringify(a3)) {
            s = true
        }
    }
    if (i3 == 4) {
        if (JSON.stringify(a1) == JSON.stringify(a2) && JSON.stringify(a2) == JSON.stringify(a3) && JSON.stringify(a3) == JSON.stringify(a4)) {
            s = true
        }
    }
    if (i3 == 5) {
        if (JSON.stringify(a1) == JSON.stringify(a2) && JSON.stringify(a2) == JSON.stringify(a3) && JSON.stringify(a3) == JSON.stringify(a4) && JSON.stringify(a4) == JSON.stringify(a5)) {
            s = true
        }
    }
    if (i3 == 6) {
        if (JSON.stringify(a1) == JSON.stringify(a2) && JSON.stringify(a2) == JSON.stringify(a3) && JSON.stringify(a3) == JSON.stringify(a4) && JSON.stringify(a4) == JSON.stringify(a5) && JSON.stringify(a5) == JSON.stringify(a6)) {

            s = true
        }
    }
}
// 隨機取數
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}