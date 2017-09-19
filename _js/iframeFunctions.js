function getDocHeight(D) {
    return Math.max(
        Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
        Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
        Math.max(D.body.clientHeight, D.documentElement.clientHeight)
    );
}

function resizeIframe(obj) {
    if(navigator.userAgent.toLowerCase() .indexOf('firefox') > -1) {
        height = getDocHeight(obj.contentWindow.document)+2000;
        obj.style.height = height+'px';
    } else {
        height = obj.contentWindow.document.body.scrollHeight+20;
        obj.style.height = height+'px';
    }
};