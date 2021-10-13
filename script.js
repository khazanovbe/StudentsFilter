(function () {
    let studentsArray = [
        {
            Name: "Boris",
            Surname: "Khazanov",
            Middle: "Efimovich",
            Birth: new Date(2003, 06, 28),
            Start: "2020",
            Faculty: "Software Engineering",
        },
        {
            Name: "Ksenia",
            Surname: "Labutina",
            Middle: "Sergeevna",
            Birth: new Date(2001, 03, 05),
            Start: "2019",
            Faculty: "RF",
        },
        {
            Name: "Andrew",
            Surname: "Polyakov",
            Middle: "Sergeevich",
            Birth: new Date(1999, 10, 8),
            Start: "2017",
            Faculty: "ASGAP",
        },
        {
            Name: "Grigory",
            Surname: "Khazanov",
            Middle: "Efimovich",
            Birth: new Date(1997, 09, 31),
            Start: "2014",
            Faculty: "ASGAP",
        },
        {
            Name: "Arseniy",
            Surname: "Trofimov",
            Middle: "Denisovich",
            Birth: new Date(2001, 05, 28),
            Start: "2019",
            Faculty: "VMK",
        }
    ];
    function createTitle(str) {
        const title = document.createElement('h2');
        title.innerHTML = str;
        return title;
    }
    function createTable() {
        let table = document.createElement('table');
        table.classList.add('table', 'table-hover');
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');
        let theadTr = document.createElement('tr');
        let theadArr = ["№", "Name", "Middle name", "Surname", "Date of birth", "Start year", "Faculty"];
        for (let i = 0; i < 7; i++) {
            let th = document.createElement('td');
            th.innerText = theadArr[i];
            theadTr.append(th);
        }
        thead.append(theadTr);
        table.append(thead);
        table.append(tbody);
        return { table, tbody };
    }
    function drawTable(tbody) {
        for (let i = tbody.rows.length - 1; i >= 0; i--) {
            tbody.deleteRow(i);
        }
        for (let i = 0; i < studentsArray.length; i++) {
            let newRow = document.createElement('tr');
            //number field 
            let number = document.createElement('td');
            number.innerText = i + 1;
            newRow.append(number);

            //name field 
            let name = document.createElement('td');
            name.innerText = studentsArray[i].Name;
            newRow.append(name);

            //middle name field 
            let middle = document.createElement('td');
            middle.innerText = studentsArray[i].Middle;
            newRow.append(middle);

            //surname field
            let surname = document.createElement('td');
            surname.innerText = studentsArray[i].Surname;
            newRow.append(surname);

            //date of birth field 
            let now = new Date();
            let age = now.getFullYear() - parseInt(studentsArray[i].Birth.getFullYear());
            let birth = document.createElement('td');
            if ((now.getMonth()<studentsArray[i].Birth.getMonth()) || (now.getMonth()===studentsArray[i].Birth.getMonth() && now.getDate()<studentsArray[i].Birth.getDate())){
                age--;
            }
            birth.innerText = studentsArray[i].Birth.toLocaleDateString() + " (" + age + " years)";
            newRow.append(birth);

            //start year field
            let start = document.createElement('td');
            start.innerText = studentsArray[i].Start;
            newRow.append(start);

            //start faculty field
            let faculty = document.createElement('td');
            faculty.innerText = studentsArray[i].Faculty;
            newRow.append(faculty);

            tbody.append(newRow);
        }
        return tbody;
    }
    function createForm(tbody) {
        // creating form
        const form = document.createElement('form');

        //creating name input
        let inputText = document.createElement('span');
        let name = document.createElement('input');
        form.classList.add("input-group", "input-group-lg");
        inputText.classList.add("input-group-text");
        inputText.innerHTML = "Name";
        name.type = "text";
        name.classList.add("form-control", "input");
        name.required = true;
        name.id = "0";

        form.append(inputText);
        form.append(name);



        //creating middle name input
        inputText = document.createElement('span');
        let middle = document.createElement('input');

        form.classList.add("input-group", "input-group-lg");
        inputText.classList.add("input-group-text");
        inputText.innerHTML = "Middle name";
        middle.type = "text";
        middle.classList.add("form-control", "input");
        middle.required = true;
        middle.id = "1";

        form.append(inputText);
        form.append(middle);


        //creating surname input
        inputText = document.createElement('span');
        let surname = document.createElement('input');

        form.classList.add("input-group", "input-group-lg");
        inputText.classList.add("input-group-text");
        inputText.innerHTML = "Surname";
        surname.type = "text";
        surname.classList.add("form-control", "input");
        surname.id = "2";
        surname.required = true;

        form.append(inputText);
        form.append(surname);


        //creating birthday input
        inputText = document.createElement('span');
        let birth = document.createElement('input');

        form.classList.add("input-group", "input-group-lg");
        inputText.classList.add("input-group-text");
        inputText.innerHTML = "Date of Birth";
        birth.type = "date";
        birth.classList.add("form-control", "input");
        birth.id = "3";
        birth.required = true;

        form.append(inputText);
        form.append(birth);


        //creating start year input
        inputText = document.createElement('span');
        let start = document.createElement('input');

        form.classList.add("input-group", "input-group-lg");
        inputText.classList.add("input-group-text");
        inputText.innerHTML = "Year of start education";
        start.type = "text";
        start.classList.add("form-control", "input");
        start.id = "4"
        start.required = true;

        form.append(inputText);
        form.append(start);

        //creating faculty input
        inputText = document.createElement('span');
        let faculty = document.createElement('input');

        form.classList.add("input-group", "input-group-lg");
        inputText.classList.add("input-group-text");
        inputText.innerHTML = "Faculty";
        faculty.type = "text";
        faculty.classList.add("form-control", "input");
        faculty.id = "5"
        faculty.required = true;

        form.append(inputText);
        form.append(faculty);


        //creating submit button
        const button = document.createElement("button");
        const buttonWrapper = document.createElement("div");
        button.type = "submit";
        button.classList.add("btn", "btn-primary");
        button.textContent = "Add new student";
        buttonWrapper.classList.add('input-group-append');

        buttonWrapper.append(button);
        form.append(buttonWrapper);
        form.append(button);

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            if (!name.value.trim()) {
                name.classList.add("red-border");
            }
            else {
                name.classList.remove("red-border");
            }
            if (!middle.value.trim()) {
                middle.classList.add("red-border");
            }
            else {
                middle.classList.remove("red-border");
            }
            if (!surname.value.trim()) {
                surname.classList.add("red-border");
            }
            else {
                surname.classList.remove("red-border");
            }
            let startInt = parseInt(start.value.trim());
            if (!(start.value.trim()) || (new Date(startInt, 1, 1) < new Date(2000, 1, 1) || new Date(startInt, 1, 1) > new Date())) {
                start.classList.add("red-border");
            }
            else {
                start.classList.remove("red-border");
            }
            if (!faculty.value.trim()) {
                faculty.classList.add("red-border");
            }
            else {
                faculty.classList.remove("red-border");
            }
            if (birth.valueAsDate > new Date() || birth.valueAsDate < new Date(1990, 01, 01)) {
                birth.classList.add("red-border");
            }
            else {
                birth.classList.remove("red-border");
            }

            if (name.value.trim() &&
                middle.value.trim() &&
                surname.value.trim() &&
                start.value.trim() &&
                faculty.value.trim() &&
                (birth.valueAsDate <= new Date() && birth.valueAsDate >= new Date(1990, 01, 01)) &&
                (new Date(startInt, 1, 1) >= new Date(2000, 1, 1) && new Date(startInt, 1, 1) <= new Date())
            ) {
                let newStudent = {
                    Name: name.value.trim(),
                    Surname: surname.value.trim(),
                    Middle: middle.value.trim(),
                    Birth: birth.valueAsDate,
                    Start: startInt,
                    Faculty: faculty.value.trim()
                };
                name.value = '';
                middle.value = '';
                surname.value = '';
                start.value = '';
                birth.value = '';
                faculty.value = '';
                studentsArray.push(newStudent);
                drawTable(tbody);
            }
        })
        return form;
    }
    function createStudentsPanel() {
        const container = document.querySelector(".container");
        const panelTitle = createTitle("Student manage panel");
        let table = createTable();
        drawTable(table.tbody);
        const form = createForm(table.tbody);

        container.append(panelTitle);
        container.append(table.table);
        container.append(form);

    }
    window.createStudentsPanel = createStudentsPanel();
})();