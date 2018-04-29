$(document).ready(function() {
      $("#log form").submit(function(event) {
          var emailInput = $("input#subinput").val();
          $(".email1").text(emailInput);
          $("#info").show();

          event.preventDefault();
        });
});
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$(document).ready(function() {
$("#lunch").hover(function(){
    $('.layer').show();
    }, function(){
    $('.layer').hide();
});
});

$(document).ready(function() {
$("#breakfast").hover(function(){
    $('.layer1').show();
    }, function(){
    $('.layer1').hide();
});
});
