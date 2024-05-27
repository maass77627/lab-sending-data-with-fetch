





function submitData(name, email) {

    return fetch("http://localhost:3000/users", {
    "method": "POST",
    "headers": {
        "content-type": "application/json",
        "accept": "application/json",
    },
    "body": JSON.stringify({
    name: name,
    email: email,
    })

})
.then((response) => response.json())
.then((json) => {
    let id = json.id
    document.body.append(id)
})
.catch(function (error){
    let message = error
    document.body.append(message)
})

}








