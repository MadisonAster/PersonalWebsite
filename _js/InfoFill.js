function GetPhone() {
    var EncodedString = "ODE4LTI3MC02NTE3";
    return DecodeData(EncodedString);
}

function GetEmail() {
    var EncodedString = "Y29udGFjdEB0aG9tYXMtbWN2YXkuaW5mbw==";
    return DecodeData(EncodedString);
}

function GetAddress() {
    var EncodedString = "NTg3MCBGcmFua2xpbiBBdmUgQXB0IDMwOSwgSG9sbHl3b29kLCBDQSA5MDAyOA==";
    return DecodeData(EncodedString);
}

function DecodeData(InputData) {
    var result = window.atob(InputData);
    return result;
}

function EncodeData(InputData) {
    var result = window.btoa(InputData);
    alert(result);
    return result;
}