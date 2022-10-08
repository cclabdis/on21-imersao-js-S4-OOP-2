/*Crie uma classe chamada User com os atributos:
- nome;
- username;
- email;
- senha;

Crie os seguintes metódos com as suas regras:

- login: para logar precisa do email e senha e verificar se o email e senha estão corretos, se estiverem, retornar uma mensagem de login realizado,
senão, falha no login;
- alterar senha: possibilidade de trocar a senha atual por uma senha nova.
*/

class User {
  constructor(name, userName, email, password){
  this.name = name;
  this.userName = userName
  this.email = email;
  this.password = password;
  }
  login(email, password){
    if(email === this.name && password === this.password){
      return ('login successfully')
    } else{
      return('Authentication failed')
    }
  }
  serPassword(newPassword){    
      this.password = newPassword;
      return ('senha alterada')
      
  }
}

const userClau = new User ('Claudia', 'cclabd', 'cclabdis@gmail.com', 'ge123')
console.log(userClau)
console.log(userClau.login('cclabdis@gmail.com', 'pera12'))
console.log(userClau.serPassword('cacto'))