$(document).ready(function() {
      $("#log form").submit(function(event) {
          var emailInput = $("input#subinput").val();
          $(".email1").text(emailInput);
          $("#info").show();

          event.preventDefault();
        });
});
