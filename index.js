window.addEventListener('resize', function(){
    var $wrap = $('.wrapper'),
    lFollowX = 5,
    lFollowY = 10,
    x = 0,
    y = 0,
    friction = 1 / 20;

    function animate() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;

    if ($(window).width()>800){
            $wrap.css({
                'transform': 'translate(0%, 0%) perspective(600px) rotateY(' + -x + 'deg) rotateX(' + y + 'deg)'
            });
            window.requestAnimationFrame(animate);
        }else{
            $wrap.css({
                'transform': 'translate(0%, 0%) perspective(0px) rotateY(0deg) rotateX(0deg)'
            });
        }
    }

    $(window).on('mousemove click', function(e) {
        if ($(window).width()>800){
            var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
            var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
            lFollowX = (25 * lMouseX) / 300;
            lFollowY = (10 * lMouseY) / 300;
        }
    });

    animate();
});