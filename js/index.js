const name = document.getElementById("uname");
const emailid = document.getElementById("emailid");
// const passwd = document.getElementByName("passwd");
// const cnfpass = document.getElementByName("cnfpasswd");
const mno = document.getElementById("phno");
const city = document.getElementById("city");
const state = document.getElementById("state");
const add = document.getElementById("address");
const data = document.getElementById("data");

let str

const register = document.getElementById("btn");


register.addEventListener("click", function(event) {
    event.preventDefault();

    document.getElementsByClassName("container")[0].style.display = "none";

    str = "Your data has been successfully Saved !!!";
    let pnode = document.createElement("h2");
    let node = document.createTextNode(str);
    pnode.appendChild(node);

    str = "Username: " + name.value;
    let pnode1 = document.createElement("h3");
    let node1 = document.createTextNode(str);
    pnode1.appendChild(node1);

    str = "Email ID : " + emailid.value;
    let pnode2 = document.createElement("h3");
    let node2 = document.createTextNode(str);
    pnode2.appendChild(node2);

    str = "Mobile No : " + mno.value;
    let pnode3 = document.createElement("h3");
    let node3 = document.createTextNode(str);
    pnode3.appendChild(node3);

    str = "City : " + city.value;
    let pnode4 = document.createElement("h3");
    let node4 = document.createTextNode(str);
    pnode4.appendChild(node4);

    str = "State : " + state.value;
    let pnode5 = document.createElement("h3");
    let node5 = document.createTextNode(str);
    pnode5.appendChild(node5);

    str = "Address: " + add.value;
    let pnode6 = document.createElement("h3");
    let node6 = document.createTextNode(str);
    pnode6.appendChild(node6);

    document.body.insertBefore(pnode, data);
    document.body.insertBefore(pnode1, data);
    document.body.insertBefore(pnode2, data);
    document.body.insertBefore(pnode3, data);
    document.body.insertBefore(pnode4, data);
    document.body.insertBefore(pnode5, data);
    document.body.insertBefore(pnode6, data);


    let anode = document.createElement("a");
    let link = document.createTextNode("Click the link to go to home page");
    anode.setAttribute("href", "cust_homepage.html");
    anode.style.color = "blue";
    anode.appendChild(link);

    document.body.insertBefore(anode, data)


})