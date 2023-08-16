let boolean = false;

const izquierdaArriba = document.querySelector('.a1');
const centroArriba = document.querySelector('.b1'); 
const derechaArriba = document.querySelector('.c1');
const izquierdaMedio = document.querySelector('.a2');
const centroMedio = document.querySelector('.b2');
const derechaMedio = document.querySelector('.c2');
const izquierdaAbajo = document.querySelector('.a3');
const centroAbajo = document.querySelector('.b3');
const derechaAbajo = document.querySelector('.c3');
const todasLasPosiciones = document.querySelectorAll('.posicion');

todasLasPosiciones.forEach((posicion) => {
    posicion.addEventListener('click', (e) => {
        if (!['circulo', 'cruz'].some((clase)=>posicion.classList.contains(clase))) {
            if (boolean === true) {
                e.target.classList.add('cruz');
                const chart = document.createElement('span');
                chart.textContent = 'X';
                e.target.appendChild(chart)
            } else {
                e.target.classList.add('circulo');
                const chart = document.createElement('p');
                chart.textContent = 'O';
                e.target.appendChild(chart)
            }
            boolean = !boolean;
        }
    })
})