
function getIP() {
    fetch('https://api.ipify.org?format=json')
        .then(res=> res.json())
        .then(d => {
            console.log("Your   IP Address:", d.ip);
        })
        
}