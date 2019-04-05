$(document).ready(function() {
  $(".carouselContainer").owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    nav: false,
    responsive: false
  });

  // HAMBURGER MENU
  $("#hamburger").on("click", function() {
    $(this)
      .toggleClass("is-active")
      .next()
      .slideToggle(300);
  });

  // ODOMETER
  var typed = new Typed("#typed", {
    strings: ["<h2>EXPLORE</h2>", "<h2>EXPAND</h2>", "<h2>ENGAGE</h2>"],
    typeSpeed: 160,
    backSpeed: 140,
    fadeOut: false,
    smartBackspace: false, // this is a default
    loop: true,
    preStringTyped: self => {
      console.log(self);
    }
  });
  let strinPara = [
    {
      text: `is a group of pragmatic and experienced set of
            enthusiasts,
            and have helped
            brands by conceptualising and executing their Geo-expansion program, Sales
            Enablement,
            Account Based Marketing with a hybrid model of Digital and physical marketing tools
            and
            techniques.`
    },
    {
      text: `is a group of pragmatic and experienced set of
            enthusiasts,
            and have helped
            brands by conceptualising and executing their Geo-expansion program, Sales
            Enablement,
            Account Based Marketing with a hybrid model of Digital and physical marketing tools
            and
            techniques.`
    },
    {
      text: `is a group of pragmatic and experienced set of
            enthusiasts,
            and have helped
            brands by conceptualising and executing their Geo-expansion program, Sales
            Enablement,
            Account Based Marketing with a hybrid model of Digital and physical marketing tools
            and
            techniques.`
    }
  ];

//   function stringFade(parmString) {
//     setInterval(function() {
//       $(".what-make-sec .content--xx-yy .col-sec p span").html = "";
//       $(".what-make-sec .content--xx-yy .col-sec p span").append(parmString);
//       console.log(parmString);
//       clearInterval(parmString);
//     }, 2000);
//   }
//   strinPara.map(element => {
//     stringFade(element.text);
//   });

  //Float Label
  var inputBox = $(".form-control");
  $(function() {
    if ($(this).val()) {
      $(this).addClass("float-label-up");
    }

    inputBox.keyup(function() {
      var count = $(this).val().length;
      // console.log(count);
      if (count == 0) {
        $(this).removeClass("float-label-up");
      } else {
        $(this).addClass("float-label-up");
      }
    });
  });
  ///////////////////// Checks if field is empty
  $(".form-control").on("focusout", function() {
    isEmpty($(this));
  });

  function isEmpty(val) {
    var clickedInput = val;
    if (clickedInput.val() == "") {
      clickedInput.parents(".form-group").addClass("errorEmpty");
      showErrorMsg(clickedInput);
      clickedInput = "";
      return false;
    } else {
      clickedInput.parents(".form-group").removeClass("errorEmpty");
    }
  }

  ///////////////////// Showing error message
  function showErrorMsg(val) {
    var clickedInput = val;
    var clickedInputDiv = clickedInput.parents(".form-group");

    if (clickedInputDiv.hasClass("errorEmpty")) {
      clickedInputDiv.find(".error").text("Required field");
      return false;
    } else {
      clickedInputDiv.find(".error").empty();
    }
  }
});
