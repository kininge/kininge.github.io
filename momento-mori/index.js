let calendarInputElement;
let mementoMoriSectionElement;
let lifePassedPercentageElement;
let footerSectionElement;
let lifeQuoteElement;
let quoteAuthorElement;
let birthdate;
let lifePassed;
let today = new Date();
today.setHours(0, 0, 0, 0);

const fullMonthNameList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const quotes = [
  {
    quote: "In the end, we only regret the chances we didn't take",
    author: "Lewis Carroll",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop",
    author: "Confucius",
  },
  {
    quote:
      "The purpose of Life is finding the largest burden that you can bear and bearing it",
    author: "Jordan Peterson",
  },
  {
    quote:
      "One day, you will wake up and there won't be any more time to do the things you've always wanted. Do it now",
    author: "Paulo Coelho",
  },
  {
    quote: "Only time can heal what reason cannot",
    author: "Seneca",
  },
  {
    quote:
      "There are nothing noble in being superior to your fellow man; true nobility is being superior to your former self",
    author: "Ernest Hemingway",
  },
  {
    quote: "It's not what happens to you, but how you react to it that matters",
    author: "Epictetus",
  },
  {
    quote: "Everything you've ever wanted is on other side of fear",
    author: "George Adair",
  },
  {
    quote:
      "Anyone who isn't embarrassed of who they were last year probably isn't learning enough",
    author: "Alain De Botton",
  },
  {
    quote: "Intelligence without ambition is a bird without wings",
    author: "Salvador Dali",
  },
  {
    quote: "The future depends on what you do today",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "The only way to achieve greatness in life is to have patience, consistency and discipline",
    author: "Devid Goggins",
  },
  {
    quote:
      "You become what you give your attention to. If you do not choose what thoughts and images you expose yourself to, someone else will",
    author: "Epictetus",
  },
  {
    quote:
      "We are what we repeatedly do. Excellence, therefore is not an act, but a habit",
    author: "Aristotle",
  },
  {
    quote: "The best remedy for anger is delay",
    author: "Seneca",
  },
  {
    quote: "Day by day, what you think and what you do is who become",
    author: "Heraclitus",
  },
  {
    quote:
      "Freedom is not achieved by satisfying desire, but by eliminating it",
    author: "Epictetus",
  },
  {
    quote: "A mistake repeated more than once is a decision",
    author: "Paulo Coelho",
  },
  {
    quote:
      "It's impossible for someone to learn what they think they already know",
    author: "Epictetus",
  },
  {
    quote: "Books are the training weights of the mind",
    author: "Epictetus",
  },
  {
    quote:
      "One word frees us of all the weight and pain of life. That word is love",
    author: "Sophocles",
  },
  {
    quote: "Don't wait. The time will never be just right",
    author: "Napoleon Hill",
  },
  {
    quote:
      "The most difficult thing is the decision to act, the rest is merely tenacity",
    author: "Amelia Earhart",
  },
  {
    quote:
      "It is not death that a man should fear, but he should fear never beginning to live",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "The most fascinating lesson I've learned about life is that the struggle is good",
    author: "Joe Rogan",
  },
  {
    quote:
      "There is a limit to the time assigned you, and if you don't use it to free yourself, it will be gone and will never return",
    author: "Marcus Aurelius",
  },
  {
    quote: "Every person's happiness is their own responsibility",
    author: "Abraham Lincoln",
  },
  {
    quote: "Intelligence follows curiosity",
    author: "James Clear",
  },
  {
    quote: "Be tolerant with others and strict with yourself",
    author: "Marcus Aurelius",
  },
  {
    quote: "Knowledge speaks, but wisdom listens",
    author: "Jimi Hendrix",
  },
  {
    quote: "The wise people follow their own direction",
    author: "Euripides",
  },
  {
    quote:
      "The greatest danger is not that our aim is to high and we miss it, but that it is too low and we reach it",
    author: "Michelangelo",
  },
  {
    quote: "Pleasures become punishments when taken beyond a certain point",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "You are in danger of living a life so comfortable and soft, that you will die without ever realizing your true potential",
    author: "David Goggins",
  },
  {
    quote: "Suffering arises from trying to control what is uncontrollable",
    author: "Epictetus",
  },
  {
    quote:
      "We have two lives. the second begins when we realize we only have one",
    author: "Confucius",
  },
  {
    quote: "A fool is known by his speech; and a wise man by silence",
    author: "Pythagoras",
  },
  {
    quote:
      "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth",
    author: "Marcus Aurelius",
  },
  {
    quote: "Your time is limited. don't waste it living someone else's life",
    author: "Steve Jobs",
  },
  {
    quote: "It isn't what we say or think that defines us, but what we do",
    author: "Jane Austen",
  },
  {
    quote:
      "Another person cannot hurt you without your cooperation; you are hurt the moment you believe yourself to be",
    author: "Marcus Aurelius",
  },
];

