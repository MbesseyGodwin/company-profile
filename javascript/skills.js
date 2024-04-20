// Array of skill objects
// Array of skill objects
const skills = [
    {
      name: "JavaScript",
      description: "Proficient in JavaScript, a versatile programming language used to enhance web pages and create interactive user interfaces. Experienced in both frontend and backend development.",
      link: "#"
    },
    {
      name: "React",
      description: "Skilled in React, a popular JavaScript library for building user interfaces. Proficient in creating reusable components and managing state to develop efficient and responsive web applications.",
      link: "#"
    },
    {
      name: "Node.js",
      description: "Experienced in Node.js, a server-side JavaScript runtime. Capable of building scalable and efficient backend applications, APIs, and microservices using Node.js.",
      link: "#"
    }
];

  // Generate carousel items dynamically
  const carouselInner = document.querySelector(".carousel-inner");
  const carouselIndicators = document.querySelector(".carousel-indicators");

  skills.forEach((skill, index) => {
    // Create carousel item
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    if (index === 0) {
      carouselItem.classList.add("active");
    }

    // Create card for skill
    const card = document.createElement("div");
    card.classList.add("card", "bg-secondary", "text-center");

    // Create card header
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header", "display-6", "text-light");
    cardHeader.textContent = skill.name;

    // Create card body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    // Create card title
    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = "Special title treatment";

    // Create card description
    const cardDescription = document.createElement("p");
    cardDescription.classList.add("card-text", "h4", "text-light");
    cardDescription.textContent = skill.description;

    // Create card link
    const cardLink = document.createElement("a");
    cardLink.classList.add("btn", "btn-primary");
    cardLink.href = skill.link;
    cardLink.textContent = "Go somewhere";

    // Create card footer
  const cardFooter = document.createElement("div");
  cardFooter.classList.add("card-footer", "text-body-secondary");
  cardFooter.textContent = "2 days ago";

  // Append card to carousel item
  carouselItem.appendChild(card);

    // Append elements to card body
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardDescription);
    cardBody.appendChild(cardLink);

    // Append elements to card
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    // Append card footer to card
    card.appendChild(cardFooter);

    // Append card to carousel item
    carouselItem.appendChild(card);

    // Append carousel item to carousel inner content
    carouselInner.appendChild(carouselItem);

    // Create carousel indicator
    const indicatorButton = document.createElement("button");
    indicatorButton.type = "button";
    indicatorButton.dataset.bsTarget = "#carouselExampleIndicators";
    indicatorButton.dataset.bsSlideTo = index;
    if (index === 0) {
      indicatorButton.classList.add("active");
      indicatorButton.setAttribute("aria-current", "true");
    }
    indicatorButton.setAttribute("aria-label", `Slide ${index + 1}`);

    // Append indicator button to carousel indicators
    carouselIndicators.appendChild(indicatorButton);
  });