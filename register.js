window.onload = pageLoad;
function pageLoad(){
	let form = document.getElementById("myForm")
    form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    let password = document.getElementById("password").value;
    let Retype_password = document.getElementById("Retype_password").value;
    if(password != Retype_password){
        alert("รหัสของคุณไม่ถูกต้อง");
        return false;
    }
}

const qS = window.location.search
const urlParams = new URLSearchParams(qS)
const username = urlParams.get("username");
const password = urlParams.get("password");