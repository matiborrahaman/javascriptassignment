
//kilometerToMeter

function kilometerToMeter (num){
    var meter = num*1000;
    return meter;
}

var convert = kilometerToMeter(2);
console.log(convert);


//budgetCalculator

function budgetCalculator(clockAmount , phoneAmount, laptopAmount){
    var clock = 50, phone = 100, laptop = 500;
    var result = (clock * clockAmount) + (phone * phoneAmount) + (laptop * laptopAmount);
    return result;
}
var total = budgetCalculator(1, 1, 1);
console.log(total);


//hotelCost
function hotelCost(calcDay) {
    var day = calcDay;
    var forFirst10Day = 100;
    var forSecond10Day = 80;
    var forRestDay = 50;
    var result = 0;

    function calcAmount(day, amount) {
        return day * amount;
    }

    if (day > 20) {
        result = calcAmount(10, forFirst10Day);
        result = result + calcAmount(10, forSecond10Day);
        result = result + calcAmount(day - 20, forRestDay);
    } else if (day <= 20 && day > 10) {
        result = calcAmount(10, forFirst10Day);
        result = result + calcAmount(day - 10, forSecond10Day);
    } else {
        result = calcAmount(day, forFirst10Day);
    }

    return result;
}


//megaFriend

 
  
function megaFriend(friends) {
    var sortNames = friends.sort(function (first, second) {
        return second.length - first.length;
    })
    return sortNames[0];
}
console.clear()

console.log(megaFriend(['Akash', 'Raju', 'Saiful Alam Rakib', 'Motiur Rahman', 'Habibullah Mezbah']));

