   function sendMail(){

    let parms = {
        name : document.getElementById( "name" ).value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        message : document.getElementById("message").value,
    }
    
    emailjs.send("service_vuparje","template_4cv6ei5",parms).then(alert("Email Sent !"))
}