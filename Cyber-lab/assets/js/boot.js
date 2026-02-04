const bootLines = [
  "Initializing Cyber Lab OS...",
  "Loading modules...",
  "Mounting virtual labs...",
  "Checking system integrity...",
  "Starting interface...",
  "Access granted ✔"
];

const boot = document.getElementById("boot");
let index = 0;

function nextLine() {
  if (index >= bootLines.length) {
    setTimeout(() => {
      boot.style.display = "none";
      sessionStorage.setItem("booted", "true");
    }, 500);
    return;
  }

  const line = document.createElement("div");
  line.className = "boot-line";
  line.innerHTML = bootLines[index] + '<span class="boot-cursor"></span>';
  boot.appendChild(line);

  index++;
  setTimeout(nextLine, 500);
}

if (!sessionStorage.getItem("booted")) {
  nextLine();
} else {
  boot.style.display = "none";
}
