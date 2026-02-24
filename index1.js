let InterviewCards = [];
let RejectedCards = [];
let CurrentStatus = "togoling-1"; 

const Total = document.getElementById("Total");
const Interview = document.getElementById("Interview");
const Rejected = document.getElementById("Rejected");
const jobss = document.getElementById("jobss");

const AllCards = document.getElementById("AllCards");
const filterdSection = document.getElementById("filterd-section");
const mainContainer = document.querySelector("main");


function updateJobsCount() {
  if (CurrentStatus === "togoling-1") {
    jobss.innerText = `${AllCards.children.length} jobs`;
  } else if (CurrentStatus === "togoling-2") {
    jobss.innerText = `${InterviewCards.length} jobs of ${AllCards.children.length}`;
  } else if (CurrentStatus === "togoling-3") {
    jobss.innerText = `${RejectedCards.length} jobs of ${AllCards.children.length}`;
  }
}


function totalChang() {
  Total.innerText = AllCards.children.length;
  Interview.innerText = InterviewCards.length;
  Rejected.innerText = RejectedCards.length;
  updateJobsCount();
}
totalChang(); 


const togoling_1 = document.getElementById("togoling-1");
const togoling_2 = document.getElementById("togoling-2");
const togoling_3 = document.getElementById("togoling-3");

function togolStyle(id) {
  // Reset all buttons to white
  [togoling_1, togoling_2, togoling_3].forEach(btn => {
    btn.classList.remove("bg-[#3B82F6]", "text-white");
    btn.classList.add("bg-white", "text-black");
  });

  // Highlight the selected button
  const selected = document.getElementById(id);
  selected.classList.remove("bg-white", "text-black");
  selected.classList.add("bg-[#3B82F6]", "text-white");

  CurrentStatus = id;

  // Hide/show sections
  if (id === "togoling-2") {
    AllCards.classList.add("hidden");
    filterdSection.classList.remove("hidden");
    renderInterviewCards();
  } else if (id === "togoling-1") {
    AllCards.classList.remove("hidden");
    filterdSection.classList.add("hidden");
  } else if (id === "togoling-3") {
    AllCards.classList.add("hidden");
    filterdSection.classList.remove("hidden");
    renderRejectedCards();
  }

  totalChang(); 
}


function removeOriginalCard(companyName) {
  const cards = AllCards.children;
  for (let i = 0; i < cards.length; i++) {
    const nameElem = cards[i].querySelector(".plantName");
    if (nameElem && nameElem.innerText === companyName) {
      cards[i].remove();
      break;
    }
  }
}


mainContainer.addEventListener("click", function (event) {
  
  if (event.target.classList.contains("interview-btn")) {
    const parentNode = event.target.closest(".flex.justify-between");
    const plantName = parentNode.querySelector(".plantName").innerText;
    const lights = parentNode.querySelector(".lights").innerText;
    const water = parentNode.querySelector(".water").innerText;
    const nots = parentNode.querySelector(".nots").innerText;

   
    parentNode.querySelector(".stutas").innerText = "INTERVIEW";

    const cardInfo = {
      plantName,
      lights,
      water,
      stutas: "INTERVIEW",
      nots
    };

   
    const plantExist = InterviewCards.find(item => item.plantName === cardInfo.plantName);
    if (!plantExist) {
      InterviewCards.push(cardInfo);
    }
  
    RejectedCards = RejectedCards.filter(item => item.plantName !== cardInfo.plantName);

  
    if (CurrentStatus === "togoling-3") {
      renderRejectedCards();
    }

    totalChang(); 
  }

  
  else if (event.target.classList.contains("rejected-btn")) {
    const parentNode = event.target.closest(".flex.justify-between");
    const plantName = parentNode.querySelector(".plantName").innerText;
    const lights = parentNode.querySelector(".lights").innerText;
    const water = parentNode.querySelector(".water").innerText;
    const nots = parentNode.querySelector(".nots").innerText;

    parentNode.querySelector(".stutas").innerText = "REJECTED";

    const cardInfo = {
      plantName,
      lights,
      water,
      stutas: "REJECTED",
      nots
    };

    const plantExist = RejectedCards.find(item => item.plantName === cardInfo.plantName);
    if (!plantExist) {
      RejectedCards.push(cardInfo);
    }
    InterviewCards = InterviewCards.filter(item => item.plantName !== cardInfo.plantName);

    if (CurrentStatus === "togoling-2") {
      renderInterviewCards();
    }

    totalChang();
  }

 
  else if (event.target.closest(".delete-btn")) {
    const card = event.target.closest(".flex.justify-between");
    const companyName = card.querySelector(".plantName").innerText;

   
    removeOriginalCard(companyName);

    
    card.remove();

    
    InterviewCards = InterviewCards.filter(item => item.plantName !== companyName);
    RejectedCards = RejectedCards.filter(item => item.plantName !== companyName);

   
    if (CurrentStatus === "togoling-2") {
      if (InterviewCards.length === 0) {
        filterdSection.innerHTML = ""; 
      } else {
        renderInterviewCards();
      }
    } else if (CurrentStatus === "togoling-3") {
      if (RejectedCards.length === 0) {
        filterdSection.innerHTML = "";
      } else {
        renderRejectedCards();
      }
    }

    totalChang();
  }
});


