$(function() {
});

var value = 0;

function asciiToDec(text){
    var num = "";
    for(var c=0; c<text.length; c++){
        num += text.charCodeAt(c).toString(16);
    }
    return parseInt(num, 16);
}

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
            return asciiToDec(text);
        case "Base64":
            try{
                return asciiToDec(atob(text));
            }catch(e){
                console.log("Falsch");
            }
            break;
        case "Octal":
            return parseInt(text, 8);
            break;
        default:
            alert("Error");
            return;
    }
}

function textChanged(parent, type){
    value = convertToDec(type, parent.value);

    $("textarea[encodingType='Decimal']").val(value.toString(10));
    $("textarea[encodingType='Binary']").val(value.toString(2));
    $("textarea[encodingType='Hex']").val(value.toString(16));
    $("textarea[encodingType='Octal']").val(value.toString(8));



    var hex = value.toString(16);
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));

    $("textarea[encodingType='ASCII']").val(str);

    if(type != "Base64")
        $("textarea[encodingType='Base64']").val(btoa(str));
}