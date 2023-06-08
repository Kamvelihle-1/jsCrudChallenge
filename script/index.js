
let container = document.getElementById("container");

let cardData = [
  {
    imgSrc: "https://i.postimg.cc/3RX9TnFd/Screenshot-2023-06-08-114902.png",
    cardTittle: "VMware Plugs Critical Flaws in Network Monitoring Product",
    cardText: "As CISOs and corporate defenders grapple with the intricacies of securing sensitive data passing through multi-cloud deployments and APIs, the importance of frameworks, tools, controls and design models have surfaced to the front burner. (July 19, 2023)"
  },
  {
    imgSrc: "https://i.postimg.cc/PJmqK8hG/Screenshot-2023-06-08-115310.png",
    cardTittle: "VMware Plugs Critical Flaws in Network Monitoring Product",
    cardText: "VMware ships urgent patches to cover security defects that expose businesses to remote code execution attacks."
  },
  {
    imgSrc: "https://i.postimg.cc/9FYdQD9N/Screenshot-2023-06-08-115452.png",
    cardTittle: "BBC, British Airways, Novia Scotia Among First Big-Name Victims in Global Supply-Chain Hack",
    cardText: "The Cl0p cybercrime gang’s hack of the MOVEit file-transfer program popular with enterprises could have widespread global impact."
  },
  {
    imgSrc: "https://i.postimg.cc/LsnQPtBs/Screenshot-2023-06-08-115645.png",
    cardTittle: "Enzo Biochem Ransomware Attack Exposes Information of 2.5M Individuals",
    cardText: "Following an August 2022 report detailing the whereabouts of ‘Chuck from Montreal’, one of the threat actors behind the Golden Chickens MaaS, eSentire now claims to have discovered the identity of ‘Jack’, the second developer of the malware. The Golden Chickens operator is tracked as Venom Spider."
  },
  {
    imgSrc: "https://i.postimg.cc/kXM4WsD9/Screenshot-2023-06-08-115954.png",
    cardTittle: "Toyota Discloses New Data Breach Involving Vehicle, Customer Information",
    cardText: "According to the security firm, the true mastermind behind Golden Chickens is, in fact, Jack, who has been active on cybercrime forums since 2008, when he was 15, and who built a reputation for himself under multiple aliases."
  },

];


for (let i = 0; i < cardData.length; i++) {
  
  let card = document.createElement("div");
  card.className = "card";
  card.style.width = "18rem";

  let cardImg = document.createElement("img");
  cardImg.src = cardData[i].imgSrc;
  cardImg.className = "card-img-top";
  cardImg.alt = "Card image";

  let cardBody = document.createElement("div");
  cardBody.className = "card-body";

  let cardTittle = document.createElement("h5");
  cardTittle.className = "card - tittle";
  cardTittle.textContent = cardData[i].cardTittle;
  cardBody.appendChild(cardTittle);
  card.appendChild(cardImg);
  card.appendChild(cardBody);
  container.appendChild(card);

  let cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.textContent = cardData[i].cardText;
  cardBody.appendChild(cardText);
  card.appendChild(cardImg);
  card.appendChild(cardBody);
  container.appendChild(card);

  
}




