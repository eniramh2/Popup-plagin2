$(document).ready(function() {
    $('.btnOpen').click(function() {

/*        var html = ' and Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus and Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker includirem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker includirem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br><img src="img/SETTINGS.png"><img src="img/SETTINGS.png"><img src="img/SETTINGS.png">'

        $('#myPopup2').popupPlugin({
            'animateOpening': 'bottom',
            'title': 'My Title',
            'closeEsc': true,
            'overlay': true,
            'size': 'large',
            'modal': true,
            'autoclose': false,
            'autocloseTime': 1000,
            'content': html,
            'buttons': {
                'Help': {
                    'style': 'simple',
                    'action': function() {
                        alert("Help btn was clicked");
                    }
                },
                'Close': {}
            },
            'onClose': {
                'animateCloseing': 'right'
            }
        });
*/

      //  $('#myPopup').popupPlugin({ });


        $('#myPopup').popupPlugin({
            'animateOpening': 'top',
            'position': 'top',
            'buttons': {
                'Help': {
                    'style': 'warning',
                    'action': function() {
                        alert("Help btn was clicked");
                    }
                },
                'No': {
                    'style': 'danger',
                    'action': function() {
                        alert("No btn was clicked");
                    }
                },
                'Close': {}
            },
            'content':' <br>Hi' ,
            'onClose': {
                'animateCloseing': 'none'
            }
        });




    });

});