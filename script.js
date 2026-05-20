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

  nombres.forEach(n => {
    const opt = document.createElement("option");
    opt.value = n;
    opt.textContent = n;
    selectNombre.appendChild(opt);
  });

  // 🎵 música
  const musica = document.getElementById("musica");

  document.addEventListener("click", function playMusic(){
    musica.volume = 0.4;
    musica.play().catch(()=>{});
  }, { once:true });

  // 📩 transición entre “pantallas”
  document.getElementById("btnAbrir").addEventListener("click", () => {
    document.getElementById("mainCard").style.opacity = "0.3";

    setTimeout(() => {
      document.getElementById("formCard").classList.remove("hidden");
      document.getElementById("formCard").scrollIntoView({ behavior:"smooth" });
    }, 300);
  });

  // 💬 WhatsApp
  document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const plato = document.getElementById("plato").value;

    const mensaje = `🎉 *Confirmación de asistencia*

👤 ${nombre}
🍽️ ${plato}

✨ ¡Nos vemos en la fiesta!`;

    const url = `https://wa.me/51958680138?text=${encodeURIComponent(mensaje)}`;
    window.location.href = url;
  });

});