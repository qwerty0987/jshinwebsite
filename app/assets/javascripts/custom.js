$(document).ready(function() {
  $("a.fancybox").fancybox();
  $("#perfboard").hide();
  $("#toggledetails").click(function(){
    var stmt = "Show details"
    if ( false == $("#perfboard").is(":visible") )
    {
	stmt = "Hide details";
    }
    $("#toggledetails").text(stmt);
    $("#perfboard").toggle();
  });
});
