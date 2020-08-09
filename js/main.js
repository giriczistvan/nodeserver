//get data from server
function getserverdata(url) {
    
    let fetchoptions={
        method: "GET",
        mode: "cors",
        cache: "no-cache"
    };

    return fetch(url,fetchoptions).then(
        response => response.json(),
        err=>console.error(err)
    )
};

document.querySelector("#getdatabutton").addEventListener("click",function () {
    getserverdata("http://localhost:3000/users").then(
    data=> filldatatable(data,"usertable")
);
});

//fill table with server data
function filldatatable(data,tableID) {
    let table =document.querySelector(`#${tableID}`);
    if (!table){
        console.error(`table "${tableID}" not found`);
        
        return;
    }

    let tbody = table.querySelector("tbody");
    for (let row of data) {
        let tr = createanyelement("tr");
        for(let k in row){
            let td = createanyelement("td");
            td.innerHTML=row[k];
            tr.appendChild(td);
        }
        let btngroup =createbtngroup();
        tr.appendChild(btngroup);
        tbody.appendChild(tr);
        
    }
        
}
//
function createanyelement(name, attrib){
    let element = document.createElement(name);
    for (let k in attrib){
        element.setAttribute(k, attrib[k])
    }
    return element;
}

function createbtngroup(){
    let group = createanyelement("div",{class: "btn btn-group"});
    let infobtn = createanyelement("button", {class: "btn btn-info",onclick:"getinfo(this)"});
    let delbtn = createanyelement("button",{class: "btn btn-danger",onclick:"delrow(this)"});
    infobtn.innerHTML="BEÁLLÍTÁS";
    delbtn.innerHTML="TÖRLÉS";
    group.appendChild(infobtn);
    group.appendChild(delbtn);
    let td = createanyelement("td");
    td.appendChild(group)
    return td;
}

function delrow(button){
    //gomb szülőkeresés
    let tr=button.parenElement.parenElement.parenElement;
    let id= tr.querySelector("td:firs-child").innerHTML;
    let fetchoptions={
        method: "DELETE",
        mode: "cors",
        
    }
}