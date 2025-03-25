document.addEventListener("DOMContentLoaded", function () {
    // Simulated latency data
    const ctx = document.getElementById("latencyChart").getContext("2d");
    
    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Before Failure", "During Failure", "After Recovery"],
            datasets: [
                {
                    label: "Without RCS/CTI",
                    borderColor: "red",
                    backgroundColor: "rgba(255, 0, 0, 0.2)",
                    data: [10, 500, 250], // High latency due to failures
                },
                {
                    label: "With RCS/CTI",
                    borderColor: "green",
                    backgroundColor: "rgba(0, 255, 0, 0.2)",
                    data: [10, 300, 120], // Improved latency with caching
                },
            ],
        },
        options: {
            responsive: true,
            scales: {
                x: { title: { display: true, text: "Time Period" } },
                y: { title: { display: true, text: "Response Time (ms)" } },
            },
        },
    });
});
