// JavaScript code for QuantumVerse Explorer

// Function to simulate changing the multiverse
function simulateMultiverseChange() {
    const multiverseSimulator = document.getElementById("multiverse-simulator");
    const canvas = document.getElementById("multiverse-canvas");
    const startSimulationButton = document.getElementById("startSimulation");
    const simulationResult = document.getElementById("simulationResult");
    const ctx = canvas.getContext("2d");

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Define universes with different colors
    const universes = [
        { color: "#ff0000", name: "Universe A" },
        { color: "#00ff00", name: "Universe B" },
        { color: "#0000ff", name: "Universe C" },
    ];

    let currentUniverse = 0;

    // Function to draw a universe
    function drawUniverse() {
        ctx.fillStyle = universes[currentUniverse].color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        simulationResult.textContent = `You're in ${universes[currentUniverse].name}`;
    }

    // Function to switch to the next universe
    function switchUniverse() {
        currentUniverse = (currentUniverse + 1) % universes.length;
        drawUniverse();
    }

    // Add interactivity to the simulation
    startSimulationButton.addEventListener("click", () => {
        simulationResult.textContent = "Starting the journey...";
        startSimulationButton.disabled = true;

        // Simulate a journey through universes
        const journeyInterval = setInterval(() => {
            switchUniverse();
        }, 1000);

        // Stop the journey after 5 seconds
        setTimeout(() => {
            clearInterval(journeyInterval);
            startSimulationButton.disabled = false;
            simulationResult.textContent = "Journey completed!";
        }, 5000);
    });

    // Initial universe
    drawUniverse();
}

// Add click event listener to "Start Simulation" button
document.querySelector('a[href="#multiverse"]').addEventListener('click', simulateMultiverseChange);

// Function to experiment in the Quantum Playground
function quantumExperiment() {
    // Implement the Quantum Playground content with a simple experiment
    const quantumPlayground = document.getElementById("quantum-playground-content");
    
    quantumPlayground.innerHTML = `
        <h3>Quantum Playground</h3>
        <div id="quantum-experiment">
            <button id="runExperiment">Run Quantum Experiment</button>
            <p id="experimentResult"></p>
        </div>
    `;

    const runExperimentButton = document.getElementById("runExperiment");
    const experimentResult = document.getElementById("experimentResult");

    runExperimentButton.addEventListener("click", () => {
        const randomOutcome = Math.random() < 0.5 ? "Spin Up" : "Spin Down";
        experimentResult.textContent = `Measurement Result: ${randomOutcome}`;
    });
}

document.querySelector('a[href="#quantum-playground"]').addEventListener('click', quantumExperiment);

// Function to explore quantum mysteries
function exploreQuantumMysteries() {
    // Implement the Quantum Mysteries content with an article
    const quantumMysteries = document.getElementById("quantum-mysteries-content");
    
    quantumMysteries.innerHTML = `
        <h3>Quantum Mysteries</h3>
        <article>
            <h4>Einstein-Podolsky-Rosen (EPR) Paradox</h4>
            <p>
                The EPR paradox is a thought experiment in quantum mechanics that challenges our understanding of
                entanglement. It was proposed by Albert Einstein, Boris Podolsky, and Nathan Rosen in 1935.
                The paradox highlights the seemingly instantaneous influence that one entangled particle can have
                on another, regardless of the distance separating them.
            </p>
            <p>
                Despite the paradox, quantum entanglement has been experimentally confirmed, leading to profound
                insights into the nature of reality at the quantum level.
            </p>
        </article>
    `;
}

document.querySelector('a[href="#quantum-mysteries"]').addEventListener('click', exploreQuantumMysteries);

// Function to enroll in courses
function enrollInCourses() {
    // Implement the Interactive Courses content with course listings
    const coursesContent = document.getElementById("courses-content");
    
    coursesContent.innerHTML = `
        <h3>Interactive Courses</h3>
        <ul>
            <li><a href="#">Introduction to Quantum Mechanics</a></li>
            <li><a href="#">Advanced Quantum Physics</a></li>
            <li><a href="#">Quantum Computing Fundamentals</a></li>
        </ul>
    `;
}

document.querySelector('a[href="#courses"]').addEventListener('click', enrollInCourses);

// Function to browse the Quantum Art Gallery
function browseArtGallery() {
    // Implement the Quantum Art Gallery content with artwork listings
    const artGalleryContent = document.getElementById("art-gallery-content");
    
    artGalleryContent.innerHTML = `
        <h3>Quantum Art Gallery</h3>
        <div class="artwork">
            <img src="artwork1.jpg" alt="Quantum Artwork 1">
            <p>Artist: John Doe</p>
        </div>
        <div class="artwork">
            <img src="artwork2.jpg" alt="Quantum Artwork 2">
            <p>Artist: Jane Smith</p>
        </div>
    `;
}

document.querySelector('a[href="#art-gallery"]').addEventListener('click', browseArtGallery);

// Function to access the Community Hub
function accessCommunityHub() {
    // Implement the Community Hub content with forum discussions
    const communityContent = document.getElementById("community-content");
    
    communityContent.innerHTML = `
        <h3>Community Hub</h3>
        <section id="forum">
            <h4>Quantum Enthusiasts Forum</h4>
            <ul>
                <li><a href="#">Discussion on Quantum Entanglement</a></li>
                <li><a href="#">Share Your Quantum Artwork</a></li>
                <li><a href="#">Ask Questions About Quantum Computing</a></li>
            </ul>
        </section>
    `;
}

document.querySelector('a[href="#community"]').addEventListener('click', accessCommunityHub);
