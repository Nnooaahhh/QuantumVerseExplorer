// JavaScript code for QuantumVerse Explorer

// Function to simulate changing the multiverse with user interaction
function simulateMultiverseChange() {
    const multiverseSimulator = document.getElementById("multiverse-simulator");
    const canvas = document.getElementById("multiverse-canvas");
    const startSimulationButton = document.getElementById("startSimulation");
    const simulationResult = document.getElementById("simulationResult");
    const ctx = canvas.getContext("2d");

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Define universes with different colors and descriptions
    const universes = [
        { color: "#ff0000", name: "Universe A", description: "A fiery world with blazing suns." },
        { color: "#00ff00", name: "Universe B", description: "A lush green planet teeming with life." },
        { color: "#0000ff", name: "Universe C", description: "An oceanic world with vast water landscapes." },
    ];

    let currentUniverse = 0;

    // Function to draw a universe
    function drawUniverse() {
        ctx.fillStyle = universes[currentUniverse].color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        simulationResult.textContent = `You're in ${universes[currentUniverse].name}: ${universes[currentUniverse].description}`;
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

// Function to run a quantum experiment in the Quantum Playground
function quantumExperiment() {
    // Implement the Quantum Playground content with a quantum experiment
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
        // Simulate a quantum experiment (replace with your actual experiment)
        const randomOutcome = Math.random() < 0.5 ? "Spin Up" : "Spin Down";
        experimentResult.textContent = `Measurement Result: ${randomOutcome}`;
    });
}

document.querySelector('a[href="#quantum-playground"]').addEventListener('click', quantumExperiment);

// Function to explore quantum mysteries with interactive content
function exploreQuantumMysteries() {
    // Implement the Quantum Mysteries content with interactive elements
    const quantumMysteries = document.getElementById("quantum-mysteries-content");
    
    quantumMysteries.innerHTML = `
        <h3>Quantum Mysteries</h3>
        <p>Choose a quantum mystery to explore:</p>
        <ul>
            <li><button id="eprParadox">Einstein-Podolsky-Rosen (EPR) Paradox</button></li>
            <li><button id="quantumEntanglement">Quantum Entanglement</button></li>
        </ul>
        <div id="mysteryContent"></div>
    `;

    const eprParadoxButton = document.getElementById("eprParadox");
    const quantumEntanglementButton = document.getElementById("quantumEntanglement");
    const mysteryContent = document.getElementById("mysteryContent");

    // Add interactivity to explore quantum mysteries
    eprParadoxButton.addEventListener("click", () => {
        mysteryContent.innerHTML = `
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
        `;
    });

    quantumEntanglementButton.addEventListener("click", () => {
        mysteryContent.innerHTML = `
            <h4>Quantum Entanglement</h4>
            <p>
                Quantum entanglement is a fascinating phenomenon where two or more particles become correlated
                in such a way that the state of one particle is dependent on the state of another, even when
                they are separated by large distances. This entanglement defies classical intuitions and has led
                to groundbreaking experiments and applications in quantum technologies.
            </p>
            <p>
                Researchers are exploring the mysteries of quantum entanglement to develop quantum communication
                systems and quantum computing.
            </p>
        `;
    });
}

document.querySelector('a[href="#quantum-mysteries"]').addEventListener('click', exploreQuantumMysteries);

// Function to enroll in interactive courses
function enrollInCourses() {
    // Implement the Interactive Courses content with interactive course listings
    const coursesContent = document.getElementById("courses-content");
    
    coursesContent.innerHTML = `
        <h3>Interactive Courses</h3>
        <p>Choose a course to enroll in:</p>
        <ul>
            <li><button id="introToQuantum">Introduction to Quantum Mechanics</button></li>
            <li><button id="advQuantumPhysics">Advanced Quantum Physics</button></li>
            <li><button id="quantumComputing">Quantum Computing Fundamentals</button></li>
        </ul>
        <div id="courseDescription"></div>
    `;

    const introToQuantumButton = document.getElementById("introToQuantum");
    const advQuantumPhysicsButton = document.getElementById("advQuantumPhysics");
    const quantumComputingButton = document.getElementById("quantumComputing");
    const courseDescription = document.getElementById("courseDescription");

    // Add interactivity to enroll in courses
    introToQuantumButton.addEventListener("click", () => {
        courseDescription.innerHTML = `
            <h4>Introduction to Quantum Mechanics</h4>
            <p>
                This introductory course covers the basics of quantum mechanics, including wave-particle duality,
                superposition, and quantum states. Explore the fundamental principles that govern the quantum world.
            </p>
            <button id="enrollIntroToQuantum">Enroll Now</button>
        `;

        const enrollIntroToQuantumButton = document.getElementById("enrollIntroToQuantum");
        enrollIntroToQuantumButton.addEventListener("click", () => {
            // Handle course enrollment (replace with your enrollment logic)
            alert("Enrolled in Introduction to Quantum Mechanics!");
        });
    });

    advQuantumPhysicsButton.addEventListener("click", () => {
        courseDescription.innerHTML = `
            <h4>Advanced Quantum Physics</h4>
            <p>
                Dive deeper into quantum physics with this advanced course. Explore topics such as quantum
                entanglement, quantum field theory, and quantum information theory.
            </p>
            <button id="enrollAdvQuantumPhysics">Enroll Now</button>
        `;

        const enrollAdvQuantumPhysicsButton = document.getElementById("enrollAdvQuantumPhysics");
        enrollAdvQuantumPhysicsButton.addEventListener("click", () => {
            // Handle course enrollment (replace with your enrollment logic)
            alert("Enrolled in Advanced Quantum Physics!");
        });
    });

    quantumComputingButton.addEventListener("click", () => {
        courseDescription.innerHTML = `
            <h4>Quantum Computing Fundamentals</h4>
            <p>
                Explore the world of quantum computing and quantum algorithms. Learn how quantum computers
                can solve complex problems with unprecedented speed and efficiency.
            </p>
            <button id="enrollQuantumComputing">Enroll Now</button>
        `;

        const enrollQuantumComputingButton = document.getElementById("enrollQuantumComputing");
        enrollQuantumComputingButton.addEventListener("click", () => {
            // Handle course enrollment (replace with your enrollment logic)
            alert("Enrolled in Quantum Computing Fundamentals!");
        });
    });
}

document.querySelector('a[href="#courses"]').addEventListener('click', enrollInCourses);
