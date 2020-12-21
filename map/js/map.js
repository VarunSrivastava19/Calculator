$("document").ready(function() {
    $("button").click(function(){
        $("p").append("<br> "+$("input").map(function() {
                console.log($(this).val());
                return $(this).val();
            }
        )
        .get()
        .join(" ,")
    )
    });
});