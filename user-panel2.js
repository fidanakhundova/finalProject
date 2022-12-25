// loading
var main=document.querySelector(".page");
window.addEventListener("load",()=>{
const loader=document.querySelector(".loading");
main.style.display="none";
var mytime=setTimeout(()=>{
    loader.classList.add("load-hidden");
    main.style.display="block";
},2000);
loader.addEventListener("transitionend",()=>{
    document.body.removeChild("loading")
})

})


var a=document.querySelector("#more");
var b=document.querySelector(".groups");
var c=document.querySelector("#back");
var table=document.querySelector(".group-table");
a.addEventListener("click",function(event) {
   event.preventDefault();
    b.style.display="none";
    table.style.display="flex";
})
c.addEventListener("click",()=>{
table.style.display="none";
b.style.display="flex";
})

function unitable(){
    var namearray=[{name:"Axundova Fidan"},{name:"Sahil Salmanov Sahib"},{name:"Ayan Baghirzade Elabbas"},{name:"Edalet Mollayev Abbas"},{name:"Humay Zehmeti Cumshud"},{name:"Tunzale Imanova Behrem"},{name:"Babazadə Vasif Asif"},{name:"Barxudarlı Kənan Yaqub"},{name:"Bayramov Nurlan Elman"},{name:"Eyvazov Məhəmməd Elşən"},{name:"Gülməmmədov Əli İmamcan"},{name:"Həsənzadə Hüseyn Elşən"},{name:"Kərimli Nadir Rəhim"},{name:"Mustafayeva Günel Cahangir"},{name:"Məlikli Mehdi Ramil"},{name:"Məmmədli Rəşid Bəxtiyar"},{name:"Nəzirli Cavad Azad"},{name:"Osmanova Nəzrin Namiq"},{name:"Qasımova Kəmalə Marif"},{name:"Rəhimov Müşviq Oqtay"},{name:"Tahirov Samir Nəzir"},{name:"Yusifov Nurlan Famil"},{name:"Şalanzadə Elnur Azər"},{name:"Əliyeva Şəbnəm Fizuli"},{name:"Ələsgərova Ləman Vahid"},{name:"Əmiraslanov İlkin Zaur"},{name:"Əsgərov Elmir Nizami"},{name:"Əsgərov Səyyad Elşən"}];
function number(){
    for(let i=1;i<=namearray.length;i++){
        let tr=document.createElement("tr");
        let td=document.createElement("td");
        let val=document.createTextNode(i);
        tr.appendChild(td);
        td.appendChild(val);
        document.querySelector("#jurnal1").appendChild(tr);
        tr.classList.add("names")
    }
}
number();
function data(){
    let i=0;
    namearray.forEach(item =>{
        var td=document.createElement("td");
        var val=document.createTextNode(item.name);
        td.appendChild(val);
        document.querySelectorAll(".names")[i].appendChild(td);
        i++;
    });    
}
data();

function date(){
    
    for(let j=0;j<6;j++){
        let i=0;
    namearray.forEach(item =>{
        var button=document.createElement("button");
        var val=document.createTextNode("d/e");
        var td=document.createElement("td");
        td.classList.add("tds")
        button.appendChild(val);
        td.appendChild(button);
        button.classList.add("dates")
        document.querySelectorAll(".names")[i].appendChild(td);
        i++;
    }); 
    
}
}
date();
function journalhead(){
    var thead=document.querySelectorAll(".journalhead");
    thead.forEach(item =>{
        var iebutton=document.createElement("button");
        var iebuttonvalue=document.createTextNode("ie");
        iebutton.classList.add("iebutton")
        iebutton.appendChild(iebuttonvalue);
        item.appendChild(iebutton);
    })
}
journalhead();
function ie(){
    var ie=document.querySelectorAll(".iebutton");
    ie.forEach((element,index )=> {
        element.addEventListener("click",function(){
            var number=index;
            var buttons=document.querySelectorAll(".names");
            buttons.forEach(item =>{
                if(item.querySelectorAll(".dates")[index].innerText=="d/e" ){
                    item.querySelectorAll(".dates")[index].classList.add("ie");
                    item.querySelectorAll(".dates")[index].classList.add("block");
                    item.querySelectorAll(".dates")[index].innerText="i/e";
                }
            })
        });
    });
    
    
   
    
}
ie();
let btn;
function mark(){
    let a=document.querySelectorAll(".dates");
    a.forEach(item =>{
        item.addEventListener("click",function(){
            btn=this
            document.querySelector(".modal").style.display="block";
        });

    })
    
}
mark();
let label=document.querySelectorAll(".label")
label.forEach(x=>{
    x.addEventListener("click",function(){
        let reng=x.classList[1]
        btn.innerText=x.innerText
        btn.classList.add(reng)
        document.querySelector(".modal").style.display="none";
        btn.classList.add("block")

    })
})

let close=document.querySelector("#close");
close.addEventListener("click", function(){
    document.querySelector(".modal").style.display="none";
});


journal.addEventListener("click", function(){
    journal1.style.display="block";
    document.querySelector(".lab").style.display="none";
});
lab.addEventListener("click",function(){
    document.querySelector(".lab").style.display="block";
    document.querySelector(".modal").style.display="none";
    journal1.style.display="none";
})

function number1(){
    for(let i=1;i<=namearray.length;i++){
        let tr=document.createElement("tr");
        let td=document.createElement("td");
        let val=document.createTextNode(i);
        tr.appendChild(td);
        td.appendChild(val);
        document.querySelector("#jurnal2").appendChild(tr);
        tr.classList.add("names1")
    }
}
number1();
function data1(){
    let i=0;
    namearray.forEach(item =>{
        var td=document.createElement("td");
        var val=document.createTextNode(item.name);
        td.appendChild(val);
        document.querySelectorAll(".names1")[i].appendChild(td);
        i++;
    });    
}

data1();
let close1=document.querySelector("#close1");
close1.addEventListener("click", function(){
    document.querySelector(".lab-modal").style.display="none";
});
labbutton.addEventListener("click",function(){
    document.querySelector(".lab-modal").style.display="block";
});

function labisi(){
    var z=1;
  lablog.addEventListener("click", function(){
    var a=document.querySelector("#count").value;
    for(let j=0;j<a;j++){
        let i=0;
    namearray.forEach(item =>{
        var button=document.createElement("button");
        var val=document.createTextNode("d/e");
        var td=document.createElement("td");
        td.classList.add("tds")
        button.appendChild(val);
        td.appendChild(button);
        button.classList.add("dates1")
        document.querySelectorAll(".names1")[i].appendChild(td);
        i++;
        
    }); 
        var c=document.createElement("th");
        var tarix=document.createElement("p");
        var tarixvalue=document.createTextNode("Vaxt aralığı");
        tarix.appendChild(tarixvalue);
        var p=document.createElement("p");
        var pvalue=document.createTextNode("Lab isi №"+z)
        p.appendChild(pvalue);
          tarix.classList.add("labbasliq")
        c.appendChild(p);
        c.appendChild(tarix);
        labisibasliq.appendChild(c);  
        z=z+1;
        
    }
    var v=0;
    var t=labisibasliq.getElementsByTagName("th");
    for(let r=0;r<t.length;r++){
        if(t.className=="netice"){
            v=r;
         }
    }
   for(let y=0;y<namearray.length;y++){
    var neticetd=document.createElement("td");
    var neticep=document.createElement("p");
    neticetd.appendChild(neticep);
    neticep.classList.add("netice2");
    neticetd.classList.add("netice1")
    document.querySelectorAll(".names1")[v].appendChild(neticetd);
    v=v+1;
   }
    

    var x=document.createElement("th");
    var y=document.createTextNode("Nəticə");
    x.classList.add("netice");
    x.appendChild(y);
    labisibasliq.appendChild(x);
    var b=document.querySelector(".lab-modal");
    b.style.display="none";
    labbutton.style.display="none";
    
    timeinterval();
    labevalution();

})

}
labisi();

var btn1;
function timeinterval(){
   let a=document.querySelectorAll(".labbasliq");
    a.forEach(item =>{
        item.addEventListener("click", function(){
            document.querySelector(".time-interval-modal").style.display="flex";
            btn1=this;
        })
    });
}
timeintervalbutton.addEventListener("click",function(){
    var b=document.createElement("p");
        var firstinput=document.querySelector("#first-date").value;
        var secondvalue=document.querySelector("#finish-date").value;
        var pvalue=document.createTextNode(firstinput+"-"+secondvalue);
        b.appendChild(pvalue);
        btn1.innerHTML="";
        btn1.appendChild(b)
        btn1.classList.add("block");
        firstinput="";
        secondvalue="";
        document.querySelector(".time-interval-modal").style.display="none";
        
})
timeclose.addEventListener("click", function(){
    document.querySelector(".time-interval-modal").style.display="none";
});

close3.addEventListener("click", function(){
    document.querySelector(".lab-evaluation-modal").style.display="none"
});

function labevalution(){
    var btn1;
    var sum=0;
    var a=document.querySelectorAll(".dates1");
    var z="";
    var tambal=0;
    var natamambal=0
    var sifirbal=0
    a.forEach(item =>{
        item.addEventListener("click",function(){
        sum=0;
            let say=+count.value+2;
        // var v=this.parentElement.parentElement.children[say];
        // var c=document.querySelectorAll(".dates1");
         z=this.parentElement.parentElement.lastChild.children[0];
        var x=document.createTextNode(10);
         tambal=10/Number(document.querySelector("#count").value);
         natamambal=tambal/2;
         sifirbal=0
        sum=sum+tambal;
  
            btn1=this;
            document.querySelector(".lab-evaluation-modal").style.display="block";
        })
    });
    tamam.addEventListener("click", function(){
        // console.log(v);
        // console.log(z);
        let result=+(z.innerText);
        z.innerText=result+sum;
                // v.appendChild(z);      
    });
    natamam.addEventListener("click", function(){
        // console.log(v);
        // console.log(z);
        let result=+(z.innerText);
         z.innerText=result+natamambal;
                // v.appendChild(z);      
    });
    let label=document.querySelectorAll(".label1")
    label.forEach(x=>{
    x.addEventListener("click",function(){
        let reng=x.classList[1]
        btn1.innerText=x.innerText;
        btn1.classList.add(reng);
        document.querySelector(".lab-evaluation-modal").style.display="none";
        btn1.classList.add("block")
    })
})
}

}
unitable();
