function age() {
    let dayInput = document.getElementById("day").value;
    let monthInput = document.getElementById("month").value;
    let yearInput = document.getElementById("year").value;

    let today = new Date();
    let day = today.getDate();
    let month = 1 + today.getMonth();
    let year = today.getFullYear();

    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (dayInput > day) {
        day = day + months[monthInput - 1];
        month = month - 1;
    }

    if (monthInput > month) {
        year = year - 1;
        month = month + 12;
    }

    let finalDay = day - dayInput;
    let finalMonth = month - monthInput;
    let finalYear = year - yearInput;

    // results displayed in html

    let showDays = document.getElementById("numberOfDays");
    let showMonths = document.getElementById("numberOfMonths");
    let showYears = document.getElementById("numberOfYears");
    
    showYears.innerHTML = finalYear;
    showMonths.innerHTML = finalMonth;
    showDays.innerHTML = finalDay;

    // error states if values are not valid

    let input = document.getElementById("day");
    let error = document.getElementById("error_1");
    let label = document.getElementById("label_one");

    let input_2 = document.getElementById("month");
    let error_2 = document.getElementById("error_2");
    let label_2 = document.getElementById("label_two");

    let input_3 = document.getElementById("year");
    let error_3 = document.getElementById("error_3");
    let label_3 = document.getElementById("label_three");

    if (dayInput < 0 || dayInput > 31) {
        error.innerHTML = "Must be a valid day";
        error.style.fontFamily = "Italic";
        error.style.color = "var(--light-red)";
        label.style.color = "var(--light-red)";
        input.style.border = "0.5px solid var(--light-red)";
        showDays.innerHTML = "- -";
        showMonths.innerHTML = "- -";
        showYears.innerHTML = "- -";
    }

    if (monthInput < 0 || monthInput > 12) {
        error_2.innerHTML = "Must be a valid month";
        error_2.style.fontFamily = "Italic";
        error_2.style.color = "var(--light-red)";
        label_2.style.color = "var(--light-red)";
        input_2.style.border = "0.5px solid var(--light-red)";
        showDays.innerHTML = "- -";
        showMonths.innerHTML = "- -";
        showYears.innerHTML = "- -";
    }

    if (yearInput < 0 || yearInput > year) {
        error_3.innerHTML = "Must be in the past";
        error_3.style.fontFamily = "Italic";
        error_3.style.color = "var(--light-red)";
        label_3.style.color = "var(--light-red)";
        input_3.style.border = "0.5px solid var(--light-red)";
        showDays.innerHTML = "- -";
        showMonths.innerHTML = "- -";
        showYears.innerHTML = "- -";
    }

    // error states if there are no values entered

    if (dayInput === "") {
        error.innerHTML = "This field is required";
        error.style.fontFamily = "Italic";
        error.style.color = "var(--light-red)";
        label.style.color = "var(--light-red)";
        input.style.border = "0.5px solid var(--light-red)";
        showDays.innerHTML = "- -";
        showMonths.innerHTML = "- -";
        showYears.innerHTML = "- -";
    }

    if (monthInput === "") {
        error_2.innerHTML = "This field is required";
        error_2.style.fontFamily = "Italic";
        error_2.style.color = "var(--light-red)";
        label_2.style.color = "var(--light-red)";
        input_2.style.border = "0.5px solid var(--light-red)";
        showDays.innerHTML = "- -";
        showMonths.innerHTML = "- -";
        showYears.innerHTML = "- -";
    }

    if (yearInput === "") {
        error_3.innerHTML = "This field is required";
        error_3.style.fontFamily = "Italic";
        error_3.style.color = "var(--light-red)";
        label_3.style.color = "var(--light-red)";
        input_3.style.border = "0.5px solid var(--light-red)";
        showDays.innerHTML = "- -";
        showMonths.innerHTML = "- -";
        showYears.innerHTML = "- -";
    }

    // if date is not valid 

    months.forEach(element => {
        if (dayInput > element) {
            error.innerHTML = "Must be a valid date";
            error.style.fontFamily = "Italic";
            error.style.color = "var(--light-red)";
            label.style.color = "var(--light-red)";
            input.style.border = "0.5px solid var(--light-red)";

            error_2.style.color = "var(--light-red)";
            label_2.style.color = "var(--light-red)";
            input_2.style.border = "0.5px solid var(--light-red)";

            error_3.style.color = "var(--light-red)";
            label_3.style.color = "var(--light-red)";
            input_3.style.border = "0.5px solid var(--light-red)";

            showDays.innerHTML = "- -";
            showMonths.innerHTML = "- -";
            showYears.innerHTML = "- -";
        }
    });
}