const beats = [
  {id:"beat1", title:"BEAT ONE", genre:"MELODIC / TRAP", file:"./songs/beat1.mp3", price:"From €29.99"},
  {id:"beat2", title:"BEAT TWO", genre:"DRILL / DARK", file:"./songs/beat2.mp3", price:"From €29.99"},
  {id:"beat3", title:"BEAT THREE", genre:"R&B / SMOOTH", file:"./songs/beat3.mp3", price:"From €29.99"},
  {id:"beat4", title:"BEAT FOUR", genre:"TRAP / HARD", file:"./songs/beat4.mp3", price:"From €29.99"},
  {id:"beat5", title:"BEAT FIVE", genre:"MELODIC / EMOTIONAL", file:"./songs/beat5.mp3", price:"From €29.99"}
];
const grid = document.querySelector("#beat-grid");
const dialog = document.querySelector("#licence-dialog");
const licence = document.querySelector("#licence");
const emailLink = document.querySelector("#email-enquiry");
let selectedBeat = beats[0];

function updateEmailLink(){
  const subject = encodeURIComponent(`Beat licence enquiry — ${selectedBeat.title}`);
  const body = encodeURIComponent(`Hi Yizzy,\n\nI'm interested in ${selectedBeat.title}.\nLicence: ${licence.value}\n\nCould you please confirm availability, price and licence terms?\n\nThanks!`);
  emailLink.href = `mailto:Yizzybeats1@gmail.com?subject=${subject}&body=${body}`;
}
beats.forEach((beat,index)=>{
  const card=document.createElement("article");
  card.className="beat-card";
  card.innerHTML=`<div class="beat-meta"><span>PRODUCTION / 0${index+1}</span><span>YB.${String(index+1).padStart(3,"0")}</span></div>
    <h3>${beat.title}</h3><p>${beat.genre}</p>
    <audio controls preload="none" aria-label="Preview ${beat.title}"><source src="${beat.file}" type="audio/mpeg">Your browser does not support audio playback.</audio>
    <div class="beat-bottom"><span>${beat.price}</span><button type="button">CHOOSE LICENCE ↗</button></div>`;
  card.querySelector("button").addEventListener("click",()=>{
    selectedBeat=beat;
    document.querySelector("#dialog-title").textContent=beat.title;
    updateEmailLink();
    dialog.showModal();
  });
  grid.append(card);
});
licence.addEventListener("change",updateEmailLink);
document.querySelector("#close-dialog").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",event=>{if(event.target===dialog)dialog.close()});
document.querySelector("#year").textContent=new Date().getFullYear();