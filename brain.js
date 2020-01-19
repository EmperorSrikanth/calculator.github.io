function run() {
    //vars
    let km = document.getElementById('distance').value;
    let mi = document.getElementById('mileage').value;
    let fp = document.getElementById('fuelPrice').value;
    document.getElementById("inputs").reset();
    // Calculation only if all values are entered
    if (km != "" && mi != "" && fp != "") {
        let result = ((km/mi)*fp);
        result = Math.floor(result*100)/100;
        let fr = Math.floor((km/mi)*100)/100;
        document.getElementById('result').innerHTML = `Fare is <span class="extra">Rs.` + result + `</span>`;
        document.getElementById('result1').innerHTML = `Fuel Needed (in Litres) : <span class="extra">` + fr + `</span>`;
        document.getElementById("result").style.display = "block";
        document.getElementById("result1").style.display = "block";
    } else {
        window.alert('Error: All Values Must Be Entered');
    }
}
