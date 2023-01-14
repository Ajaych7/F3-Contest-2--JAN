

// http://api.weatherstack.com/current?access_key=26e66ad4eedc2ce6ee3c745d84e1dbe0&query=${loc}

// //  onsubmit() {
//     // let loc = document.getElementById('location');
// // let tok=document.getElementById('token');
//     let tok = "26e66ad4eedc2ce6ee3c745d84e1dbe0";
//     let loc = 'India'
//     let val= ''
//     fetch(`http://api.weatherstack.com/current?access_key=${tok}&query=${loc}`)
//         .then((data) => data.json)
//         .then((data) =>console.log(data))

// // }

function clicked(){
    alert("hey I have clicked")
}
function submitted() {
    let loc = document.getElementById('location').value;
    alert(loc)
    // let tok = document.getElementById('token').innerText;
    let tok="2d6566e495c2cea1a371be8f45298891";
    let url = `http://api.weatherstack.com/current?access_key=${tok}&query=${loc}`
    alert(url)
    // let url = "http://api.weatherstack.com/current?access_key=2d6566e495c2cea1a371be8f45298891&query=America"
    let weatherData;
    fetch(url)
        .then(data => { return data.json() }
        )
        .then(json => {
            console.log(json)
           weatherData=json;
           console.log("data is", weatherData);
   document.getElementById('loca').innerText=weatherData.location.name
        }
        )
        
}