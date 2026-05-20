document.addEventListener("DOMContentLoaded", () => {

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

  const selectNombre = document.getElementById("nombre");

  [...new Set(nombres)].forEach(n => {
    const opt = document.createElement("option");
    opt.value = n;
    opt.textContent = n;
    selectNombre.appendChild(opt);
  });

  const formCard = document.getElementById("formCard");
  const btnAbrir = document.getElementById("btnAbrir");

  btnAbrir.addEventListener("click", () => {
    formCard.classList.remove("hidden");
    formCard.scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const plato = document.getElementById("plato").value;

    const mensaje = `🎉 Confirmación de asistencia

👤 Nombre: ${nombre}
🍽️ Plato: ${plato}

✨ ¡Nos vemos en la fiesta! 🎊`;

    const url = `https://wa.me/51958680138?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
  });

});