/* start operation after DOM load */
document.addEventListener("DOMContentLoaded", (event) => {
  calendarInputElement = document.querySelector(".date-picker-input"); // get calendar input from DOM
  calendarInputElement.setAttribute("max", dateInISOFormat(today));
  mementoMoriSectionElement = document.getElementById("memento-mori-container"); // get momento mori container element from DOM
  footerSectionElement = document.getElementById("footer-container"); // get footer element
  lifePassedPercentageElement = document.getElementById(
    "life-passed-percentage"
  ); // get life passed percentage element from DOM
  lifeQuoteElement = document.getElementById("life-quote"); // get life quote element from DOM
  quoteAuthorElement = document.getElementById("author"); // get quote author element from DOM

  /* listen and display selected/ updated date */
  calendarInputElement.addEventListener("change", (event) => {
    // listen date change in calendar input
    const date = event.target.value; // get selected birthdate from element
    birthdate = new Date(date); // generate date from  string date
    birthdate.setHours(0, 0, 0, 0); // remove time from date
    const dateList = date.split("-");
    const month = fullMonthNameList[Number(dateList[1]) - 1]; // month in words
    const dateDisplay = calendarInputElement.parentNode.querySelector(
      ".date-picker-display"
    );
    dateDisplay.innerHTML = `${dateList[2]} ${month} ${dateList[0]}`; // show selected birthdate

    createMomento();
  });
});

/* generate momento mori calendar */
const createMomento = async () => {
  await removeChildren(mementoMoriSectionElement); // remove all children elements before add new elements

  const differenceInMilliseconds = Number(today) - Number(birthdate); // get difference between birthdate and today in milliseconds
  const passedWeeks = Math.floor(differenceInMilliseconds / 604800000); // get weeks from milliseconds
  lifePassed = Math.round((passedWeeks / 4160) * 100); // get percentage of life passed
  lifePassedPercentageElement.innerHTML = `${lifePassed}%`;
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  lifeQuoteElement.innerHTML = quotes[quoteIndex].quote;
  quoteAuthorElement.innerHTML = "- " + quotes[quoteIndex].author;

  // generate half year
  for (let halfYearIndex = 0; halfYearIndex < 160; halfYearIndex++) {
    const halfYearElement = document.createElement("SECTION");
    halfYearElement.setAttribute("class", "half-year");

    // generate weeks
    for (let weekIndex = 1; weekIndex <= 26; weekIndex++) {
      const weekElement = document.createElement("SPAN");
      const id = halfYearIndex * 26 + weekIndex;
      weekElement.setAttribute("id", id.toString());
      weekElement.setAttribute(
        "class",
        id <= passedWeeks ? "week passed-week" : "week"
      );

      halfYearElement.appendChild(weekElement);
    }

    // add count of year after every 5 years
    const yearCount = document.createElement("SPAN");
    yearCount.setAttribute("class", "year-count-container");
    const exactHalfYear = halfYearIndex + 1;
    if (exactHalfYear % 10 == 0) {
      yearCount.innerHTML = exactHalfYear / 2;
    }

    halfYearElement.appendChild(yearCount);
    mementoMoriSectionElement.appendChild(halfYearElement);

    // add gap after 10 years
    if (exactHalfYear % 20 == 0) {
      const gapElement = document.createElement("DIV");
      gapElement.setAttribute("class", "year-gap");
      mementoMoriSectionElement.appendChild(gapElement);
    }
  }

  // remove class and make element visible
  footerSectionElement.setAttribute("class", "");
};

/* remove all child elements from calendar */
const removeChildren = async (parent) => {
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
};

/* get date in yyyy-mm-dd format */
const dateInISOFormat = (date) => {
  var dd = date.getDate();
  var mm = date.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
  var yyyy = date.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  return yyyy + "-" + mm + "-" + dd;
};
