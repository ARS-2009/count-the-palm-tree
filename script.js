const area = document.getElementById("area");

let jumlahPohon = Math.floor(Math.random()*70)+1;

/* generate pohon */
for(let i=0;i<jumlahPohon;i++){

let img = document.createElement("img");

img.src="nyawit.jpg";

img.style.left=Math.random()*85+"%";
img.style.top=Math.random()*70+"%";

area.appendChild(img);

}

/* tambah */
function tambah(){

let input=document.getElementById("inputUser");
input.value=parseInt(input.value)+1;

}

/* kurang */
function kurang(){

let input=document.getElementById("inputUser");
input.value=parseInt(input.value)-1;

}

/* cek jawaban */
function cekJawaban(){

let jawaban=parseInt(document.getElementById("inputUser").value);

let dialog=document.getElementById("dialog");
let karakter=document.getElementById("karakter");
let meme=document.getElementById("meme67");

let selisih=Math.abs(jawaban-jumlahPohon);

/* reset meme */
meme.style.display="none";

/* EASTER EGG 67 */
if(jawaban==67){

meme.style.display="block";

karakter.src="prabowo senang.jpg";

dialog.innerText="🗿 6️⃣7️⃣ DETECTED! Kamu menemukan easter egg!";

}

/* MEME 69 */
else if(jawaban==69){

karakter.src="prabowo ngamuk.jpg";

dialog.innerText="😑 Ini bukan game meme! Fokus hitung pohonnya!";

}

/* BENAR */
else if(jawaban==jumlahPohon){

karakter.src="prabowo senang.jpg";

dialog.innerText="✅ Selamat!, kamu berhasil menebak jumlah pohon sawit dengan benar.";

}

/* HAMPIR BENAR */
else if(selisih<=2){

karakter.src="prabowo ngamuk.jpg";

dialog.innerText="🤨 Hampir benar... hitung lagi dengan teliti!";

}

/* SALAH JAUH */
else if(selisih>10){

karakter.src="prabowo ngamuk.jpg";

dialog.innerText="Nyawit nih orang";

}

/* SALAH BIASA */
else{

karakter.src="prabowo ngamuk.jpg";

dialog.innerText="❌ Kamu kurang teliti! Coba hitung lagi.";

}

}