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
                <li>
                    ${task.content}
                </li>
            `;
        }

        document.querySelector(".js-taskList").innerHTML = htmlString;
    }


    const init = () => {
        console.log("Initializing");
        render();
    }

    init();
}