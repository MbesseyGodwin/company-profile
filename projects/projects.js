document.addEventListener("DOMContentLoaded", function() {
    const accordionContainer = document.getElementById('accordionContainer');

    // Data for projects
    const projectsData = [
        {
            year: 2024,
            projects: [
                { name: "rentify nigeria", started: "april", ended: "june", link: "N/A" },
                { name: "project 2", started: "N/A", ended: "N/A", link: "N/A" },
                { name: "project 3", started: "N/A", ended: "N/A", link: "N/A" },
                { name: "project 4", started: "N/A", ended: "N/A", link: "N/A" }
            ]
        },
        {
            year: 2025,
            projects: [
                { name: "project 5", started: "N/A", ended: "N/A", link: "N/A" },
                { name: "project 6", started: "N/A", ended: "N/A", link: "N/A" },
                { name: "project 7", started: "N/A", ended: "N/A", link: "N/A" },
            ]
        },
        {
            year: 2026,
            projects: [
                { name: "project #", started: "N/A", ended: "N/A", link: "N/A" },
                { name: "project #", started: "N/A", ended: "N/A", link: "N/A" }
            ]
        },
        {
            year: 2027,
            projects: [
                { name: "project #", started: "N/A", ended: "N/A", link: "N/A" },
                { name: "project #", started: "N/A", ended: "N/A", link: "N/A" }
            ]
        }
    ];

    // Function to create accordion items
    function createAccordionItem(year, projects) {
        const accordionItem = document.createElement('div');
        accordionItem.classList.add('w-100', 'mx-auto', 'border', 'border-dark');

        const accordionHeader = document.createElement('div');
        accordionHeader.classList.add('accordion-header', 'cursor-pointer', 'transition', 'flex', 'space-x-5', 'px-1', 'items-center', 'h-16');
        accordionHeader.innerHTML = `
            <i class="fas fa-plus"></i>
            <h3 class="fw-bold font-bold">${year} Projects</h3>
        `;
        accordionItem.appendChild(accordionHeader);

        const accordionContent = document.createElement('div');
        accordionContent.classList.add('accordion-content', 'overflow-hidden', 'max-h-0');
        const table = document.createElement('table');
        table.classList.add('table', 'table-bordered', 'table-primary');
        table.innerHTML = `
            <thead class="text-xs lg:text-lg capitalize">
                <tr>
                    <th scope="col">Project</th>
                    <th scope="col">Started</th>
                    <th scope="col">Ended</th>
                    <th scope="col">Link</th>
                </tr>
            </thead>
            <tbody class="text-xs lg:text-lg capitalize">
                ${projects.map(project => `
                    <tr>
                        <td>${project.name}</td>
                        <td>${project.started}</td>
                        <td>${project.ended}</td>
                        <td>${project.link}</td>
                    </tr>
                `).join('')}
            </tbody>
        `;
        accordionContent.appendChild(table);
        accordionItem.appendChild(accordionContent);

        return accordionItem;
    }

    // Function to initialize accordion
    function initAccordion() {
        projectsData.forEach(data => {
            const accordionItem = createAccordionItem(data.year, data.projects);
            accordionContainer.appendChild(accordionItem);

            const accordionHeader = accordionItem.querySelector('.accordion-header');
            accordionHeader.addEventListener('click', () => {
                accordionContent = accordionItem.querySelector('.accordion-content');
                accordionContent.classList.toggle('max-h-0');
            });
        });
    }

    // Initialize accordion
    initAccordion();
});








const accordionHeader = document.querySelectorAll(".accordion-header");
accordionHeader.forEach((header) => {
header.addEventListener("click", function () {
    const accordionContent = header.parentElement.querySelector(".accordion-content");
    let accordionMaxHeight = accordionContent.style.maxHeight;

    // Condition handling
    if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
    accordionContent.style.maxHeight = `${accordionContent.scrollHeight + 32}px`;
    header.querySelector(".fas").classList.remove("fa-plus");
    header.querySelector(".fas").classList.add("fa-minus");
    header.parentElement.classList.add("bg-indigo-50");
    } else {
    accordionContent.style.maxHeight = `0px`;
    header.querySelector(".fas").classList.add("fa-plus");
    header.querySelector(".fas").classList.remove("fa-minus");
    header.parentElement.classList.remove("bg-indigo-50");
    }
});
});