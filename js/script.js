function cekPhishing(){

document.getElementById("hasil").innerHTML =
"✅ Benar! Ini adalah email phishing. Domain palsu, menggunakan ancaman, dan link mencurigakan.";

document.getElementById("hasil").style.color="green";

}

function cekSalah(){

document.getElementById("hasil").innerHTML =
"❌ Jawaban kurang tepat. Email tersebut adalah phishing karena alamat email dan link tidak resmi.";

document.getElementById("hasil").style.color="red";

}

function cekWA(){

document.getElementById("hasil2").innerHTML =
"✅ Benar! Ini adalah pesan phishing yang menawarkan hadiah palsu.";

document.getElementById("hasil2").style.color="green";

}

function cekWASalah(){

document.getElementById("hasil2").innerHTML =
"❌ Jawaban kurang tepat. Jangan mudah percaya pada hadiah yang meminta Anda mengklik tautan.";

document.getElementById("hasil2").style.color="red";

}
function hitungNilai(){

let score=0;

const jawaban=document.querySelectorAll('input[type="radio"]:checked');

jawaban.forEach(function(item){

score += Number(item.value);

});

let nilai=score*20;

let hasil="";

if(nilai==100){

hasil="🏆 Luar Biasa! Nilai Anda : "+nilai;

}else if(nilai>=80){

hasil="🥇 Sangat Baik! Nilai Anda : "+nilai;

}else if(nilai>=60){

hasil="👍 Cukup Baik. Nilai Anda : "+nilai;

}else{

hasil="📚 Nilai Anda : "+nilai+"<br>Silakan pelajari kembali materi Cyber Security.";

}

document.getElementById("score").innerHTML=hasil;

}
