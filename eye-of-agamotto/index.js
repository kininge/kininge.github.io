
var months=                                                         // master data to print month name
[
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December'
];
var days=                                                           // master data to print day name
[
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday', 
    'Sunday'
];

var today;                                                          // variable to store date and time                                        
var hourHand;                                                       // hour hand in clock
var minuteHand;                                                     // minute hand in clock
var secondHand;                                                     // second hand in clock
var message;                                                        // date to print in clock



document.addEventListener                                           // add event listerner
(
    "DOMContentLoaded", () =>                                       // wait until DOM get load into browser
    {
        hourHand= document.getElementById('hourHand');              // get hour hand element from DOM
        minuteHand= document.getElementById('minuteHand');          // get minute hand element from DOM
        secondHand= document.getElementById('secondHand');          // get second hand element from DOM
        message= document.getElementById('message');                // get message element from DOM

        this.setPosition();                                         // set initial positions of hour, minute and second hand with message

        setInterval                                                 // created repeted interval of code trigger
        (
            ()=>
            {
                this.setPosition();                                 // set new positions of hour, minute and second hand with message
            }, 1000                                                 // wait for 1 second
        )
    }
);

function setPosition()                                                                      // set hour, minute and second hand potion and set message
{
    today= new Date();                                                                      // get date and time

    let date= today.getUTCDate();                                                           // get date from date from date and time
    let month= today.getUTCMonth();                                                         // get month from date and time
    let year= today.getUTCFullYear();                                                       // get year from date and time
    let hour= today.getHours();                                                             // get hour from date and time
    hour= hour> 11? hour- 12: hour;                                                         // convert 24 based hour to 12 based hour
    let minute= today.getMinutes();                                                         // get minute from date and time
    let second= today.getSeconds();                                                         // get second from date and time
    let todaysDate= date+' '+months[month].substring(0, 3)+' '+year;                        // create complete printing date

    message.innerHTML= todaysDate;                                                          // Add created date at message element's innerHTML

    hourHand.style.transform = "translate(-50%, -21%) rotate("
    +(hour* 30)+(Math.floor(minute/60*30))+"deg)";                                          // set hour hand position
    minuteHand.style.transform = "translate(-50%, -37%) rotate("+(minute* 6)+"deg)";        // set minute hand position
    secondHand.style.transform = "translate(-50%, -45%) rotate("+(second* 6)+"deg)";        // set second hand position
}