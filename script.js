function generateResult() {
  const budget = document.getElementById("budget").value;
  const german = document.getElementById("german").value;
  const language = document.getElementById("language").value;

  let verdictText = "";

  if (budget === "Under ₹10 lakh" && (german !== "None" || language !== "No")) {
    verdictText = "✅ Germany is a strong fit for you. USA would be financially challenging.";
  } else {
    verdictText = "⚠️ USA is possible, but Germany would require language preparation.";
  }

  document.getElementById("verdict").innerText = verdictText;
  document.getElementById("result").classList.remove("hidden");
}
