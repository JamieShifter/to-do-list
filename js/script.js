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

    const render = () => {
        let htmlString = "";

        for(const task of tasks) {
            htmlString += `
                <li ${task.done ? "class=\"taskList__item--done\"" : "class=\"taskList__item\""}>
                    ${task.content}
                </li>
            `;
        }

        document.querySelector(".js-taskList").innerHTML = htmlString;
    }

    const addNewTask = (taskContent) => {
        tasks.push({
            content: taskContent,
        });

        render();
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        
        if(newTaskContent === ""){
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