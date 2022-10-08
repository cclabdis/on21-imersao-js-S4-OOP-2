/*Dando seguimento ao exercício 1, o atributo senha não pode ser mais retornado quando criamos
um novo objeto a partir de User. Precisamos refatorar nosso código. */


class User {
  #password;

  constructor(name, userName, email, password) {
    this.nome = name;
    this.username = userName;
    this.email = email;
    this.#password = password;
  }

  login(email, password) {
    if (email === this.email && password === this.#password) {
      return ('Login Realizado!');
    } else {
      return ('Email e senha não estão corretos');
    }
  }

  setPassword(novaSenha) {
    this.#password = novaSenha;
    return ('Sua senha foi alterada!');
  }
}

const novoUser = new User("Gabriela", "Gabi", "gabi@gmail.com", "senha123");
console.log(novoUser);

console.log(novoUser.login("gabi@gmail", "senha123"));

console.log(novoUser.setPassword("novaSenha123"));