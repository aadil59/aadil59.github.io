$(document).ready(function () {

    $(function () {
        $("#slider").slider({
            range: true,
            min: 0,
            max: 500,
            values: [75, 300],
            slide: function (event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#slider").slider("values", 0) +
            " - $" + $("#slider").slider("values", 1));
    });

    var $button = $('.checkboxForSlider');
    $button.on('change', function () {
        var output = '';
        var buttonVal = $(this).val()
        console.log(buttonVal);
        var sliderDiv = $(`#slider${buttonVal}`);
        var priceLabel = $(`#amount${buttonVal}`);
        output +=
            `<div id="slider${buttonVal}"></div>
        <input type="text" id="amount${buttonVal}" readonly style="border:0; margin: 10px 0 0; color:#f6931f; font-weight:bold;">`
        if ($(this).prop('checked') == true) {
            $(this).parent().next().find('.sliderTempL').html(output);
            $(function () {
                console.log(sliderDiv);
                $(sliderDiv.selector).slider({
                    range: true,
                    min: 0,
                    max: 500,
                    values: [100, 200],
                    slide: function (event, ui) {
                        $(priceLabel.selector).val("$" + ui.values[0] + " - $" + ui.values[1]);
                    }
                });
                $(priceLabel.selector).val("$" + $(sliderDiv.selector).slider("values", 0) +
                    " - $" + $(sliderDiv.selector).slider("values", 1));
            });
        } else {
            $(this).parent().next().find('.sliderTempL').html('Filter');
        }
    })
});