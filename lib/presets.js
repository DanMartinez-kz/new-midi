export async function loadPresets() {
  try {
    const res = await fetch("/presets/default.json");
    if (!res.ok) throw new Error("Error HTTP: " + res.status);

    const data = await res.json();
    console.log("Presets cargados:", data);
    aplicarPreset(data);
  } catch (err) {
    console.error("Error cargando presets:", err);
  }
}

export function aplicarPreset(data) {
  console.log("Style cargado:", data);
  // Aquí puedes guardar el style en una variable global o estado
  // Ejemplo simple:
  window.style = data;
  drawNotes();
}
