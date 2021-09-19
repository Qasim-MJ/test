let day = "Saturday"

switch (day) {
    case "Sunday":
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log("8 AM")
        break;
    case "Friday" : 
        console.log("11 Am")
        break;
    case "Saturday" : 
        console.log("9 Am")
        break;

    default: console.log("Stay Sleep")
        break;
}