alert("Witam serdecznie na Stronie poświęconej jednej z najpopularniejszych gier losowych.");


    var gracz1 = "Gracz 1";
    var gracz2 = "Gracz 2";
  
    function zmienNazwe() {
        gracz1 = prompt("Podaj nazwe Pierwszego Gracza");
        gracz2 = prompt("Podaj nazwe Pierwszego Gracza");
  
        document.querySelector("p.gracz1").innerHTML = gracz1;
        document.querySelector("p.gracz2").innerHTML = gracz2;
    }
  
    function rzucKostka() {
            var randomNumber1 = Math.floor(Math.random() * 6) + 1;
            var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  
            document.querySelector(".img1").setAttribute("src",
                "images/dices/" + randomNumber1 + ".png");
  
            document.querySelector(".img2").setAttribute("src",
                "images/dices/" + randomNumber2 + ".png");
  
            if (randomNumber1 === randomNumber2) {
                document.querySelector("h1").innerHTML = "Remis!";
            }
  
            else if (randomNumber1 < randomNumber2) {
                document.querySelector("h1").innerHTML
                                = ("Wygrał gracz " + gracz2 + "  !");
            }
  
            else {
                document.querySelector("h1").innerHTML
                                = ("Wygrał gracz " + gracz1 + " !");
            }
    }
