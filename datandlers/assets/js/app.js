$(document).ready(function () {

  // HAMBURGER MENU
  $("#hamburger").on("click", function () {
    $(this).parents('.main')
      .toggleClass("open");
  });

  // EMAIL COPIED
  const email = 'fjtm22@gmail.com';
  function copyToClipboard () {
    const tooltip = document.getElementById("myTooltip");
    const el = document.createElement('textarea'); // Create a <textarea> element
    el.value = email; // Set its value to the string that you want copied
    el.setAttribute('readonly', ''); // Make it readonly to be tamper-proof
    el.style.position = 'absolute';
    el.style.left = '-9999px'; // Move outside the screen to make it invisible
    document.body.appendChild(el); // Append the <textarea> element to the HTML document
    const selected =
      document.getSelection().rangeCount > 0 // Check if there is any content selected previously
      ?
      document.getSelection().getRangeAt(0) // Store selection if found
      :
      false; // Mark as false to know no selection existed before
    el.select(); // Select the <textarea> content
    document.execCommand('copy'); // Copy - only works as a result of a user action (e.g. click events)
    document.body.removeChild(el); // Remove the <textarea> element
    if (selected) { // If a selection existed before copying
      document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
      document.getSelection().addRange(selected); // Restore the original selection
    }

    // SELECTION ON TOOLTIP
    tooltip.innerHTML = `Copied: ${email}`;
    if (!tooltip.classList.contains('addedEmail')) {
      tooltip.classList.add('addedEmail');
    }

  }
  $('.btn-email').on('click', function(){
    copyToClipboard();
  })

  // // MAGIC LINE MENU
  // var $el, leftPos, newWidth;

  // /*
  //         EXAMPLE ONE
  //     */

  // /* Add Magic Line markup via JavaScript, because it ain't gonna work without */
  // $("#example-one").append("<li id='magic-line'></li>");

  // /* Cache it */
  // var $magicLine = $("#magic-line");

  // $magicLine
  //   // .width($(".current_page_item").width())
  //   .css("left", $(".current_page_item a").position().left)
  //   .data("origLeft", $magicLine.position().left)
  // // .data("origWidth", $magicLine.width());

  // $("#example-one li").find("a").hover(
  //   function () {
  //     $el = $(this);
  //     leftPos = $el.position().left;
  //     // newWidth = $el.parent().width();

  //     $magicLine.stop().animate({
  //       left: leftPos,
  //       width: newWidth
  //     });
  //   },
  //   function () {
  //     $magicLine.stop().animate({
  //       left: $magicLine.data("origLeft"),
  //       // width: $magicLine.data("origWidth")
  //     });
  //   }
  // );

  //Float Label
  var inputBox = $(".form-control");
  $(function () {
    if ($(this).val()) {
      $(this).addClass("float-label-up");
    }

    inputBox.keyup(function () {
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
  $(".form-control").on("focusout", function () {
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