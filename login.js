window.onload = loginLoad;
const qS = window.location.search
const urlParams = new URLSearchParams(qS)
const username = urlParams.get("username");
const password = urlParams.get("password");

function loginLoad(){
	var click = document.getElementById ("myLogin");
	click.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	let user = document.getElementById ("username").value;
	let pass = document.getElementById ("password").value;

	if(user == username && pass == password){
		alert("เข้าสู่ระบบ")
	}
	else if(pass != password){
		alert("รหัสไม่ถูกต้องกรุณาลองใหม่")
		return false 
	}
	else{
		alert("เกิดการผิดพลาดลองใหม่อีกครั้ง")
		return false
	}
}

			