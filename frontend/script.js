// LIVE Render backend URL
const API_BASE = "https://brand-backend-6qvm.onrender.com/api";

async function postData(endpoint) {
    const text = document.getElementById("inputText").value;

    if (!text) {
        alert("Please enter some text first!");
        return;
    }

    try {
        const response = await fetch(`${API_BASE}/${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text })
        });

        if (!response.ok) {
            throw new Error("Server error");
        }

        const data = await response.json();
        document.getElementById("output").innerText =
            JSON.stringify(data.data, null, 2);

    } catch (error) {
        document.getElementById("output").innerText =
            "Error connecting to backend. Please try again.";
        console.error(error);
    }
}

function generateBrand() {
    postData("brand-name");
}

function generateContent() {
    postData("content");
}

function analyzeSentiment() {
    postData("sentiment");
}

function chatAI() {
    postData("chat");
}
