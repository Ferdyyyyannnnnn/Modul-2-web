function penjumlahan() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if (!isNaN(num1) && !isNaN(num2)) {
        var result = num1 + num2;
        document.getElementById("result").textContent = result;
    } else {
        alert("Masukkan angka yang valid!");
}
}
function reset(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").textContent = "0";
}