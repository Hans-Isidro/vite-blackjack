import _ from 'underscore';

/**
 * Esta funcion crea una nueva baraja
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','H','D','S']
 * @param {Array<String>} tiposEspeciales      Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} retorna una nueva baraja de cartas
 */

export const crearBaraja = (tiposDeCarta,tiposEspeciales)=>{

    if (!tiposDeCarta || tiposDeCarta === 0) 
        throw new Error('tiposDeCarta es obligatorio');
    if (!tiposEspeciales || tiposEspeciales === 0) 
        throw new Error('tiposEspeciales es obligatorio');

    let baraja =[];
    for (let i = 2; i <= 10; i++) {
       for (let j in tiposDeCarta) {
        baraja.push(i+tiposDeCarta[j])
       }
    }
    for (let s of tiposEspeciales) {
        for(let j in tiposDeCarta)
        baraja.push(s+tiposDeCarta[j])
    }
  
    return _.shuffle(baraja);
  
    
  }

// export default crearBaraja;