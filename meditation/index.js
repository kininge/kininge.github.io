
var messageElement;
var isMessageDone= false;

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
            }, 3000
        );

        setTimeout
        (
            ()=>
            {
                messageElement.style.opacity= 1;
                messageElement.innerHTML= "It's Pritam";
            }, 6000
        );

        setTimeout
        (
            ()=>
            {
                messageElement.style.opacity= 0;
            }, 9000
        );

        setTimeout
        (
            ()=>
            {
                messageElement.style.opacity= 1;
                messageElement.innerHTML= "Glad to meet you";
            }, 12000
        );

        setTimeout
        (
            ()=>
            {
                messageElement.style.opacity= 0;
            }, 18000
        );

        setTimeout
        (
            ()=>
            {
                messageElement.style.opacity= 1;
                messageElement.innerHTML= "Treat your soul";
            }, 21000
        );

        setTimeout
        (
            ()=>
            {
                messageElement.style.opacity= 0;
            }, 24000
        );

        setTimeout
        (
            ()=>
            {
                messageElement.style.opacity= 1;
                messageElement.innerHTML= "Meditate";
            }, 27000
        );

        setTimeout
        (
            ()=>
            {
                messageElement.style.opacity= 0;
            }, 30000
        );

        setTimeout
        (
            ()=>
            {
                messageElement.style.opacity= 1;
                messageElement.innerHTML= "Take long breath";
                messageElement.style.animationDuration = "1s";
            }, 33000
        );

        setTimeout
        (
            ()=>
            {
                messageElement.style.opacity= 0;
            }, 34500
        );

        setTimeout
        (
            ()=>
            {
                messageElement.style.opacity= 1;
                messageElement.innerHTML= "And hold";
            }, 36500
        );

        setTimeout
        (
            ()=>
            {
                messageElement.style.opacity= 0;
            }, 38500
        );

        setTimeout
        (
            ()=>
            {
                messageElement.style.opacity= 1;
                messageElement.innerHTML= "Littel longer";
            }, 40500
        );

        setTimeout
        (
            ()=>
            {
                messageElement.style.opacity= 0;
            }, 45500
        );

        setTimeout
        (
            ()=>
            {
                messageElement.style.opacity= 1;
                messageElement.innerHTML= "Breath out";
            }, 47500
        );

        setTimeout
        (
            ()=>
            {
                messageElement.style.opacity= 0;
            }, 49000
        );

        setTimeout
        (
            ()=>
            {
                messageElement.style.opacity= 1;
                messageElement.innerHTML= "Continue";
            }, 51000
        );

        setTimeout
        (
            ()=>
            {
                messageElement.style.opacity= 0;
            }, 52500
        );

        setTimeout
        (
            ()=>
            {
                messageElement.style.opacity= 1;
                messageElement.innerHTML= "Breath";
                messageElement.style.animation= "breathing 4s ease-in infinite";
            }, 54500
        );
        
    }
);