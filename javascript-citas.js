// Función para volver a la página anterior
function goBack() {
    window.history.back();
}

// Función para enviar el formulario de agendar citas usando EmailJS
document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío por defecto

    const templateParams = {
        name: document.getElementById("name").value,
        idNumber: document.getElementById("idNumber").value,
        phone: document.getElementById("phone").value,
        reason: document.getElementById("reason").value
    };

    emailjs.send("Agendar_citas", "Agendamiento_citas", templateParams)
        .then(function(response) {
            alert("Cita agendada con éxito!", response.status, response.text);
        }, function(error) {
            alert("Hubo un error al agendar la cita. Intenta nuevamente.", error);
        });
});
