function GetBookings() {
    let url = 'https://api.sheety.co/e8e5c93834133be34d5302cea5c6ceda/bookingApp/bookings';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.sheet1);
            let bookingList = document.getElementById("booking-list");
            let bookingIds = [];

            //clear the table rows
            for (let k = bookingList.rows.length - 1; k > 0; k--) {
                bookingList.deleteRow(k);
            }

            for (let i = 0; i < json.sheet1.length; i++) {
                let gId = json.sheet1[i].id;
                let gName = json.sheet1[i].name;
                let gEmail = json.sheet1[i].email;
                let gDate = json.sheet1[i].date;
                let gTime = json.sheet1[i].time;
                let gRemarks = json.bookings[i].remarks;
                let buttonId = "delete" + gId;

                let row = bookingList.insertRow(bookingList.rows.length);
                row.insertCell(0).innerHTML = gId;
                row.insertCell(1).innerHTML = gName;
                row.insertCell(2).innerHTML = gEmail;
                row.insertCell(3).innerHTML = gDate;
                row.insertCell(4).innerHTML = gTime;
                row.insertCell(5).innerHTML = gRemarks;
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
            GetBookings();
        });
}