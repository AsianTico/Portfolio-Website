var wideScreen = 640; // for example beyond 640 is considered wide

var toggleBtnGroup = function() {
	var windowWidth = $(window).width();
  
  if(windowWidth < wideScreen) {
  	$('#btn-group-toggle').addClass('btn-group-vertical').removeClass('btn-group');

  } else {
   	$('#btn-group-toggle').addClass('btn-group').removeClass('btn-group-vertical');
  }
}

toggleBtnGroup(); // trigger on load

window.addEventListener('resize',toggleBtnGroup); // change on resize


/*copy and pasted same function for 2 group of buttons in contact section
since an element can use only 1 unique ID --- */
var wideScreen = 640; // for example beyond 640 is considered wide

var toggleBtnGroup = function() {
	var windowWidth = $(window).width();
  
  if(windowWidth < wideScreen) {
  	$('#btn-group-toggle2').addClass('btn-group-vertical').removeClass('btn-group');

  } else {
   	$('#btn-group-toggle2').addClass('btn-group').removeClass('btn-group-vertical');
  }
}

toggleBtnGroup(); // trigger on load

window.addEventListener('resize',toggleBtnGroup); // change on resize