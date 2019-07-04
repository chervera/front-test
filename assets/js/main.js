function bestLanguageEver() {
  console.log("------------ best language ever -------------");
  //TODO: suma 0.1 i 0.2
}



function compararTipos() {
  console.log("------------ comparar tipos -------------");
  var comparaciones = [];

  comparaciones.push(true == 0);
  comparaciones.push(true == '');
  comparaciones.push(true == null);
  comparaciones.push(true == undefined);
  comparaciones.push(true == NaN);


  comparaciones.forEach(function (comparacion, index) {
    console.log('comparacion ' + index + '->' + comparacion);
  });

  var operaciones = [];

  operaciones.push(1 + '2');
  operaciones.push(1 + +'2');
  operaciones.push(1 + [1]);
  operaciones.push('2' + [1]);
  operaciones.push(2 + { 1: 1 });
  operaciones.push('hola'[2]);
  operaciones.push("b" + "a" + +"a" + "a");

  operaciones.forEach(function (operacion, index) {
    console.log('operacion ' + index + '->' + operacion);
  });

}

function printGlobal() {
  console.log("------------ print Global -------------");
  console.log(window);
  //TODO: imprimir el global. Darnos cuenta que las funciones generales están allí
  //y que nuestras definiciones también.
}

function crearFuncionIEjecutarla() {
  console.log("------------ crearFuncionIEjecutarla -------------");
  //TODO: crear una funcion, admita un parametro y 
  //que pinte los dos primeros parametros por consola
  //ejecutar la función
}

function testearElHoisting() {
  console.log("------------ testearElHoisting -------------");
  console.log(rayos);
  console.log(truenos);
  var rayos = 'rayos';
}

function jugarConLasPromesas() {
  console.log("------------ jugarConLasPromesas -------------");
  console.log('juego con las promesas');
  console.log(_troleada());
  console.log('termina el juego');
}

function _crearPromesaTroll() {
  var promesaTroll = new Promise(
    function (resolve, reject) {
      resolve('me cuelo, muahaha');
    }
  )
  return promesaTroll;
}

function _troleada() {
  return 'me cuelo, muhahaha';
}

function debuggarLikeABoss() {
  console.log("------------ debuggarLikeABoss -------------");
  var fakeVar = 0;
  for (a = 0; a < 100000; a++) {
    fakeVar = a;
  }
}

(function () {
  bestLanguageEver();
  //compararTipos();
  //printGlobal();
  //crearFuncionIEjecutarla();
  //testearElHoisting();
  //jugarConLasPromesas();
  //debuggarLikeABoss();
})();