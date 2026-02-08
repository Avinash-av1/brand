const API_BASE = "https://brand-backend-6qvm.onrender.com/api";

function setLoading(isLoading) {
  document.getElementById("loading").classList.toggle("hidden", !isLoading);
  document.querySelectorAll("button").forEach(btn => {
    btn.disabled = isLoading;
  });
}

async function postData(endpoint) {
  const text = document.getElementById("inputText").value.trim();

  if (!text) {
    document.getElementById("output").innerText =
      "❗ Please enter some text first.";
    return;
  }

  setLoading(true);

  try {
    const response = await fetch(`${API_BASE}/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
      "❌ Something went wrong. Please try again.";
    console.error(error);
  } finally {
    setLoading(false);
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
