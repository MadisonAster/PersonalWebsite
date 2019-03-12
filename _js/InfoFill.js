function GetPhone() {
    var EncodedString = "ODE4LTI3MC02NTE3";
    return DecodeData(EncodedString);
}

function GetEmail() {
    var EncodedString = "aW5mb0BNYWRpc29uQXN0ZXIuY29t";
    return DecodeData(EncodedString);
}

function GetAddress() {
    var EncodedString = "SG9sbHl3b29kIENBLCA5MDAyOA==";
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