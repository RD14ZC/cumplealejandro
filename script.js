document.addEventListener("DOMContentLoaded", () => {

  const invitados = [
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

  const select = document.getElementById("nombre");

  invitados.forEach(n => {
    const opt = document.createElement("option");
    opt.value = n;
    opt.textContent = n;
    select.appendChild(opt);
  });

  // 🎵 música
  const musica = document.getElementById("musica");
  document.addEventListener("click", () => {
    musica.volume = 0.4;
    musica.play().catch(()=>{});
  }, { once:true });

  // 🎟️ SLIDE
  document.getElementById("btnNext").addEventListener("click", () => {
    document.querySelector(".slider").style.transform = "translateX(-50%)";
  });

  // 💬 WhatsApp
  document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = select.value;
    const plato = document.getElementById("plato").value;

    const mensaje = `🎉 *VIP CONFIRMACIÓN*

👤 ${nombre}
🍽️ ${plato}

🎟️ Invitación 15 años`;

    window.location.href =
      `https://wa.me/51958680138?text=${encodeURIComponent(mensaje)}`;
  });

});