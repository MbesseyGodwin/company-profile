document.addEventListener("DOMContentLoaded", function() {
    const developersContainer = document.getElementById('developersContainer');
    const membersCount = document.getElementById('membersCount');


membersCount.textContent=developersData.length;
    

    // Function to create developer card
    function createDeveloperCard(developer) {
        const card = document.createElement('div');
        card.classList.add('row', 'p-1');

        const cardContent = `
            <div class="col-12 m-0 p-0">
                <div class="sm:flex">
                    <div class="p-0">
                        <img src="${developer.image}" alt="" class="border rounded border border-dark hidden sm:inline-block" style="width: 600px;">
                    </div>
                    <div class="ml-1">
                        <h1 class="form-control tracking-tight mb-1 text-xs lg:text-lg border border border-dark fw-bold text-capitalize">${developer.name}</h1>
                        <p class="form-control small text-xs lg:text-lg border border border-dark">${developer.description}</p>
                    </div>
                </div>
            </div>
            <hr class="my-2 border border-light">
        `;
        card.innerHTML = cardContent;

        return card;
    }

    // Function to render developers
    function renderDevelopers() {
        developersData.forEach(developer => {
            const developerCard = createDeveloperCard(developer);
            developersContainer.appendChild(developerCard);
        });
    }

    // Initialize rendering
    renderDevelopers();
});
