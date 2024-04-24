let buttonElement = document.querySelector("#liveToastBtn");
let listElement = document.querySelector("#list");
let taskValue = document.querySelector("#task");
let errorElement = document.querySelector("#error");
let succesElement = document.querySelector("#succes");

buttonElement.addEventListener("click", addNewMisson);

let alert = (message, color) =>
  `<div class="alert ${color} alert-dismissible fade show text-center" role="alert">
        <strong>${message}</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`;

function addNewMisson() {
  if (taskValue.value.trim() !== "") {
    liDOM = document.createElement("li");
    liDOM.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    liDOM.id = "misson";
    liDOM.innerHTML = `
        ${taskValue.value}
        <span class="badge badge-pill"><i id="cancel" class="bi bi-x-square"></i></span>
        `;
    listElement.append(liDOM);
    
    let userInfo = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : [];
    userInfo.push(taskValue.value);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    console.log(JSON.parse(localStorage.getItem("userInfo")));
    errorElement.innerHTML = alert("Listeye Ekleme Yapıldı", "bg-success");
    taskValue.value = "";
    setTimeout(function () {
      errorElement.classList.add("hidden");
    }, 3000);

    errorElement.classList.remove("hidden");
    let newItemCancel = liDOM.querySelector("#cancel");
    newItemCancel.addEventListener("click", removeItems);

    let completeMisson = document.querySelectorAll("#misson");
    completeMisson.forEach(function (item) {
      item.addEventListener("click", taskPerformed);
    });
  } else {
    errorElement.innerHTML = alert(
      "Listeye Boş Eleman Ekleyemezsiniz",
      "alert-danger"
    );
    setTimeout(function () {
      errorElement.classList.add("hidden");
    }, 3000);

    errorElement.classList.remove("hidden");
  }
}

function removeItems(e) {
  let listItem = e.target.parentElement.parentElement;
  listItem.remove();
}

function taskPerformed(e) {
  if (e.target.style.backgroundColor === "rgb(26, 188, 156)") {
    e.target.style.backgroundColor = "";
    e.target.style.textDecoration = "";
    let checkIcon = e.target.querySelector(".bi-check-square");
    if (checkIcon) {
      checkIcon.remove();
    }
  } else {
    e.target.style.backgroundColor = "#1abc9c";
    e.target.style.textDecoration = "line-through";

    let checkIcon = document.createElement("i");
    checkIcon.className = "bi bi-check-square";
    e.target.prepend(checkIcon);
  }
}
