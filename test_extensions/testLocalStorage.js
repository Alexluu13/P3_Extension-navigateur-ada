// if (localStorage.getItem("nom") != null)
//     h1.textContent = `Bonjour ${localStorage.getItem("nom")}`;

//     bouton.onclick = () =>{
//         localStorage.setItem("nom",nom.value);
//     }

// LOCAL STORAGE
// Stocker indéfiniment - 10mb max -- CHROME only
//localStorage.setItem("alex", "delhia");
//localStorage.removeItem("alex");

mysearch.onclick = () => {
  console.log("coucou");
  let textUser = document.getElementById("mysearch").value;
  if (textUser != null) console.log(textUser);
  console.log(document.getElementById("mysearch").value);
  localStorage.setItem("name", document.getElementById("mysearch").value);
};
