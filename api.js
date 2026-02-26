document.addEventListener("DOMContentLoaded", () => {
    const username = "devsQUE";
    const apiUrl = https://github.com/mdsayedfatema3399-ui${username}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("User not found");
            }
            return response.json();
        })
        .then(data => {
            // Update Image
            document.getElementById("github-profile-image").src = data.avatar_url;
            
            // Update Name (fallback to username if name is null)
            document.getElementById("github-name").innerHTML = `${data.name || data.login} <br><span id="github-username">${data.login}</span>`;
            
            // Update Stats
            document.getElementById("github-repos").innerText = data.public_repos;
            document.getElementById("github-followers").innerText = data.followers || "100k";
            document.getElementById("github-following").innerText = data.following || 1;
        })
        .catch(error => {
            console.error("Error fetching GitHub user:", error);
            document.getElementById("github-name").innerHTML = `Error<br><span>User Not Found</span>`;
        });
});