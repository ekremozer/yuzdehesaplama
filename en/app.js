const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const formulaParameter = urlParams.has('formula');

function formula1Calculate() {
    var isValid = true;
    var number = parseFloat(document.getElementById("formula1-val-1").value);
    var percent = parseFloat(document.getElementById("formula1-val-2").value);

    if (Number.isNaN(number) || number == "") {
        document.getElementById("formula1-val-1").style.backgroundColor = "#fde3e3";
        document.getElementById("formula1-val-1").style.borderColor = "red";
        isValid = false;
    }

    if (Number.isNaN(percent) || percent == "") {
        document.getElementById("formula1-val-2").style.backgroundColor = "#fde3e3";
        document.getElementById("formula1-val-2").style.borderColor = "red";
        isValid = false;
    }

    if (isValid == false) {
        return;
    }

    var result = parseFloat(((number / 100) * percent).toFixed(2));
    var resultToFixed = decimalFix(result);
    document.getElementById("formula1-result").value = resultToFixed;
    document.getElementById("formula1-result-desc").innerHTML = percent + "% of " + number + " is " + result;
    document.getElementById("formula1-result-desc").parentElement.style.visibility = "visible";

    if (formulaParameter == true) {
        var formulaText = "((" + number + " / 100) * " + percent + ") = " + resultToFixed;
        console.log(formulaText);
    }
}

function formula2Calculate() {
    var isValid = true;
    var number = parseFloat(document.getElementById("formula2-val-1").value);
    var percent = parseFloat(document.getElementById("formula2-val-2").value);

    if (Number.isNaN(number) || number == "") {
        document.getElementById("formula2-val-1").style.backgroundColor = "#fde3e3";
        document.getElementById("formula2-val-1").style.borderColor = "red";
        isValid = false;
    }

    if (Number.isNaN(percent) || percent == "") {
        document.getElementById("formula2-val-2").style.backgroundColor = "#fde3e3";
        document.getElementById("formula2-val-2").style.borderColor = "red";
        isValid = false;
    }

    if (isValid == false) {
        return;
    }

    var moreThan = ((number / 100) * percent);

    var result = parseFloat((number + moreThan).toFixed(2));
    var resultToFixed = decimalFix(result);

    document.getElementById("formula2-result").value = resultToFixed;
    document.getElementById("formula2-result-desc").innerHTML = percent + "% more than " + number + " is " + result;
    document.getElementById("formula2-result-desc").parentElement.style.visibility = "visible";

    if (formulaParameter == true) {
        var formulaText = number + " + ((" + number + " / 100) * " + percent + ") = " + resultToFixed;
        console.log(formulaText);
    }
}

function formula3Calculate() {
    var isValid = true;
    var number = parseFloat(document.getElementById("formula3-val-1").value);
    var percent = parseFloat(document.getElementById("formula3-val-2").value);

    if (Number.isNaN(number) || number == "") {
        document.getElementById("formula3-val-1").style.backgroundColor = "#fde3e3";
        document.getElementById("formula3-val-1").style.borderColor = "red";
        isValid = false;
    }

    if (Number.isNaN(percent) || percent == "") {
        document.getElementById("formula3-val-2").style.backgroundColor = "#fde3e3";
        document.getElementById("formula3-val-2").style.borderColor = "red";
        isValid = false;
    }

    if (isValid == false) {
        return;
    }

    var dividing = parseFloat((1 + (percent / 100)).toFixed(2));

    var result = parseFloat((number / dividing).toFixed(2));
    var resultToFixed = decimalFix(result);

    document.getElementById("formula3-result").value = resultToFixed;
    document.getElementById("formula3-result-desc").innerHTML = number + " excluded " + percent + "% is " + result;
    document.getElementById("formula3-result-desc").parentElement.style.visibility = "visible";

    if (formulaParameter == true) {
        var formulaText = "(" + number + " / (1 + (" + percent + " / 100)) = " + resultToFixed;
        console.log(formulaText);
    }
}

