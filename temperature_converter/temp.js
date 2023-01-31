
function convT() {
    var temp = document.getElementById("temp").value;
    var ele = document.getElementsByName('t_val');
   
var temp_value;
for(var i = 0; i < ele.length; i++){
    if(ele[i].checked){
        temp_value = ele[i].value;
    }
}
console.log(temp_value);

if (temp_value == "cel") {
    res1 = (temp * 9 / 5 + 32);
    res2 = (temp * 1 + 273.15);
    
    t1 = "Fahrenheit °F";
    t2 = "Kelvin °K";
} else if (temp_value == "fah") {
    res1 = ((temp - 32) * 5 / 9);
    res2 = ((temp - 32) * 5 / 9 + 273.15);
    t1 = "Celsius °C";
    t2 = "Kelvin °K";
} else {
    res1 = (temp - 273.15);
    res2 = (temp - 273.15) * 9 / 5 + 32;
    t1 = "Celsius °C";
    t2 = "Fahrenheit °F";
}
document.getElementById('cels').innerHTML = res1.toFixed(2) +  ' ' +t1;
document.getElementById('kelv').innerHTML = res2.toFixed(2) +  ' '+t2;
}
