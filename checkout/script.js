// Function for button that makes information box appear (Credit/Debit)
function Disapear(){
    var x = document.getElementById("disapear");
    if(x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// Function for Cash button (Pay on Arrival box)
function Cash(){
    var x = document.getElementById("cash");
    if(x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// Function to save Credit/Debit information and redirect to ty.html
function saveThenDirect(){
    event.preventDefault(); // Prevent form submission

    var lastname = document.getElementById('last').value;
    var firstname = document.getElementById('first').value;
    var email = document.getElementById('email').value;
    var PhoneCred = document.getElementById('phonenum').value;
    var card = document.querySelector('input[name="bank"]:checked') ? document.querySelector('input[name="bank"]:checked').value : '';
    var CreDeb = document.querySelector('input[name="paymethod"]:checked') ? document.querySelector('input[name="paymethod"]:checked').value : '';
    var CardDigit = document.getElementById('cardnum').value;
    var SecurityDigit = document.getElementById('securCode').value;
    var ExpDate = document.getElementById('expdate').value;
    var Bill = document.getElementById('billzip').value;

    // Only save data if all fields are filled
    if (lastname && email && firstname && PhoneCred && card && CreDeb && CardDigit && SecurityDigit && ExpDate && Bill) {
        localStorage.setItem('paymentType', 'credit'); // Store payment type as 'credit'
        localStorage.setItem('last', lastname);
        localStorage.setItem('first', firstname);
        localStorage.setItem('email', email);
        localStorage.setItem('phonenum', PhoneCred);
        localStorage.setItem('bank', card);
        localStorage.setItem('paymethod', CreDeb);
        localStorage.setItem('cardnum', CardDigit);
        localStorage.setItem('securCode', SecurityDigit);
        localStorage.setItem('expdate', ExpDate);
        localStorage.setItem('billzip', Bill);

        // Redirect to the Credit/Debit Thank You page
        window.location.href = 'ty.html';
    } else {
        alert("Information Required Before Continuing");
    }
}

// Function to handle Pay on Arrival (Cash) payment and redirect to ThankYou.html
function ShowMeTheMoney() {
    event.preventDefault(); // Prevent form submission

    var CashFirst = document.getElementById('cashfirst').value;
    var CashLast = document.getElementById('cashlast').value;
    var CashPhone = document.getElementById('cashphone').value;
    var CashEmail = document.getElementById('cashemail').value;

    // Only save data if all fields are filled
    if (CashFirst && CashLast && CashPhone && CashEmail) {
        localStorage.setItem('paymentType', 'cash'); // Store payment type as 'cash'
        localStorage.setItem('cashfirst', CashFirst);
        localStorage.setItem('cashlast', CashLast);
        localStorage.setItem('cashphone', CashPhone);
        localStorage.setItem('cashemail', CashEmail);

        // Redirect to the Cash Thank You page
        window.location.href = "ThankYou.html";
    } else {
        alert("Information Required Before Continuing");
    }
}

// Code for Credit/Debit Thank You page (ty.html)
if (localStorage.getItem('paymentType') === 'credit') {
    var firstname = localStorage.getItem("first");
    var lastname = localStorage.getItem("last");
    var PhoneCred = localStorage.getItem('phonenum');
    var card = localStorage.getItem('bank');
    var CreDeb = localStorage.getItem('paymethod');
    var CardDigit = localStorage.getItem('cardnum');
    var SecurityDigit = localStorage.getItem('securCode');
    var ExpDate = localStorage.getItem('expdate');
    var Bill = localStorage.getItem('billzip');

    if (lastname) {
        document.getElementById("thanks").textContent = "Thank you for your reservation, " + firstname + " " + lastname + ". Phone Number: " + PhoneCred + ".";
        document.getElementById("paymentDetails").textContent = "Payment Method: " + CreDeb + ", Bank: " + card + ", Card Number: " + CardDigit + ", Security Code: " + SecurityDigit + ", Expiration Date: " + ExpDate + ", Billing Zip Code: " + Bill + ".";
    } else {
        document.getElementById("thanks").textContent = "Error! No data found.";
    }
}

// Code for Pay on Arrival Thank You page (ThankYou.html)
if (localStorage.getItem('paymentType') === 'cash') {
    var CashFirst = localStorage.getItem('cashfirst');
    var CashLast = localStorage.getItem('cashlast');
    var CashPhone = localStorage.getItem('cashphone');
    var CashEmail = localStorage.getItem('cashemail');

    if (CashFirst) {
        document.getElementById("tycash").textContent ="Thank you for your reservation, " + CashFirst + " " + CashLast +", Payment Method: Pay on Arrival." + ".";
        document.getElementById("tydue").textContent ="Phone Number: " + CashPhone + ", " +"Email: " + CashEmail + ".";
    } else {
        document.getElementById("appreciate").textContent = "Error! No data found.";
    }
}

function TakeMeHome(){
    window.location.href = 'https://shisnoking.github.io/Cafe-Leblanc/';
}
