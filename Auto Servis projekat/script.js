document.getElementById("forma").addEventListener("submit",function(e) {
    e.preventDefault();

    const ime = document.document.getElementById("ime").value;
    const usluga = document.getElementById("usluga").value;
 const telefon =document.getElementById("telefon").value;
    const auto = document.getElementById("auto").value;
    const datum = document.getElementById("datum")

    const potvrda = `
    <h2>Uspešno zakazano!</h2>
    <p><strong>Usluga:</strong>{$usluga}</p>
    <p><strong>Telefon:</strong>{$telefon}</p>
    <p><strong>Auto:</strong>{$auto}</p>
    <p><strong>Datum:</strong>{$datum}</p>

    `
})