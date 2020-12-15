function GetBookings() {
    let url = 'https://api.sheety.co/e8e5c93834133be34d5302cea5c6ceda/bookingApp/sheet1';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.sheet1S);
            let bookingList = document.getElementById("bookingList");
            bookingList.innerHTML = "";

            let jsonDiv = document.getElementById("json");
            jsonDiv.innerHTMl = "";
            jsonDiv.innerHTML = json.bookings; 

            for(let i =0; i < json.bookings.length;i++){
                let gName = json.bookings[i].name;
                let gEmail = json.bookings[i].email;
                let gPax = json.bookings[i].pax;
                let gId = json.bookings[i].id;

                bookingList.innerHTML += gId + "-" + gName + ", " +
                    gEmail + ", pax:" + gPax + "<br>";
            }
        }); 
}

let getBookingsBtn = document.getElementById("getBooking");
getBookingsBtn.addEventListener("click", function () {
    GetBookings();
});