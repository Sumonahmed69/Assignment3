//  https://github.com/Sumonahmed69/Assignment3


// This fucntion for calculate kilometer to metter.

function kilometerToMeter(kilometer) {

    if (kilometer < 0) {
        console.log("your Number is error!");
    }
    else {
        var meter = kilometer * 1000;
    }
    return meter;
}



// this function for calculator budget

function budgetCalculator(watch, mobile, laptop) {

    var budget = (watch * 50) + (mobile * 100) + (laptop * 500);
    return budget;
}



// this function for hotel Cost

function hotelCost(stay) {

    if (stay < 0) {

        console.log("your Number is error!");
    }
    else if (stay <= 10) {

        var hotelRent = 0;
        hotelRent = stay * 100;
    }
    else if (stay <= 20) {

        var fristTenNight = 10 * 100;
        var secondTowinteNIght = (stay - 10) * 80;
        hotelRent = fristTenNight + secondTowinteNIght;
    }
    else {

        var fristTenNight = 10 * 100;
        var secondTowinteNIght = 10 * 80;
        var thirdLastNights = (stay - 20) * 50;
        hotelRent = fristTenNight + secondTowinteNIght + thirdLastNights;
    }
    return hotelRent;
}



// this function for mega friend

function megaFriend(friends) {

    var maxString = friends[0];
    for (var i = 0; i < friends.length; i++) {
        var element = friends[i];
        if (element.length > maxString.length){
            maxString = element;
        }
    }
    return maxString;
}

