// // Part Student Pie Chart
// const studentCtx = document.getElementById('studentChart').getContext('2d');
// const studentChart = new Chart(studentCtx, {
//   type: 'pie',
//   data: {
//     datasets: [{
//       data: [60, 40], // Example data for the student part
//       backgroundColor: ['#ff9999', '#66b3ff'],
//       borderColor: ['#ffffff', '#ffffff'],
//       borderWidth: 1
//     }]
//   }
// });

document.addEventListener("DOMContentLoaded", function() {
    const skills = {
        "tea-drinking": 95,
        "design-systems": 90,
        "figma": 95,
        "gardening": 75,
        "calisthenics": 40
    };

    // Dynamically set heights if needed
    for (let skill in skills) {
        document.getElementById(skill).style.height = `${skills[skill]}%`;
    }
});
