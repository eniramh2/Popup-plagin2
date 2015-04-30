(function($) {
    $.fn.popupPlugin = function(object) {

        var popup = $(this);
        var settings = {};
        var open = {};
        var close = {};
        var position;
        var defaltTop;
        var timer;
        var h;
        var screenH = screen.height;
        var limit;




        settings = {
            'animateOpening': 'none',
            'closeEsc': true,
            'overlay': true,
            'modal': true,
            'autoclose': false,
            'autocloseTime': 3000,
            'position': 'center',
            'size': 'normal',
            'onClose': {
                'animateCloseing': 'none'
            },
            'title': ' ',
            'content': ' ',
            'buttons': {
                'close': {
                    'style': 'simple',
                    'action': function() {
                        onClose();
                    }
                }
            }
        };

        $.extend(settings, object);




        /////////////////////////////////////////////////////////////////////////Animation Types//////////////////////////////
        open = {
            top: function(elem, pos) {
                elem.css({
                    'top': '-100%',
                    'left': '50%',
                    'display': 'block'
                });
                $("#overlay").fadeIn();
                elem.animate({
                    'top': pos + '%'
                }, function() {
                    defaltTop = parseInt(popup.css('top'));
                });
            },
            bottom: function(elem, pos) {
                elem.css({
                    'top': '200%',
                    'left': '50%',
                    'display': 'block'
                });
                $("#overlay").fadeIn();
                elem.animate({
                    'top': pos + '%'
                }, function() {
                    defaltTop = parseInt(popup.css('top'));
                });
            },
            left: function(elem, pos) {
                elem.css({
                    'left': '-100%',
                    'top': pos + '%',
                    'display': 'block'
                });
                $("#overlay").fadeIn();
                elem.animate({
                    'left': '50%'
                }, function() {
                    defaltTop = parseInt(popup.css('top'));
                });
            },
            right: function(elem, pos) {
                elem.css({
                    'left': '-100%',
                    'top': pos + '%',
                    'display': 'block'
                });
                $("#overlay").fadeIn();
                elem.animate({
                    'left': '50%'
                }, function() {
                    defaltTop = parseInt(popup.css('top'));
                });
            },
            none: function(elem, pos) {
                elem.css({
                    'left': '50%',
                    'top': pos + '%',
                    'display': 'block'
                });
                $("#overlay").fadeIn();
                defaltTop = parseInt(popup.css('top'));
            }
        };




        close = {
            top: function(elem) {
                elem.animate({
                    'top': '-100%'
                }, function() {
                    elem.css({
                        'display': 'none'
                    });
                    popup.removeAttr("style");

                });
            },
            bottom: function(elem) {
                elem.animate({
                    'top': '200%'
                }, function() {
                    elem.css({
                        'display': 'none'
                    });
                    popup.removeAttr("style");

                });

            },
            left: function(elem) {
                elem.animate({
                    'left': '-100%'
                }, function() {
                    elem.css({
                        'display': 'none'
                    });
                    popup.removeAttr("style");

                });
            },
            right: function(elem) {
                elem.animate({
                    'left': '200%'
                }, function() {
                    elem.css({
                        'display': 'none'
                    });
                    popup.removeAttr("style");

                });
            },
            none: function(elem) {
                elem.css({
                    'display': 'none',
                    'left': '50%',
                    'top': '50%'
                });
                popup.removeAttr("style");

            }
        };


        function onClose() {

            clearTimeout(timer);
            $(document).unbind('keyup', keyUpFunc);
            $('.colseXIcone').unbind('click', onClose);
            $('#overlay').unbind('click', onClose);
            $("#overlay").fadeOut(function() {
                $(this).remove();
            });
            $(window).unbind('scroll')

            close[settings['onClose']['animateCloseing']](popup);
            $('.popupContent').contents().unwrap();
            $('.jsContent').remove();
            $('.popupFooter').remove();
            $('.popupHeader').remove();
            popup.removeClass("popupwrapper");
        }


        if (popup.hasClass("popupwrapper")) {
            console.log("True");
            onClose();
        }


        popup.addClass("popupwrapper");
        popup.wrapInner("<div class='popupContent'></div>");
        popup.prepend('<div class="popupHeader"><span class = "colseXIcone"><span></div>');
        popup.append('<div class="popupFooter"></div>');
        $('.popupHeader').append("<span class = 'popupPluginTitle'>" + settings['title'] + "</span>");
        $('.popupContent').append("<span class = 'jsContent'>" + settings['content'] + "</span>");

        if (settings['overlay']) {
            popup.before('<div id="overlay" class = "box" ></div>');
        }

        for (key in settings['buttons']) {
            (function() {
                if ('action' in settings['buttons'][key]) {
                    var action = settings['buttons'][key]['action'];
                } else {
                    var action = onClose;
                }
                if ('style' in settings['buttons'][key]) {
                    var style = settings['buttons'][key]['style'];
                } else var style = "simple";
                $('.popupFooter').append("<button class = 'popupBtn " + style + "' id = '" + key + "'>" + key + "</button>");
                $('#' + key).click(function() {
                    action();
                });
            }());
        }

        function size(size) {
            switch (size) {
                case 'normal':
                    s = 650;
                    break;
                case 'large':
                    s = 900;
                    break;
                case 'small':
                    s = 300;
                    break;
            }
            popup.css("width", s + 'px');
        }
        size(settings['size']);
        if (settings["position"] == 'top') {
            popup.css({
                'margin-left': -popup.width() / 2 + "px",
            });
            position = 2;
        } else {


            if (popup.height() > screenH) {
                position = 2;
                popup.css({
                    'margin-left': -popup.width() / 2 + "px",
                });

            } else {
                position = 50;
                popup.css({
                    'margin-left': -popup.width() / 2 + "px",
                    'margin-top': -popup.height() / 2 + "px"
                });
            }
        }
        //////////////////////////////////////////////////////////opening/////////////////////////////////////////

        open[settings['animateOpening']](popup, position);

        $(window).scroll(function() {
            var scrollTop = $(document).scrollTop();
            h = popup.height();
            screenH = $("#overlay").height();


            if (h > screenH) {
                limit = h - screenH;

                if (scrollTop > limit) {
                    popup.css("top", defaltTop + scrollTop - limit - 20 + "px")
                }
                if (scrollTop == 0)
                    popup.css("top", 20 + "px");
            } else {
                popup.css("top", defaltTop + scrollTop + "px");
            }
        });

        //////////////////////////////////////////////////////////closing //////////////////////////////

        if (settings['closeEsc']) {
            function keyUpFunc(e) {
                if (e.keyCode == 27) {
                    onClose();
                }
            }
            $(document).keyup(keyUpFunc);
        }

        $('.colseXIcone').bind('click', onClose);

        if (!settings['modal']) {
            $('#overlay').bind('click', onClose)
        }

        if (settings['autoclose']) {
            timer = setTimeout(function() {
                onClose()
            }, settings['autocloseTime']);
        }




    };
})(jQuery);