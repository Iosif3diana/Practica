/**
 * The first menu function
 */
function addHabbit() {
alert("in >>");
window.open("others.html");}

/**
 * Date calendar
 */
$(document).ready(function(){
	$('#incomeDate').datepicker();
});

$('input.incomeDate').datepicker({
    beforeShow: function(input, inst)
    {
        inst.dpDiv.css({marginTop: -input.offsetHeight + 'px', marginLeft: input.offsetWidth + 'px'});
    }
});

$("start").onclick(function (){
	$('#action-menu').style;
});

