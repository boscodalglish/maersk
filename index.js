var $wrapper = $('.testWrapper');

$(document).ready(function() {
    $("#btnSubmit").click(function(){
       $wrapper.find('.test-flex').sort(function (a, b) {
    		return +a.dataset.name - +b.dataset.name;
			})
			.appendTo( $wrapper );
    }); 
    $("#btnreshuffle").click(function(){
        var parent = $(".testWrapper");
    		var divs = parent.children();
        while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
    }); 
});