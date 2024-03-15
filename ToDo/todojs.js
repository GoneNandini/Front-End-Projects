let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");
btn.addEventListener("click",addTask);

function addTask()
{
    let li=document.createElement("li");
    let delbtn=document.createElement("button");
    delbtn.classList.add("delbtn");
    delbtn.innerText="X";
    li.innerText=inp.value;
    inp.value="";
    ul.append(li);
    li.append(delbtn);

}
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON")
    {
        let par=event.target.parentElement;
        par.remove();

    }
})

// let delbtns=document.querySelectorAll(".delbtn");
// for(delbtn of delbtns)
// {
//     delbtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         par.remove();
//     });
// }
