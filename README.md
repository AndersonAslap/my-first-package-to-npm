## Criando meu primeiro pacote no npm

> Como usar ?

```js
const { formatCep } = require("my-first-package-to-npm");

let taxCode = "12345678";

let taxCodeFormated = formatCep(taxCode); // "12345-678"

```

- formatCep( value : string ) : string <br>
    Essa função irá formatar um CEP e retornar o mesmo formatado.






