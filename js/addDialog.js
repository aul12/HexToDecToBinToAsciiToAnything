$(function(){
    $("#btnAdd").click(function(){
        var type = $("#selectType").val();

        var workspace = $("#workspace").html();

        workspace += "<div class=\"jumbotron\">\n    <h2>"+type+"</h2>\n    <div class=\"form-group\">\n        <textarea class=\"form-control\" " +
            "rows=\"3\" oninput=\'textChanged(this, \""+type+"\")\' id='Area"+type+"'></textarea>\n    </div>\n</div>\'";

        $("#workspace").html(workspace);
    });
});