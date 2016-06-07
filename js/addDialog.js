$(function(){
    $("#btnAdd").click(function(){
        var type = $("#selectType").val();

        addField(type);

        writeValue(0);
        writeValue(1);
        writeValue(2);
    });

    addField("Decimal");
});

function addField(type){
    $("#row1").append("<div class=\"jumbotron\">\n    <h2>"+type+"</h2>\n    <div class=\"form-group\">\n        <textarea class=\"form-control\" " +
        "rows=\"3\" oninput=\'textChanged(this, \""+type+"\", 0)\' encodingType='"+type+"' row='0'></textarea>\n    </div>\n</div>\'");

    $("#row2").append("<div class=\"jumbotron\">\n    <h2>"+type+"</h2>\n    <div class=\"form-group\">\n        <textarea class=\"form-control\" " +
        "rows=\"3\" oninput=\'textChanged(this, \""+type+"\", 1)\' encodingType='"+type+"' row='1'></textarea>\n    </div>\n</div>\'");

    $("#rowResult").append("<div class=\"jumbotron\">\n    <h2>"+type+"</h2>\n    <div class=\"form-group\">\n        <textarea class=\"form-control\" " +
        "rows=\"3\" oninput=\'textChanged(this, \""+type+"\", 2)\' encodingType='"+type+"' row='2'></textarea>\n    </div>\n</div>\'");
}