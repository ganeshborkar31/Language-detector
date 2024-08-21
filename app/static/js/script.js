async function predictLanguage() {
    const textInput = document.getElementById("textInput").value.trim();
    const resultElement = document.getElementById("result");
    const loadingElement = document.getElementById("loading");
    const predictButton = document.getElementById("predictButton");

    // Clear previous result and show loading indicator
    resultElement.innerHTML = "";
    resultElement.className = "result"; // Reset class to default result style
    loadingElement.style.display = "block";
    predictButton.disabled = true;
    
    try {
        const response = await fetch("/predict/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text: textInput })
        });

        const data = await response.json();
        
        if (data.error) {
            resultElement.innerHTML = data.error;
            resultElement.className = "result error"; // Apply error style
        } else {
            resultElement.innerHTML = `Predicted Language: ${data.language}`;
            resultElement.className = "result"; // Ensure result class is applied
        }
    } catch (error) {
        resultElement.innerHTML = "Error predicting language. Please try again.";
        resultElement.className = "result error"; // Apply error style
    } finally {
        loadingElement.style.display = "none";
        predictButton.disabled = false;
    }
}



