function GetBookings() {
    let url = 'https://api.sheety.co/e8e5c93834133be34d5302cea5c6ceda/bookingApp/sheet1';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.sheet1);
            let bookingList = document.getElementById("bookingList");
            bookingList.innerHTML = "";

            let jsonDiv = document.getElementById("json");
            jsonDiv.innerHTMl = "";
            jsonDiv.innerHTML = json.sheet1; 

            for(let i =0; i < json.sheet1.length;i++){
                let gName = json.sheet1[i].name;
                let gEmail = json.sheet1[i].email;
                let gPax = json.sheet1[i].pax;
                let gId = json.sheet1[i].id;

                bookingList.innerHTML += gId + "-" + gName + ", " +
                    gEmail + ", pax:" + gPax + "<br>";
            }
        }); 
}

let getBookingsBtn = document.getElementById("getBooking");
getBookingsBtn.addEventListener("click", function () {
    GetBookings();
});