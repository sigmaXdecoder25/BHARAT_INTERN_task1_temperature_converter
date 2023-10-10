const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
});

document.getElementById('convertToF').addEventListener('click', function() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    const fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById('result').textContent = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
});

document.getElementById('convertToC').addEventListener('click', function() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    const celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById('result2').textContent = `${fahrenheit}°F is ${celsius.toFixed(2)}°C`;
});

function fetchCurrentTemperature() {

    setTimeout(() => {
        const currentTempElement = document.getElementById('current-temp');
        currentTempElement.textContent = `${Math.floor(Math.random() * 20) + 10}°C`;
    }, 2000);
}

fetchCurrentTemperature();