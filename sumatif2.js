document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

const nama = document.querySelector('[name="nama"]').value;
const kelas = document.querySelector('[name="kelas"]').value;

const umur = document.querySelectorAll('input[name="umur"]:checked');
const jk = document.querySelector('input[name="jk"]:checked');
const tingkat = document.querySelectorAll('input[name="tingkat"]:checked');

if (!nama || !kelas) {
    alert("Nama & Kelas wajib diisi!");
    return;
}

if (!jk) {
    alert("Pilih jenis kelamin!");
	return;
}

let umurList = [];
umur.forEach(u => umurList.push(u.value));

let jkValue = jk.value;

let tingkatList = [];
    tingkat.forEach(t => tingkatList.push(t.value));

    alert(
        "Pendaftaran Berhasil!\n\n" +
        "Nama: " + nama + "\n" +
        "Kelas: " + kelas + "\n" +
        "Umur: " + umurList.join(", ") + "\n" +
        "Jenis Kelamin: " + jk.value + "\n" +
        "Tingkatan: " + tingkatList.join(", ")
    );
});