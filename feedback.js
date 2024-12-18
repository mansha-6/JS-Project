// // console.log("Today is not so cold!");
// // console.log("But we still managed to come to class afte time");
// // console.error("We have all 6 lectures today");
// // window.alert("JavaScript seems to be fun");
// document.getElementById("myH1").textContent="JavaScript Lectures";
// document.getElementById("myP1").textContent="We just get started";

// document.getElementById("head").textContent="Bottole";
// document.getElementById("heading1").textContent="Types";
// document.getElementById("type1").textContent="Good Bottole";

// let x;
// x=10;
// let y;
// y="Full Stack Developer";
// let z=true;
// console.log(typeof x,x);
// console.log(typeof y,y);
// console.log(typeof z,z);

// let age=24;
// let gpa=9.8;
// let name="Smaran";
// console.log(My name is ${name} \n I am ${age} years old \n My GPA for last semester ${gpa});

// let name="Smaranjit Ghose";
// let exp1="Data Scientist at Samsung (2019-2020)";
// let exp2="Senior Product Manager at BlackRock - IT (2020-2022)";
// document.getElementById("myH1").textContent=My name is ${name};
// document.getElementById("ex1").textContent=I previously worked as a ${exp2};
// document.getElementById("ex2").textContent=Before that I am a Data Scientist at Samsung (2019-2020);

// let name = window.prompt("Enter your name")
// console.log(name)
// document.getElementById("myH1").textContent = `"Hello ${name}`

// document.getElementById("mybutton").onclick = 
// function() {
//     document.getElementById("display").innerHTML= document.getElementById("myName").value
// }
// Ensure the DOM is fully loaded before adding event listeners
// document.addEventListener("DOMContentLoaded", function () {
//     function show() {
//         let name = document.getElementById("myName").value; // Get the input value
//         document.getElementById("myH1").textContent = `Hello ${name}`; // Correct template literal
//         console.log(name);
//     }

//     // Add event listener to the button
//     document.getElementById("mybutton").addEventListener("click", show);
// });

// Ensure the DOM is fully loaded before adding event listeners
// Ensure the DOM is fully loaded before adding event listeners
// Ensure the DOM is fully loaded before adding event listeners
// Ensure the DOM is fully loaded before adding event listeners
// document.addEventListener("DOMContentLoaded", function () {
//     function show() {
//         // Get values from input fields
//         let name = document.getElementById("myName").value;
//         let email = document.getElementById("myEmail").value;
//         let dob = document.getElementById("myDOB").value;
//         let division = document.getElementById("myDivision").value; // From dropdown
//         let enrollNumber = document.getElementById("myEnroll").value;
//         let city = document.getElementById("myCity").value;

//         // Log collected data to the console
//         console.log({ name, email, dob, division, enrollNumber, city });

//         // Display thank you message
//         document.getElementById("thankYouMessage").style.display = "block";
//     }

//     // Add event listener to the button
//     document.getElementById("mybutton").addEventListener("click", function(e) {
//         e.preventDefault();  // Prevent the form from actually submitting
//         show();
//     });
// });
document.addEventListener("DOMContentLoaded", function () {
    function show() {
        // Get values from input fields
        let name = document.getElementById("myName").value;
        let email = document.getElementById("myEmail").value;
        let dob = document.getElementById("myDOB").value;
        let division = document.getElementById("myDivision").value; // From dropdown
        let enrollNumber = document.getElementById("myEnroll").value;
        let city = document.getElementById("myCity").value;

        // Log collected data to the console
        console.log({ name, email, dob, division, enrollNumber, city });

        // Update and display thank you message with the user's name
        let thankYouMessage = document.getElementById("thankYouMessage");
        thankYouMessage.textContent = `Thank you, ${name}, for submitting your details!`;
        thankYouMessage.style.display = "block";
    }

    // Add event listener to the button
    document.getElementById("mybutton").addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the form from actually submitting
        show();
    });
});

