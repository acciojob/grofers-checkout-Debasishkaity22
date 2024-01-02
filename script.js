const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  let price=document.querySelectorAll(".price");
let table=document.querySelector("table");
let total=0;
price.forEach(function(e){
 total+=parseInt(e.innerText);
});
let tr1=document.createElement("tr");
let td1=document.createElement("td");
let td2=document.createElement("td");
td1.innerText="Total Price";
td2.innerText=total;
 tr1.append(td1,td2);
 table.appendChild(tr1);
};

getSumBtn.addEventListener("click", getSum);

