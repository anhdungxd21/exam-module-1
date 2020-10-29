/* Unit 1
    Giải phương trình bậc 1
 */
function ptBac1(a,b) {
    if(a==0){
        if (b==0){
            return 0;
        }else {
            return -1
        }
    }else {
        return -b/a;
    }
}

function doMath() {
    let a = +document.getElementById("unit1a").value;
    let b = +document.getElementById("unit1b").value;
    let mess = ""
    if (ptBac1(a,b) == -1){
        mess = "Phương trình vô nghiệm";
    } else if(ptBac1(a,b) == 0) {
        mess = "Phương trình vô số nghiệm"
    } else {
        mess = "Phương trình có nghiệm " + ptBac1(a,b);
    }
    document.getElementById("resultUnit1").innerHTML = mess;
}