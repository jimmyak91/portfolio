(function () {
	$('.menu-wrapper').on('click', function() {
		$('.hamburger-menu').toggleClass('animate');
	})
})();

const $cursor = document.querySelector('#circle');
const $hoverables = document.querySelectorAll('.hoverable');


// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

function onMouseMove(e) {
	TweenMax.to($cursor, .4, {
    x: e.pageX - 15,
    y: e.pageY - 15
  })
}

// Hover an element
function onMouseHover() {
  TweenMax.to($cursor, .3, {
    scale: 2
  })
	$cursor.classList.add("hover")
}

function onMouseHoverOut() {
  TweenMax.to($cursor, .3, {
    scale: 0.5
  })
	
	setTimeout(function() {
		$cursor.classList.remove("hover");
	}, 240);
}


