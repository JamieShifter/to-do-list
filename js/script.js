{
    const tasks = [
        {
            content: "Uprasować ubania",
            done: false,
        },
        {
            content: "Zrobić zakupy",
            done: true,
        }
    ];

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    }

    const addNewTask = (taskContent) => {
        tasks.push({
            content: taskContent,
        });

        render();
    }

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    };

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-removeButton");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            })
        })

        const doneButtons = document.querySelectorAll(".js-doneButton");

        doneButtons.forEach((doneButton, index) => {
            doneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            })
        })
    }

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <li ${task.done ? "class=\"taskList__item--done\"" : "class=\"taskList__item\""}>
                <button class="js-doneButton taskList__button${task.done ? " taskList__button--done\">✓" : "\">"}
                </button>
                    ${task.content}
                <button class="js-removeButton taskList__button taskList__button--trash"></button>
                </li>
            `;
        }

        document.querySelector(".js-taskList").innerHTML = htmlString;

        bindEvents();
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);

        document.querySelector(".js-newTask").value = "";
    };


    const init = () => {
        console.log("Initializing");
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    }

    init();
}