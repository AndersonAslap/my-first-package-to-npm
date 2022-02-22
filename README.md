## Criando meu primeiro pacote no npm

> Como usar ?

```js
const { formatCep } = require("my-first-package-to-npm");

let taxCode = "12345678";

let taxCodeFormated = formatCep(taxCode); // "12345-678"

```

- formatCep( value : string ) : string 
    Essa função irá formatar um CEP e retornar o mesmo formatado.


> Como publicar ?

- Deve-se fazer login na conta sua conta do NPM.

```bash
$ npm login
```

- Comandi para saber se está logado <br> após a execução do comando ele retorna o nome do usuário.

```bash
$ npm whoami
```






