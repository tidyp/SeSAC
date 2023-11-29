const updateTable = async () => {
  await fetch("/api/user")
    .then((res) => res.json())
    .then((users) => displayUsers(users))
    .catch((err) => console.error(`사용자정보 불러오기 실패 ${err}`));
};
updateTable();

document.addEventListener("DOMContentLoaded", () => {
  const username = document.getElementById("username");
  const form = document.getElementById("form");

  // console.log(form, username)
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = username.value;
    if (!name) {
      alert("이름을 입력하세요");
      return;
    }

    try {
      const res = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: Date.now(),
          name: name,
          age: Math.trunc(Math.random()*10000)
        }),
      });
      console.log(res);

      if (res.ok) {
        alert("등록 성공");

        // 등록 성공시 화면 컴포넌트 추가
        await updateTable();
      } else {
        const errorMessage = await res.text();
        alert(`등록 실패: ${errorMessage}`);
      }
    } catch {
      console.error(`등록오류 발생: ${err}`);
      alert("등록 중 오류 발생 ");
    }
    // 입력초기화
    username.value = "";
  });
});


const displayUsers = (users) => {
  const userTable = document.getElementById("userTable");
  userTable.innerHTML = "";
  console.log(userTable);

  if (Object.keys(users).length === 0) {
    const messageRow = document.createElement("div");
    messageRow.textContent = "등록된 사용자가 없습니다.";
    userTable.appendChild(messageRow);
  } else {
    console.log(users);
    users.forEach((el) => {
      // console.log(el.id);
      // console.log(el.name);
      // console.log(el.age);
      const html = `
      <div id="${el.id}">
        <span>Name: ${el.name}</span>
        <span>Age: ${el.age}</span>
        <button id="updateRow">수정</button>
        <button id="deleteRow">삭제</button>
      </div>
      `;
      document
        .getElementById("userTable")
        .insertAdjacentHTML("beforeend", html);
    });

    const deleteButtons = document.querySelectorAll("#deleteRow");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", async (e) => {
        e.preventDefault();

        const confirmDel = confirm("정말로 삭제하시겠습니까?");
        const id = button.parentElement.id;
        console.log(id);

        if (confirmDel) {
          const res = await fetch(`/api/user/${id}`, {
            method: "DELETE",
          });
          console.log(res);

          if (res.ok) {
            alert("삭제 성공");

            // 삭제 성공시 화면 컴포넌트 갱신
            await updateTable();
          } else {
            const errorMessage = await res.text();
            alert(`삭제 실패: ${errorMessage}`);
          }
        }
        //  catch {
        //   console.error(`삭제오류 발생: ${err}`);
        //   alert("삭제 중 오류 발생 ");
        // }
      });
    });

    const updateButtons = document.querySelectorAll("#updateRow");
    updateButtons.forEach((button) => {
      button.addEventListener("click", async (e) => {
        e.preventDefault();

        const inputText = prompt("수정할 이름을 입력하세요.");
        console.log(inputText);

        const id = button.parentElement.id;
        console.log(id);
        // 수정 request
        try {
          const res = await fetch(`/api/user/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: id,
              name: inputText,
            }),
          });
          console.log(res);

          if (res.ok) {
            alert("수정 성공");

            // 수정 성공시 화면 컴포넌트 갱신
            await updateTable();
          } else {
            const errorMessage = await res.text();
            alert(`수정 실패: ${errorMessage}`);
          }
        } catch {
          console.error(`수정오류 발생: ${err}`);
          alert("수정 중 오류 발생 ");
        }
      });
    });
  }
};
