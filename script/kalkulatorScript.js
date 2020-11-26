window.onload = function () {
    function sum() {
        let trigger = document.getElementById("operation_Select");

        let firstNumber = document.getElementsByTagName("input")[0].value;
        let secondNumber = document.getElementsByTagName("input")[1].value;

        let num1 = parseFloat(firstNumber);
        let num2 = parseFloat(secondNumber);

        switch (trigger.value) {
            case 'dodawanie': {
                document.getElementById("result").innerHTML = "" + (num1 + num2);
                break;
            }
            case 'odejmowanie': {
                document.getElementById("result").innerHTML = "" + (num1 - num2);
                break;
            }
            case 'mnożenie': {
                document.getElementById("result").innerHTML = "" + (num1 * num2);
                break;
            }
            case 'dzielenie': {
                document.getElementById("result").innerHTML = "" + (num1 / num2);
                break;
            }
            default: {
                console.log("Houston we have a problem~~")
            }
        }
    }

    let calculateButton = document.getElementById("oblicz");
    calculateButton.addEventListener("click", sum);


}