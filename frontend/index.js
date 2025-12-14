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

const makeFoodSummaryRequest = () => {
    fetch("http://localhost:8100/api/v1/food/57981/2025-12-14", {
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
        populateFoodSummary(resJson);
    })
    .catch((error) => {
        console.log(error)
    })    
}

const populateActivityMeter = (data) => {
    document.getElementById("supplied").innerHTML = data[0].totalfoodcalorie;
    document.getElementById("burned").innerHTML = data[1].totalexercisecalorie;
    let goal = (data[2].caloriegoal - parseInt(data[1].totalexercisecalorie)) + parseInt(data[0].totalfoodcalorie);
    document.getElementById("goal").innerHTML = goal;
}

const populateRecentExercise = (data) => {
    data.forEach(element => {
        let temp = document.getElementsByTagName("template")[0];
        let clon = temp.content.cloneNode(true);
        let appender = document.getElementsByClassName("recent-ex-cont")[0];

        clon.querySelector("p").innerText = element.exercisename;
        clon.querySelector("span").innerText = element.exercisetype;
        clon.querySelector(".ex-end").innerText = element.caloriecount+" kcal";
        appender.appendChild(clon);
    });
}

const populateFoodSummary = (data) => {

    let breakfastcount = 0;
    let lunchcount = 0;
    let dinnercount = 0;

    data.forEach(element => {
        if (element.foodtype == "breakfast") {
            breakfastcount = breakfastcount + element.caloriecount;
        }
        if (element.foodtype == "lunch") {
            lunchcount = lunchcount + element.caloriecount;
        }
        if (element.foodtype == "dinner") {
            dinnercount = dinnercount + element.caloriecount;
        }
    })

    let temp = document.getElementsByTagName("template")[1];
    let clon = temp.content.cloneNode(true);
    let appender = document.getElementsByClassName("food-cont")[0];

    clon.querySelector("#type").innerText = "Breakfast";
    clon.querySelector("span").innerText = "bakery_dining";
    clon.querySelector("#kcal").innerText = breakfastcount+" kcal";
    appender.appendChild(clon);

    clon = temp.content.cloneNode(true);
    clon.querySelector("#type").innerText = "Lunch";
    clon.querySelector("span").innerText = "local_pizza";
    clon.querySelector("#kcal").innerText = lunchcount+" kcal";
    appender.appendChild(clon);

    clon = temp.content.cloneNode(true);
    clon.querySelector("#type").innerText = "Dinner";
    clon.querySelector("span").innerText = "restaurant";
    clon.querySelector("#kcal").innerText = dinnercount+" kcal";
    appender.appendChild(clon);
}