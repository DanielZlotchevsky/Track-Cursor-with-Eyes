document.onmousemove = () => {
var x = event.clientX;
var y = event.clientY;
    
    for (let i = 0; i < 2; i++) {
        var balls = document.getElementsByClassName("ball");
        let x1 = (x * 100) / window.innerWidth - 10 + "%";
        let y1 = (y * 100) / window.innerHeight - 5 + "%";

        balls[i].style.left = x1;
        balls[i].style.top = y1;
        balls[i].transfoorm = "translate(-" + x1 + ",-" + y1 + ")";
    }
};
