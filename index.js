//Sending a POST request with fetch() is more complicated than what we've seen up till this point
//A Post request still take a 'string' desitnation for the fetch as the first argument ("insert URL HERE" , )
//fetch() can also take a javascript Object as the second argument
//this Object can contain certain properties- 'key : value: pairs -that change the default behavior
//of fetch()

//the configurationObject contains three core compenents that are needd for standard POST request
//  1. The HTTP verb
//  2. The headers
//  3. The Body


// const configurationObject = {
//     method: "POST",
//   };


// Above we see the HTTP verb used for this specific fetch() request
//  It happens to be POST

// 2. the Headers
//      we need to include some metadata about the actual data we want to send
//      they are sent ahead of the actual data 'payload' of our POST request
//      they contain information for the data being sent
//
//  One very common header is "Content-Type"
//      used to indicate what format the data being sent is in
//      In JavaScript, JSON is the most common format that we will be using
//      so naturally, we need to make sure that our POST request via fetch() knows this


// const configurationObject = {
//     method: "POST", //note the commma!! It is a JavaScript Object! Comma's seperate the properties
//     headers: {
//         "Content-Type": "application/json", //OH LOOK, another comma
//     },
//     // DID you SEE the comma?? Do not forget that it is an object!!!
// };


//  headers: cont....  
//      EACH individual header is stored as a Key - Value pair within an Object
//      this Object is assigned as the value of the headers property as seen above
//          ** When we send data, the server at the destination URL will send back a response
//          ** this response contains data in which the sender of the fetch() might find useful
//          ** We tell the server what type of DATA we are sending,
//                  **AND...we tell it what kind of data we would accept in return. #Standards
//          We do this by adding a new header, "Accept": and assinging its value to "application/json",
//  FUN FACT
//      OF COURSE there are many other headers available for particular uses, but you can figure those out later


// 3. DATA
//
//      We have the destination URL, our HTTP verb, and Headers that contain information about the 
//      data that we will be sending
//
//  lets add some data!
//      The data being sent, but be stored in the - body: - key within our configurationObject


// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     }
//     body: //our data goes here
// }



// ***** When information is being exchanged between a client and a server, it is sent as -- Text --
//          What does that mean?? Our data must be a string. 
// 
//  JSON.stringify()  to convert objects
//
//  When sending data using fetch(), we often send multiple pieces of information in one request.
//  We often organize such pieces of information within Objects, which contain properties, which have "key: value" pairs
//
//   we pass the object into JSON.stringify() 

// const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify({
//       dogName: "Byron",
//       dogBreed: "Poodle",
//     }),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject);


  //OBVIOUSLLY you can put the data into a variable and pass that into the JSON.stringify() instead
  //        this is clearly ideal

// You could also just get rid of the variable configurationObject and pass 
// an anonymous object as the second argument to fetch()

//      ** For SECURITY purposes, most websites block the ability to use fetch() in console
//      on the DevTools. SO if you are testing out code in the browser, be sure to be on a page like "  .html"

// BUCKLE UP!
//      Just like we learned with using fetch() to send GET requests, we have to handle the response
//      to our POST request

//      we use the chain of .then() to tell it what to do

// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     });

//Another way to write this code 

// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
//   };

//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then((response) => response.json())
//     .then((data) => console.log(data))

// Used an arrow function in order to simplify. The results rendered in the Console within
//  sample_form.html the same way
//      and object containing the data we passed in our " body: " property 

//  Things can go wrong when using fetch() - so it is best to add in a default response in the event.
//  we can use the chain  -  "  .catch()   "  -  
//
// JavaScript will automatically look for the .catch() in the event things go wrong

//      **Say we were missing our " method:  "  property in the code below**


// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
//   // method: "POST" is missing from the object below
//   const configurationObject = {
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     })
//     .catch(function (error) {
//       alert("Bad things! Ragnarők!");
//       console.log(error.message);
//     });

//  When run in the console in the DevTools of the sample_form.html it returned our ALERT
//  To the user, and also console.logged the error message!


function submitData (strnUserName , strnUserEmail) {
    const name = strnUserName;
    const email = strnUserEmail;
    const body = JSON.stringify({ name , email })

    return fetch("http://localhost:3000/users", {
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "accept": "application/json",
        },
        "body": body
    })
    .then((response) => response.json())
    .then((data) => {
        let id = data.id;
        // console.log(document.body);
        document.body.append(id);
        console.log(document.body);
    })
    .catch(function (error) {
        let message = error;
        document.body.append(message)
    })
};


//The code above took in two arguments, which are strings
//They then assigned those arguments to variables
//We used JSON.stringify({name , email}) to create an object {}
//  that we wanted to have converted to JSON

//THEN we wrote our fetch(), defining the URL we are fetching to
//
//  as our second argument, we provided our object to communicate 
//  what was being sent
//      It contained the "method" - "headers" - and "body" of our fetch()
// 
// **We returned the fetch() as we were calling it, 
//      which would return a 'Promise' in code terms

//  Then we told it what to do with that response!
//      we used -  '  .then() ' to tell our program what to
//      with the data we recieved back, remember **It is an Object**
//
//  I found the id within the data (I console.logged it and saw there was 
//      a key of id, so thats how I knew how to 'scope down' to it)
//  I appended it to the body

//  I used a catch function, which produced its own data when triggered
// I named that data, ' error ' in my parameter
// I assigned the error to a message, and appended it to the body of the DOM (HTML)