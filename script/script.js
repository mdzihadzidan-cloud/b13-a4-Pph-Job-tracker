let InterviewCards = []
let RejectedCards = []
let CurrentStatus= "all"




const Total = document.getElementById("Total");
const Interview = document.getElementById("Interview");
const Rejected = document.getElementById("Rejected");
const jobss = document.getElementById("jobss")

const AllCards = document.getElementById("AllCards");


const mainContainer = document.querySelector("main")
console.log(mainContainer);


function updateJobsCount() {
  if (CurrentStatus === "togoling-1") {
    jobss.innerText = `${AllCards.children.length} jobs`;
  } else if (CurrentStatus === "togoling-2") {
    jobss.innerText = `${InterviewCards.length} jobs of ${AllCards.children.length}`;
  } else if (CurrentStatus === "togoling-3") {
    jobss.innerText = `${RejectedCards.length} jobs of ${AllCards.children.length}`;
  }
}



// টগর এর জন্য 


// টগর এর জন্য 

const togoling_1 = document.getElementById("togoling-1")
const togoling_2 = document.getElementById("togoling-2")
const togoling_3 = document.getElementById("togoling-3")

function togolStyle (id){
    togoling_1.classList.remove("bg-[#3B82F6]", "text-white");
    togoling_2.classList.remove("bg-[#3B82F6]", "text-white");
    togoling_3.classList.remove("bg-[#3B82F6]", "text-white");


    togoling_1.classList.add("bg-white", "text-black");
    togoling_2.classList.add("bg-white", "text-black");
    togoling_3.classList.add("bg-white", "text-black");

    const selected = document.getElementById(id)

    CurrentStatus = id

    selected.classList.remove("bg-white", "text-black")
    selected.classList.add("bg-[#3B82F6]", "text-white")

    if(id == 'togoling-2'){
        AllCards.classList.add("hidden")
        filterdSection.classList.remove("hidden")
         rendar_InterviewCards ()
    }else if (id == "togoling-1"){
       AllCards.classList.remove("hidden")
       filterdSection.classList.add("hidden")
    } else if (id== 'togoling-3'){
         AllCards.classList.add("hidden")
        filterdSection.classList.remove("hidden")
        rendar_RejectedCards ()
    }


}

// const mainContainer = document.querySelector("main")
// const mainContainer = document.querySelector("main")
// const mainContainer = document.querySelector("main")
mainContainer.addEventListener("click" , function(event){
    console.log(event.target.classList.contains("interview-btn"))

   if(event.target.classList.contains("interview-btn")){
     const parenNode = event.target.parentNode.parentNode;
    const plantName = parenNode.querySelector(".plantName").innerText;
    const lights = parenNode.querySelector(".lights").innerText;
    const water = parenNode.querySelector(".water").innerText;
    const stutas = parenNode.querySelector(".stutas").innerText;
    const nots = parenNode.querySelector(".nots").innerText;

    parenNode.querySelector(".stutas").innerText = "INTERVIEW"


    const cardInfo = {
        plantName,
        lights,
        water,
        stutas: "INTERVIEW", 
        nots
    }

    const plantExist =InterviewCards.find(item => item.plantName == cardInfo.plantName);
    
    if (!plantExist){
        InterviewCards.push(cardInfo);

    }
    RejectedCards = RejectedCards.filter(item => item.plantName != cardInfo.plantName)
    totalChang ()
     if(CurrentStatus =="togoling-3"){
        rendar_RejectedCards ()
    }
   }else if (event.target.classList.contains("rejected-btn")){
     const parenNode = event.target.parentNode.parentNode;
    const plantName = parenNode.querySelector(".plantName").innerText;
    const lights = parenNode.querySelector(".lights").innerText;
    const water = parenNode.querySelector(".water").innerText;
    const stutas = parenNode.querySelector(".stutas").innerText;
    const nots = parenNode.querySelector(".nots").innerText;

    parenNode.querySelector(".stutas").innerText = "REJECTED"


    const cardInfo = {
        plantName,
        lights,
        water,
        stutas: "REJECTED", 
        nots
    }

    const plantExist =RejectedCards.find(item => item.plantName == cardInfo.plantName);
    
    if (!plantExist){
        RejectedCards.push(cardInfo);

    }
    InterviewCards = InterviewCards.filter(item => item.plantName != cardInfo.plantName)
    if(CurrentStatus =="togoling-2"){
        rendar_InterviewCards ()
    }


    totalChang ()
//    rendar_RejectedCards ()
   }
   
   else if (event.target.closest(".delete-btn")) {
        const card = event.target.closest(".flex.justify-between"); 
        card.remove(); 

        const plantName = card.querySelector(".plantName").innerText;
        InterviewCards = InterviewCards.filter(item => item.plantName !== plantName);
        RejectedCards = RejectedCards.filter(item => item.plantName !== plantName);

        totalChang(); 
   }

}) // ডিলেট বাটন এর জন্য 



const filterdSection = document.getElementById("filterd-section");

function rendar_RejectedCards (){
    filterdSection.innerHTML=" "

    for(let rejected of RejectedCards){
        // console.log(rejected)
        let div = document.createElement("div");
        div.className= 'flex justify-between bg-white py-6 px-6 rounded-sm shadow-md'
        div.innerHTML = `            <div class=" space-y-5">
                    <div>
                        <h3 class="text-[#002C5C] font-bold plantName">${rejected.plantName}</h3>
                        <p class="text-[#64748B] lights">React Native Developer</p>

                    </div>
                    <div>
                        <p class="text-[#64748B] water">${rejected.water}</p>
                    </div>
                    <div>
                        <button class="btn btn-soft btn-info stutas"> ${rejected.stutas} </button>
                        <p class="nots">${rejected.nots}</p>
                    </div>
                    <div>
                        <button class="interview-btn btn btn-outline btn-success">INTERVIEW</button>
                        <button class="rejected-btn btn btn-outline btn-secondary">REJECTED</button>
                    </div>

                </div>



                     <!-- part-2 -->
                <div>
                    <button class="btn delete-btn"><i class="fa-solid fa-trash-can"></i></button>

                </div>

        `
        filterdSection.appendChild(div)
    }

}
function rendar_InterviewCards (){
    filterdSection.innerHTML=" "

    for(let Interview of InterviewCards){
        console.log(Interview)
        let div = document.createElement("div");
        div.className= 'flex justify-between bg-white py-6 px-6 rounded-sm shadow-md'
        div.innerHTML = `            <div class=" space-y-5">
                    <div>
                        <h3 class="text-[#002C5C] font-bold plantName">${Interview.plantName}</h3>
                        <p class="text-[#64748B] lights">React Native Developer</p>

                    </div>
                    <div>
                        <p class="text-[#64748B] water">${Interview.water}</p>
                    </div>
                    <div>
                        <button class="btn btn-soft btn-info stutas"> ${Interview.stutas} </button>
                        <p class="nots">${Interview.nots}</p>
                    </div>
                    <div>
                        <button class="interview-btn btn btn-outline btn-success">INTERVIEW</button>
                        <button class="rejected-btn btn btn-outline btn-secondary">REJECTED</button>
                    </div>

                </div>



                     <!-- part-2 -->
                <div>
                    <button class="btn delete-btn"><i class="fa-solid fa-trash-can"></i></button>

                </div>

        `
        filterdSection.appendChild(div)
    }

}