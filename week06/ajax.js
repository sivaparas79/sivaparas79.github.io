function getrandomUser(){
    let xhttp = new XMLHttpRequest(); //create request obj

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this,response);
            let elFirstName=document.getElementById("firstName");
            let elLastName=document.getElementById("lastName");
            let elJasonResult=document.getElementById("jsonResult");
            let elUSerImage=document.getElementById("userImage");
            let elPhone=document.getElementById("phone");
            let elAddress=document.getElementById("address");
            let elEmail=document.getElementById("email");

            elFirstName.innerHTML = data.result[0].name,first;
            
            elJasonResult.innerHTML = this.response;
        }
    }

    xhttp.open("GET", "https://randomuser.me/api/",true);
    xhttp.send();
}

let elGetRandomUser = document.getElementById("getRandomUserBtn");
elGetRandomUser.addEventListener("click", fucntion () {
    getrandomUser();
}); 