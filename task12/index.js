function yourInfo() {
   const name=document.getElementById("name").value;
   const Age=document.getElementById("age").value;
   const timestamp = new Date().toLocaleString();

   window.alert(`Your name is: ${name}\nYour age is: ${Age}\nTimestamp: ${timestamp}`);
}