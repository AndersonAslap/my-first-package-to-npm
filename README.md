## Criando meu primeiro pacote no npm

> Como instalar o pacote ?


```bash
$ npm install my-first-package-to-npm
```
##

> Como usar ?


```js
const { formatCep } = require("my-first-package-to-npm");

let taxCode = "12345678";

let taxCodeFormated = formatCep(taxCode); // "12345-678"

```

- formatCep( value : string ) : string <br>
    Essa função irá formatar um CEP e retornar o mesmo formatado.

## 

> Como publicar ?

- Deve-se fazer login na conta sua conta do NPM.

```bash
$ npm login
```

- Comando para saber se está logado <br> após a execução do comando ele retorna o nome do usuário.

```bash
$ npm whoami
```

- Comando para publicar o pacote.

```bash
$ npm publish
```

##

> Como despublicar o pacote ?

```bash
$ npm unpublish --force
```



