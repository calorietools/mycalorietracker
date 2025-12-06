console.log("INFO: Making a request");
let serverUrl = "http://localhost:8100/"
fetch(serverUrl, {
        method: "GET",
        headers: {
            "Content-type": "text/plain"
        },
    })
    .then((response) => {
        if (response.status === 200){
            return response;
        }
        else if (response.status === 400) {
            throw "error bad request.";
        }
        else {
            throw "unknown error"
        }
    })
    .then((resJson) => {
        console.log(resJson);
    })
    .catch((error) => {
        console.log(error)
    })