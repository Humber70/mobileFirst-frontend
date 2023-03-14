import data from "../data.json" assert { type: "json" };

const d = document;

const $summaries = d.getElementById("summaries");
const $fragment = d.createDocumentFragment();


const getInfo = (params,index) => {
  let $article = d.createElement("article");
  let $img = d.createElement("img");
  let $h4 = d.createElement("h4");
  let $span = d.createElement("span");
  let $contScore = d.createElement("div");
  let $contSkill = d.createElement("div");

  $contSkill.classList.add("skill");
  $article.classList.add("cont-summary");
  $article.classList.add(`summary-style${index + 1}`);

  $img.setAttribute("src", params.icon);
  $img.setAttribute("alt", params.category);
  $h4.textContent = params.category;
  $span.innerHTML = `${params.score}  <span style="color:gray;">/ 100</span>`;
  $span.style.color = "hsl(224, 30%, 27%)";

  $contSkill.appendChild($img);
  $contSkill.appendChild($h4);
  $contScore.appendChild($span);

  $article.appendChild($contSkill);
  $article.appendChild($contScore);

  $fragment.appendChild($article);
}

data.forEach((params,index) => {

  getInfo(params,index)
  $summaries.appendChild($fragment);
  
})