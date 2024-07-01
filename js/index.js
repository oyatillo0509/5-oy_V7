let form = document.getElementById("user_form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const f_name = document.getElementById("firstName").value;
  const l_name = document.getElementById("lastName").value;
  const age = document.getElementById("age").value;

  localStorage.setItem("firstName", f_name);
  localStorage.setItem("lastName", l_name);
  localStorage.setItem("age", age);

  const cont = document.getElementById("display_container");

  const qosh = document.createElement("div");
  qosh.innerHTML = `
    <p><span>Ism:</span> ${f_name}</p>
    <p><span>Familiya:</span> ${l_name}</p>
    <p><span>Yosh:</span> ${age}</p> 
    <p>_____________________________<p>
  `;

  cont.appendChild(qosh);

  alert("Saqlansinmi");
  form.reset();
});
