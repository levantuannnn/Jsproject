//lam viec voi mang ham trong 
import loca from "./sway.js";
import sway from "./sway.js";
import login_sigin from "./login_sigin.js";
loca();
login_sigin();
var cout = [
    {
        id: 1,
        name: 'le van tuan',
        coin: 50,
    },
    {
        id: 1,
        name: 'nguyen van bao',
        coin: 200,
    },
    {
        id: 3,
        name: 'nguyen van trung',
        coin: 250
    }
];
//filter loc du lieu va tra ve het cac mang dung theo dieu  kien cac mang se di theo 
// cu phap  <>.filter((<>,0)=><>.coint)
let mange = cout.filter((a) => a.coin == 200,)
console.log(mange);
// khac voi filter thi find se tim theo va chi ta ve chi 1 phan tu ma no tim dau tien chu khong tra ve het giong filter
let con = cout.find((a) => a.id == 1)
console.log("con:", con);
//map no khong tim kiem va tra ve ma no thay doi  array
let maps = cout.map((a) => {
    if (a.coin == 200) {
        return {
            id: a.id,
            name: "le van tuan",
            coin: 400
        }
    }
})
cout.forEach(a => {
    console.log(a)
})
//HTML DOM DOCUMTENT OBJECT MODEL
// cau tao ra 3 thanh phan
//attibute
//ELEMENT
//TEXT
// CACH LAY ELEMENT
let a = document.querySelector('.con');
console.log(a);
//cach them gia tri cho thuoc tinh trong the 
a.setAttribute('class', 'tagname');
// su khac nhau giua innerText va Textcontent
//innertext no se hien ra nhung gi ma ta nhin thay khi thay doi
//con textContent no se hien thi ra luon ca cac phan tu con luon

//innerHTML no se them vao the ben trong a.innerHTML='<H1>TEXT</H1>'
//ounerHTML no se ghi de the cha  a.ounerHMTL=""

//
