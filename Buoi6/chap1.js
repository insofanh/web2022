var a =10;
a = 20;
let b = 10;
b = 20;
const c = 10;
console.log(a);

const myName ="Ha Van Anh";
const myAge= 20;
const myFri= ["Hieu","Tai"];

const myInfo={
    name: "Anh",
    age: 20,
    married: false,
    "Ma sinh vien": "PH21586"
};
console.log("myinfo", myInfo["Ma sinh vien"]);

// VI DU 1
const students= [
    {id: 1, code: "PH21586", name: "Anh"},
{ id: 2, code:"PH12345", name: "Hieu"},
{ id:3, code:"PH12346", name: "Tai"}
];

// XU LI
let result ="";
for(let i =0; i<students.length;i++){
    const student = students[i]
    result += `<div class="border p-4">
    <h2><a href="/detail.html?id=${student.id}">Ho ten: ${student.name}</a></h2>
    <span>Ma sinh vien: ${student.code}</span>
</div>`;
}

const studentElement =document.getElementById("student-list");
if (studentElement) {
    studentElement.innerHTML= result;
}

// VI DU 2
// KHAI BAO
const menuList = [
    {id: 1, name: "Trang chu", ref: "/"},
    {id: 2, name: "Gioi thieu", ref: "/about"}
];

// THUC HIEN
let resultMenu ="";
for(let i= 0; i< menuList.length; i++){
    const menu = menuList[i];
    resultMenu+= `<li><a href="${menu.ref}">${menu.name}</a><li>`;
}

// HIEN THI 
 const menuElement = document.querySelector("#menu");
 if (menuElement){
     menuElement.innerHTML= resultMenu;
 }




