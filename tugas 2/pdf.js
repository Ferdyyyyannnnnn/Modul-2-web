document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.getElementById("registrationForm");
  const message = document.getElementById("message");

  registrationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if ((nama, email, password)) {
      message.textContent = `Pendaftaran berhasil untuk ${nama} dengan email ${email}`;
    } else {
      alert("Anda harus mengisi data lengkap!");
    }
    // Di sini, Anda dapat mengirimkan data pendaftaran ke server atau melakukan validasi lainnya.
    // Contoh sederhana, hanya menampilkan pesan sukses.
  });
});
