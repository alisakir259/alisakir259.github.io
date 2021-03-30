function rata_rata()  {
    A = parseFloat(document.getElementById("a").value);
    B = parseFloat(document.getElementById("b").value);
    C = parseFloat(document.getElementById("c").value);

    document.getElementById("rata").innerHTML = (A + B + C) / 3;
}

function nilaimax() {
    A = parseFloat(document.getElementById("a").value);
    B = parseFloat(document.getElementById("b").value);
    C = parseFloat(document.getElementById("c").value);

    document.getElementById("nilai_max").innerHTML = Math.max(A, B, C);
}

function nilaimin() {
    A = parseFloat(document.getElementById("a").value);
    B = parseFloat(document.getElementById("b").value);
    C = parseFloat(document.getElementById("c").value);

    document.getElementById("nilai_min").innerHTML = Math.min(A, B, C);
}

function median(values) {
    A = parseFloat(document.getElementById("a").value);
    B = parseFloat(document.getElementById("b").value);
    C = parseFloat(document.getElementById("c").value);

    var inputan = [A, B, C];
    var jumlah_inputan = inputan.length;

    for(var i=0; i<jumlah_inputan-1; i++){
        for(var j=0; j<jumlah_inputan-1; j++){
            if(inputan[j+1]<inputan[j]){
                var temp = inputan[j];
                inputan[j] = inputan[j+1];
                inputan[j+1] = temp;
            }
        }
    }
    document.getElementById("median").innerHTML = inputan[1];
}

function hitung(){
    rata_rata()
    nilaimax()
    nilaimin()
    median()
}

function hapus(){
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
    location.reload()
}
