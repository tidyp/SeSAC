const mvPageBtn = document.querySelectorAll(".mvPageBtn");

const mvPageHandler = () => {
  mvPageBtn.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("click");
    });
  });
};

mvPageHandler();


