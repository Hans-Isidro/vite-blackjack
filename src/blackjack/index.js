import _ from 'underscore';
// import crearBaraja from './caso-de-uso/crear-baraja';
import {crearBaraja, pedirCarta, valorCarta,turnoComputadora,crearCarta} from './caso-de-uso'


let baraja =[];
let tipos = ['C','H','D','S'],
especiales =['A','J','Q','K'];

// let puntosJugador =0,
//     puntosComputadora=0;
let puntosJugadores = [];

const btnPedir = document.querySelector('#btnPedir'),
    btnDetener = document.querySelector('#btnDetener'),
    btnNuevo = document.querySelector('#btnNuevo');
const puntajes = document.querySelectorAll('small'),
    divCartas = document.querySelectorAll('.divCartas');
    


// Iniciar Juego
const inicializarJuego = (numJugadores = 2)=>{
    baraja =crearBaraja(tipos,especiales);
    puntosJugadores =[];
    for(let i=0; i< numJugadores; i++){
        puntosJugadores.push(0);
    }
    puntajes.forEach(elem => elem.innerText =0);
     btnDetener.disabled = false;
    btnPedir.disabled =false;
    divCartas.forEach(elem =>elem.innerHTML = '');
  
  
  }

//esta funcion crea una nueva baraja


// crearBaraja();
export const acumularPuntos = (carta, turno)=>{
  // inicializarJuego();

    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntajes[turno].innerText  = puntosJugadores[turno];
    return puntosJugadores[turno];
  }
//esta funcion permite tomar una carta


//  pedirCarta();

export const determinarGanador = (puntosJugadores)=>{
    const [puntosDelJugador, puntosComputadora]= puntosJugadores;
    setTimeout(() =>{
        if (puntosComputadora === puntosDelJugador) {
            alert('Nadie gana :(')
        }else if (puntosDelJugador > 21) {
            alert('Computadora gana')
        } else if(puntosComputadora > 21){
            alert('Jugador Gana')
        }else{
            alert('Computadora gana');
        }
     },100);
  }

//turno de la computadora

// const valor = valorCarta(pedirCarta());
// console.log({valor});
btnPedir.addEventListener('click', ()=>{
  const carta = pedirCarta(baraja);
  const puntosJugador = acumularPuntos(carta, 0);

  crearCarta(carta, 0,divCartas);


  if (puntosJugador > 21) {
      console.warn('Lo siento, perdiste');
      btnPedir.disabled =true;
      turnoComputadora(puntosJugador,puntosJugadores,divCartas,baraja );
  }else if(puntosJugador ===21){
      console.warn('21, ganaste');
      btnPedir.disabled =true;
      turnoComputadora(puntosJugador,puntosJugadores,divCartas,baraja );
  }

});
btnDetener.addEventListener('click', ()=>{
  btnPedir.disabled =true;
  btnDetener.disabled = true;

  // const carta = pedirCarta();
  // const puntosJugador = acumularPuntos(carta, 0);
  turnoComputadora(puntosJugadores[0],puntosJugadores,divCartas,baraja);


});
btnNuevo.addEventListener('click', ()=>{
    inicializarJuego();

});