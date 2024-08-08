async function populate() {
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroes = await response.json();

  populateHeader(superHeroes);
  populateSection(superHeroes);
}

function populateHeader(obj) {
  const header = document.querySelector("header");
  const heading = document.createElement("h1");
  heading.textContent = obj.squadName;
  header.appendChild(heading);

  const description = document.createElement("p");
  description.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
  header.appendChild(description);
}

function populateSection(obj) {
  const section = document.querySelector("section");
  const members = obj.members;
  for (const member of members) {
    const myArticle = document.createElement("article");
    const subHeading = document.createElement("h2");
    const myFeature1 = document.createElement("p");
    const myFeature2 = document.createElement("p");
    const myFeature3 = document.createElement("p");
    const list = document.createElement("ul");

    subHeading.textContent = member.name;
    myFeature1.textContent = `Secret Identity: ${member.secretIdentity}`;
    myFeature2.textContent = `Age: ${member.age}`;
    myFeature3.textContent = `Superpowers:`;

    const powers = member.powers;

    for (const power of powers) {
      const li = document.createElement("li");
      li.textContent = power;
      list.appendChild(li);
    }

    myArticle.appendChild(subHeading);
    myArticle.appendChild(myFeature1);
    myArticle.appendChild(myFeature2);
    myArticle.appendChild(myFeature3);
    myArticle.appendChild(list);

    section.appendChild(myArticle);
  }
}

populate();
