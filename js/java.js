var cont = 0

function cambia() {
    cont++;
    switch (cont % 5 + 1) {
        case 1:
            document.getElementById("fotocambia").src = "img/1.jpg";
            break;
        case 2:
            document.getElementById("fotocambia").src = "img/2.jpg";
            break;
        case 3:
            document.getElementById("fotocambia").src = "img/3.jpg";
            break;
        case 4:
            document.getElementById("fotocambia").src = "img/4.jpg";
            break;

        case 5:
            document.getElementById("fotocambia").src = "img/5.jpg";
            break;

    }

}

function inicio() {
    setInterval(cambia, 5000);
}
window.onload = inicio;