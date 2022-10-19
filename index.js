/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// Conversions
let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")

// Interactions & RAW data
let userinput = document.getElementById("input-el")
let buttonconvert = document.getElementById("convert-btn")

// Eventlistener for convert button
buttonconvert.addEventListener("click", function(){
    lengthCal(userinput.value)
    volumeCal(userinput.value)
    massCal(userinput.value)
})

function lengthCal(_value){
    let metric = (_value * 3.281).toFixed(3)
    let imperial = (_value / 3.281).toFixed(3)
    length.textContent = `
        ${_value} meters = ${metric} Feet | ${_value} feet = ${imperial} meters
    `
}

function volumeCal(_value){
    let metric = (_value * 0.264).toFixed(3)
    let imperial =( _value / 0.264).toFixed(3)
    volume.textContent = `
        ${_value} liters = ${metric} gallons | ${_value} gallons = ${imperial} liters
    `
}

function massCal(_value){
    let metric = (_value * 2.204).toFixed(3)
    let imperial = (_value / 2.204).toFixed(3)
    mass.textContent = `
        ${_value} kilos = ${metric} pounds | ${_value} pounds = ${imperial} kilos
    `
}
