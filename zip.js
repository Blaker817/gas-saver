var searchBtn = document.getElementById('search-btn')
searchBtn.addEventListener('click', function () {
    console.log('clicked');
    var zCode = document.getElementById('zcode')
    var zipcode = zCode.value
    getGasPrices(zipcode)
}
)
async function getGasPrices(zipcode) {
    const apiKey = `1a3a5b30-6f0f-11ec-935b-a5c634149c27`;

    let apiResponse = await fetch(
        `https://app.zipcodebase.com/api/v1/search?apikey=${apiKey}&codes=${zipcode}&country=US`
    );
    apiResponse = await apiResponse.json();

    let zipCodeResults = apiResponse.results[zipcode];
    zipCodeResults = zipCodeResults[0];
    const stateCode = zipCodeResults.state_code;
    //NOW WE HAVE THE STATE ASSOCIATED WITH THE ZIP CODE THAT WE PUT IN THE FETCH REQUEST
    console.log(stateCode);
    getCities(stateCode)
}
async function getCities(stateCode) {
    let state = await fetch(`https://api.collectapi.com/gasPrice/stateUsaPrice?state=${stateCode}`, {
        headers: {
            "content-type": "application/json",
            "authorization": "apikey 6SxV5TTH69G21oYpYQMAMv:2OKYaZlzBBZJFXTocM9CuT"
        }
    });
    state = await state.json();

    var cities = state.result.cities
    var citiesList = document.getElementById('cities-list')
    citiesList.innerHTML = ""
    for (var i = 0; i < cities.length; i++) {
        var city = cities[i]
        console.log(city)

        var li = document.createElement('li')
        li.innerHTML = city.name + ': ' + city.gasoline

        citiesList.appendChild(li)
    }
    localStorage.setItem('state', "")
}
var stateAbbr = localStorage.getItem('state')
if (stateAbbr) {
    getCities(stateAbbr)
}