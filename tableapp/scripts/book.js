function BookNow(userName, userEmail, userTime, userDate, userRemarks) {
    let url = 'https://api.sheety.co/e8e5c93834133be34d5302cea5c6ceda/bookingApp/bookings';
    let body = {
        booking: {
            name: userName,
            email: userEmail,
            date: userDate,
            time: userTime,
            remarks: userRemarks
        }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then(json => {
            alert(json.booking.name + " added!");
        });
}

window.addEventListener("load", function () {
    document.getElementById("bookNow").addEventListener("click", function () {
        let userName = document.getElementById("userName").value;
        if (userName === "") {
            alert("Name cannot be empty!");
            return;
        }
        let userEmail = document.getElementById("userEmail").value;
        if (userEmail === "") {
            alert("Email cannot be empty!");
            return;
        }
        let userDate = document.getElementById("userDate").value;
        if (userDate === "") {
            alert("Date cannot be empty!");
            return;
        }
        let userTime = document.getElementById("userTime").value;
        let userRemarks = document.getElementById("userRemarks").value;

        BookNow(userName, userEmail, userDate, userTime, userRemarks);
    });
});