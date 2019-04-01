$(document).ready(function () {
    // JQUERY UI DATEPICKER
    $(".datepicker").datepicker({
        onSelect: function () {
            $(this)
                .addClass("float-label-up")
                .parent()
                .removeClass("errorEmpty");
        }
    });
    ///////////////////// Country dropdown through AJAX
    $.ajax({
        url: "http://api.myjson.com/bins/b3oxz",
        type: "GET",
        dataType: "JSON",
        data: "",
        success: function (info) {
            $("#country").html(""); // clear before appending new list
            $.each(info, function (key, val) {
                $("#country")
                    .addClass("float-label-up")
                    .append(
                        $("<option> </option>")
                        .val(val.name)
                        .html(
                            val.name.charAt(0).toUpperCase() +
                            val.name.slice(1).toLowerCase()
                        )
                    );
            });
        }
    });

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

    ///////////////////// SHOWING ERROR MESSAGE
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

    ///////////////////////// SCHEDULE CAMPAIGN

    $("body").on("click", ".btnSchedule", function () {
        $(".schedule-wrapper").addClass('open');
    });
    $("body").on("click", ".schedule-wrapper .btn", function () {
        $(".schedule-wrapper").removeClass('open');
    });
});
// ======================= JSON RESPONCE TO LOAD DATA BY FETCH
const jsonURL = "https://aadil59.github.io/db.json";
const getData = paramFilter => {
    $("tbody").html("");
    fetch(jsonURL)
        .then(res => res.json())
        .then(data => {
            //________________ FILTER ALL THE DATA BASED ON DATES
            const filterUpcoming = data.filter(item => {
                let dateCampaign = new Date(item.date);
                let todaysdate = new Date();
                let timeDiff = Math.floor(
                    todaysdate.getTime() - dateCampaign.getTime()
                );
                let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                return diffDays < 1;
            });
            const filterLive = data.filter(item => {
                let dateCampaign = new Date(item.date);
                let todaysdate = new Date();
                let timeDiff = Math.floor(
                    todaysdate.getTime() - dateCampaign.getTime()
                );
                let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                return diffDays === 1;
            });
            const filterPast = data.filter(item => {
                let dateCampaign = new Date(item.date);
                let todaysdate = new Date();
                let timeDiff = Math.floor(
                    todaysdate.getTime() - dateCampaign.getTime()
                );
                
                let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                
                return diffDays > 1;
            });


        function getDiff(date){
            let dateCampaign = new Date(date);
            let todaysdate = new Date();
            let timeDiff = Math.floor(
                todaysdate.getTime() - dateCampaign.getTime()
            );
            diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            if(diffDays < 1){
                return Math.abs(diffDays)+1+' Days to go';
            }
            else if(diffDays == 1) {
                return 'Running';
            }
            else{
                return Math.abs(diffDays)-1+' Days ago';
            }
        }

            const drawDOM = () => {
                let output;
                data.forEach(function (item) {
                    output += `
                <tr id=${item.id} class='table-row'>
                <td data-attr="date" class="show-modal">
                    <div class="date">${item.date}</div>
                    <div class="time-diff">${getDiff(item.date)}</div>
                </td>
                <td data-attr="campaign" class="show-modal">
                    <div class="cell-campaign">
                        <div class="img-wrap"><img src="assets/images/${
                          item.img
                        }" alt="campaign"
                                title="campaign" /></div>
                        <div class="desc">
                            <h4 class="title">${item.name}</h4>
                            <span class="country uppercase">${
                              item.country
                            }</span>
                        </div>
                    </div>
                </td>
                <td data-attr="view" class="cell-pricing show-modal">
                    <span class="circel bg-blue"><i class="fas fa-dollar-sign"></i></span>
                    <p class="uppercase">${item.view}</p>
                </td>
                <td data-attr="actions" class="actions uppercase">
                    <a href="javascript:void(0);"><i class="fas fa-file-csv"></i><br />csv</a>
                    <a href="javascript:void(0);"><i class="fas fa-chart-bar"></i><br />reports</a>
                    <a href="javascript:void(0);" class="btnSchedule"><i class="fas fa-calendar-check"></i><br />schedule
                        again</a>
                </td>
            </tr>
                `;
                });
                $("#" + paramFilter + " " + "tbody").html(output);
            };
            //________________ TEMPLETE LITERALS FOR LOAD ALL DATA
            if (paramFilter == "upcoming-campaign") {
                data = filterUpcoming;
                drawDOM();
            } else if (paramFilter == "live-campaign") {
                data = filterLive;
                drawDOM();
            } else {
                data = filterPast;
                drawDOM();
            }
        });
};
getData("past-campaign");

//   TAB PANEL
$(".nav-tab li").on("click", function () {
    $(".nav-tab li").removeClass("active");
    $(this).addClass("active");
    var relAttr = $(this).attr("rel");
    $(".tab-panel").hide();
    $("#" + relAttr).show();
    getData(relAttr);
});

// MODAL
var $modal = $('.modal'),
    $overlay = $('.overlay'),
    $showModal = $('.show-modal'),
    $close = $('.close');

/*show modal and set dimensions based on window */
$('body').on('click', '.show-modal', function () {

    var templModal = '';
    $('.modal-content').html('');
    var windowHeight = $(window).height(),
        windowWidth = $(window).width(),
        modalWidth = windowWidth / 2;

    $overlay.show();
    $modal.addClass('modal-open');
    const getAttr = $(this).parent().attr('id');
    const modalInfo = {
        title: $("#"+getAttr).find('.title').text(),
        date: $("#"+getAttr).find('.date').text(),
    }
    // console.log(modalInfo);
    templModal += `<header class="modal-header">
  <h3>Your Campaign is: <span class="modalTitleCamp">${modalInfo.title}</span></h3>
</header>
<div class="modal-body">
  <h4 class="date">Which will be held on: <span class="campaignDate">${modalInfo.date}</span></h4>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tenetur blanditiis aliquid
      reiciendis laboriosam, voluptas quas fugiat error sequi sapiente, quos, doloremque nulla unde
      nostrum impedit quasi molestiae corporis eaque autem dicta ut distinctio ab. Officiis sed
      quidem obcaecati distinctio?</p>
</div>`
    $('.modal-content').html(templModal);
});
/*close on click of 'x' */
$close.on('click', function () {
    $overlay.hide();
});
/* close on click outside of modal */
$overlay.on('click', function (e) {
    if (e.target !== this) return;
    $overlay.hide();
});