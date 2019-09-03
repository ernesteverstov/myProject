window.onload = function() {
    fetchAllServices();
}

function fetchAllServices() {
    fetchStatus('http://localhost:4200');
}

function fetchStatus(url) {
    fetch(url)
        .then(
            (response) => {
                if (response.status !== 200) {
                    setStatus3("h3")
                    newPlanet("wibro")
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                response.json().then(function(data) {
                    setStatus2("h2")
                    newPlanet("wibro")
                    console.log(data);
                });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
            setStatus("ha")
            setPlanet("wibro2")
        });
}

function setStatus(className) {
    let match = document.querySelector(".status");
    match.classList.add(className);
}

function setPlanet(className) {
    let mars = document.querySelector(".type");
    mars.classList.add(className);
}

function newPlanet(className) {
    let newmars = document.querySelector(".type2");
    newmars.classList.add(className);
}

function setStatus2(className) {
    let newmatch = document.querySelector(".status2");
    newmatch.classList.add(className);
}

function setStatus3(className) {
    let nicematch = document.querySelector(".status3");
    nicematch.classList.add(className);
}