import React from "react";

export default function Binarysearch(target) {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let midd = Math.floor((start + end) / 2);
    if (arr[midd] === target) return true;
    // Else look in left or
    // right half accordingly
    else if (arr[midd] < target) start = midd + 1;
    else end = midd - 1;
  }
  return false;
}

Binarysearch(1);

let target = 8;

if (Binarysearch(target)) {
  console.log("Element found!", target);
  console.log(Binarysearch());
} else {
  console.log("Element not found!");
}
