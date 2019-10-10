const addBtn = document.querySelector(".add__btn");
const removeBtn = document.querySelector(".remove__btn");
const clearBtn = document.querySelector(".clear__btn");
const list = document.querySelector(".list");

const nextTaskNumber = () => {
    return list.querySelectorAll("li").length + 1;
};

const addTask = () => {
    const nr = nextTaskNumber();
    const li = document.createElement("li");
    list.appendChild(li);
    li.textContent = `Task number ${nr}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.style.backgroundColor = "grey";
    deleteBtn.style.fontSize = "10px";
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function() {
        this.parentElement.parentElement.removeChild(this.parentElement);
    });
};

addBtn.addEventListener("click", addTask);

removeBtn.addEventListener("click", function() {
    const lastLi = list.lastElementChild;
    if (lastLi) {
        lastLi.remove();
    }
});

clearBtn.addEventListener("click", function() {
    list.innerHTML = "";
});
