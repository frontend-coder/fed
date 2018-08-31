$(document).ready(function() {
	$("body").niceScroll({
horizrailenabled:false
});

// вверхнее красиво-вращающееся меню
// 1 и 2 строка это анимация крестика
//3 строка - слайдер вниз меню
$(".toggle-mnu").click(function() {
$(this).toggleClass("on");
$(".top-menu").slideToggle();
return false;
});
$('body, .top-menu ul li a').click(function () {
$('.hidden-mnu').hide("slow");
});

// Заставляет прятаться кнопку, если посетитель на хедере
$(window).scroll(function() {
if ($(this).scrollTop() > $(this).height()) {
  $(".button-top").addClass("active");
} else
{   $(".button-top").removeClass("active");
}
});


//Кнопка наверх с права от контента
$("body").append('<div class="button-top"><i class="fa fa-angle-double-up" aria-hidden="true"></i></div>');
// Заставляет кнопку работать как ссылку на самый вверх
$("body").on("click", ".button-top", function() {
 $("html, body").animate({scrollTop: 0}, "slow");
});


 var typed2 = new Typed('#typed-text', {
    strings: ["Созданием landing pages под ключ", "созданием сайтов-визиток под ключ", "созданием блогов под ключ", "созданием дизайнов интерфейсов"],
    typeSpeed: 100,            //type speed in milliseconds
    startDelay:50,             //  time before typing starts in milliseconds
    backSpeed: 150,            // backspacing speed in milliseconds
   smartBackspace:true,       // boolean, only backspace what doesn't match the previous string
    shuffle: true,             // (boolean) : shuffle the strings
    backDelay: 100,             // time before backspacing in milliseconds
    fadeOut: true,                 // (boolean) : Fade out instead of backspace
    //fadeOutClass (string)        : css class for fade animation
    //fadeOutDelay (boolean) : Fade out delay in milliseconds
    loop: true,             // (boolean) : loop strings
    loopCount: 2,                    // (number) : amount of loops
    showCursor : true,           // : show cursor
   //cursorChar (string) : character for cursor
  //autoInsertCss (boolean) : insert CSS for cursor and fadeOut into HTML
//attr (string) : attribute for typing Ex: input placeholder, value, or just HTML text
bindInputFocusEvents: true     // : bind to focus and blur if el is text input
//contentType (string) : 'html' or 'null' for plaintext
 });

$(".top-menu ul li a, .adwise-bottom ul li a").mPageScroll2id({
layout                 : "auto",
offset                 : ".top-line",
scrollEasing           : "linear",
highlightByNextTarget  : true,
keepHighlightUntilNext : true,
autoScrollSpeed        : true,
scrollSpeed            : 1000
});

// начало блока портфолио
var resultItems = $('.results');
var mixer = mixitup(resultItems);


// всплывающие окна обратной связи позвонить мне
$("a[href='#call-back']").magnificPopup ({
  mainClass    : 'mfp-fade',
  removalDelay : 400,
  type         : 'inline',
});

// /*чтобы в формах был индивидуальный заголовок */

$("a[href='#call-back']").click(function(){
	var dataForm = $(this).data("form");
	var dataText = $(this).data("text");
	$(".forms-call h4").text(dataText);
	$(".forms-call [name=admin-data]").val(dataForm);
});

// //Аякс отправка форм Документация: http://api.jquery.com/jquery.ajax/

$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".forms-calldecor .success").addClass("active");
			setTimeout(function() {
				// Done Functions
				$(".forms-calldecor .success").removeClass("active");
				th.trigger("reset");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});
// //ниже вставлять js код

});
