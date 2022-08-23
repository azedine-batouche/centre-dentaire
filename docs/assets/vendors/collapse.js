

$(function(){ 
    var navMain = $(".navbar-collapse"); // avoid dependency on #id
    // "a:not([data-toggle])" - to avoid issues caused
    // when you have dropdown inside navbar
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });
});

window.addEventListener('mouseup', function(event){
	var box = document.getElementById('nav-main');
	if (event.target != box && event.target.parentNode != box){
        $(".navbar-collapse").collapse('hide');
        box.style.display = 'none';
    }
});
