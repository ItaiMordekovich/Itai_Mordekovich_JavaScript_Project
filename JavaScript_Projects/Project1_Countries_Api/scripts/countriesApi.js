const fetchCountries = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    return data;
}

const allCountries = await fetchCountries();
console.log(allCountries)

let countries = [...allCountries];

const searchCountry = () => {
    let searchInput = document.getElementById('search').value;

    countries = allCountries.filter((country) => {
        return country.name.common.toLowerCase().includes(searchInput.toLowerCase());
    })
}

const reset = () => {
    countries = [...allCountries];
}

export { countries, searchCountry, reset };