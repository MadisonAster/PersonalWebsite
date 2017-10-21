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

function GetAvailability() {
    return 'Immediate.';
}

Date.prototype.yyyymmdd = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();

  return [this.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
         ].join('');
};


function GetGenerationDate() {
    return new Date().toLocaleString();
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