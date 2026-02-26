import { loadPresets } from '../lib/presets';
export default function Home() {
  return (
    <div>
      <ul id="mi-lista"></ul>

      <section className="panel">
        <button id="play">▶︎ Play</button>
        <button id="stop">■ Stop</button>
        <button id="clear" data-ocultar="true">🗑️ Clear</button>

        <div id="divBpm">
          <label>
            BPM <span id="bpmValue">120</span>
          </label>
          <input type="range" id="bpm" min="40" max="240" defaultValue="120" />
        </div>

        <label id="contBPM" style={{ fontSize: "40px" }}>1</label>
        <span id="chord"></span>

        <button id="reproduccion">Modo Reproducción</button>
        <button id="saveStyle" data-ocultar="true">Cargar Style</button>
        <button onClick={() => console.log("Guardar Style")} data-ocultar="true">
          Guardar Style
        </button>
        <button id="loadPatron" data-ocultar="true">Cargar Patrón</button>

        <input type="file" id="fileInput" accept="application/json" style={{ display: "none" }} />
        <select id="midiIn"></select>
        <select id="midiOut"></select>
      </section>

      <div id="partes" data-ocultar="true"></div>
      <div id="bases"></div>

      <section>
        <dialog id="dlg">
          <label>Instrumento</label>
          <input type="text" id="instrumento" /><br />
          <label>Canal</label>
          <input type="number" id="can" min="1" max="16" step="1" /><br />
          <label>Modo</label>
          <select id="modo"></select><br />
          <input type="number" id="rangI" />
          <input type="number" id="rangF" />
          <button onClick={() => console.log("Aceptar dlg")}>Aceptar</button>
        </dialog>

        <dialog id="opcP">
          <label>Canal</label>
          <input type="number" id="chn" min="1" max="16" /><br />
          <button onClick={() => console.log("Aceptar opcP")}>Aceptar</button>
        </dialog>

        <dialog id="dlgV">
          <label>Variante</label>
          <input type="text" id="variant" /><br />
          <button onClick={() => console.log("Aceptar dlgV")}>Aceptar</button>
        </dialog>
      </section>

      <div className="wrap" id="wrapId" data-ocultar="true">
        <div className="keys">
          <canvas id="keys" width="50" height="420"></canvas>
        </div>
        <div className="roll">
          <canvas id="roll" width="880" height="420"></canvas>
        </div>
      </div>

      <div id="variaciones"></div>

      {/* Botón y diálogo para guardar preset */}
      <button id="abrir-dialogo">Guardar preset</button>

      <dialog id="dialogo-preset">
        <form method="dialog">
          <label htmlFor="nombre-preset">Nombre del preset:</label>
          <input type="text" id="nombre-preset" placeholder="style.json" required />
          <menu>
            <button id="cancelar" value="cancel">Cancelar</button>
            <button id="guardar" value="default">Guardar</button>
          </menu>
        </form>
      </dialog>
    </div>
  );
}
