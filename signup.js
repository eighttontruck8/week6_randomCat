document.getElementById("signupButton").addEventListener("click", signUpCheck);
document.getElementById("student-number").addEventListener("input", displayMajor);

function signUpCheck(){
    let id = document.getElementById("id").value
    let pw = document.getElementById("pw").value
    let pwCheck = document.getElementById("pw-check").value
    let stdNum = document.getElementById("student-number").value
    
    let check = true;

    // 1. id가 이메일 구조인지 확인
    if(id.includes('@')){
        let emailId = id.split('@')[0];
        let emailServer = id.split('@')[1];
        if(emailId === "" || emailServer === ""){
            document.getElementById("emailError").innerHTML="이메일 주소를 입력하세요."
            check = false
        }
        else{
            document.getElementById("emailError").innerHTML=""
        }
    } else{
        document.getElementById("emailError").innerHTML="올바른 이메일 형식이 아닙니다."
        check = false
    }

    // 2. 비밀번호 확인
    if(pw !== pwCheck) {
        document.getElementById("passwordError").innerHTML=""
        document.getElementById("passwordCheckError").innerHTML="비밀번호가 동일하지 않습니다."
        check = false
    }else {
        document.getElementById("passwordError").innerHTML=""
        document.getElementById("passwordCheckError").innerHTML=""
    }

    if(pw === "") {
        document.getElementById("passwordError").innerHTML="비밀번호를 입력해주세요."
        check = false
    }
    
    if (pwCheck === "") {
        document.getElementById("passwordCheckError").innerHTML="비밀번호를 다시 입력해주세요."
        check = false
    }
    


    // 3. 학번 확인 - 10자리 확인 + 학과 정보 추출
    if (stdNum.length !== 10) {
        document.getElementById("std-numError").innerHTML = "학번은 10자리.";
        check = false;
    } else {
        document.getElementById("std-numError").innerHTML = "";
    }
    // 4.   
    if(check){
        document.getElementById("emailError")
        document.getElementById("nameError")
        document.getElementById("std-numError")
        document.getElementById("passwordError")
        document.getElementById("passwordCheckError")

        //비동기 처리이벤트
        setTimeout(function() {
            alert("회원가입이 정상적으로 완료되었습니다.")
            window.location.href = "home.html"; // home.html로 이동
        }, 0);
    }  
}

function displayMajor() {
    let stdNum = document.getElementById("student-number").value;
    if (stdNum.length === 10) {
        let majorCode = stdNum.substring(4, 7); // 학번의 5, 6, 7번째 숫자 추출
        let major = getMajor(majorCode);
        document.getElementById("majorDisplay").innerHTML = major; // 학과 이름 표시
    } else {
        document.getElementById("majorDisplay").innerHTML = "";
    }
}


function getMajor(code) {
    const majorMap = {
        "136": "컴퓨터공학부",
    };
    return majorMap[code] || "학번을 확인해주세요.";
}