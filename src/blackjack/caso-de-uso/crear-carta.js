
export const crearCarta = (carta, turno,divCartas)=>{
    const IMGcartas= document.createElement('img');
    IMGcartas.src =`assets/cartas/${carta}.png`;
    divCartas[turno].append(IMGcartas);
  
    IMGcartas.classList.add('carta');
  }