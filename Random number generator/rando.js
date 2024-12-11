function generateRandomNumber() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const length = 8; // Set the desired length of the alphanumeric value
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  document.getElementById("randomValue").value = result;
    }

    function copyToClipboard() {
        const inputField = document.querySelector("input");
        inputField.select();
        inputField.setSelectionRange(0, 99999); // For mobile compatibility
        navigator.clipboard.writeText(inputField.value)
            .then(() => alert("Copied to clipboard!"))
            .catch(() => alert("Failed to copy!"));
            }
            function toggleVisibility() {
                const inputField = document.querySelector("input");
                const eyeIcon = document.getElementById("eyeIcon");
        
                if (inputField.type === "text") {
                    inputField.type = "password"; // Hide the text
                    eyeIcon.src = "/img/hide-solid-24.png"; // Update to closed-eye icon
                } else {
                    inputField.type = "text"; // Show the text
                    eyeIcon.src = "/img/hide-regular-24.png"; // Update to open-eye icon
                }
            }        
 