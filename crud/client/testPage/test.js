const sbtn = document.querySelector(".startButton");
sbtn.addEventListener("click", async (e) => {
  e.preventDefault();

  console.log('start')
});


const ebtn = document.querySelector(".endButton");
ebtn.addEventListener("click", async (e) => {
  e.preventDefault();

  console.log('end')
});

