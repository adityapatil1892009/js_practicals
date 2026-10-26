// function isallowed(){
//     function momcalls(){
//     console.log("uth ja"
//     );
// }
//     return momcalls;
// }


// const call = isallowed();
// call();
// let see = (age) =>  console.log(`hello ! ${age}`);
// see(14);


// arrays - 

// let arr = ["hello", '😊',1,'r',"sam"];
// arr.push("aditya");
// console.log(arr);
// arr.pop();
// console.log(arr);
// const first_element  = arr.shift();
// console.log(first_element);
// arr.unshift("you can do it man !");
// console.log(arr);




function getdata(){
    fetch("https://api.weatherapi.com/v1/current.json?key=9a5e9f8332c74273a2a205647262310&q=Pune")
    .then(response => {
        if (!response.ok){
            throw new Error("Failed to fetch the data!!");
        }
        return response.json()
    })
    .then(data => console.log(data.location.region))
    .catch(error => console.log(error));
}

async function get_weather_data(){
    const response = await fetch("https://api.weatherapi.com/v1/current.json?key=9a5e9f8332c74273a2a205647262310&q=Pune")
    try{
        if (!response.ok){
            throw new Error("Not able to fetch the error sorry !");
        }
        console.log(response);
        const data = await response.json();
        console.log(data.location.region);
    }
    catch(error){
        console.log(error);
    }
}

// get_weather_data();




async function get_w_data(){
    const response = await fetch("https://api.weatherapi.com/v1/current.json?key=9a5e9f8332c74273a2a205647262310&q=Pune");
    try{
        if(!response.ok){
            throw new Error("brotha something went wrong!");
        }
        const data = await response.json();
        console.log(data.location.region);
    }
    catch(error){
        console.log(error);
    }
}

async function get_weather_data(){
    const response = await fetch("https://api.weatherapi.com/v1/current.json?key=9a5e9f8332c74273a2a205647262310&q=pune")
    try{
    if (!response.ok){
        throw new Error("error was happend");
    }
    let data = await response.json();
    console.log(data.location.region);
}
catch(error){
console.log(error);
}
}

get_weather_data();

display = () => console.log("hello hello ");

setTimeout(display,900);



function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    function(position) {
                        document.getElementById("result").innerHTML =
                            "Latitude: " + position.coords.latitude +
                            "<br>Longitude: " + position.coords.longitude;
                    },
                    function() {
                        document.getElementById("result").innerHTML =
                            "Location permission denied or unavailable.";
                    }
                );
            } else {
                document.getElementById("result").innerHTML =
                    "Geolocation is not supported.";
            }
        }

// AJAX (Asynchronous JavaScript and XML) is a web development technique that allows a webpage to update data dynamically without reloading the entire page.
// Instead of forcing a user to wait for a completely new page to load every time they interact with something (like clicking a "Like" button or submitting a form), AJAX works in the background to swap data with a server instantly.

function getdata(){
    let xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        let user = JSON.parse(this.responseText)
        console.log(user)
    };
    xhttp.open("GET","https://jsonplaceholder.typicode.com/users/1",true);
    xhttp.send();
}

function get_xml_data(){
    let xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        let xmlDoc  = this.responseXML;
        let name = xmlDoc.getElementsByTagName("name")[0].textContent;
        console.log(name);
    };
    xhttp.open("GET","student.xml",true);
    xhttp.send();
}

function get_student_data(){
    let xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        let xmlDoc  = this.responseXML;
        let students = xmlDoc.getElementsByTagName("students")[0];
        length = students.getElementsByTagName("student").length;
        for(let i=0;i<length;i++){
            console.log(students.getElementsByTagName("student")[i].textContent)
        }
    }
    xhttp.open("GET","student.xml",true);
    xhttp.send();
}

// get_student_data();

function xml_with_ajax(){
    let xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        let xmlDoc = this.responseXML;
        console.log(xmlDoc.getElementsByTagName("students")[0].getElementsByTagName("student")[0].textContent);
    }
    xhttp.open("GET","student.xml",true);
    xhttp.send();

}

xml_with_ajax();

