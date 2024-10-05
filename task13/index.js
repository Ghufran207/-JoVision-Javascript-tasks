function SubmitInfo() {
   const name = document.getElementById("name").value;

   const url = `https://api.agify.io?name=${name}`;
   const fetchAge = new Promise((resolve, reject) => {
      fetch(url)
         .then(response => {
               if (!response.ok) {
                  throw new Error(`Error: ${response.statusText}`);
               }
               return response.json();
         })
         .then(data => resolve(data)).then(data => {
            const { name, age } = data;
            window.alert(`Your name is: ${name}\nYour estimated age is: ${age}`);
         })
         .catch(error => reject(error));
   });

   fetchAge
      .then(data => {
         const { name, age } = data;
         window.alert(`Your name is: ${name}\nYour estimated age is: ${age}`);
      })
      .catch(error => {
         console.error("Error fetching age:", error);
         window.alert("Error: Could not guess your age.");
      });
}