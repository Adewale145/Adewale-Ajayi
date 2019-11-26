const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

function celciusToFahrenheitAndKelvin() {
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp * (9/5)) + 32;
    const kTemp = cTemp + 273.15;
    fahrenheitInput.value = fTemp;
    kelvinInput.value = kTemp;
}

function fahrenheitToCelciusAndKelvin() {
    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp = (fTemp - 32) * (5/9);
    const kTemp = (fTemp + 459.67) * 5/9;
    celciusInput.value = cTemp;
    kelvinInput.value = kTemp;
}

function kelvinToCelciusAndFahrenheit() {
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 273.15;
    const fTemp = 9/5 * (kTemp - 273) + 32;
    celciusInput.value = cTemp;
    fahrenheitInput.value = kTemp;
}

    celciusInput.addEventListener('input', celciusToFahrenheitAndKelvin);
    fahrenheitInput.addEventListener('input', fahrenheitToCelciusAndKelvin);
    kelvinInput.addEventListener('input', kelvinToCelciusAndFahrenheit);


   let address1 = new Address( 'Fashina', 'New York', 5846);
   let address2 = new Address( 'Fashina', 'New York', 5846);
   
    function Address (street, city, zipCode) {
        this.street = street;
        this.city = city;
        this.zipCode = zipCode;
    }

    function areEqual(address1, address2) {
        return address1.street === address2.street &&
            address1.city === address2.city &&
            address1.zipCode === address1.zipCode;
    }

    function areSame (address1, address2) {
      //  return address1 === address2;

    }
    console.log(areEqual(address1, address2));