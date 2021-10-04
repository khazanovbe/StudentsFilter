(function(){
    studentsArray = [];
    function createTitle(str){
        const title = document.createElement('h2');
        title.innerHTML = str;
        return title;
    }
    function drawTable(arr){
        let table = document.createElement('table');
        table.classList.add('table','table-striped');

        return table;
    }
    function createForm(){
        const form = document.createElement('div');
        let inputText = document.createElement('span');
        let name = document.createElement('input');

        form.classList.add("input-group", "input-group-lg");
        inputText.classList.add("input-group-text");
        inputText.innerHTML = "Name";
        name.type = "text";
        name.classList.add("form-control","input");

        form.append(inputText);
        form.append(name);

        inputText = document.createElement('span');
        let surname = document.createElement('input');

        form.classList.add("input-group", "input-group-lg");
        inputText.classList.add("input-group-text");
        inputText.innerHTML = "Surname";
        surname.type = "text";
        surname.classList.add("form-control","input");

        form.append(inputText);
        form.append(surname);

        inputText = document.createElement('span');
        let middle = document.createElement('input');

        form.classList.add("input-group", "input-group-lg");
        inputText.classList.add("input-group-text");
        inputText.innerHTML = "Middle name";
        middle.type = "text";
        middle.classList.add("form-control","input");

        form.append(inputText);
        form.append(middle);

        inputText = document.createElement('span');
        let birth = document.createElement('input');

        form.classList.add("input-group", "input-group-lg");
        inputText.classList.add("input-group-text");
        inputText.innerHTML = "Date of Birth";
        birth.type = "date";
        birth.classList.add("form-control","input");

        form.append(inputText);
        form.append(birth);        

        inputText = document.createElement('span');
        let start = document.createElement('input');

        form.classList.add("input-group", "input-group-lg");
        inputText.classList.add("input-group-text");
        inputText.innerHTML = "Year of start education";
        start.type = "text";
        start.classList.add("form-control","input");

        form.append(inputText);
        form.append(start);

        const button = document.createElement("button");
        button.type = "submit";
        button.classList.add("btn", "btn-primary");
        button.textContent = "Add new student"

        button.addEventListener("click", () => {
            
            newStudent = {
                Name: (name.value).trim(),
                Surname: surname.value.trim(),
                Middle: middle.value.trim(),
                birth: birth.value,
                Start: start.value,
            };
            studentsArray.push(newStudent);
        })
        form.append(button);


        return form;
    }
    function createStudentsPanel(){
        const container = document.querySelector(".container");
        const panelTitle = createTitle("Student manage panel");
        let table = drawTable(studentsArray);
        const form = createForm();

        container.append(panelTitle);
        container.append(table);
        container.append(form);
        console.log(studentsArray);
    
    }
    window.createStudentsPanel = createStudentsPanel();
})();