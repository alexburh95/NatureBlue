    function slowScroll(id) {
        var offset = 0;
        $('html, body').animate({
            scrollTop: $(id).offset().top - offset
        }, 1000);
        return false;
    }







$(function () {
    $('input[name="phone"]').mask("+7 (999) 999-99-99");
}); 

var obj = {
    test:function() {
    console.log('obj.test');
    }
    }
    // создаём обработчик произвольного события someEvent
    $(obj).on('someEvent', function(){
    console.log('obj.someEvent');
    this.test();
    });
    // инициируем событие someEvent
    $(obj).trigger('someEvent');
    // полюбопытствуем
    console.log(obj);