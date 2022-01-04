window.addEventListener("load", initiateApp());
async function initiateApp() {
    console.log("clicked")
    let states = await fetch("https://api.collectapi.com/gasPrice/allUsaPrice", {
        headers: {
            "content-type": "application/json",
            "authorization": "apikey 6krynd87rz1TsWqDpZYUUb:0ciGngEoJSMBP83AfhLUEE"
        }
    });
    states = await states.json();
    states = states.result
    console.log(states)
    for (var i = 0; i < states.length; i++) {
        var state = states[i]
        console.log(state)

        var li = document.createElement('li')
        li.innerHTML = state.name +': '+state.gasoline
        var statesList = document.getElementById('states-list')
        statesList.appendChild(li)
    }
    // states.result.forEach(function (state) {
    //     console.log(state)
    // })

    //YOU SHOULD CHANGE THIS TO YOUR API KEY
    const owensApiKey = `fcb34b40-62a9-11ec-88d0-1becdba60906`;

    let apiResponse = await fetch(
        `https://app.zipcodebase.com/api/v1/search?apikey=${owensApiKey}&codes=76107&country=US`
    );
    apiResponse = await apiResponse.json();
    console.log("response", apiResponse);

    let zipCodeResults = apiResponse.results["76107"];
    zipCodeResults = zipCodeResults[0];
    const stateCode = zipCodeResults.state_code;
    //NOW WE HAVE THE STATE ASSOCIATED WITH THE ZIP CODE THAT WE PUT IN THE FETCH REQUEST
    console.log("state", stateCode);


}


