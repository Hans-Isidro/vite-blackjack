// import {crearBaraja} from './crear-baraja'
/**
 * 
 * @param {Array<string>} baraja es un arreglo de string
 * @returns {String} retorna la cara de la baraja
 */

export const pedirCarta = (baraja) => {

    if (!baraja || baraja.length === 0) {
        throw new Error('No hay cartas en la baraja');
    }
    return baraja.pop();
  
  
  }