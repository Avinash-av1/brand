const API_BASE = "http://127.0.0.1:8000/api";

async function postData(endpoint) {
    const text = document.getElementById("inputText").value;

    if (!text) {
        alert("Please enter some text first!");
        return;
    }

    const response = await fetch(`${API_BASE}/${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text })
    });

    const data = await response.json();
    document.getElementById("output").innerText =
        JSON.stringify(data.data, null, 2);
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