console.log('switch.js has loaded');


const chainToSwitch = (val) => {
    let answer = "";
    switch(val) {
        case "bob":
            answer = "Marley";
            break;
        case 99:
            answer = "ninetynine!";
            break;
    }
    return answer
}

console.log(chainToSwitch('Bob'));