function formula4Calculate() {
    var isValid = true;
    var number = parseFloat(document.getElementById("formula4-val-1").value);
    var percent = parseFloat(document.getElementById("formula4-val-2").value);

    if (Number.isNaN(number) || number == "") {
        document.getElementById("formula4-val-1").style.backgroundColor = "#fde3e3";
        document.getElementById("formula4-val-1").style.borderColor = "red";
        isValid = false;
    }

    if (Number.isNaN(percent) || percent == "") {
        document.getElementById("formula4-val-2").style.backgroundColor = "#fde3e3";
        document.getElementById("formula4-val-2").style.borderColor = "red";
        isValid = false;
    }

    if (isValid == false) {
        return;
    }

    var moreThan = ((number / 100) * percent);

    var result = parseFloat((number - moreThan).toFixed(2));
    var resultToFixed = decimalFix(result);

    document.getElementById("formula4-result").value = resultToFixed;
    document.getElementById("formula4-result-desc").innerHTML = percent + "% less than " + number + " is " + result;
    document.getElementById("formula4-result-desc").parentElement.style.visibility = "visible";

    if (formulaParameter == true) {
        var formulaText = number + " - ((" + number + " / 100) * " + percent + ") = " + resultToFixed;
        console.log(formulaText);
    }
}

function formula5Calculate() {
    var isValid = true;
    var number1 = parseFloat(document.getElementById("formula5-val-1").value);
    var number2 = parseFloat(document.getElementById("formula5-val-2").value);

    if (Number.isNaN(number1) || number1 == "") {
        document.getElementById("formula5-val-1").style.backgroundColor = "#fde3e3";
        document.getElementById("formula5-val-1").style.borderColor = "red";
        isValid = false;
    }

    if (Number.isNaN(number2) || number2 == "") {
        document.getElementById("formula5-val-2").style.backgroundColor = "#fde3e3";
        document.getElementById("formula5-val-2").style.borderColor = "red";
        isValid = false;
    }

    if (isValid == false) {
        return;
    }

    var result = parseFloat(((number1 / number2) * 100).toFixed(2));
    var resultToFixed = decimalFix(result);

    document.getElementById("formula5-result").value = resultToFixed;
    document.getElementById("formula5-result-desc").innerHTML = number1 + " is " + number2 + "% of " + result;
    document.getElementById("formula5-result-desc").parentElement.style.visibility = "visible";

    if (formulaParameter == true) {
        var formulaText = "((" + number1 + " / " + number2 + ") * 100) = " + resultToFixed;
        console.log(formulaText);
    }
}

function formula6Calculate() {
    var isValid = true;
    var number1 = parseFloat(document.getElementById("formula6-val-1").value);
    var number2 = parseFloat(document.getElementById("formula6-val-2").value);

    if (Number.isNaN(number1) || number1 == "") {
        document.getElementById("formula6-val-1").style.backgroundColor = "#fde3e3";
        document.getElementById("formula6-val-1").style.borderColor = "red";
        isValid = false;
    }

    if (Number.isNaN(number2) || number2 == "") {
        document.getElementById("formula6-val-2").style.backgroundColor = "#fde3e3";
        document.getElementById("formula6-val-2").style.borderColor = "red";
        isValid = false;
    }

    if (isValid == false) {
        return;
    }

    var result = parseFloat((((number1 / number2) - 1) * 100).toFixed(2));
    var resultToFixed = decimalFix(result);

    document.getElementById("formula6-result").value = resultToFixed;//200 is 100% more than 100
    document.getElementById("formula6-result-desc").innerHTML = number1 + " is " + resultToFixed + "% more than " + number2;
    document.getElementById("formula6-result-desc").parentElement.style.visibility = "visible";

    if (formulaParameter == true) {
        var formulaText = "(((" + number1 + " / " + number2 + ") - 1) * 100) = " + resultToFixed;
        console.log(formulaText);
    }
}

function formula7Calculate() {
    var isValid = true;
    var number1 = parseFloat(document.getElementById("formula7-val-1").value);
    var number2 = parseFloat(document.getElementById("formula7-val-2").value);

    if (Number.isNaN(number1) || number1 == "") {
        document.getElementById("formula7-val-1").style.backgroundColor = "#fde3e3";
        document.getElementById("formula7-val-1").style.borderColor = "red";
        isValid = false;
    }

    if (Number.isNaN(number2) || number2 == "") {
        document.getElementById("formula7-val-2").style.backgroundColor = "#fde3e3";
        document.getElementById("formula7-val-2").style.borderColor = "red";
        isValid = false;
    }

    if (isValid == false) {
        return;
    }

	var result = parseFloat((((number2 - number1) / number2) * 100).toFixed(2));
	result = Math.abs(result);
    var resultToFixed = decimalFix(result);

    document.getElementById("formula7-result").value = resultToFixed;//200 is 100% less than 100
    document.getElementById("formula7-result-desc").innerHTML = number1 + " is " + resultToFixed + "%  less than " + number2;
    document.getElementById("formula7-result-desc").parentElement.style.visibility = "visible";

    if (formulaParameter == true) {
        var formulaText = "(((" + number2 + " -" + number1 + ") / " + number2 + ") * 100) = " + resultToFixed;
        console.log(formulaText);
    }
}

