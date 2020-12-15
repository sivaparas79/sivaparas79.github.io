function GetBooking() {
    let url = 'https://api.sheety.co/e8e5c93834133be34d5302cea5c6ceda/bookingApp/sheet1';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.sheet1S);
            let bookingList = document.getElementById("bookingList");
            bookingList.innerHTML = "";
            for(let 1 =0; i < json.bookings.length;i++){
                let gName = json.bookings[i].name;
                let gEmail = json.bookings[i].email;
                let gPax = json.bookings[i].pax;
                let gId = json.bookings[i].id;

                bookingList.innerHTML += gId + "-" + gName + ", " +
                    gEmial + ", pax:" + pax + "<br>";
            }
        }); 
}

let getBookingsBtn = document.getElementById("getBokking");
getBookingsBtn.addEventListener("click", function () {
    GetBookings();
});