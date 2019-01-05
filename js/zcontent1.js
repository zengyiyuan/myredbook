var slide = document.getElementsByClassName('slide');
var spans = slide[0].getElementsByTagName('span');
var ztab = document.getElementById('ztab');
var lis = ztab.getElementsByTagName('li');
var ul = document.getElementById('slidepic');
dataSrc = {
    slideSrc:['img/zcontent11.jpg','img/zcontent12.jpg','img/zcontent13.jpg','img/zcontent14.jpg','img/zcontent15.jpg','img/zcontent16.jpg'],
    tabSrc:['img/zconico1.jpg','img/zconico2.jpg','img/zconico3.jpg','img/zconico4.jpg','img/zconico5.jpg','img/zconico6.jpg']
}
console.log(spans[0]);
for(var i = 0; i < spans.length; i++) {
    spans[i].style.backgroundImage = 'url('+dataSrc.slideSrc[i]+')'
    lis[i].style.backgroundImage = 'url('+dataSrc.tabSrc[i]+')'
    lis[i].setAttribute('index',i)
    lis[i].onclick = function() {
        // 当lis点击的时候，ul的往前移动index*span.offsetwith
        var index =this.getAttribute('index');
        console.log(spans[0].offsetWidth);
        console.log(ul.offsetLeft);
        
        animate(ul,-index*spans[0].offsetWidth , 30);
    }
    // spans[i].style.backgroundSize = 'contain';
}





