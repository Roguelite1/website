(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector(".background-image");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let x = `translateX(${10 - (_mouseX - _w) * 0.005}px) translateY(${25 - (_mouseY - _h) * 0.005}px)`;
        //console.log(x);
        //elem.style.backgroundPosition = x;
	    elem.style.transform = x;
    }

})();
