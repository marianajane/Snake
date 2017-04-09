console.log("Snake");

document.addEventListener("keydown", desplazar);

    function desplazar(objeto) {
    var tecla = objeto.which;
    
         var situacionY = document.getElementById("cabezaSerpiente").offsetLeft;
         var situacionX = document.getElementById("cabezaSerpiente").offsetTop;


        switch (tecla) {
            case 37 :  //Tecla flecha izquierda 
                cabezaSerpiente.style.left = situacionY-20+"px";
                if (situacionY<400) {
                    gameOver();
                }
                break;

            case 38 : //Tecla flecha arriba
                cabezaSerpiente.style.top = situacionX-20+"px";
                if (situacionX<100) {
                    gameOver();
                }
                break;

            case 39 :  //Tecla flecha derecha
                cabezaSerpiente.style.left = situacionY+20+"px";
                if (situacionY>810) {
                    gameOver();
                }
                break;
            
            case 40 :  //Tecla flecha abajo
                cabezaSerpiente.style.top = situacionX+20+"px";
                if (situacionX>510) {
                    gameOver();
                }
                break;
            }
    }

  function gameOver() {
  document.removeEventListener("keydown", desplazar);
  alert("Game Over");
}