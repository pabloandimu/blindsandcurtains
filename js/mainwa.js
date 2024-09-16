let whatsApp = "https://api.whatsapp.com/send/?phone=5493413236230&text=";

// document.addEventListener('DOMContentLoaded', function() {
//   document.getElementById('enlaceForm').addEventListener('click', function(a) {
//     a.preventDefault();



    if (document.getElementById('enlaceForm') !== null) {
      document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('enlaceForm').addEventListener('click', function(a) {
          a.preventDefault();
     
  

    
    let conector = "+"
    let nombre =  document.getElementById('name').value;
    let correo = document.getElementById('email').value;
    // let telefono = document.getElementById('phone').value;
    // let asunto = document.getElementById('subject').value;
    let mensaje = document.getElementById('message').value;
    // document.getElementById('contact-form').submit();


    if(nombre === ""){
        document.getElementById('name').value = "";
        document.getElementById('labelNombre').innerText = "Por favor escriba su NOMBRE"
        document.getElementById("labelNombre").style.color = "red";
        document.getElementById("name").style.borderColor = "red";
    } else 
    if(correo === "" || ( !(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(correo)) )){             
        document.getElementById('labelNombre').innerText = "Nombre"
        document.getElementById("labelNombre").style.color = "green";
        document.getElementById("name").style.borderColor = "#dadada";
        // document.getElementById('email').value = "";    
        document.getElementById('labelEmail').innerText = "Por favor escriba un EMAIL válido"
        document.getElementById("labelEmail").style.color = "red";
        document.getElementById("email").style.borderColor = "red";
    } else 
    if(mensaje === ""){
        document.getElementById('labelEmail').innerText = "EMAIL"
        document.getElementById("labelEmail").style.color = "green";
        document.getElementById("email").style.borderColor = "#dadada";
        document.getElementById('message').value = "";    
        document.getElementById('labelMensaje').innerText = "Por favor escriba su MENSAJE"
        document.getElementById("labelMensaje").style.color = "red";
        document.getElementById("message").style.borderColor = "red";
    } else 
    if(nombre !== "" && 
       correo !== "" && 
       mensaje!== ""){
       document.getElementById('labelMensaje').innerText = "MENSAJE"
       document.getElementById("labelMensaje").style.color = "green";
       document.getElementById("message").style.borderColor = "#dadada";
       setTimeout(() => {
        enviar();
      }, "500");
        
    }

    function enviar () {
        window.open(whatsApp+
            "Mensaje Web de: "+conector+"%0A"+conector+
            " NOMBRE:  "+conector+nombre+" "+conector+"%0A"+conector+
            " EMAIL:  "+conector+correo+" "+conector+"%0A"+conector+
          //   " TELEFONO:  "+conector+telefono+" "+conector+"%0A"+conector+
          //   " ASUNTO:  "+conector+asunto+" "+conector+"%0A"+conector+
            " MENSAJE:  "+conector+mensaje+"   ///");    

            document.getElementById('contact-form').submit(); 
    }

                   
  })
});
}



