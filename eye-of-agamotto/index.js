
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
var message_1;                                                      // element 1 for message
var message_2;                                                      // element 2 for message
var IPAddress;                                                      // variable to store user's  IP address
var location;                                                       // variable to store user's location  

var timezoneContainer;                                              // element which container whole timezone options
var options;                                                        // element which container timezone options



document.addEventListener                                           // add event listerner
(
    "DOMContentLoaded", () =>                                       // wait until DOM get load into browser
    {
        hourHand= document.getElementById('hourHand');              // get hour hand element from DOM
        minuteHand= document.getElementById('minuteHand');          // get minute hand element from DOM
        secondHand= document.getElementById('secondHand');          // get second hand element from DOM
        message_1= document.getElementById('message-1');            // get message-1 element from DOM
        message_2= document.getElementById('message-2');            // get message-2 element from DOM
        
        timezoneContainer= 
        document.getElementById('selected-timezone-container');     // get element to dropdown container
        timezoneContainer.addEventListener
        ("click", openOrCloseTimezoneOptions);                      // add event listener to opne or clock options

        options= 
        document.getElementsByClassName('timezone-option');         // list of all timezone option elements
        Array.from(options).forEach
        (
            function(option) 
            {
                option.addEventListener
                (
                    'click', 
                    handleSelectedOption(option)
                );
            }
        );

        

        this.localDatetime();                                       // set initial positions of hour, minute and second hand with message
        this.findLocation();                                        // set user location    

        setInterval                                                 // created repeted interval of code trigger
        (
            ()=>
            {
                this.localDatetime();                               // set new positions of hour, minute and second hand with message
            }, 1000                                                 // wait for 1 second
        );
    }
);

function selectedDatetime(date, timezoneInString)                   // get and set selected timezone's date and time
{
    let datetimeBasedOnTimezoneInString= 
    date.toLocaleString("en-US", {timeZone: timezoneInString});     // get selected timezone's datetime in string
    let selectedTimeZoneDatetime= 
    new Date(datetimeBasedOnTimezoneInString);                      // get selected datetime from string  
    
    this.setClockAsPerDatetime(selectedTimeZoneDatetime, false)     // set selected date, time and day in clock
}

function findLocation()                                             // get and set user's IP address and location based on IP address                             
{

    fetch("https://api.ipify.org?format=json").                     // URL to get client's machine's IP address
    then(function(response) 
    {
        response.json()
        .then(function(text) 
        {
          this.IPAddress= text.ip;

          fetch("https://ipinfo.io/"+this.IPAddress+"/geo").        // URL to get client's loaction based on IP address
            then(function(response) 
            {
                response.json()
                .then(function(text) 
                {
                    this.message_2.innerHTML= 
                    text.city+' '+text.region;                      // add client's city and region at message-2 element's innerHTML
                });
            });

        });
    });
}

function localDatetime()                                            // get and set local date and time                                            
{
    today= new Date();                                              // get local date and time
    this.setClockAsPerDatetime(today, true);                        // set local date, time and message
}

function setClockAsPerDatetime(datetime, isItLocal)                 // set hour, minute and second hand potion and set message
{
    let date= datetime.getUTCDate();                                // get date from date from date and time
    let month= datetime.getUTCMonth();                              // get month from date and time
    let year= datetime.getUTCFullYear();                            // get year from date and time
    let hour= datetime.getHours();                                  // get hour from date and time
    hour= hour> 11? hour- 12: hour;                                 // convert 24 based hour to 12 based hour
    let minute= datetime.getMinutes();                              // get minute from date and time
    let second= datetime.getSeconds();                              // get second from date and time
    let day= days[datetime.getDay()];                               // get day of week from date and time
    let todaysDate= 
    date+' '+months[month].substring(0, 3)+' '+year;                // create complete printing date


    if(isItLocal=== false)                                          // if local date and time is setting
    {
        message_1.innerHTML= day;                                   // add day of week at message-1 element's innerHTML
        message_2.innerHTML= todaysDate;                            // add created date at message-2 element's innerHTML
    }
    else
    {
        message_1.innerHTML= todaysDate;                            // add created date at message-1 element's innerHTML
    }

    
    hourHand.style.transform = "translate(-50%, -21%) rotate("
    +(Number(hour* 30)+Number(Math.floor(minute/60*30)))+"deg)";    // set hour hand position
    minuteHand.style.transform = 
    "translate(-50%, -37%) rotate("+(minute* 6)+"deg)";             // set minute hand position
    secondHand.style.transform = 
    "translate(-50%, -45%) rotate("+(second* 6)+"deg)";             // set second hand position
}

function openOrCloseTimezoneOptions()
{
    let optionContainer= document.getElementById('timezone-option-container');

    if(optionContainer.classList.length> 0)
    {
        optionContainer.classList.remove('hidden');
    }
    else
    {
        optionContainer.classList.add('hidden');
    }
}

function handleSelectedOption(option)
{
    console.log(option);
}