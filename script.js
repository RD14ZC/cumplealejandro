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

  const placeholder = document.createElement("option");
  placeholder.textContent = "Selecciona tu nombre";
  placeholder.value = "";
  placeholder.disabled = true;
  placeholder.selected = true;
  select.appendChild(placeholder);

  invitados.forEach(n => {
    const opt = document.createElement("option");
    opt.value = n;
    opt.textContent = n;
    select.appendChild(opt);
  });

  const musica = document.getElementById("musica");
  const slider = document.querySelector(".slider");

  document.getElementById("btnNext").addEventListener("click", async () => {
    try {
      musica.volume = 0.4;
      await musica.play();
    } catch {}

    slider.scrollTo({
      left: window.innerWidth,
      behavior: "smooth"
    });
  });

  document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const plato = document.getElementById("plato").value;

    const mensaje =
`🎉 INVITACIÓN 15 AÑOS

👤 ${nombre}
🍽️ ${plato}

💚 ¡Te esperamos!`;

    window.open(
      `https://wa.me/51958680138?text=${encodeURIComponent(mensaje)}`,
      "_blank"
    );
  });

});