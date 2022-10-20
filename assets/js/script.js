const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains('dark')) {
    document.getElementById("sun").src="./assets/img/lua.jpg";

    document.getElementById("title").innerHTML = "A Lua";
    document.getElementById("text-1").innerHTML = "Lua é o único satélite natural da Terra e o quinto maior do Sistema Solar.";
    document.getElementById("text-2").innerHTML = "Ela se formou, há aproximadamente 4,5 bilhões de anos, do impacto de um grande corpo celeste com o planeta, e desde então realiza a sua órbita ao redor dele e também do Sol.";
    document.getElementById("text-3").innerHTML = "A forma como a luz solar incide sobre a sua superfície e como a enxergamos da Terra produz as diferentes fases da Lua.";
    document.getElementById("text-4").innerHTML = "Além disso, ela interage com o nosso planeta e dá origem às marés e aos eclipses.";
    } else { 
      document.getElementById("title").innerHTML = "O Sol";
      document.getElementById("text-1").innerHTML = "O Sol é a estrela do sistema solar. Todos os corpos celestes desse sistema, inclusive a Terra, giram em torno dele.";
      document.getElementById("text-2").innerHTML = "O diâmetro do Sol é de 1,392 milhão de quilômetros.";
      document.getElementById("text-3").innerHTML = "Ele é composto principalmente por hidrogênio e hélio, além de ferro, níquel, oxigênio, silício, carbono, nitrogênio, enxofre, etc.";
      document.getElementById("text-4").innerHTML = "Sua temperatura varia, podendo atingir até 5.505 graus Celsius na superfície e 16 milhões de graus Celsius no núcleo.";

      document.getElementById("sun").src="./assets/img/sol.jpg";
     }
})