const checkLoginStatus = () => {
  fetch("/api/auth/checkLogin")
    .then((res) => res.json())
    .then((data) => {
      if (data.username) {
        // console.log(data.username)
        showProfile(data.username);
      } else {

      }
    })
    .catch((err) => {
      console.error("로그인 상태 확인 오류1", err);
    });
    window.location.reload();
};

const logout = () => {
  fetch("/api/auth/logout")
    .then((res) => res.json())
    .then((data) => alert(data.message));
    window.location.reload();
};

const login = () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("/api/auth/login", {
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
        alert("로그인 성공");
      } else {
        alert("로그인 실패");
      }
    })
    .catch((err) => {
      console.log(`로그인 상태 확인 오류 ${err}`);
      showLoginForm();
    });

  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  window.location.reload() 
};
