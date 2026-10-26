function updateCount(btn) {
  const countEl = btn.querySelector(".count");
  let currCount = +countEl.textContent.split("/")[0];
  
  if (currCount === 10) return;
  
  currCount++;
  countEl.textContent = `${currCount}/10`;
}

const happyBtn = document.querySelector("#happy-btn");

happyBtn.addEventListener("click", () => updateCount(happyBtn));

const confusedBtn=document.querySelector("#confused-btn");

confusedBtn.addEventListener("click",()=>updateCount(confusedBtn));

const sadBtn=document.querySelector("#sad-btn");
sadBtn.addEventListener("click",()=>updateCount(sadBtn));

const lovingBtn=document.querySelctor("#loving-btn");
lovingBtn.addEventListener("click",()=>updateCount(lovingBtn));