// <!-- DataTables Initialization Script -->
$(document).ready(function () {
  // Sample data array
var experiences = [
    {
      organization: "Caritas Nigeria",
      position: "Health Informatics",
      location: "Umuahia, Abia State, Nigeria",
      duration: "25",
      details: '<a href="#">see more</a>',
    },
    {
      organization: "UNICEF Australia",
      position: "Software Developer",
      location: "Melbourne, Australia (Remote)",
      duration: "2",
      details: '<a href="#">see more</a>',
    },
    {
      organization: "ABC Tech",
      position: "Web Developer",
      location: "San Francisco, USA (Remote)",
      duration: "3",
      details: '<a href="#">see more</a>',
    },
    {
      organization: "Turing",
      position: "Frontend Engineer",
      location: "Remote (USA)",
      duration: "7",
      details: '<a href="#">see more</a>',
    },
    {
      organization: "Code Masters",
      position: "Frontend Developer",
      location: "London, UK Remote",
      duration: "4",
      details: '<a href="#">see more</a>',
    },
    {
      organization: "App Corp",
      position: "Software Analyst",
      location: "Remote (USA)",
      duration: "5",
      details: '<a href="#">see more</a>',
    },
    {
      organization: "Tech Solutions",
      position: "IT Consultant",
      location: "Toronto, Canada (Remote)",
      duration: "6",
      details: '<a href="#">see more</a>',
    },
    {
      organization: "Tech Innovations",
      position: "UI/UX Designer Intern",
      location: "work from Home",
      duration: "3",
      details: '<a href="#">see more</a>',
    },
    {
      organization: "Frame Corporation",
      position: "Data Scientist",
      location: "USA (Remote)",
      duration: "6",
      details: '<a href="#">see more</a>',
    },
    {
      organization: "Tech Solutions",
      position: "Software Developer",
      location: "Montreal (Remote)",
      duration: "4",
      details: '<a href="#">see more</a>',
    },
  ];
  

  // Populate the table dynamically
  var tableBody = $("#experienceTableBody");
  experiences.forEach(function (experience) {
    var row = $("<tr>");
    row.append("<td>" + experience.organization + "</td>");
    row.append("<td>" + experience.position + "</td>");
    row.append("<td>" + experience.location + "</td>");
    row.append("<td class='text-center'>" + experience.duration + "</td>");
    row.append("<td>" + experience.details + "</td>");
    tableBody.append(row);
  });

  // Initialize DataTable
  $("#example").DataTable();
});

// coding tests

function rounds_won(results) {
    let playerOneRounds = 0;
    let playerTwoRounds = 0;
  
    for (const result of results) {
      if (result === 1) {
        playerOneRounds++;
      } else if (result === 2) {
        playerTwoRounds++;
      }
    }
  
    if (playerOneRounds > playerTwoRounds) {
      return playerOneRounds;
    } else if (playerTwoRounds > playerOneRounds) {
      return playerTwoRounds;
    } else {
      return playerOneRounds;
    }
  }
  
  // Example usage:
  console.log(rounds_won([1])); // Output: 1
  console.log(rounds_won([2])); // Output: 1
  console.log(rounds_won([1, 2, 1])); // Output: 2
  console.log(rounds_won([2, 1, 2])); // Output: 2
  