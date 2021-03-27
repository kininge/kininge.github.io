
var messageElement;
var isMessageDone= false;;

document.addEventListener
(
    "DOMContentLoaded", () => 
    {
        messageElement= document.getElementById('message');
        messageElement.style.opacity= 0;
        messageElement.innerHTML= "Hi";

        setTimeout
        (
            ()=>
            {
                messageElement.style.opacity= 1;
            }, 0
        );

        setTimeout
        (
            ()=>
            {
                messageElement.style.opacity= 0;
            }, 5000
        );

        setTimeout
        (
            ()=>
            {
                messageElement.style.opacity= 1;
                messageElement.innerHTML= "It's Pritam";
            }, 11000
        );

        setTimeout
        (
            ()=>
            {
                messageElement.style.opacity= 0;
            }, 16000
        );

        setTimeout
        (
            ()=>
            {
                messageElement.style.opacity= 1;
                messageElement.innerHTML= "Glad to meet you";
                messageElement.style.fontSize= "x-large";
            }, 22000
        );

        setTimeout
        (
            ()=>
            {
                messageElement.style.opacity= 0;
            }, 27000
        );
        
    }
);