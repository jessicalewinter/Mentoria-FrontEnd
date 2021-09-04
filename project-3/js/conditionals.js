// using if...else
function case1(value) {
    const maxValue = 100; 

    if(value <= 100) {
        console.log("good :)");
    } else if(value > 100 && value <= 150) {
        console.log("medium :|");
    } else {
        console.log("bad :(");
    }
}

// using switch

function case2(day) {
    switch(day) {
        case 1:
            console.log("sunday");
        case 2:
            console.log("monday");
        case 3:
            console.log("tuesday");
        case 4: 
            console.log("wednesday");
        case 5:
            console.log("thursday");
        case 6: 
            console.log("friday");
        case 7: 
            console.log("saturday");
    }
}

// using if ternary
function case3(height, maxHeight) {
    let isHidden = (height == maxHeight) ? 
        showBackgroundBlue() : 
        showBackgroundGreen()
    return isHidden;
}

function showBackgroundBlue() {
    return "show background blue";
}

function showBackgroundGreen() {
    return "show background green";
}

var typeback = case3(50, 80);
console.log(typeback);