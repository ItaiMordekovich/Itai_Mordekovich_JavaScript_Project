const israelClock = document.getElementById('clockIsrael');
const usaClock = document.getElementById('clockUSA');
const chinaClock = document.getElementById('clockChina');
const ukClock = document.getElementById('clockUk');
const peruClock = document.getElementById('clockPeru');
const japanClock = document.getElementById('clockJapan');
const indiaClock = document.getElementById('clockIndia');
const russiaClock = document.getElementById('clockRussia');
const brazilClock = document.getElementById('clockBrazil');


//Israel
function showIsraelTimeCountry(locale = 'he-il', timeZone = 'Asia/Jerusalem') {
    const date = new Date();
    const israelTimeCountry = date.toLocaleTimeString(locale, {
        timeZone: timeZone,
    })
    israelClock.innerHTML = israelTimeCountry

};
setInterval(() => showIsraelTimeCountry(), 1000)

//USA
function showUSATimeCountry(locale = 'he-il', timeZone = 'America/New_York') {
    const date = new Date();
    const usaTimeCountry = date.toLocaleTimeString(locale, {
        timeZone: timeZone,
    })
    usaClock.innerHTML = usaTimeCountry

};
setInterval(() => showUSATimeCountry(), 1000)

//China
function showChinaTimeCountry(locale = 'he-il', timeZone = 'Asia/Shanghai') {
    const date = new Date();

    const chinaTimeCountry = date.toLocaleTimeString(locale, {
        timeZone: timeZone,
    })
    chinaClock.innerHTML = chinaTimeCountry

};
setInterval(() => showChinaTimeCountry(), 1000)

//UK
function showUkTimeCountry(locale = 'he-il', timeZone = 'Europe/London') {
    const date = new Date();

    const ukTimeCountry = date.toLocaleTimeString(locale, {
        timeZone: timeZone,
    })
    ukClock.innerHTML = ukTimeCountry

};
setInterval(() => showUkTimeCountry(), 1000)

//Peru
function showPeruTimeCountry(locale = 'he-il', timeZone = 'America/Lima') {
    const date = new Date();

    const peruTimeCountry = date.toLocaleTimeString(locale, {
        timeZone: timeZone,
    })
    peruClock.innerHTML = peruTimeCountry

};
setInterval(() => showPeruTimeCountry(), 1000)

//Japan
function showJapanTimeCountry(locale = 'he-il', timeZone = 'Asia/Tokyo') {
    const date = new Date();

    const japanTimeCountry = date.toLocaleTimeString(locale, {
        timeZone: timeZone,
    })
    japanClock.innerHTML = japanTimeCountry

};
setInterval(() => showJapanTimeCountry(), 1000)

//India
function showIndiaTimeCountry(locale = 'he-il', timeZone = 'Asia/Kolkata') {
    const date = new Date();

    const indiaTimeCountry = date.toLocaleTimeString(locale, {
        timeZone: timeZone,
    })
    indiaClock.innerHTML = indiaTimeCountry

};
setInterval(() => showIndiaTimeCountry(), 1000)

//Russia
function showRussiaTimeCountry(locale = 'he-il', timeZone = 'Europe/Moscow') {
    const date = new Date();

    const russiaTimeCountry = date.toLocaleTimeString(locale, {
        timeZone: timeZone,
    })
    russiaClock.innerHTML = russiaTimeCountry

};
setInterval(() => showRussiaTimeCountry(), 1000)

//Brazil
function showBrazilTimeCountry(locale = 'he-il', timeZone = 'America/Sao_Paulo') {
    const date = new Date();

    const brazilTimeCountry = date.toLocaleTimeString(locale, {
        timeZone: timeZone,
    })
    brazilClock.innerHTML = brazilTimeCountry

};
setInterval(() => showBrazilTimeCountry(), 1000)








