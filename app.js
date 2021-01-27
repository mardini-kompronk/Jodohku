// mengambil text value
const input1 = document.getElementById('input_1');
const input2 = document.getElementById('input_2');

// array data

const data = ["Sampai ke pernikahan", "Bakal ada yg selingkuh", "tidak di restui orang tua", "Sebentar lagi akan putus", "Tidak serius menjalin hubungan"];

const hasil = Math.floor(Math.random() * data.length)
console.log(data[hasil]);

function check() {
    if (input1.value == "") {
        alert("maaf");
    } else {
        alert(`Hasil untuk ${input1.value} adalah ${data[hasil]}`)
        input1.value = "";
    }
}