const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },

];

let bodyEle=document.querySelector("body");
function createElement()
{
  data.forEach((ele)=>
  {
    let ansNode=document.createElement("h1");
      ansNode.innerHTML = JSON.stringify(ele) ;
      bodyEle.appendChild(ansNode);
    }
  )
}

// 1. Print Developers
function printDeveloper() {
  data.forEach((ele)=>
  {
    let ansNode=document.createElement("h1");
    if(ele.profession==="developer")
    {
      ansNode.innerHTML = JSON.stringify(ele) ;
      bodyEle.appendChild(ansNode);
      console.log(ele);
    }
  })
  
}

// 2. Add Data
function addData() {
let addname= prompt("Enter the user name");
let addage=prompt("Enter the age");
let addprof=prompt("Enter profession");
let arr ={
  name: addname,
  age:Number(addage),
  profession:addprof
}
if(addname !=="" && addage!=="" && addprof !=="")
{
data.push(arr);
alert("data added successfully...");
console.log(data);
createElement();
}
}

// 3. Remove Admins
function removeAdmin() {
  let removedlist=data.filter((ele)=>
  {
    return ele.profession!=="admin";
  })
  removedlist.forEach((ele)=>
  {
    let ansNode=document.createElement("h1");
      ansNode.innerHTML = JSON.stringify(ele) ;
      bodyEle.appendChild(ansNode);
    }
  )
  console.log(removedlist);
}

// 4. Concatenate Array
function concatenateArray() {
  let dumy=[
  { name: "user1", age: 24, profession: "design" },
  { name: "user2", age: 27, profession: "cloud" },
  ];
  let result=data.concat(dumy);
  result.forEach((ele)=>
  {
    let ansNode=document.createElement("h1");
      ansNode.innerHTML = JSON.stringify(ele) ;
      bodyEle.appendChild(ansNode);
    }
  )
  console.log(result);
}

// 5. Average Age
function averageAge() {
  let len=Number(data.length);
  let sum =0;
  data.forEach((ele)=>
  {
    sum+=Number(ele.age);
  })
  let ansNode=document.createElement("h1");
      ansNode.innerHTML ="Average is: "+ JSON.stringify(sum/len) ;
      bodyEle.appendChild(ansNode);
  console.log(sum/len);
}

// 6. Age Check
function checkAgeAbove25() {
  let above25=data.some(ele => ele.age >25)
  let ansNode=document.createElement("h1");
      ansNode.innerHTML =`At least one person is above 25 is ${above25}`;
      bodyEle.appendChild(ansNode);
  console.log(`At least one person is above 25 is ${above25}`);
}

// 7. Unique Professions
function uniqueProfessions() {
let unique= new Set(data.map((ele)=>
{
  return ele.profession;
}))
console.log("Unique professional are: ",[...unique]);
unique.forEach((ele)=>
{
  let ansNode=document.createElement("h1");
      ansNode.innerHTML = ele;
      bodyEle.appendChild(ansNode);
})
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a,b)=>
  {
    return a.age-b.age;
  })
  createElement();
  console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
  data.forEach((ele)=>
  {
    if(ele.name=="john")
    {
      ele.profession="manager";
    }
  })
  createElement();
  console.log(data);
}

// 10. Profession Count
function getTotalProfessions() {
  let devcount=0, admincount=0;
  data.forEach((ele)=>
  {
    if(ele.profession=="developer")
    {
      devcount++;
    }
    if(ele.profession=="admin")
    {
      admincount++;
    }
  })
  let ansNode=document.createElement("h1");
      ansNode.innerHTML = "Developer Count is: "+devcount+" and Admin Count is: "+admincount;
      bodyEle.appendChild(ansNode);

  console.log("Developer Count is: "+devcount+" and Admin Count is: "+admincount);
}
