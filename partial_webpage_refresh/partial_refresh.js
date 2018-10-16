setInterval(function() {
    $.ajax({
        url: "@Url.Action("Action", Controller)"
    }).success(function(data) {
        $("#someElement").html(data);
    });
}, 10000);
