$("button").click(function refreshText(){
    $.ajax({
        url:"http://127.0.0.1:8080/",
        success:function(result){
            $("#text").val(result);
            setTimeout(refreshText, 5000);
        }
    });
});
