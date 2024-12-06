document.addEventListener("DOMContentLoaded", () => {
    // Dark Mode Toggle
    const darkModeToggle = document.querySelector(".dark-mode-toggle");
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });

    // Chart.js Setup
    const ctx1 = document.getElementById('salesChart').getContext('2d');
    const salesChart = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Sales',
                data: [1200, 1900, 3000, 5000, 2400, 2800],
                borderColor: '#00d4ff',
                borderWidth: 2,
                fill: false,
            }]
        },
        options: { responsive: true }
    });

    const ctx2 = document.getElementById('activityChart').getContext('2d');
    const activityChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            datasets: [{
                label: 'User Activity',
                data: [200, 300, 400, 500, 600, 700],
                backgroundColor: '#00d4ff',
            }]
        },
        options: { responsive: true }
    });
});
