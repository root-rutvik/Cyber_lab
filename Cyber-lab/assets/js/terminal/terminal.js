const container = document.getElementById("terminal-container");

if (!container) {
  console.error("Terminal container not found");
}

// Inject terminal HTML
container.innerHTML = `
  <div class="terminal">
    <div class="terminal-output" id="terminalOutput"></div>
    <div class="terminal-input">
      <span class="prompt">cyber@lab:$</span>
      <input
        type="text"
        id="terminalInput"
        autocomplete="off"
        spellcheck="false"
      />
    </div>
  </div>
`;

const input = document.getElementById("terminalInput");
const output = document.getElementById("terminalOutput");

function print(text) {
  const line = document.createElement("div");
  line.textContent = text;
  output.appendChild(line);
  output.scrollTop = output.scrollHeight;
}

print("Cyber Lab Terminal — type 'help'");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const cmd = input.value.trim();
    print(`cyber@lab:$ ${cmd}`);

    if (TerminalCommands[cmd]) {
      const result = TerminalCommands[cmd]();

      if (result === "__CLEAR__") {
        output.innerHTML = "";
      } else {
        print(result);
      }
    } else {
      print("command not found");
    }

    input.value = "";
  }
});

// Toggle terminal visibility
function toggleTerminal() {
  container.style.display =
    container.style.display === "none" ? "block" : "none";

  input.focus();
}

window.toggleTerminal = toggleTerminal;
