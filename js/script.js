import data from "../data.json" assert { type: "json" };

const d = document;

const $summaries = d.getElementById("summaries");
const $fragment = d.createDocumentFragment();

data.forEach((i, index) => {
  let $article = d.createElement("article");
  let $img = d.createElement("img");
  let $h4 = d.createElement("h4");
  let $span = d.createElement("span");
  let $contScore = d.createElement("div");
  let $contSkill = d.createElement("div");

  $contSkill.classList.add("skill");
  $article.classList.add("cont-summary");
  $article.classList.add(`summary-style${index + 1}`);

  $img.setAttribute("src", i.icon);
  $img.setAttribute("alt", i.category);
  $h4.textContent = i.category;
  $span.innerHTML = `${i.score}  <span style="color:gray;">/ 100</span>`;
  $span.style.color = "hsl(224, 30%, 27%)";

  $contSkill.appendChild($img);
  $contSkill.appendChild($h4);
  $contScore.appendChild($span);

  $article.appendChild($contSkill);
  $article.appendChild($contScore);

  $fragment.appendChild($article);
});

$summaries.appendChild($fragment);
