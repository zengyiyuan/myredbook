// 按钮的移入效果
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var er = document.getElementById('er');
var err = document.getElementById('err');
btn1.onmouseenter = function () {
    er.className = 'hshow';
}
btn1.onmouseleave = function () {
    er.className = 'hhide';
}
btn2.onmouseenter = function () {
    err.className = 'hshow';
}
btn2.onmouseleave = function () {
    err.className = 'hhide';
}
// span内容的显示
var index = 0;
var num = -1;
var timerId = null;
var showWords = document.getElementById("haa")
var arr = ['标记我的生活', '明星生活的另一面', '全世界的好东西', '吃穿玩乐买的日常']
function start() {
    num++;
    timerId = setInterval(function (){
        if (num < arr.length) {
            if (showWords.innerText.length === arr[num].length) {
                index = 0;
                clearInterval(timerId);
                showWords.innerText = '';
                start();
                return;
            }
            showWords.innerText = arr[num].substr(0, index++);
        } else {
            num = 0;
        }
    }, 200)
}
start()
// 图片飞入效果
var ig = document.getElementById('ig');
animation(700,ig);
// 遮盖盒子
var hmasks = document.getElementsByClassName('mask');
var hxian = document.getElementById('hxian');
var lis = hxian.children[0].children;
for (var i = 0; i < lis.length; i++) {
    lis[i].setAttribute('index', i);
    lis[i].onmouseenter = function () {
        var index = parseInt(this.getAttribute('index'));
        hmasks[index].style.display = 'block';
    }
    lis[i].onmouseleave = function () {
        var index = parseInt(this.getAttribute('index'));
        hmasks[index].style.display = 'none';
    }
}
// 进度条
var titles = document.getElementsByClassName('htitle');
var boxs = document.getElementsByClassName('hplan');
var gos = document.getElementsByClassName('htime');
var zindex =0;
function fn () {
    var now = 0;
    var timer = setInterval(function () {
        if (now > boxs[zindex].offsetWidth) { 
            clearInterval(timer);
            titles[zindex].style.fontSize = '20px';
            boxs[zindex].style.width = '100px';
            gos[zindex].style.width = 0 + 'px';
            zindex ++;
            if(zindex >gos.length-1) {
                zindex = 0;
            }
            fn();
        } else {
            now ++;
            progressfn(now);
            $('#lun >li').hide();
            $('#lun >li').eq(zindex).show();
        }
    }, 30);
}
fn();
function progressfn(cent) {
    boxs[zindex].style.width = '200px';
    titles[zindex].style.fontSize = '30px'; 
    gos[zindex].style.width = cent + "px"; 
}


