import { ArrayService } from "./app-service";

export class ArrayComponent implements ArrayService {
  public arrayFindMultiply(myArray: number[]): Array<Number> {
    let temp = [],
      j = 0;
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i] % 5 === 0 || myArray[i] % 10 === 0) {
        temp[j] = myArray[i];
        j++;
      }
    }
    return temp;
  }

  public arraySeparate(myArray: any): Array<string> {
    let str = [],
      j = 0;
    for (var i = 0; i < myArray.length; i++) {
      if (typeof myArray[i] === "string") {
        str[j] = myArray[i];
        j++;
      }
    }
    return str;
  }

  public arraySplit(str: string): Array<number> {
    const array = str[0].match(/\d+/gi).map(Number);

    let k = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        console.log(array[i] + " prime number");
      } else {
        console.log(array[i] + " not a prime number");
      }
    }
    return array;
  }

  public arraySort(myArray: any): Array<string> {
    myArray.sort();

    return myArray;
  }

  public arrayReplace(myArray: any): Array<number> {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i] % 3 === 0) myArray[i] = 5;
    }
    return myArray;
  }
}

let myArray: number[] = [34, 45, 60, 23, 13, 25, 70];
let array = new ArrayComponent();

console.log(array.arrayFindMultiply(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));
