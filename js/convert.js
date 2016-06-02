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
}