function formula8Calculate() {
    var isValid = true;
    var number = parseFloat(document.getElementById("formula8-val-2").value);
	var percent1 = parseFloat(document.getElementById("formula8-val-1").value);
    var percent2 = parseFloat(document.getElementById("formula8-val-3").value);
    

    if (Number.isNaN(percent1) || percent1 == "") {
        document.getElementById("formula8-val-1").style.backgroundColor = "#fde3e3";
        document.getElementById("formula8-val-1").style.borderColor = "red";
        isValid = false;
    }

    if (Number.isNaN(number) || number == "") {
        document.getElementById("formula8-val-2").style.backgroundColor = "#fde3e3";
        document.getElementById("formula8-val-2").style.borderColor = "red";
        isValid = false;
    }

    if (Number.isNaN(percent2) || percent2 == "") {
        document.getElementById("formula8-val-3").style.backgroundColor = "#fde3e3";
        document.getElementById("formula8-val-3").style.borderColor = "red";
        isValid = false;
    }

    if (isValid == false) {
        return;
    }

    var result = parseFloat(((number / percent1) * percent2).toFixed(2));

    var resultToFixed = decimalFix(result);
    var numerToFixed = decimalFix(number);

    document.getElementById("formula8-result").value = resultToFixed;//Only the number of which 10% is the number 5, 100% is the number 50
																	// Only the number of which 5% is the number 10 100% is the number 50

    document.getElementById("formula8-result-desc").innerHTML = "Only the number of which " + percent1 + "% is the number " + numerToFixed + ", " + percent2 + "% is the number " + result;
    document.getElementById("formula8-result-desc").parentElement.style.visibility = "visible";

    if (formulaParameter == true) {
        var formulaText = "((" + number + " / " + percent1 + ") * " + percent2 + ") = " + resultToFixed;
        console.log(formulaText);
    }
}

function formula9Calculate() {
    var isValid = true;
    var number1 = parseFloat(document.getElementById("formula9-val-1").value);
    var number2 = parseFloat(document.getElementById("formula9-val-2").value);

    if (Number.isNaN(number1) || number1 == "") {
        document.getElementById("formula9-val-1").style.backgroundColor = "#fde3e3";
        document.getElementById("formula9-val-1").style.borderColor = "red";
        isValid = false;
    }

    if (Number.isNaN(number2) || number2 == "") {
        document.getElementById("formula9-val-2").style.backgroundColor = "#fde3e3";
        document.getElementById("formula9-val-2").style.borderColor = "red";
        isValid = false;
    }

    if (isValid == false) {
        return;
    }

    var result = parseFloat((((number2 / number1) - 1) * 100).toFixed(2));
	result = Math.abs(result);
    var resultToFixed = decimalFix(result);

    document.getElementById("formula9-result").value = resultToFixed;
    document.getElementById("formula9-result-desc").innerHTML = number1 + " is " + number2 + " excluding " + resultToFixed;
    document.getElementById("formula9-result-desc").parentElement.style.visibility = "visible";

    if (formulaParameter == true) {
        var formulaText = "(((" + number2 + " / " + number1 + ") - 1) * 100) = " + resultToFixed;
        console.log(formulaText);
    }
}

function isDecimal(event, element) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && !(charCode == 46 || charCode == 8)) {
        return false;
    } else {
        var len = element.value.length;
        var index = element.value.indexOf('.');
        if (index > 0 && charCode == 46) {
            return false;
        }
        if (index > 0) {
            var charAfterDot = (len + 1) - index;
            if (charAfterDot > 3) {
                return false;
            }
        }
    }
    element.style.borderColor = "#ccc";
    element.style.backgroundColor = "#fff";
    return true;
}

var inputs = document.getElementsByTagName("input");
for (var i = 0; i < inputs.length; i++) {
    inputs[i].setAttribute("onkeypress", "return isDecimal(event,this)");
}

var forms = document.getElementsByTagName("form");
for (var i = 0; i < forms.length; i++) {
    forms[i].setAttribute("onsubmit", "event.preventDefault()");
}

