//keys of users
 let keys = ["id","name","email"];



//get data from server
function getserverdata(url) {

    let fetchoptions = {
        method: "GET",
        mode: "cors",
        cache: "no-cache"
    };

    return fetch(url, fetchoptions).then(
        response => response.json(),
        err => console.error(err)
    )
};


function startgetusers() {
    getserverdata("http://localhost:3000/users").then(
        data => filldatatable(data, "usertable")
    );

}
document.querySelector("#getdatabutton").addEventListener("click", startgetusers);

//fill table with server data
function filldatatable(data, tableID) {
    let table = document.querySelector(`#${tableID}`);
    if (!table) {
        console.error(`table "${tableID}" not found`);

        return;
    }
    // a beviteli sor kialakítása
    let tbody = table.querySelector("tbody");
    tbody.innerHTML='';
    let newrow = newuserrow(data[0]);
    tbody.appendChild(newrow);

    
    for (let row of data) {
        let tr = createanyelement("tr");
        for (let k of keys) {
            let td = createanyelement("td");
            let input = createanyelement("input",{
                class: "from-control",
                value: row[k],
                name: k
                })
            if (k=="id") {
                    input.setAttribute("readonly",true);
                }
            td.appendChild(input);
            tr.appendChild(td);
        }
        let btngroup = createbtngroup();
        tr.appendChild(btngroup);
        tbody.appendChild(tr);

    }

}
//
function createanyelement(name, attrib) {
    let element = document.createElement(name);
    for (let k in attrib) {
        element.setAttribute(k, attrib[k])
    }
    return element;
}

function createbtngroup() {
    let group = createanyelement("div", { class: "btn btn-group" });
    let infobtn = createanyelement("button", { class: "btn btn-info", onclick: "setrow(this)" });
    let delbtn = createanyelement("button", { class: "btn btn-danger", onclick: "delrow(this)" });
    infobtn.innerHTML = "BEÁLLÍTÁS";
    delbtn.innerHTML = "TÖRLÉS";
    group.appendChild(infobtn);
    group.appendChild(delbtn);
    let td = createanyelement("td");
    td.appendChild(group)
    return td;
}

function delrow(button) {
    //gomb szülőkeresés
    let tr = button.parentElement.parentElement.parentElement;
    let id = tr.querySelector("td:first-child").innerHTML;
    let fetchoptions = {
        method: "DELETE",
        mode: "cors",

    }
    fetch(`http://localhost:3000/users/${id}`, fetchoptions).then(
        resp => resp.json(),
        err => console.error(err)
    ).then(
        data => {
            startgetusers()

        }
    )
}

//create new user input line
function newuserrow(row) {
    let tr = createanyelement("tr");
    for (let k of keys){
        let td = createanyelement("td");
        let input = createanyelement("input", {
            class: "form-controll",
            namer: k
          });
        td.appendChild(input);
        tr.appendChild(td);
    }
    let newbtn = createanyelement("btn", {
            class: "btn btn-success",
            onclick: "createusers(this)"
            });

    newbtn.innerHTML = "ADD";
    let td = createanyelement("td");
    td.appendChild(newbtn);
    tr.appendChild(td);
    
    return tr;
}

function createusers() {
    let tr = button.parentElement.parentElement;
    let data = getrowdata(tr);
    delete data.id;
    let fetchoptions = {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch(`http://localhost:3000/users/` ,fetchoptions).then(
        resp=>resp.json(),
        err=>console.error(err)
    ).then(
        data=> startgetusers()
    ) 

    }


    function getrowdata(tr) {
        let inputs = tr.querySelectorAll("input.form-control");
        let data = {};
        for (let i =0; i < inputs.length; i++) {
            data[inputs[i].name] = inputs[i].value;
        }
        return data;
    }

    //set data with button look above!!
    function setrow(){
        let tr = btn.parentElement.parentElement.parentElement;
        let data = getrowdata(tr);
        let fetchoptions ={
            method: "PUT",
            mode:"cors",
            cache: "no-cache",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        fetch(`http://localhost:3000/users/${data.id}`,fetchoptions).then(
            resp=>resp.json(),
            err=>console.log(err)
        ).then(
            date=>startgetusers()
        );



    }