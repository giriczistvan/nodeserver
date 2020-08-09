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
    for (const row of data) {
        console.log(row);
        
    }
        
}
//
function createanyelement(name, attrib){
    let element = document.createElement(name);

}
