const fullName = document.querySelector(".form1");
const yourFoto = document.querySelector(".form2");
const yourComment = document.querySelector(".form3");
const btn = document.querySelector(".form__btn");

const resultName = document.querySelector(".fullname");
const resultComment = document.querySelector(".yourcomment");

/*  function changeName() {
  let capital = fullName.value.charAt(0).toUpperCase();
  let rest = fullName.value.slice(1).toLowerCase();
  resultName.innerHTML = capital + rest;
}*/
function changeName() {
  let checkbox = document.querySelector('input[name="check"]:checked').value;
  if ((checkbox == "Yes") && (fullName != "")) {
      let capital = fullName.value.charAt(0).toUpperCase();
      let rest = fullName.value.slice(1).toLowerCase();
      resultName.innerHTML = capital + rest;
  }
  else if (checkbox == "No") {
      resultName.textContent = "Username";
  }
}


function changeComment() {
  resultComment.innerHTML = yourComment.value.replace(/(xxx|viagra)/gi, "***");
}
/*  function changeImage() {
  document.querySelector(".yourfoto").src = yourFoto.value;
}
*/


function changeImage() {
  let img = [ "./assets/images/1.png" , "./assets/images/2.jpg" , "./assets/images/3.png" , "./assets/images/4.png" ,"./assets/images/5.png"
];
let newImg = Math.round(Math.random() *  img.length);
  if (yourFoto.value != "") {
document.querySelector(".yourfoto").src = yourFoto;
  }
  else {
    document.querySelector(".yourfoto").src = img[newImg];
  }
}

function addDate (){
  let resultDate = new Date();
  document.querySelector(".resultDate").textContent = resultDate;
}

function seeResult() {
  changeName();
  changeImage();
  changeComment();
  addDate();
}