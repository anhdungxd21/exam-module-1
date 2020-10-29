/*Câu 3:Viết hàm đếm số ký tự nguyên âm trong một chuỗi cho trước.
    Hàm có 1 tham số truyền vào mà một mảng các ký tự.
    Hàm trả về false nếu không có ký tự nguyên âm nào.
    Viết chương trình nhập vào một chuỗi bất kỳ. Gọi hàm tìm số ký tự nguyên âm vừa xây dựng ở trên.
    Nguyên âm là các ký tự: a, o, e, u, i
*/

function findVowel(str) {
    let vowel = "aoeui";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowel.length; j++) {
            if(str[i] == vowel[j]){
                count++;
            }
        }
    }
    if(count > 0 ) return count;

    else return -1;

}
function findString(str){
    return findVowel(str);
}

console.log(findString("aaaaaaaaaaaaa"))