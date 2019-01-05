$(function(){    
    $('#hxian>ul').fadeOut()
    $('#hxian>ul').first('ul').fadeIn(3000,fn)
});
function fn() {      
    $(this).fadeOut(3000,function(){
        var index = $(this).index();
        if(index === 3){
            // $('#btn1').click();
            
            $('#hxian>ul').first('ul').fadeIn(3000,fn);
        }else{
        
        $(this).next('ul').fadeIn(3000,fn);}
    })
}
   