function getIP() {
    fetch('https://api.ipify.orgx/?format=json')
        .then(res => res.json())
        .then(d => {
            document.getElementById("replace").textContent = `${d.ip}`;
        })
        .catch(error => {
            alert(`Error fetching IP: ${error.message}`);
        });
}