function renderRejectedCards() {
  filterdSection.innerHTML = "";
  for (let rejected of RejectedCards) {
    let div = document.createElement("div");
    div.className = "flex justify-between bg-white py-6 px-6 rounded-sm shadow-md";
    div.innerHTML = `
      <div class="space-y-5">
        <div>
          <h3 class="text-[#002C5C] font-bold plantName">${rejected.plantName}</h3>
          <p class="text-[#64748B] lights">${rejected.lights}</p>
        </div>
        <div>
          <p class="text-[#64748B] water">${rejected.water}</p>
        </div>
        <div>
          <button class="btn btn-soft btn-info stutas">${rejected.stutas}</button>
          <p class="nots">${rejected.nots}</p>
        </div>
        <div>
          <button class="interview-btn btn btn-outline btn-success">INTERVIEW</button>
          <button class="rejected-btn btn btn-outline btn-secondary">REJECTED</button>
        </div>
      </div>
      <div>
        <button class="btn delete-btn"><i class="fa-solid fa-trash-can"></i></button>
      </div>
    `;
    filterdSection.appendChild(div);
  }
}

function renderInterviewCards() {
  filterdSection.innerHTML = "";
  for (let interview of InterviewCards) {
    let div = document.createElement("div");
    div.className = "flex justify-between bg-white py-6 px-6 rounded-sm shadow-md";
    div.innerHTML = `
      <div class="space-y-5">
        <div>
          <h3 class="text-[#002C5C] font-bold plantName">${interview.plantName}</h3>
          <p class="text-[#64748B] lights">${interview.lights}</p>
        </div>
        <div>
          <p class="text-[#64748B] water">${interview.water}</p>
        </div>
        <div>
          <button class="btn btn-soft btn-info stutas">${interview.stutas}</button>
          <p class="nots">${interview.nots}</p>
        </div>
        <div>
          <button class="interview-btn btn btn-outline btn-success">INTERVIEW</button>
          <button class="rejected-btn btn btn-outline btn-secondary">REJECTED</button>
        </div>
      </div>
      <div>
        <button class="btn delete-btn"><i class="fa-solid fa-trash-can"></i></button>
      </div>
    `;
    filterdSection.appendChild(div);
  }
}


// const imptyCard = document.getElementById("impty-card")
// if(Total == AllCards.children.length){
//       imptyCard.classList.add("hidden");
// } else if (Interview == InterviewCards.children.length ){
//     imptyCard.classList.add("hidden");

// }else if (RejectedCards == filterd-section.children.length){
//     imptyCard.classList.add("hidden");
// }else  imptyCard.classList.remove("hidden");








