let dataArray = [];
let inputMoney = 0;
let totalMoney = 0;
let inputAge = 0;
let totalAge = 0;

document.getElementById("dataForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nameData = document.getElementById("nameInput").value;
  const ageData = document.getElementById("ageInput").value;
  const moneyData = document.getElementById("moneyInput").value;

  if (nameData.trim() === "" || ageData.trim() === "" || moneyData.trim() === "") {
    alert("Form tidak boleh kosong");
    return;
  } else if (nameData.length < 10) {
    alert("Panjang nama minimal 10 karakter");
    return;
  } else if (ageData < 25) {
    alert("Umur minimal 25");
    return;
  } else if (moneyData < 100000 || moneyData > 1000000) {
    alert("Uang sangu minimal 100 ribu dan maksimal 1 juta");
    return;
  } else {
    alert("Data berhasil disimpan");
  }

  dataArray.push({ nameData, ageData, moneyData });

  totalAge += ageData;
  inputAge++;

  totalMoney += moneyData;
  inputMoney++;

  // Menghapus inputan
  document.getElementById("nameInput").value = "";
  document.getElementById("ageInput").value = "";
  document.getElementById("moneyInput").value = "";

  // Menampilkan data di tabel
  updateTable();

  // Pindah ke tab list
  $("#nav-list").tab("show");
});

function updateTable() {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  dataArray.forEach((item) => {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
            <td>${item.nameData}</td>
            <td>${item.ageData}</td>
            <td>${item.moneyData}</td>
        `;
    tableBody.appendChild(newRow);
  });

  const averageAge = inputAge > 0 ? (totalAge / inputAge).toFixed() : 0;
  const averageMoney = inputMoney > 0 ? (totalMoney / inputMoney).toFixed() : 0;
  const resume = `<h5>Rata-rata pendaftar memiliki uang sangu sebesar ${averageMoney} dengan rata-rata umur ${averageAge}</h5>`;
  document.getElementById("resume").innerHTML = resume;
}
