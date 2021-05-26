
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

var isLocalTime= true;                                              // which time is visibles
var selectedTimeZone;                                               // timezone which select by user

var today;                                                          // variable to store date and time                                        
var hourHand;                                                       // hour hand in clock
var minuteHand;                                                     // minute hand in clock
var secondHand;                                                     // second hand in clock
var message_1;                                                      // element 1 for message
var message_2;                                                      // element 2 for message
var IPAddress;                                                      // variable to store user's  IP address
var location;                                                       // variable to store user's location  

var timezoneOverallContainer;                                       // element which containe slected timezone
var selectedTimezone;                                               // element which show selected timezone
var timezoneContainer;                                              // element which container  timezone search and timezone options
var timezoneOptionContainer;                                        // element containes all timezone options
var searchbox;                                                      // element which contain search input element
var options;                                                        // element which container timezone options
var option;                                                         // element which selcted option by user

var timezoneOptions= [];                                            // store list of all timezones


/* Load when DOM load */
document.addEventListener                                           // add event listerner
(
    "DOMContentLoaded", () =>                                       // wait until DOM get load into browser
    {
        this.hourHand= document.getElementById('hourHand');         // get hour hand element from DOM
        this.minuteHand= document.getElementById('minuteHand');     // get minute hand element from DOM
        this.secondHand= document.getElementById('secondHand');     // get second hand element from DOM
        this.message_1= document.getElementById('message-1');       // get message-1 element from DOM
        this.message_2= document.getElementById('message-2');       // get message-2 element from DOM
        
        this.timezoneOverallContainer= 
        document.getElementById('selected-timezone-container');     // get element to dropdown container
        this.timezoneOverallContainer.addEventListener
        ("click", openOrCloseTimezoneOptions);                      // add event listener to opne or clock options

        this.timezoneContainer=
        document.getElementById('timezone-container');              // get element to containe timezone options and search
        this.searchbox=
        document.getElementById('search-timezone');                 // get element which take user search timezone

        this.getTimeZone();                                         // get timezone and add options for select

        this.localDatetime();                                       // set initial positions of hour, minute and second hand with message
        this.findLocation();                                        // set user location    


        setInterval                                                 // created repeted interval of code trigger
        (
            ()=>
            {
                if(this.isLocalTime)
                {
                    this.localDatetime();                           // set new positions of hour, minute and second hand with message
                }
                else
                {
                    this.selectedDatetime(this.selectedTimeZone);   // set new user selected positions of hour, minute and second hand with message
                }
                
            }, 1000                                                 // wait for 1 second
        );
        
    }
);


/* Run APIs */
function getTimeZone()                                              // get list of all timezones in world
{
    fetch("https://api.timezonedb.com/v2.1/list-time-zone?"
    +"key=5F9QRBP5K13E&format=json").                               // URL to get list of timezones in json format
    then(function(response) 
    {
        response.json()
        .then(function(text) 
        {
            this.timezoneOptions= text.zones;                       // store all timezone options
            this.addOptionsToSelect('');                            // send response to add options
        });
    });
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


/* Timezone dropdown */
function addOptionsToSelect(searchOption)                           // add timezone options
{
    this.timezoneOptionContainer= document.createElement('DIV');    // created div element
    this.timezoneOptionContainer.id= 'timezone-option-container';   // provide id to that element
    this.timezoneContainer.append(this.timezoneOptionContainer);    // added element to DOM

    this.timezoneOptions.forEach
    (
        timezone=>
        {
            let timezoneAndCountry= 
            timezone.zoneName+' '+timezone.countryName;             // appending timezone names country time
            if
            (
                (searchOption.length== 0) ||
                (timezoneAndCountry.toLowerCase()
                .includes(searchOption))
            )
            {
                let element= document.createElement('DIV');          // created new div element
                element.classList.add('timezone-option');            // add timezonw-option element 
                element.innerHTML= timezoneAndCountry                // add time zone data in innerHTML
                this.timezoneOptionContainer.append(element);        // add element to container
            }
            
        }
    );

    this.observeTimezoneSelect();
}

function observeTimezoneSelect()                                    // select timezone and apply
{
    this.selectedTimezone= 
    document.getElementById('selected-timezone');                   // get element which show selected option

    this.options= 
    document.getElementsByClassName('timezone-option');             // list of all timezone option elements
    Array.from(options).forEach
    (
        function(option) 
        {
            option.addEventListener('click', event=>
            {
                this.option= event.target;                          // get select option
                selectedTimezone.innerHTML= 
                this.option.innerHTML;                              // assign selected option for display

                this.openOrCloseTimezoneOptions();
                this.isLocalTime= false;                            // not using local datetime
                this.selectedTimeZone= 
                this.option.innerHTML.split(' ')[0];                // store selected timezone

                this.searchbox.value= '';                           // make searchbox empty
                this.searchTimezone();                              // add fresh options
            });
        }
    );
}

function openOrCloseTimezoneOptions()                               // close timezone options
{
    let optionContainer= 
    document.getElementById('timezone-container');                  // get timezone element

    if(optionContainer.classList.length> 0)
    {
        optionContainer.classList.remove('hidden');                 // hide element
    }
    else
    {
        optionContainer.classList.add('hidden');                    // make element visible
    }
}

function searchTimezone()                                           // search timezone
{
    let search= this.searchbox.value.toLowerCase();                 // get user given search data

    this.timezoneContainer
    .removeChild(this.timezoneOptionContainer);                     // remove all option elements from DOM
    this.addOptionsToSelect(search);                                // add timezone option elements based on search
}


/* Change clock data */
function selectedDatetime(timezoneInString)                         // get and set selected timezone's date and time
{
    let date= new Date();

    let datetimeBasedOnTimezoneInString= 
    date.toLocaleString("en-US", {timeZone: timezoneInString});     // get selected timezone's datetime in string
    let selectedTimeZoneDatetime= 
    new Date(datetimeBasedOnTimezoneInString);                      // get selected datetime from string  
    
    this.setClockAsPerDatetime(selectedTimeZoneDatetime, false)     // set selected date, time and day in clock
}

function localDatetime()                                            // get and set local date and time                                            
{
    today= new Date();                                              // get local date and time
    this.setClockAsPerDatetime(today);                              // set local date, time and message
}

function setClockAsPerDatetime(datetime)                            // set hour, minute and second hand potion and set message
{

    let date= datetime.getUTCDate();                                // get date from date from date and time
    let month= datetime.getUTCMonth();                              // get month from date and time
    let year= datetime.getUTCFullYear();                            // get year from date and time
    let hour= datetime.getHours();                                  // get hour from date and time
    hour= hour> 11? hour- 12: hour;                                 // convert 24 based hour to 12 based hour
    let minute= datetime.getMinutes();                              // get minute from date and time
    let second= datetime.getSeconds();                              // get second from date and time
    let day= days[datetime.getDay()- 1];                            // get day of week from date and time
    let todaysDate= 
    date+' '+months[month].substring(0, 3)+' '+year;                // create complete printing date


    if( this.isLocalTime=== false)                                  // if local date and time is setting
    {
        message_1.innerHTML= todaysDate;                            // add created date at message-1 element's innerHTML
        message_2.innerHTML= day;                                   // add day of week at message-2 element's innerHTML
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