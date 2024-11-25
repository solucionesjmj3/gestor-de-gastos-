// visualizar.js
document.addEventListener('DOMContentLoaded', () => {
    const gastosContainer = document.getElementById('gastosContainer');
    const registroGastos = JSON.parse(localStorage.getItem('localGastos')) || [];

    const categoriaIconos = {
        'comida': '../src/hamburguesa.png',
        'transporte': '../src/transporte-publico.png',
        'entretenimiento': '../src/viendo-una-pelicula.png',
        'salud': '../src/seguro-de-salud.png',
        'otros': '../src/otros.png'
    };

    if (registroGastos.length === 0) {
        const alertElement = document.getElementById('alert');
        alertElement.classList.remove('d-none');
        alertElement.innerText = 'No hay gastos registrados.';
    } else {
        registroGastos.forEach(gasto => {
            // Obtener la ruta del icono correspondiente a la categoría del gasto
            const imgSrc = categoriaIconos[gasto.category]; 

            const card = document.createElement('div');
            card.classList.add('col-md-4', 'mb-4');
            card.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">
                            <img src="${imgSrc}" alt="${gasto.category} Icono"> ${gasto.category}
                        </h5>
                        <p class="card-text">${gasto.description}</p>
                        <p class="card-text"><small class="text-muted">${gasto.date}</small></p>
                        <p class="card-text"><strong>$${gasto.amount.toFixed(2)} COP</strong></p>
                    </div>
                </div>
            `;
            gastosContainer.appendChild(card);
        });
    }
});
