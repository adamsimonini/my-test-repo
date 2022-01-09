console.log('switch.js has loaded');


const chainToSwitch = (val) => {
    let answer = "";
    switch(val) {
        case "bob":
        case "Bob":
            answer = "Marley";
            break;
        case 99:
            answer = "ninetynine!";
            break;
        default:
            answer = "default value - sorry!"
    }
    return answer
}

console.log(chainToSwitch('Bob'));