var currentTab = 0;
showTab(currentTab);
function showTab(n) {

    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";

    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == 0) {
        document.getElementById('nextBtn').innerHTML = 'Start Now'
    }
    else if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }

    fixStepIndicator(n)
}

function nextPrev(n) {

    var x = document.getElementsByClassName("tab");

    if (n == 1 && !validateForm()) return false;

    x[currentTab].style.display = "none";

    currentTab = currentTab + n;

    if (currentTab >= x.length) {

        document.getElementById("regForm").submit();
        return false;
    }

    showTab(currentTab);
}

function validateForm() {

    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");

    for (i = 0; i < y.length; i++) {

        if (y[i].value == "") {

            y[i].className += " invalid";

            valid = false;
        }
    }

    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid;
}

function fixStepIndicator(n) {

    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }

    x[n].className += " active";
}

function description(x) {
    let l = document.getElementsByClassName('element')
    let p = document.getElementsByClassName('description')
    l[x].style.display = 'none'
    p[x].style.display = 'initial'

}
function back(x, event) {
    event.preventDefault()
    let l = document.getElementsByClassName('element')
    let p = document.getElementsByClassName('description')
    l[x].style.display = 'block'
    p[x].style.display = 'none'
}

// logic
let thickness = null;

function tricepThickness() {
	const options = document.getElementsByName('1');
	for (let i = 0; i < options.length; i++) {
		if (options[i].checked) {
			const valueRange = options[i].value.split('-');
			const min = parseInt(valueRange[0]);
			const max = parseInt(valueRange[1]);
			thickness = Math.floor(Math.random() * (max - min + 1) + min);
			break;
		}
	}
	if (thickness !== null) {
		// Use the selected thickness as needed
		console.log(`Selected tricep thickness: ${thickness}`);
	} else {
		alert('Please select an option');
	}
}
