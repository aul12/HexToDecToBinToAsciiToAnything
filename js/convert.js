$(function() {

    $("#selectOp").change(function(){
        calculateValue();

        writeValue(2);
    });
});

var value = new Array(3);

function asciiToDec(text){
    var num = "";
    for(var c=0; c<text.length; c++){
        num += text.charCodeAt(c).toString(16);
    }
    return parseInt(num, 16);
}

function convertToDec(type, text){
    if(text == "" && text == "NaN")
        return 0;

    switch (type){
        case "Decimal":
            return parseInt(text, 10);
        case "Binary":
            return parseInt(text, 2);
        case "Hex":
            return parseInt(text, 16);
        case "ASCII":
            return asciiToDec(text);
        case "Octal":
            return parseInt(text, 8);
            break;
        default:
            alert("Error");
            return;
    }
}

function textChanged(parent, type, row){
    value[parseInt(row)] = convertToDec(type, parent.value);

    writeValue(parseInt(row));

    calculateValue();

    writeValue(2);
}

function calculateValue(){
    switch ($('#selectOp :selected').text()){
        case "+":
            value[2] = value[1] + value[0];
            break;
        case "-":
            value[2] = value[0] -value[1];
            break;
        case "*":
            value[2] = value[1] * value[0];
            break;
        case "/":
            value[2] = value[0] / value[1];
            break;
        case "AND":
            value[2] = value[1] & value[0];
            break;
        case "OR":
            value[2] = value[1] | value[0];
            break;
        case "XOR":
            value[2] = value[1] ^ value[0];
            break;
        case "NAND":
            value[2] = ~(value[1] & value[0]);
            break;
        case "NOR":
            value[2] = ~(value[1] | value[0]);
            break;
        case "NXOR":
            value[2] = ~(value[1] ^ value[0]);
            break;
    }
}

function writeValue(row){
    $("textarea[encodingType='Decimal'][row='"+row+"']").val(value[row].toString(10));
    $("textarea[encodingType='Binary'][row='"+row+"']").val(value[row].toString(2));
    $("textarea[encodingType='Hex'][row='"+row+"']").val(value[row].toString(16));
    $("textarea[encodingType='Octal'][row='"+row+"']").val(value[row].toString(8));



    var hex = value[row].toString(16);
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));

    $("textarea[encodingType='ASCII'][row='"+row+"']").val(str);
}