function calculatebmi() {
    let weightinput = prompt("Enter your weight in kg");
    let heightinput = prompt("Enter your height in cm");

    let heightcm = parseFloat(heightinput);
    let weight = parseFloat(weightinput);

    let height = heightcm / 100;
    let bmi = weight / (height * height);

    document.getElementById("result").innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
}
