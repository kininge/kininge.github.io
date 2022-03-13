var profileUserNameElement; // profile user name element
var profileUserNameElementId = "profile-owner-name"; // profile user name element id
var profileUserNameValue = "Pritam Sukumar Kininge"; // profile user name value

var profileUserEducationElement; // profile user education element
var profileUserEducationElementId = "profile-owner-education"; // profile user education element id
var profileUserEducationValue = "Bachelor of Engineering (Mechanical)"; // profile user education value

var profileUserWorkElement; // profile user work comes
var profileUserWorkElementId = "profile-owner-work"; // profile user work element id
var profileUserWorkValue = "ICICI Securities (22 LPA)"; // profile user work value

var profileUserMobilElement; // profile user mobile comes
var profileUserMobilElementId = "profile-owner-mobile"; // profile user mobile element id
var profileUserMobilValue = "+91 7276053298"; // profile user mobile value

var profileUserEmailElement; // profile user email comes
var profileUserEmailElementId = "profile-owner-email"; // profile user email element id
var profileUserEmailValue = "kininge007@gmail.com"; // profile user email value

var profileUserBirthdateElement; // profile user birthday comes
var profileUserBirthdateElementId = "profile-owner-birthdate"; // profile user birthdate element id
var profileUserBirthdateKey = "Birthdate"; // profile user birthdate key
var profileUserBirthdateValue = "08 May 1995"; // profile user birthdate value

var profileUserBirthplaceElement; // profile user birthplace comes
var profileUserBirthplaceElementId = "profile-owner-birthplace"; // profile user birthplace element id
var profileUserBirthplaceKey = "Birthplace"; // profile user birthplace key
var profileUserBirthplaceValue = "Mumbai (11:30 AM)"; // profile user birthplace value

var profileUserColorElement; // profile user color comes
var profileUserColorElementId = "profile-owner-color"; // profile user color element id
var profileUserColorKey = "Completion"; // profile user color key
var profileUserColorValue = "Weatish"; // profile user color value

var profileUserHeightElement; // profile user height comes
var profileUserHeightElementId = "profile-owner-height"; // profile user height element id
var profileUserHeightKey = "Height"; // profile user height key
var profileUserHeightValue = "165 cm"; // profile user height value

var profileUserBloodGroupElement; // profile user blood group comes
var profileUserBloodGroupElementId = "profile-owner-blood-group"; // profile user blood group element id
var profileUserBloodGroupKey = "Blood Group"; // profile user blood group key
var profileUserBloodGroupValue = "O+"; // profile user blood group value

var profileUserHeaderElement; // profile user header comes
var profileUserHeaderElementId = "profile-family-details-header"; // profile user header element id
var profileUserHeaderValue = "Family Details"; // profile user header value

/* On page load */
document.addEventListener(
  // add event listener
  "DOMContentLoaded",
  () =>
    // wait until DOM get load into browser
    {
      this.profileUserNameElement = document.getElementById(
        this.profileUserNameElementId
      ); // find profile user name element
      this.profileUserNameElement.innerHTML = this.profileUserNameValue; // provide profile user name value

      this.profileUserEducationElement = document.getElementById(
        this.profileUserEducationElementId
      ); // find profile user education element
      this.profileUserEducationElement.innerHTML =
        this.profileUserEducationValue; // provide profile user education value

      this.profileUserWorkElement = document.getElementById(
        this.profileUserWorkElementId
      ); // find profile user work element
      this.profileUserWorkElement.innerHTML = this.profileUserWorkValue; // provide profile user work value

      this.profileUserMobilElement = document.getElementById(
        this.profileUserMobilElementId
      ); // find profile user mobile element
      this.profileUserMobilElement.innerHTML = this.profileUserMobilValue; // provide profile user mobile value

      this.profileUserEmailElement = document.getElementById(
        this.profileUserEmailElementId
      ); // find profile user email element
      this.profileUserEmailElement.innerHTML = this.profileUserEmailValue; // provide profile user email value

      var keys;
      var values;

      this.profileUserBirthdateElement = document.getElementById(
        this.profileUserBirthdateElementId
      ); // find profile user birthdate element
      this.keys =
        this.profileUserBirthdateElement.getElementsByClassName("key"); // get elements of class key
      this.keys[0].innerHTML = this.profileUserBirthdateKey; // assign key value to 1st element we found
      this.values =
        this.profileUserBirthdateElement.getElementsByClassName("value"); // get elements of class value
      this.values[0].innerHTML = this.profileUserBirthdateValue; // assign value to to 1st element we found

      this.profileUserBirthplaceElement = document.getElementById(
        this.profileUserBirthplaceElementId
      ); // find profile user birthplace element
      this.keys =
        this.profileUserBirthplaceElement.getElementsByClassName("key"); // get elements of class key
      this.keys[0].innerHTML = this.profileUserBirthplaceKey; // assign key value to 1st element we found
      this.values =
        this.profileUserBirthplaceElement.getElementsByClassName("value"); // get elements of class value
      this.values[0].innerHTML = this.profileUserBirthplaceValue; // assign value to to 1st element we found

      this.profileUserColorElement = document.getElementById(
        this.profileUserColorElementId
      ); // find profile user color element
      this.keys = this.profileUserColorElement.getElementsByClassName("key"); // get elements of class key
      this.keys[0].innerHTML = this.profileUserColorKey; // assign key value to 1st element we found
      this.values =
        this.profileUserColorElement.getElementsByClassName("value"); // get elements of class value
      this.values[0].innerHTML = this.profileUserColorValue; // assign value to to 1st element we found

      this.profileUserHeightElement = document.getElementById(
        this.profileUserHeightElementId
      ); // find profile user height element
      this.keys = this.profileUserHeightElement.getElementsByClassName("key"); // get elements of class key
      this.keys[0].innerHTML = this.profileUserHeightKey; // assign key value to 1st element we found
      this.values =
        this.profileUserHeightElement.getElementsByClassName("value"); // get elements of class value
      this.values[0].innerHTML = this.profileUserHeightValue; // assign value to to 1st element we found

      this.profileUserBloodGroupElement = document.getElementById(
        this.profileUserBloodGroupElementId
      ); // find profile user blood group element
      this.keys =
        this.profileUserBloodGroupElement.getElementsByClassName("key"); // get elements of class key
      this.keys[0].innerHTML = this.profileUserBloodGroupKey; // assign key value to 1st element we found
      this.values =
        this.profileUserBloodGroupElement.getElementsByClassName("value"); // get elements of class value
      this.values[0].innerHTML = this.profileUserBloodGroupValue; // assign value to to 1st element we found

      this.profileUserHeaderElement = document.getElementById(
        this.profileUserHeaderElementId
      ); // find profile user header element
      this.profileUserHeaderElement.innerHTML = this.profileUserHeaderValue; // provide profile user header value
    }
);
/* On page load */
