var zselect = document.getElementById('zselect');
var zsel = document.getElementById('zsel');
zselect.onmouseenter = function() {
    zsel.style.display = 'block';
    
} 
zselect.onmouseleave = function() {
    zsel.onmouseenter =function() {
        this.style.display = 'block';
        clearTimeout(zsuoyin);
        var links = this.getElementsByTagName('a');
        for(var i = 0; i < links.length; i++) {
            links[i].onmouseenter = function(){
                this.style.backgroundColor = '#eee';
            }
            links[i].onmouseleave = function(){
                this.style.backgroundColor = '';
            }
        }
    }
    zsel.onmouseleave = function() {
            this.style.display = 'none';
     }
   var zsuoyin = setTimeout(function(){
       zsel.style.display = 'none'; 
    },3000);
    
}
var er = document.getElementsByClassName('weixin');
var erm = document.getElementById('erweima');
er[0].onmouseover = function() {
    erm.style.display = 'block';
}
er[0].onmouseout = function() {
    erm.style.display = 'none';
}
