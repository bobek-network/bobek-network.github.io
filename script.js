document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('wycena-form');
    const checkboxes = form.querySelectorAll('input[name="usluga"]');
    const sumaElement = document.getElementById('suma');

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', obliczSume);
    });

    function obliczSume() {
        let suma = 0;
        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                suma += parseInt(checkbox.value);
            }
        });
        sumaElement.textContent = suma;
    }

    form.addEventListener('submit', function(event) {
        event 
