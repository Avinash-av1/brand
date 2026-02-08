// LIVE Render backend URL
const API_BASE = "https://brand-backend-6qvm.onrender.com/api";

// Handle loading state
function setLoading(isLoading) {
  document.getElementById("loading").classList.toggle("hidden", !isLoading);
  document.querySelectorAll("button").forEach(btn => {
    btn.disabled = isLoading;
  });
}

// Main API handler with validation
async function postData(endpoint) {
  const text = document.getElementById("inputText").value.trim();
  const output = document.getElementById("output");

  // Frontend validation
  if (!text) {
    output.innerText = "❗ Input cannot be empty.";
    return;
  }

  if (text.length < 3) {
    output.innerText = "❗ Please enter at least 3 characters.";
    return;
  }

  if (text.length > 300) {
    output.innerText = "❗ Maximum 300 characters allowed.";
    return;
  }

  setLoading(true);

  try {
    const response = await fetch(`${API_BASE}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text })
    });

    const data = await response.json();

    // Backend validation / server errors
    if (!response.ok) {
      output.innerText =
        data.detail?.[0]?.msg || "❌ Invalid input or server error.";
      return;
    }

    output.innerText = JSON.stringify(data.data, null, 2);

  } catch (error) {
    output.innerText = "❌ Network error. Please try again.";
    console.error(error);
  } finally {
    setLoading(false);
  }
}

// Button handlers
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
