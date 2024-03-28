import { countries, reset, searchCountry } from "./countriesApi.js";
import { getData, likedCountries, updateData } from "./localStorage.js";

const cards = document.getElementById('countriesCards');
const searchInput = document.getElementById('search');

searchInput.addEventListener('input', (event) => {

    reset();
    if (event.target.value) {
        cards.innerHTML = '';
        searchCountry(event.target.value);
        allCountriesCards();

    } else {

        cards.innerHTML = '';
        allCountriesCards();
    }
});

const countryCard = (country) => {
    const card = document.createElement('div');
    card.className = 'card';

    const cardImg = document.createElement('img');
    cardImg.className = 'card-img';
    cardImg.src = country.flags.png;

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h2');
    cardTitle.className = 'card-title';
    cardTitle.textContent = country.name.common;

    const capital = document.createElement('p');
    capital.className = 'card-text';
    capital.textContent = `capital: ${country.capital}`;


    const region = document.createElement('p');
    region.className = 'card-text';
    region.textContent = `region: ${country.region}`;


    const population = document.createElement('p');
    population.className = 'card-text';
    population.textContent = `Population: ${country.population}`;

    let likeIcon = document.createElement('i');

    likeIcon.addEventListener('click', () => {
        updateData(country.name.common);
        if (likeIcon.classList.contains('black-like')) {
            likeIcon.className = 'fa fa-thumbs-up red-like';
        } else {
            likeIcon.className = 'fa fa-thumbs-up black-like';
        }
    });

    let isLiked = false;
    getData();
    if (likedCountries.includes(country.name.common)) {
        isLiked = true;
    }

    likeIcon.className = `fa fa-thumbs-up ${isLiked ? 'red-like' : 'black-like'}`;

    card.appendChild(cardImg);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(capital);
    cardBody.appendChild(region);
    cardBody.appendChild(population);


    card.appendChild(cardBody);
    card.appendChild(likeIcon);


    cards.appendChild(card);
}

const allCountriesCards = () => {
    countries.forEach((country) => {
        countryCard(country);
    });

}

allCountriesCards(countries);
