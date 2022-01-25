{
    let tasks = [];
    let hideDoneTasks = false;

    const removeTask = (taskIndex) => {
        tasks = [
            ...tasks.filter(task => tasks.indexOf(task) !== taskIndex)
        ];

        render();
    }

    const addNewTask = (taskContent) => {
        tasks = [
            ...tasks,
            { content: taskContent }
        ];

        render();
    }

    const toggleHideDoneTasks = () => {
        hideDoneTasks = !hideDoneTasks;
        console.log(hideDoneTasks);
        render();
    }

    const toggleMarkAllTasksDone = () => {
        tasks = tasks.map(tasks => ({...tasks, done: true}));
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks = tasks.map((task, index) => (index === taskIndex) ? ({ ...task, done: !task.done }) : ({ ...task }));
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

        const hideDoneTasksButton = document.querySelector(".js-hideDoneTasks");
        const markAllTasksDoneButton = document.querySelector(".js-markAllTasksDone");

        if (hideDoneTasksButton && markAllTasksDoneButton) {
            hideDoneTasksButton.addEventListener("click", toggleHideDoneTasks);
            markAllTasksDoneButton.addEventListener("click", toggleMarkAllTasksDone);
        }
    }

    const renderTasks = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <li class="taskList__item">
                <button class="js-doneButton taskList__button${task.done ? " taskList__button--done\">✓" : "\">"}
                </button>
                    <span class=\"taskList__text${task.done ? " taskList__text--done" : ""}\">${task.content}</span>
                <button class="js-removeButton taskList__button taskList__button--trash">🗑</button>
                </li>
            `;
        }

        document.querySelector(".js-taskList").innerHTML = htmlString;
    };

    const renderButtons = () => {
        const buttonElement = document.querySelector(".js-formButtons");

        if (!tasks.length) {
            buttonElement.innerHTML = "";
            return;
        }

        buttonElement.innerHTML = `
                <button class="form__button js-hideDoneTasks">Ukryj ukończone</button>
                <button class="form__button js-markAllTasksDone">Ukończ wszystkie</button>
            `;
    }

    const render = () => {

        renderTasks();
        renderButtons();
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
        document.querySelector(".js-newTask").focus();
    };


    const init = () => {
        console.log("Initializing");
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    }

    init();
}