$(function() {
});

var value = 0;

function convertToDec(type, text){
    if(text == "")
        return 0;

    switch (type){
        case "Decimal":
            return parseInt(text, 10);
        case "Binary":
            return parseInt(text, 2);
        case "Hex":
            return parseInt(text, 16);
        case "ASCII":
            var num = 0;
            for(var c=0; c<text.length; c++){
                console.log(text.length-c);
                num += (text.charCodeAt(c) * ((text.length-c))<<(c*8));
            }
            return num;
        default:
            alert("Error");
            return;
    }
}

function textChanged(parent, type){
    value = convertToDec(type, parent.value);

    $("#AreaDecimal").val(value.toString(10));
    $("#AreaBinary").val(value.toString(2));
    $("#AreaHex").val(value.toString(16));

    var hex = value.toString(16);
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    
    $("#AreaASCII").val(str);
}