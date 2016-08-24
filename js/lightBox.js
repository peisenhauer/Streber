/*** Lightbox ***/

$("document").ready(function(){
    $(".blisterlabel").click(function() {
        x = "#" + $(this).attr("id") + "_info";
        x = gleich(x);
        $(x).show();
        $("#popup").fadeIn("slow");
    });
    $("#popup").click(function() {
        $("#popup").fadeOut("fast");
        $(x).delay(500).hide(0);
    });

    function gleich (label){
      var ergebnis = "";
      switch (label)
      {
         case "#label_6_info":
             ergebnis = "#label_1_info";
             break;

        case "#label_9_info":
             ergebnis = "#label_4_info";
             break;

        case "#label_10_info":
             ergebnis = "#label_5_info";
             break;

         default:
             ergebnis = label;
             break;
      }
      return ergebnis;
    }
});
