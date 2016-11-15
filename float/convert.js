function updatePage() {
    $.material.init();

    var floatVal = 0;

    function readFloat(input){
        var intPart = parseInt(input, 2);

        var realPart = input.split(".");

        if(realPart.length > 1){
            realPart = realPart[1];

            var realDec = 0;
            for(var c=0; c<realPart.length; c++){
                realDec += realPart[c]=="1"?Math.pow(2, -(c+1)):0;
            }
        }else{
            realDec = 0;
        }

        return intPart + (intPart>=0?realDec:-realDec);
    }

    $("#inputBinary").on("input", function () {
        var input = $(this).val();

      /*  var intPart = parseInt(input, 2);

        var realPart = input.split(".");

        if(realPart.length > 1){
            realPart = realPart[1];

            var realDec = 0;
            for(var c=0; c<realPart.length; c++){
                realDec += realPart[c]=="1"?Math.pow(2, -(c+1)):0;
            }
        }else{
            realDec = 0;
        }*/

        floatVal = readFloat(input);//intPart + (intPart>=0?realDec:-realDec);

        writeValue(1);
    });

    $("#inputDecimal").on("input", function () {
        floatVal = parseFloat($(this).val());
        writeValue(0);
    });

    $("input[data-simple], #checkBoxSign").on("input change", function () {
        console.log("Test");
        var exp = parseInt($("#inputExp").val(),2);
        var mant = readFloat($("#inputMant").val());
        var signed = $("#checkBoxSign").prop("checked")?-1:1;

        floatVal = signed * mant * Math.pow(2, exp);
        writeValue(2);
    });

    function isInt(n) {
        return n % 1 === 0;
    }

    function writeValue(system){
        if(isInt(floatVal)){

            if(system != 0)
                $("#inputDecimal").val(parseInt(floatVal).toString(10));
            if(system != 1)
                $("#inputBinary").val(parseInt(floatVal).toString(2));
        }else{
            if(system != 0)
                $("#inputDecimal").val(floatVal);

            var intPart = parseInt(floatVal);

            var floatPart = Math.abs(floatVal) - Math.abs(intPart);
            var floatString = "";

            if(floatPart == 0)
                floatString = "0";

            for(var c=0; floatPart != 0 && c<7; c++){
                if(floatPart >= Math.pow(2, -(c+1))){
                    floatString += "1";
                    floatPart -= Math.pow(2, -(c+1));
                }else{
                    floatString += "0";
                }
            }
            if(floatPart > 0)
                floatString += "1";

            if(system != 1)
                $("#inputBinary").val(intPart.toString(2) + "." + floatString);
        }

    }

}