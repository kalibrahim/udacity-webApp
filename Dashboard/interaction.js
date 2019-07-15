$(document).ready(function() {
  $("img").click(function() {
    $("h1").text("A Photo of a logo");
  });
});

// $(document).ready(function() {
//     $("body").hide().fadeIm("fast");
// });

$(document).ready(function () {
    $('h1').click(function() {
        $('img').fadeOut("fast");
    });
});
