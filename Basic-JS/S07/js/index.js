const app = {

    container: document.getElementById("todo"),
    taskRemaining: 0,

    inputList : [],
    labelList: [],

    init: function () {
        const taskDiv = document.createElement("div");
        taskDiv.id = "taskDiv";
        app.container.appendChild(taskDiv);
    
        const taskInput = document.createElement("input");
        taskInput.id = "taskInput";
        taskInput.setAttribute("type", "text");
        taskDiv.appendChild(taskInput);
        
    
        const taskCount = document.createElement("h2");
        taskCount.textContent = `Il reste ${app.taskRemaining} tâches à faire.`
        taskDiv.appendChild(taskCount);
    },

    createTasks: function (taskName) {
        const taskContainer = document.createElement("div");
        app.container.appendChild(taskContainer);
        taskContainer.classList.add("taskContainer");
    
        const taskLabel = document.createElement("label");
        taskLabel.textContent = taskName;
        taskLabel.setAttribute("for", app.inputList.length)
        taskLabel.id = app.labelList.length;
        taskContainer.appendChild(taskLabel);
    
        const taskCheckbox = document.createElement("input");
        taskCheckbox.className = "inputItems";
        taskCheckbox.id = app.inputList.length;
        taskCheckbox.setAttribute("type", "checkbox");
        taskLabel.appendChild(taskCheckbox);
    
        app.inputList.push(taskName);
        app.labelList.push(taskName);
        console.log(app.inputList);
        app.taskRemaining++;
        title.textContent = `Il reste ${app.taskRemaining} tâches à faire.`;

        taskCheckbox.addEventListener("change", (e) => {
            console.log(e.target.checked);

            if(e.target.checked){
                taskLabel.classList.add("scratched");
                app.taskRemaining -= 1;
                console.log(app.taskRemaining);
                title.textContent = `Il reste ${app.taskRemaining} tâches à faire.`;
            } else {
                taskLabel.classList.remove("scratched");
                app.taskRemaining += 1;
                console.log(app.taskRemaining);
                title.textContent = `Il reste ${app.taskRemaining} tâches à faire.`;
            }
        })
    }

};

app.init();
let title = document.querySelector("h2");

document.getElementById("taskInput").addEventListener('change', (e) => {
    app.createTasks(e.target.value);
    e.target.value = "";
});