function copyTextToClipboardInput(id) {
    var copyText = document.getElementById(id);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function copyTextToClipboardSpan(id) {
    var copyText = document.getElementById(id);
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}

var attachments = [{
        number: "0",
        attachment1: "ın",
        attachment2: "ı",
        attachment3: "dır",
        attachment4: "da",
        attachment5: "ise"
    },
    {
        number: "1",
        attachment1: "in",
        attachment2: "i",
        attachment3: "dir",
        attachment4: "de",
        attachment5: "ise"
    },
    {
        number: "2",
        attachment1: "nin",
        attachment2: "si",
        attachment3: "dir",
        attachment4: "de",
        attachment5: "ise"
    },
    {
        number: "3",
        attachment1: "ün",
        attachment2: "ü",
        attachment3: "dür",
        attachment4: "de",
        attachment5: "ise"
    },
    {
        number: "4",
        attachment1: "ün",
        attachment2: "ü",
        attachment3: "dür",
        attachment4: "de",
        attachment5: "ise"
    },
    {
        number: "5",
        attachment1: "in",
        attachment2: "i",
        attachment3: "dir",
        attachment4: "de",
        attachment5: "ise"
    },
    {
        number: "6",
        attachment1: "nın",
        attachment2: "sı",
        attachment3: "dır",
        attachment4: "da",
        attachment5: "ise"
    },
    {
        number: "7",
        attachment1: "nin",
        attachment2: "si",
        attachment3: "dir",
        attachment4: "de",
        attachment5: "ise"
    },
    {
        number: "8",
        attachment1: "in",
        attachment2: "i",
        attachment3: "dir",
        attachment4: "de",
        attachment5: "ise"
    },
    {
        number: "9",
        attachment1: "un",
        attachment2: "u",
        attachment3: "dur",
        attachment4: "da",
        attachment5: "ise"
    },
    {
        number: "10",
        attachment1: "un",
        attachment2: "u",
        attachment3: "dur",
        attachment4: "da",
        attachment5: "ise"
    },
    {
        number: "20",
        attachment1: "nin",
        attachment2: "si",
        attachment3: "dir",
        attachment4: "de",
        attachment5: "ise"
    },
    {
        number: "30",
        attachment1: "un",
        attachment2: "u",
        attachment3: "dur",
        attachment4: "da",
        attachment5: "ise"
    },
    {
        number: "40",
        attachment1: "ın",
        attachment2: "ı",
        attachment3: "dır",
        attachment4: "da",
        attachment5: "ise"
    },
    {
        number: "50",
        attachment1: "nin",
        attachment2: "si",
        attachment3: "dir",
        attachment4: "de",
        attachment5: "ise"
    },
    {
        number: "60",
        attachment1: "ın",
        attachment2: "ı",
        attachment3: "dır",
        attachment4: "da",
        attachment5: "ise"
    },
    {
        number: "70",
        attachment1: "in",
        attachment2: "i",
        attachment3: "dir",
        attachment4: "de",
        attachment5: "ise"
    },
    {
        number: "80",
        attachment1: "in",
        attachment2: "i",
        attachment3: "dir",
        attachment4: "de",
        attachment5: "ise"
    },
    {
        number: "90",
        attachment1: "ın",
        attachment2: "ı",
        attachment3: "dır",
        attachment4: "da",
        attachment5: "ise"
    },
    {
        number: "100",
        attachment1: "ün",
        attachment2: "ü",
        attachment3: "dür",
        attachment4: "de",
        attachment5: "ise"
    },
    {
        number: "1000",
        attachment1: "in",
        attachment2: "i",
        attachment3: "dir",
        attachment4: "de",
        attachment5: "ise"
    },
    {
        number: "1000000",
        attachment1: "un",
        attachment2: "u",
        attachment3: "dur",
        attachment4: "da",
        attachment5: "ise"
    },
    {
        number: "1000000000",
        attachment1: "ın",
        attachment2: "ı",
        attachment3: "dır",
        attachment4: "da",
        attachment5: "ise"
    },
    {
        number: "1000000000000",
        attachment1: "un",
        attachment2: "u",
        attachment3: "dur",
        attachment4: "da",
        attachment5: "ise"
    },
    {
        number: "1000000000000000",
        attachment1: "un",
        attachment2: "u",
        attachment3: "dur",
        attachment4: "da",
        attachment5: "ise"
    },
];

function getAttactment(number, attachmentType, onlyAttactment) {
    if (number == "" || Number.isNaN(number)) {
        return "";
    }

    var lastNumber = "";
    var numberText = number.toFixed(2).replace(".00", "");
    var numberTextLength = numberText.length;
    if (numberTextLength == 1) {
        lastNumber = number;
    } else if (getLastNumber(number) == "0" && numberTextLength == 2) {
        lastNumber = number;
    } else if (getLastNumber(number, 2) == "00" && numberTextLength == 3) {
        lastNumber = "100";
    } else if (getLastNumber(number, 3) == "000" && numberTextLength == 4) {
        lastNumber = "1000";
    } else if (getLastNumber(number, 4) == "0000" && numberTextLength == 5) {
        lastNumber = "1000";
    } else if (getLastNumber(number, 5) == "00000" && numberTextLength == 6) {
        lastNumber = "1000";
    } else if (getLastNumber(number, 6) == "000000" && numberTextLength == 7) {
        lastNumber = "1000000";
    } else if (getLastNumber(number, 7) == "0000000" && numberTextLength == 8) {
        lastNumber = "1000000";
    } else if (getLastNumber(number, 8) == "00000000" && numberTextLength == 9) {
        lastNumber = "1000000";
    } else if (getLastNumber(number, 9) == "000000000" && numberTextLength == 10) {
        lastNumber = "1000000000";
    } else if (getLastNumber(number, 10) == "0000000000" && numberTextLength == 11) {
        lastNumber = "1000000000";
    } else if (getLastNumber(number, 11) == "00000000000" && numberTextLength == 12) {
        lastNumber = "1000000000";
    } else if (getLastNumber(number, 12) == "000000000000" && numberTextLength == 13) {
        lastNumber = "1000000000";
    } else if (getLastNumber(number, 13) == "0000000000000" && numberTextLength == 14) {
        lastNumber = "1000000000000";
    } else if (getLastNumber(number, 14) == "00000000000000" && numberTextLength == 15) {
        lastNumber = "1000000000000";
    } else if (getLastNumber(number, 15) == "000000000000000" && numberTextLength == 16) {
        lastNumber = "1000000000000";
    } else if (getLastNumber(number, 16) == "0000000000000000" && numberTextLength == 17) {
        lastNumber = "1000000000000000";
    } else if (getLastNumber(number, 17) == "00000000000000000" && numberTextLength == 18) {
        lastNumber = "1000000000000000";
    } else if (getLastNumber(number, 18) == "000000000000000000" && numberTextLength == 19) {
        lastNumber = "1000000000000000";
    } else {
        lastNumber = getLastNumber(number);

        var sliceIndex = 2;
        var lastNumberExcluding = "0"

        while (lastNumber == lastNumberExcluding) {
            lastNumber = getLastNumber(number, sliceIndex)
            sliceIndex++;
            lastNumberExcluding = lastNumberExcluding + "0";
        }
        if (lastNumber.length >= 3) {
            lastNumber = lastNumber.replace(lastNumber.charAt(0), "1");
        }
    }

    var text = "";
    var attachment = "";
    for (var i = 0; i <= attachments.length; i++) {
        if (attachments[i].number == lastNumber) {
            if (attachmentType == 1) {
                attachment = attachments[i].attachment1;
            } else if (attachmentType == 2) {
                attachment = attachments[i].attachment2;
            } else if (attachmentType == 3) {
                attachment = attachments[i].attachment3;
            } else if (attachmentType == 4) {
                attachment = attachments[i].attachment4;
            } else if (attachmentType == 5) {
                attachment = attachments[i].attachment5;
            }
            break;
        }
    }
    if (onlyAttactment == true) {
        return attachment;
    }
    var formatNumberText = formatNumber(number);
    if (formatNumberText.includes(",")) {
        var decimal = formatNumberText.split(",")[1];
        if (decimal.length == 1) {
            formatNumberText = formatNumberText + "0";
        }
    }
    if (attachmentType == 5) {
        text = formatNumberText + " " + attachment;
    } else {
        text = formatNumberText + "'" + attachment;
    }
    return text;
}

function getLastNumber(number, lengt = 1) {
    var text = (number).toFixed(2);
    text = text.replace(".00", "");
    var lastNumber = text.slice(-lengt);
    return lastNumber;
}

function decimalFix(number) {
    var numberText = number.toFixed(2).replace(".00", "");
    if (numberText.includes(".")) {
        var decimal = numberText.split(".")[1];
        if (decimal.length == 1) {
            numberText = numberText + "0";
            return numberText;
        }
    }
    return numberText;
}

function formatNumber(number, numberOfDigits = 2) {
    try {
        return new Intl.NumberFormat('tr-TR').format(parseFloat(number).toFixed(numberOfDigits));
    } catch (error) {
        return 0;
    }
}