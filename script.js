document.addEventListener("DOMContentLoaded", () => {

  // 👥 lista de invitados
  const nombres = [
    "ARROYO MAURATE VALENTINA RAFAELA",
    "CANO VANINI RENZO JULIAN",
    "CASAS SINCHE BRIGITH THALIA",
    "ESTEBAN FLORES MISOL YUMALAY",
    "ESTEBAN ROSALES MARX GABRIEL",
    "GARAY AYLAS",
    "GUILLEN COTERA MARLENY YBONY",
    "LUJAN VALENCIA LEONARDO JEFFREY",
    "MADRID SIMEON GERALDINE",
    "MEJIA INGAROCA EVIAN MIRKO",
    "POMASUNCO ARIZABAL AUDREY GIA",
    "RAMIREZ NUÑEZ ADRIANA ISABELA",
    "RODRIGUEZ AQUINO LUCIANA MURIEL",
    "ROJAS ARANZAMENDI YANELITA XIMENA",
    "SANCHEZ SALINAS ALEXANDER STEFAN",
    "SOLIS QUISPE RIZZOLI ANDREA",
    "URBANO MAGUIÑA HEISEL NAOMI"
  ];

  const nombresUnicos = [...new Set(nombres)];

  const selectNombre = document.getElementById("nombre");

  nombresUnicos.forEach(n => {
    const opt = document.createElement("option");
    opt.value = n;
    opt.textContent = n;
    selectNombre.appendChild(opt);
  });

  // mostrar formulario
  const formCard = document.getElementById("formCard");
  const btnAbrir = document.getElementById("btnAbrir");

  btnAbrir.addEventListener("click", () => {
    formCard.classList.remove("hidden");
    formCard.scrollIntoView({ behavior: "smooth" });
  });

  // enviar WhatsApp
  document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const plato = document.getElementById("plato").value;
    const btn = e.target.querySelector("button");

    if (!nombre || !plato) {
      alert("Por favor completa todos los campos");
      return;
    }

    btn.disabled = true;
    btn.textContent = "Enviando...";

    const mensaje = `🎉 *Confirmación de asistencia*

👤 Nombre: ${nombre}
🍽️ Plato: ${plato}

✨ ¡Nos vemos en la fiesta! 🎊`;

    const url = `https://wa.me/51958680138?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");

    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = "Enviar por WhatsApp 💬";
    }, 2000);
  });

});