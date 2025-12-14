const makeActivityMeterRequest = () => {
    fetch("http://localhost:8100/api/v1/caloriestats/57981/2025-12-14", {
            method: "GET",
            headers: {
                'Accept': 'application/json',
            },
        })
        .then((response) => {
            if (response.status === 200){
                return response.json();
            }
            else {
                throw "error occured";
            }
        })
        .then((resJson) => {
            populateActivityMeter(resJson);
        })
        .catch((error) => {
            console.log(error)
        })
}

const makeRecentExerciseRequest = () => {
    fetch("http://localhost:8100/api/v1/exercise/57981/2025-12-14", {
        method: "GET",
        headers: {
            'Accept': 'application/json',
        },
    })
    .then((response) => {
        if (response.status === 200){
            return response.json();
        }
        else {
            throw "error occured";
        }
    })
    .then((resJson) => {
        populateRecentExercise(resJson);
    })
    .catch((error) => {
        console.log(error)
    })
}