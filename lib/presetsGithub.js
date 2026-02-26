// Listar presets (esto sí puede ser público)
const url = 'https://api.github.com/repos/DanMartinez-kz/ArrMidi/contents/public/presets/';
fetch(url)
  .then(response => response.json())
  .then(data => {
    const archivosJson = data.filter(file => file.name.endsWith('.json'));
    const lista = document.getElementById('mi-lista');
    archivosJson.forEach(file => {
      const li = document.createElement('li');
      li.textContent = file.name;
      lista.appendChild(li);
    });
  })
  .catch(error => console.error('Error al obtener archivos:', error));


// Guardar preset (llama a tu backend en Vercel)
async function guardarPreset(nombre, contenidoJson) {
  const response = await fetch("/pages/api/guardarPreset.js", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, contenidoJson })
  });

  const result = await response.json();
  console.log("Resultado:", result);
}

// Abrir el diálogo
const dialogo = document.getElementById("dialogo-preset");
document.getElementById("abrir-dialogo").addEventListener("click", () => {
  dialogo.showModal();
});

// Guardar cuando se confirma
document.getElementById("guardar").addEventListener("click", () => {
  const nombre = document.getElementById("nombre-preset").value.trim();
  if (nombre) {
const arch = {
  "presetName": "Simple Bass",
  "settings": {
    "oscillator": "square",
    "filterCutoff": 500,
    "volume": 0.8
  }
};
    guardarPreset(nombre, arch); // style es tu objeto JSON actual
  }
});