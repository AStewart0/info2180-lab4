document.getElementById("search-btn").addEventListener("click", searchSuperhero);

function sanitize(str) {
    // Prevent injecting HTML
    const temp = document.createElement("div");
    temp.textContent = str;
    return temp.innerHTML;
}

function searchSuperhero() {
    const input = document.getElementById("search").value.trim();
    const cleanInput = sanitize(input);

    // Build URL
    let url = "superheroes.php";
    if (cleanInput !== "") {
        url += "?query=" + encodeURIComponent(cleanInput);
    }

    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById("result").innerHTML = data;
        })
        .catch(error => {
            document.getElementById("result").innerHTML = "An error occurred.";
            console.error(error);
        });
}
