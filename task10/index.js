function getIP() {
    fetch('https://api.ipify.org?format=json')
        .then(res => res.json())
        .then(d => {
            document.getElementById("replace").textContent = `${d.ip}`;
        })
        .catch(error => {
            console.error("Error fetching IP:", error);
        });
}