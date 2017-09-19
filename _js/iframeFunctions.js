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

// parent_on_message(e) will handle the reception of postMessages (a.k.a. cross-document messaging or XDM).
function parent_on_message(e) {
    // You really should check origin for security reasons
    // https://developer.mozilla.org/en-US/docs/DOM/window.postMessage#Security_concerns
    //if (e.origin.search(/^http[s]?:\/\/.*\.localhost/) != -1
    //    && !($.browser.msie && $.browser.version <= 7)) {
        var returned_pair = e.data.split('=');
        if (returned_pair.length != 2){
            return;
        }
        if (returned_pair[0] === 'message-for-parent') {
            alert(returned_pair[1]);
            window.history.pushState('obj', 'newtitle', returned_pair[1]);
        }else{
            console.log("Parent received invalid message");
        }

    //}
}

jQuery(document).ready(function($) {
    // Setup XDM listener (except for IE < 8)
    if (!($.browser.msie && $.browser.version <= 7)) {
        // Connect the parent_on_message(e) handler function to the receive postMessage event
        if (window.addEventListener){
            window.addEventListener("message", parent_on_message, false);
        }else{
            window.attachEvent("onmessage", parent_on_message);
        }
    }
});