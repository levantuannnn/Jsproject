var my = "    hoc js   ";
console.log(my.length);
// tim cac tu co trong chuoi
// tim tu chuoi theo vi tir  indexof('',vitri bat dau)
//tim vi tri cuoi cung lastindexof
if (my.indexOf('js') != -1) {
    console.log("tim thay js");
}
// cat chuoi  slice(start,end)
console.log(my.slice(4, 6));
// 
// thay the chuoi replace('chuoi con thay the', 'chuoi thay the')
console.log(my.replace('js', 'tuan'))
// hoc tuan
//bien chuoi thanh chu hoa 
console.log(my.toUpperCase);
//bien chuoi thanh chu thuong 
console.log(my.toLowerCase);
//trim loai bo khoang trang thua 
console.log(my.trim);
//split trach thanh array 
var tg = "trung, le, thanh, vu";
// bien thanh mot mang bang dau ,
console.log(tg.split(','));
