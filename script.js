window.addEventListener("load", initiateApp());
async function initiateApp() {
    console.log("clicked")
    let states = await fetch("https://api.collectapi.com/gasPrice/allUsaPrice", {
        headers: {
            "content-type": "application/json",
            "authorization": "apikey 6SxV5TTH69G21oYpYQMAMv:2OKYaZlzBBZJFXTocM9CuT"
        }
    });
    states = await states.json();
    states = states.result
    console.log(states)
    for (var i = 0; i < states.length; i++) {
        var state = states[i]
        console.log(state)
        var li = document.createElement('li')
        var button = document.createElement('button')
        button.setAttribute("id", state.name)
        button.addEventListener("click", handleClick);
        button.innerHTML = state.name + ': ' + state.gasoline
        li.appendChild(button)
        var statesList = document.getElementById('states-list')
        statesList.appendChild(li)
    }




}
function handleClick(event) {
    var state = event.target.id
    var stateCode = map[state]
  localStorage.setItem("state",stateCode)

    window.location.href = '/zipcode.html'
}

const map = {
    Alabama: "AL",
    Alaska: "AK",
    "American Samoa": "AS",
    Arizona: "AZ",
    Arkansas: "AR",
    California: "CA",
    Colorado: "CO",
    Connecticut: "CT",
    Delaware: "DE",
    "District Of Columbia": "DC",
    "Federated States Of Micronesia": "FM",
    Florida: "FL",
    Georgia: "GA",
    Guam: "GU",
    Hawaii: "HI",
    Idaho: "ID",
    Illinois: "IL",
    Indiana: "IN",
    Iowa: "IA",
    Kansas: "KS",
    Kentucky: "KY",
    Louisiana: "LA",
    Maine: "ME",
    "Marshall Islands": "MH",
    Maryland: "MD",
    Massachusetts: "MA",
    Michigan: "MI",
    Minnesota: "MN",
    Mississippi: "MS",
    Missouri: "MO",
    Montana: "MT",
    Nebraska: "NE",
    Nevada: "NV",
    "New Hampshire": "NH",
    "New Jersey": "NJ",
    "New Mexico": "NM",
    "New York": "NY",
    "North Carolina": "NC",
    "North Dakota": "ND",
    "Northern Mariana Islands": "MP",
    Ohio: "OH",
    Oklahoma: "OK",
    Oregon: "OR",
    Palau: "PW",
    Pennsylvania: "PA",
    "Puerto Rico": "PR",
    "Rhode Island": "RI",
    "South Carolina": "SC",
    "South Dakota": "SD",
    Tennessee: "TN",
    Texas: "TX",
    Utah: "UT",
    Vermont: "VT",
    "Virgin Islands": "VI",
    Virginia: "VA",
    Washington: "WA",
    "West Virginia": "WV",
    Wisconsin: "WI",
    Wyoming: "WY",
  };