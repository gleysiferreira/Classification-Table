var gryffindor = {
    nome: "Gryffindor",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  var slytherin = {
    nome: "Slytherin",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  var hufflepuff = {
    nome: "Hufflepuff",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  var ravenclaw = {
    nome: "Ravenclaw",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  
  function calculaPontos(time) {
    var pontos = time.vitorias * 3 + time.empates;
    return pontos;
  }
  
  gryffindor.pontos = calculaPontos(gryffindor);
  slytherin.pontos = calculaPontos(slytherin);
  hufflepuff.pontos = calculaPontos(hufflepuff);
  ravenclaw.pontos = calculaPontos(ravenclaw);
  
  var times = [gryffindor, slytherin, hufflepuff, ravenclaw];
  
  function exibeTimesNaTela(times) {
    var elemento = "";
    for (var i = 0; i < times.length; i++) {
      elemento += "<tr><td>" + times[i].nome + "</td>";
      elemento += "<td>" + times[i].vitorias + "</td>";
      elemento += "<td>" + times[i].empates + "</td>";
      elemento += "<td>" + times[i].derrotas + "</td>";
      elemento += "<td>" + times[i].pontos + "</td>";
      elemento +=
        "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
      elemento +=
        "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
      elemento +=
        "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
      elemento += "</tr>";
    }
  
    var tabelaTimes = document.getElementById("tabelaTimes");
    tabelaTimes.innerHTML = elemento;
  }
  
  exibeTimesNaTela(times);
  
  function adicionarVitoria(i) {
    var time = times[i];
    time.vitorias++;
    time.pontos = calculaPontos(time);
    exibeTimesNaTela(times);
  }
  
  function adicionarEmpate(i) {
    var time = times[i];
    time.empates++;
    time.pontos = calculaPontos(time);
    exibeTimesNaTela(times);
  }
  
  function adicionarDerrota(i) {
    var time = times[i];
    time.derrotas++;
    exibeTimesNaTela(times);
  }
  
  function resetar() {
    for (var i = 0; i < times.length; i++) {
      var time = times[i];
  
      time.vitorias = 0;
      time.empates = 0;
      time.derrotas = 0;
      time.pontos = calculaPontos(time);
    }
    exibeTimesNaTela(times);
  }
  
  function AdicionarTime() {
    var nomeTime = document.getElementById("nomeTime");
    times.push({
      nome: nomeTime.value,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
    });
    nomeTime.value = "";
    exibeTimesNaTela(times);
  }
  