var zmore = document.getElementById('zmore');
var zdown = document.getElementById('zdown');
var zbig_mask = document.getElementById('zbig_mask');
// 查看更多点击事件
zmore.onclick = function() {
    // zdown出现，且zbig_mask出现。当点击确定是取消a的默认跳转，且隐藏所有；
    zdown.style.display = 'block';
    zbig_mask1.style.display = 'block';
    var zclose = document.getElementById('zclose');
    zclose.onclick = function() {
        zdown.style.display = 'none';
        zbig_mask1.style.display = 'none';
        return false;
    }
}
// tbody每个li的点击事件 
var zcontent = document.getElementById('zcontent');
var lis = zcontent.children;
    for(var i =0; i < zcontent.children.length; i++) {
        lis[i].onclick = function() {    
            window.open(this.children[0].href);
           
        }
    }
// 获得znote-tab里面的a遍历对每个a设置自定义属性；获取zranimate元素，对每个a
// 注册事件，经过a时获取它的自定义属性。让zranimate完成动画；
var ztab = document.getElementById('ztab');
var links = ztab.getElementsByTagName('a');
var zranimate = document.getElementById('zranimate');
var ztbodys = document.getElementsByClassName('ztbody w')
console.log(ztbodys);

for(var i = 0; i <links.length; i++){
    links[i].setAttribute('zindex',i)
    links[i].onclick = function() {  
       var zindex = this.getAttribute('zindex');
       for(var i = 0; i < ztbodys.length; i++){
        ztbodys[i].className = 'ztbody w hide';
       }
       ztbodys[zindex].className = 'ztbody w';
       animate(zranimate, zindex*78, 10);
       return false;
    }
}
