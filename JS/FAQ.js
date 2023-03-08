// alert('TEST')
$(document).ready(function(){
    $("#btn1").click(function(event){
        $(this).parent().next().toggleClass('card-text');
    });
});
$(document).ready(function(){
    $("#btn2").click(function(event){
        $(this).parent().next().toggleClass('card-text');
    });
});
$(document).ready(function(){
    $("#btn3").click(function(event){
        $(this).parent().next().toggleClass('card-text');
    });
});