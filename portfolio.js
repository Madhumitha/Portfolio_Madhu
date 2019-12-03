$(document).ready(function() {
console.log($('.Quiz').length);

$('.Quiz').click(function(){
    window.location=$(this).find('a').attr('href');
    return false;
});
});
