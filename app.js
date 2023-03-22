document.getElementById("prayer-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const affiliation = document.getElementById("affiliation").value;
    const topic = document.getElementById("topic").value;
    const location = document.getElementById("location").value;
    const additional = document.getElementById("additional").value;

    const response = await fetch("/generate-prayer", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ affiliation, topic, location, additional }),
    });

    const result = await response.json();
    document.getElementById("prayer-result").innerText = result.prayer;
});
