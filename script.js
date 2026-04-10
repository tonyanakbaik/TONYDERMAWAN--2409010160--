let data = [
  {nama:"Bali", harga:2000000},
  {nama:"Lombok", harga:1800000},
  {nama:"Raja Ampat", harga:5000000},
  {nama:"Yogyakarta", harga:1500000}
];

// tampilkan data
function tampil(){
  let el = document.getElementById("data");
  el.innerHTML = "";

  data.forEach((d,i)=>{
    el.innerHTML += `
      <div class="item">
        <h3>${d.nama}</h3>
        <p>Rp ${d.harga}</p>
        <button onclick="hapus(${i})">Hapus</button>
      </div>
    `;
  });
}

// hapus
function hapus(i){
  data.splice(i,1);
  tampil();
}

// tambah
function tambah(){
  let nama = document.getElementById("namaPaket").value;
  let harga = document.getElementById("hargaPaket").value;

  if(nama == "" || harga == ""){
    alert("Isi semua!");
    return;
  }

  data.push({nama, harga});
  tampil();
}

// validasi form
document.getElementById("formPesan").addEventListener("submit", function(e){
  e.preventDefault();

  let nama = document.getElementById("nama").value;
  let email = document.getElementById("email").value;
  let telepon = document.getElementById("telepon").value;

  if(nama=="" || email=="" || telepon==""){
    alert("Semua wajib diisi!");
    return;
  }

  if(!email.includes("@")){
    alert("Email tidak valid!");
    return;
  }

  alert("Pesanan berhasil!");
});

tampil();