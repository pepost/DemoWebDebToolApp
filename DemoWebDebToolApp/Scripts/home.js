
$().ready(function () {

$('.btn-ajax').on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    var request = $.ajax({
        url: "Home/Details",
        type: "POST",
        data: { id: 'test' },
        dataType: "html"
    });

    request.done(function (msg) {
        $("#resultArea").html(msg);
    });

    request.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });
});
})