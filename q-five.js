// Regular expression pattern to match valid URLs
var urlPattern = /^(https?:\/\/)[\w\d\-._~:/?#[\]@!$&'()*+,;=%]*[a-zA-Z]+\.[a-zA-Z]+$/;

// Function to check if a URL is valid
function isValidUrl(url) {
    return urlPattern.test(url);
}

// Input URL from the user
var Url = "https://pwskills.com";

// Check if the input URL is valid and print the result
if (isValidUrl(Url)) {
    console.log("Valid URL");
} else {
    console.log("Invalid URL");
}
