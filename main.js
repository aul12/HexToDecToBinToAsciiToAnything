$(function () {
    $("body").asyncLoader({url: "converter/index.html", title: "Converter"}, function () {
        updatePage();
    });
});

