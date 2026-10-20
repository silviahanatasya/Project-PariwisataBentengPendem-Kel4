const tombolBenteng = document.getElementById("btn-jelajah-benteng");
if (tombolBenteng) {
    tombolBenteng.addEventListener("click", function (event) {
        event.preventDefault();
        alert("Jelajahi keunikan arsitektur bawah tanah dan sejarah perjuangan di Benteng Pendem Cilacap!");
    });
}