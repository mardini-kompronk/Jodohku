// mengambil element
const input1 = document.getElementById('input_1');
const input2 = document.getElementById('input_2');
const box = document.querySelector('.box');
const result = document.querySelector('.result');
const text = document.querySelector('.text-result');

// array data

const data = ["Kalian adalah pasangan yg serasi namun terlau banyak rintangan yg harus kalian hadapi di masa yg akan datang. Tetap semangat.",
    "Wahhhh bahaya nih saya mencium bau bau perselingkuhan salah satu diantara kalian.",
    "Selamat ya kalian sebentar lagi akan menuju jenjang pernikahan :).",
    "Sebentar lagi kalian akan putus, siap siap jadi jomblo abadi :D.",
    "Sepertinya kalian cuma main main menjalin hubungan ini, Segeralah menjalin hubungan yg serius."];

const hasil = Math.floor(Math.random() * data.length)

// mengecek value 

function check() {
    if (input1.value == "" || input2.value == "") {
        result.style.display = "flex";
        box.style.display = "none";
        text.innerText = `"Mohon maaf namamu dan nama pasanganmu tidak boleh kosong"`
    } else {
        result.style.display = "flex";
        box.style.display = "none";
        text.innerText = `"Dear ${input1.value} dan ${input2.value}, ${data[hasil]}"`;
    }
}