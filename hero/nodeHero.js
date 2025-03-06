document.addEventListener('DOMContentLoaded', function() {
    const nightRange = document.getElementById('nightRange');
    const nightValue = document.getElementById('nightValue');
    const gainValue = document.getElementById('gainValue');

    // Imposta un valore casuale iniziale per la barra
    const initialNights = Math.floor(Math.random() * 30) + 1; // Numero casuale tra 1 e 30
    nightRange.value = initialNights;
    updateNightValue(initialNights);

    // Calcola il guadagno iniziale
    const initialGain = initialNights * 150;
    const initialLimitedGain = Math.min(initialGain, 3000);
    updateGainValue(initialLimitedGain);

    nightRange.addEventListener('input', function() {
        const nights = parseInt(this.value);
        updateNightValue(nights);

        // Calcola il guadagno (esempio: 150€ a notte)
        const gain = nights * 150;

        // Limita il guadagno a 4500€
        const limitedGain = Math.min(gain, 4500);

        // Aggiorna il testo del guadagno
        updateGainValue(limitedGain);
    });

    function updateNightValue(nights) {
        nightValue.textContent = nights + (nights === 1 ? ' notte' : ' notti');
    }

    function updateGainValue(value) {
        const valueStr = value.toString();
        gainValue.innerHTML = '';

        for (let char of valueStr) {
            const span = document.createElement('span');
            span.className = 'digit';
            span.textContent = char;
            gainValue.appendChild(span);

            // Forza il reflow per riavviare l'animazione
            void span.offsetWidth;
        }

        // Aggiungi il simbolo dell'euro senza animazione
        const euroSymbol = document.createElement('span');
        euroSymbol.textContent = '€';
        gainValue.appendChild(euroSymbol);
    }
});
