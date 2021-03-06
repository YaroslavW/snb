document.addEventListener("keydown", function(e){
    e = e || window.event;
    var url = window.location;
    
    function PopupCenter(url, title, w, h) {
        
        var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
        var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

        var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

        var left = ((width / 2) - (w / 2)) + dualScreenLeft;
        var top = ((height / 2) - (h / 2)) + dualScreenTop;
        
        var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

        if (window.focus) {
            newWindow.focus();
        }
    }

    if (e.shiftKey && e.keyCode == 71) {

        PopupCenter('https://plus.google.com/share?url=' + url,'xtf','600','400'); 
    } else if(e.shiftKey && e.keyCode == 70){
        PopupCenter('http://www.facebook.com/sharer.php?u=' + url,'xtf','600','400');
    } else if(e.shiftKey && e.keyCode == 84){
        PopupCenter('https://twitter.com/intent/tweet?url=' + url, 'xtf', '600', '400');
    }
    return true;

});