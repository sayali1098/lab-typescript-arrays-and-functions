"use strict";
exports.__esModule = true;
exports.ArrayComponent = void 0;
var ArrayComponent = /** @class */ (function () {
    function ArrayComponent() {
    }
    ArrayComponent.prototype.arrayFindMultiply = function (myArray) {
        var temp = [], j = 0;
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] % 5 === 0 || myArray[i] % 10 === 0) {
                temp[j] = myArray[i];
                j++;
            }
        }
        return temp;
    };
    ArrayComponent.prototype.arraySeparate = function (myArray) {
        var str = [], j = 0;
        for (var i = 0; i < myArray.length; i++) {
            if (typeof myArray[i] === "string") {
                str[j] = myArray[i];
                j++;
            }
        }
        return str;
    };
    ArrayComponent.prototype.arraySplit = function (str) {
        var array = str[0].match(/\d+/gi).map(Number);
        var k = 0;
        for (var i = 0; i < array.length; i++) {
            if (array[i] % 2 === 0) {
                console.log(array[i] + " prime number");
            }
            else {
                console.log(array[i] + " not a prime number");
            }
        }
        return array;
    };
    ArrayComponent.prototype.arraySort = function (myArray) {
        myArray.sort();
        return myArray;
    };
    ArrayComponent.prototype.arrayReplace = function (myArray) {
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] % 3 === 0)
                myArray[i] = 5;
        }
        return myArray;
    };
    return ArrayComponent;
}());
exports.ArrayComponent = ArrayComponent;
var myArray = [34, 45, 60, 23, 13, 25, 70];
var array = new ArrayComponent();
console.log(array.arrayFindMultiply(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));
