
let doF=document.getElementById('convertFeet');
let doM=document.getElementById('convertMeters');

function convertFeettoMeters() {

    let result = parseFloat(doF.value) * 0.305;
    debugger
    document.getElementById('resultFtoM').innerHTML = result;
    return true
}

function convertMeterstoFeet() {

    let result = parseFloat(doM.value) * 3.279 ;
    document.getElementById('resultMtoF').innerHTML = result;
    return true
}
