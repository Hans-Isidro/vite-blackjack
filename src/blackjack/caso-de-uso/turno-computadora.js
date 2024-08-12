import {pedirCarta,crearCarta} from './';
import {acumularPuntos,determinarGanador} from '../';
// import {determinarGanador} from '../index';
// import {crearCarta} from '../index';

/**
 * 
 * @param {Number} puntosDelJugador puntos minimos que la computadora necesita para ganar
 * @param {Array<String>} baraja 
 */

export const turnoComputadora = (puntosDelJugador,puntosJugadores,divCartas, baraja=[]) =>{

    if( !puntosDelJugador) throw new Error('Los puntos del jugador es necesario')
        
    let puntosComputadora =0;
  
     do {
        const carta = pedirCarta(baraja);
        puntosComputadora = acumularPuntos(carta,puntosJugadores.length-1);
        crearCarta(carta,puntosJugadores.length-1,divCartas);
  
    if (puntosDelJugador > 21) {
        break; 
    }
     } while ((puntosComputadora < puntosDelJugador) && (puntosComputadora<=21));
  
     determinarGanador(puntosJugadores);
  }