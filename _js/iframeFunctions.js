function resizeIframe(obj) {
    if(navigator.userAgent.match(/Android|webOS|iPhone|iPod|Blackberry/i) && navigator.userAgent.toLowerCase() .indexOf('firefox') > -1) {
        height = obj.contentWindow.document.body.scrollHeight+2000
        obj.style.height = height+'px';
    } else {
        height = obj.contentWindow.document.body.scrollHeight+20
        obj.style.height = height+'px';
    }
};