#### Exemplos simples de POST & GET com Fetch API

POST ->

```
    (async () => {
        await fetch('http://localhost:5000/get/post', {
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
```

GET ->

```
fetch("http://localhost:5000/get").then(res => res.json())
.then(items => {
  items.map(item => {
    document.querySelector("tbody").innerHTML += `
      <tr>
        <td>${item}</td>
      </tr>
    `
  })
})
```
