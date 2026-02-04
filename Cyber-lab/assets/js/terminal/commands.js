const TerminalCommands = {

  help() {
    return `
Available commands:
  help
  ls
  pwd
  whoami
  clear
  nmap
  ifconfig
  netstat
  ping
  sqlmap
  nikto
  hydra
  gobuster
  msfconsole

⚠️ All commands are simulated for education.
    `;
  },

  ls() {
    return "tools  labs  exploits  wordlists";
  },

  pwd() {
    return "/home/cyberlab";
  },

  whoami() {
    return AppState.user.username;
  },

  clear() {
    return "__CLEAR__";
  },

  // ───── NETWORK ─────

  nmap() {
    return `
Starting Nmap 7.94 ( https://nmap.org )
Scanning target 192.168.1.1
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
443/tcp  open  https
Nmap done.
    `;
  },

  ifconfig() {
    return `
eth0: inet 192.168.1.10  netmask 255.255.255.0
lo:   inet 127.0.0.1
    `;
  },

  netstat() {
    return `
Proto Local Address   State
tcp   0.0.0.0:22      LISTEN
tcp   0.0.0.0:80      LISTEN
    `;
  },

  ping() {
    return `
PING google.com (142.250.190.14): 56 data bytes
64 bytes from google.com: icmp_seq=1 ttl=117 time=18 ms
64 bytes from google.com: icmp_seq=2 ttl=117 time=17 ms
    `;
  },

  // ───── WEB ─────

  nikto() {
    return `
+ Target IP: 192.168.1.1
+ Server: Apache/2.4.41
+ OSVDB-3233: /admin/ found
+ End of scan
    `;
  },

  gobuster() {
    return `
/admin   (Status: 301)
/login   (Status: 200)
/uploads (Status: 403)
    `;
  },

  sqlmap() {
    return `
[INFO] testing connection to the target URL
[INFO] parameter 'id' appears to be injectable
[CRITICAL] SQL Injection vulnerability found!
    `;
  },

  // ───── EXPLOIT ─────

  hydra() {
    return `
Hydra v9.5
[22][ssh] host: 192.168.1.1  login: admin  password: password123
    `;
  },

  msfconsole() {
    return `
Metasploit Framework Console
msf6 > use exploit/multi/handler
msf6 > exploit
Session opened.
    `;
  }
};
