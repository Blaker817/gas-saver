console.log("here")
// apikey 6krynd87rz1TsWqDpZYUUb:0ciGngEoJSMBP83AfhLUEE
// Q9MDb5WDiRm3Fp30Qkrbq94Zhpmk88Bb9mCg1SkddX8UGaNIgQ0kpqZ59g7QpmEy

async function handle() {
    console.log("clicked")
    let states = await fetch("https://api.collectapi.com/gasPrice/allUsaPrice", {
        headers: {
            "content-type": "application/json",
            "authorization": "apikey 6krynd87rz1TsWqDpZYUUb:0ciGngEoJSMBP83AfhLUEE"
        }
    });
    states = await states.json();
    console.log(states)
    states.result.forEach(function (state) {
        console.log(state)
    })
    console.log(r)

    let zipInfo = await fetch("https://www.zipcodeapi.com/rest/Q9MDb5WDiRm3Fp30Qkrbq94Zhpmk88Bb9mCg1SkddX8UGaNIgQ0kpqZ59g7QpmEy/info.json/76107/degrees", {
        headers: {
            "content-type": "application/json",

        },
        mode: 'no-cors',
    });
    zipInfo = await zipInfo.body.json();
    console.log(zipInfo)
    console.log(typeof zipInfo)


}