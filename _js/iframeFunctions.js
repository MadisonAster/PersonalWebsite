function resizeIframe(obj) {
    if(navigator.userAgent.toLowerCase() .indexOf('firefox') > -1) {
        height = obj.contentWindow.document.body.clientHeight+20;
        obj.style.height = height+'px';
    } else {
        height = obj.contentWindow.document.body.scrollHeight+20;
        obj.style.height = height+'px';
    }
};