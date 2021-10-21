new Vue({
    el: "#Coronavirus-app",
    data: {
        message: "Coronavirus",
        position: "Around the World",
    },
})

let apiUrl = "https://disease.sh/v3/covid-19/all";
let covidCases = document.querySelector('.covid-cases');
let covidDeaths = document.querySelector('.covid-deaths');
let covidCasestoday = document.querySelector('.covid-casestoday');
let covidDeathstoday = document.querySelector('.covid-deathstoday');
let covidRecovered = document.querySelector('.covid-recovered');
let covidRecoveredtoday = document.querySelector('.covid-recoveredtoday');
let covidAffectedcountries = document.querySelector('.covid-affectedcountries');

function getCovid19All() {
    axios.get(apiUrl)
        .then(function (response) {
            covidCases.innerHTML = response.data.cases;
            covidDeaths.innerHTML = response.data.deaths;
            covidCasestoday.innerHTML = response.data.todayCases;
            covidDeathstoday.innerHTML = response.data.todayDeaths;
            covidRecovered.innerHTML = response.data.recovered;
            covidRecoveredtoday.innerHTML = response.data.todayRecovered;
            covidAffectedcountries.innerHTML = response.data.affectedCountries;

        })
        .catch(function (error) {
            covidDeaths.innerHTML = "An error has occurred.";
            covidDeaths.innerHTML = "";
            covidCasestoday.innerHTML = "";
            covidDeathstoday.innerHTML = "";
            covidRecovered.innerHTML = "";
            covidRecoveredtoday.innerHTML = "";
            covidAffectedcountries.innerHTML = "";
        })
}

let button = document.querySelector(".covid-button");
button.addEventListener("click", getCovid19All);