const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type, time) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);

  setTimeout(() => {
    wrapper.innerHTML = ''
  }, time);
};

const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    appendAlert("30초 후 메시지 닫힘.", "success", 30000);
  });
}


const a = [1000,3000,5000,7000,9000,10000,20000,30000,40000,50000,60000]

for(i of a){
  console.log(i)
  appendAlert(`${i/1000}초 후 닫힘`, "success", i)
}