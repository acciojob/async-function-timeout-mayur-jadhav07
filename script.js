//your JS code here. If required.
// Wait for a specified number of milliseconds
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function displayMessageWithDelay(text, delayTime) {
    // Await the delay time
    await delay(delayTime);

    // Display the text in the output div after the delay
    const outputDiv = document.getElementById("output");
    outputDiv.innerText = text;
}

// Attach event listener to the button
document.getElementById("btn").addEventListener("click", async () => {
    // Get the user input values
    const textInput = document.getElementById("text").value;
    const delayInput = parseInt(document.getElementById("delay").value, 10);

    // Check if both values are provided
    if (!textInput || isNaN(delayInput)) {
        alert("Please provide valid text and delay.");
        return;
    }

    // Clear the output div before displaying the message
    document.getElementById("output").innerText = '';

    // Call the async function to display the message after the delay
    await displayMessageWithDelay(textInput, delayInput);
});
