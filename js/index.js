// Ucapan Selamat Datang
let nameInput = prompt("Masukkan nama Anda:");
if (nameInput) {
  document.getElementById("userName").textContent = nameInput;
}

// Validasi Form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  if (!name || !email || !phone || !message) {
    alert("Semua field wajib diisi!");
    return;
  }

  document.getElementById("result").innerHTML = `
        <h3>Data Terkirim</h3>
        <p>Nama: ${name}</p>
        <p>Email: ${email}</p>
        <p>Telepon: ${phone}</p>
        <p>Pesan: ${message}</p>
    `;

  document.getElementById("contactForm").reset();
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const birth = document.getElementById("birth").value;
  const message = document.getElementById("message").value;
  const genderInput = document.querySelector('input[name="gender"]:checked');

  if (!name || !birth || !genderInput || !message) {
    alert("Semua field wajib diisi!");
    return;
  }

  const now = new Date().toLocaleString("id-ID");

  // ISI OUTPUT (KANAN BAWAH)
  document.getElementById("timeResult").textContent = now;
  document.getElementById("nameResult").textContent = name;
  document.getElementById("birthResult").textContent = birth;
  document.getElementById("genderResult").textContent = genderInput.value;
  document.getElementById("messageResult").textContent = message;

  // Update sapaan
  document.getElementById("userName").textContent = name;
});
