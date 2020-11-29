window.onload = function () {
    let resultNumber = 0;
    let numberOne = 0;
    let numberTwo ;
    let inputString = "";

    document.getElementById("1")
        .addEventListener("click",function (){ create_number(1) });
    document.getElementById("2")
        .addEventListener("click",function (){ create_number(2) });
    document.getElementById("3")
        .addEventListener("click",function (){ create_number(3) });
    document.getElementById("4")
        .addEventListener("click",function (){ create_number(4) });
    document.getElementById("5")
        .addEventListener("click",function (){ create_number(5) });
    document.getElementById("6")
        .addEventListener("click",function (){ create_number(6) });
    document.getElementById("7")
        .addEventListener("click",function (){ create_number(7) });
    document.getElementById("8")
        .addEventListener("click",function (){ create_number(8) });
    document.getElementById("9")
        .addEventListener("click",function (){ create_number(9) });
    document.getElementById("0")
        .addEventListener("click",function (){ create_number(0) });

    document.getElementById("+")
        .addEventListener("click",function (){ addNumbers() });

    document.getElementById("=")
        .addEventListener("click",function (){ calculate() });

    function create_number(inputNumber){
        inputString += inputNumber;
        document.getElementById("result").value = inputString;
        resultNumber = 0;
    }

    function addNumbers(){
        numberOne = parseFloat(inputString);
        inputString = "";
        resultNumber = 0;
    }

    function calculate(){
        numberTwo = parseFloat(inputString);
        inputString = "";
        resultNumber = numberOne + numberTwo;

        document.getElementById("result").value = resultNumber;
        if(document.getElementById("result").value === NaN){
            document.getElementById("result").value = 0;
        }
        numberOne = 0;
        numberTwo = 0;
    }

}
