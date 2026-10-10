
const ideas = {
    Brands: [
        "Introduce your brand",
        "Show your product",
        "Share customer reviews",
        "Post industry tips",
        "Show behind the scenes"
    ],
    Creators: [
        "Introduce yourself",
        "Share your daily routine",
        "Teach a useful skill",
        "Share a personal story",
        "Answer audience questions"
    ],
    Students: [
        "Share study tips",
        "Show your timetable",
        "Explain a subject topic",
        "Share useful study apps",
        "Post your learning progress"
    ],
    Founders: [
        "Share your startup story",
        "Explain your business idea",
        "Show your product",
        "Share business lessons",
        "Discuss industry trends"
    ]
};

function generateCalendar() {
    const audience = document.getElementById("audience").value;
    const platform = document.getElementById("platform").value;
    const goal = document.getElementById("goal").value;
    const output = document.getElementById("output");

    output.innerHTML = `<h2>Your 30-Day Calendar</h2>
        <p>Audience: ${audience} | Platform: ${platform}</p>
        <p>Goal: ${goal}</p>`;

    for (let day = 1; day <= 30; day++) {
        const idea = ideas[audience][(day - 1) % ideas[audience].length];

        const card = document.createElement("div");
        card.className = "day";

        const title = document.createElement("h3");
        title.textContent = `Day ${day}`;

        const description = document.createElement("p");
        description.textContent = idea;

        card.appendChild(title);
        card.appendChild(description);
        output.appendChild(card);
    }
}
