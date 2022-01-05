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
    var id = event.target.id
    localStorage.setItem('state', id)
    window.location.href = '/zipcode.html'
}

