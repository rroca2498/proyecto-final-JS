const mail = document.querySelector(".dirMail");

const nombre = document.querySelector(".nombreMail");

const boton = document.querySelector(".enviarMail");

boton.addEventListener("click", () =>{
    

Swal.fire({
    position: 'center',
    icon: 'success',
    title: `Envio exitoso. Gracias ${nombre.value} `,
    showConfirmButton: false,
    timer: 1500
  })

  console.log(nombre.value);
  console.log(mail.value);
})