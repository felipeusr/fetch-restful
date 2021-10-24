const apiUrl = "http://localhost:5000";

function cadastrar() {
    (async () => {
        await fetch(apiUrl+'/post', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              email : document.querySelector("#email").value,
              senha : document.querySelector("#senha").value
          })
        });
    })();
}

fetch(apiUrl+"/get").then(res => res.json())
.then(items => {
  items.map(item => {
    document.querySelector("tbody").innerHTML += `
      <tr>
        <td>${item}</td>
      </tr>
    `
  })
})
