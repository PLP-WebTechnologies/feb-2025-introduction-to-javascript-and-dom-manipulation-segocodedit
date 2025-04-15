const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const buttonAdd = document.getElementById("button");

// Save data even I refresh
window.onload = function () {
  listContainer.innerHTML = localStorage.getItem("tasks") || "";
};

// Save tasks to localStorage
function saveData() {
  localStorage.setItem("tasks", listContainer.innerHTML);
}

function addTask() {
  if (inputBox.value === "") {
    alert("Write Something!!");
  } else {
    let li = document.createElement("li");
    li.innerText = inputBox.value;

    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // × symbol
    span.classList.add("delete-btn");

    li.appendChild(span);
    listContainer.appendChild(li);
    inputBox.value = "";

    saveData(); // Save after adding
  }
}

buttonAdd.addEventListener("click", addTask);

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData(); // Save after marking done
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData(); // Save after deleting
  }
});
