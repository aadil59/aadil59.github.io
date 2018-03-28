//Progress-Bars_______________________________________________________
    
    
    (function ( $ ) {
          $.fn.progress = function() {
            var percent = this.data("percent");
            this.css("width", percent+"%");
    };
    }( jQuery ));

    $(document).ready(function(){
      $(".progress-1 .progress-bar").progress();
      $(".progress-2 .progress-bar").progress();
      $(".progress-3 .progress-bar").progress();
      $(".progress-4 .progress-bar").progress();
      $(".progress-5 .progress-bar").progress();
        
        var count = $(('#count'));
        $({ Counter: 0 }).animate({ Counter: count.text() }, {
          duration: 5000,
          easing: 'linear',
          step: function () {
            count.text(Math.ceil(this.Counter)+ "%");
          }
        });

        var s = Snap('#animated');
        var progress = s.select('#progress');

        progress.attr({strokeDasharray: '0, 161.2'});
        Snap.animate(0,161.2, function( value ) {
            progress.attr({ 'stroke-dasharray':value+',261.2'});
        }, 5000);
    });
    
     $(document).ready(function(){
        var count = $(('#count2'));
        $({ Counter: 0 }).animate({ Counter: count.text() }, {
          duration: 5000,
          easing: 'linear',
          step: function () {
            count.text(Math.ceil(this.Counter)+ "%");
          }
        });

        var s = Snap('#animated2');
        var progress = s.select('#progress');

        progress.attr({strokeDasharray: '0, 161.2'});
        Snap.animate(0,125.9, function( value ) {
            progress.attr({ 'stroke-dasharray':value+',261.2'});
        }, 5000);
    });
 jQuery(document).ready(function() {
	   function count($this){
		var current = parseInt($this.html(), 10);
		current = current + 1; /* Where 1 is increment */

		$this.html(++current);
		if(current > $this.data('count')){
			$this.html($this.data('count'));
		} else {
			setTimeout(function(){count($this)}, 80);
		}
	}

	jQuery("span").each(function() {
	  jQuery(this).data('count', parseInt(jQuery(this).html(), 10));
	  jQuery(this).html('0');
	  count(jQuery(this));
	});
});