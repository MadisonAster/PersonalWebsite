function resizeIframe(obj) {
    height = obj.contentWindow.document.body.scrollHeight+20
    obj.style.height = height+'px';
};