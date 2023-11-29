const checkLoginStatus = () => {
  fetch("/checkLogin")
    .then((res) => res.json())
    .then((data) => {
      if (data.username) {
        console.log(data.username)
        showProfile(data.username);
      } else {
        showLoginForm();
        console.log("로그인된 사용자없음");
      }
    })
    .catch((err) => {
      console.error("로그인 상태 확인 오류", err);
    });
};

const logout = () => {
  fetch("/logout")
    .then((res) => res.json())
    .then((data) => alert(data.message));
  showLoginForm();
};

const showLoginForm = () => {
  document.getElementById("login").style.display = "block";
  document.getElementById("profile").style.display = "none";
};

const showProfile = (username) => {
  document.getElementById("login").style.display = "none";
  document.getElementById("profile").style.display = "block";
  document.getElementById("usernameSpan").innerHTML = username;
};

const loginBtnHandler = (e) => {
  // e.preventDefault();
  // console.log("click");

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // console.log(username, password);

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message === "로그인 성공") {
        checkLoginStatus();
        alert("로그인 성공");
      } else {
        alert("로그인 실패");
      }
    })
    .catch((err) => {
      console.log(`로그인 상태 확인 오류 ${err}`);
      // showProfile()
    });

  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
};

// document.addEventListener("DOMContentLoaded", () => {
//   const loginBtn = document.getElementById("loginBtn");
//   loginBtn.addEventListener("click", loginBtnHandler);
// });
