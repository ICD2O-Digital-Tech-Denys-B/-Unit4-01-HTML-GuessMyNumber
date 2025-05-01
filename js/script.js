// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
function checkNumber() {
    let input_number = document.getElementById("user-number").value
    let random_number = Math.floor((Math.random() * (1 + 10 - 1)) + 1);
    if (input_number == random_number) {
        document.getElementById("answer").innerHTML = "Correct"
    }
    if (input_number != random_number) {
        document.getElementById("answer").innerHTML = "Wrong, the correct number was " + random_number
    }

}