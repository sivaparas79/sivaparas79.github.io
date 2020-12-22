function GetBookings() {
    let url = 'https://api.sheety.co/e8e5c93834133be34d5302cea5c6ceda/bookingApp/sheet1';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.sheet1);
            let bookingList = document.getElementById("booking-list");
            let bookingIds = [];

            for (let i = 0; i < json.sheet1.length; i++) {
                let gName = json.sheet1[i].name;
                let gEmail = json.sheet1[i].email;
                let gPax = json.sheet1[i].pax;
                let gId = json.sheet1[i].id;
                let gRemarks = json.bookings[i].remarks;
                let buttonId = "delete" + gId;

                let row = bookingList.insertRow(bookingList.rows.length);
                row.insertCell(0).innerHTML = gId;
                row.insertCell(1).innerHTML = gName;
                row.insertCell(2).innerHTML = gEmail;
                row.insertCell(3).innerHTML = gPax;
                row.insertCell(4).innerHTML = gRemarks;
                row.insertCell(1).innerHTML = "<button id='" +
                    buttonId + "' class='btn btn-danger'>Delete</button>";

                bookingIds.push(buttonId);
            }

            for (let j = 0; j < bookingIds.length; j++) {
                let el = document.getElementById(bookingIds[j]);
                el.addEventListener("click", function () {
                    let theId = bookingIds[j].replace("delete", "");
                    DeleteBooking(theId);
                });
            }
        });
}

window.addEventListener("load", function () {
    document.getElementById("refreshList").addEventListener("click", function () {
        GetBookings();
    });
})

function DeleteBooking(id) {
    let url = 'https://api.sheety.co/e8e5c93834133be34d5302cea5c6ceda/bookingApp/bookings' + id;
    fetch(url, {
        method: 'DELETE',
    })
        .then((response) => {
            location.reload();
        });
}