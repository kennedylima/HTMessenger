# HT Messenger

Projeto desenvolvido durante o `Módulo V` do `Fábrica de Programador 2` da `High Tech Cursos`.

## Iniciando o Projeto

Após fazer o clone do projeto, é necessário baixar as dependencias usando o node.js

    npm install ou npm update

Assim você irá instalar todas as dependências que estão relacionadas no arquivo **package.json**

# API HT Messenger

Este Web Service trabalha com objetos no padrão **JSON**

### Login
   Faça uma requisição POST para a API passando um usuário para o endereço
        https://htmessenger.herokuapp.com/usuario/autenticar
      
### Conversa
   Para enviar uma conversa para a API, faça uma requisição POST para o endereço:
   https://htmessenger.herokuapp.com/conversa
   
   Para buscar as conversas entre dois usuarios, faça uma requisição GET para:
   https://htmessenger.herokuapp.com/conversa/idDoUsuarioDeOrigem/idDoUsuarioDeDestino
   
   
### Contato
   Para buscar todos os contatos que neste caso também consideramos usuarios da aplicação, faça uma requisição GET:
   https://htmessenger.herokuapp.com/usuario
        
   Buscar usuario pelo id:
   https://htmessenger.herokuapp.com/usuario/idDoUsuario
   
   Para salvar um novo usuario, faça uma requição POST passando um usuario: 
   https://htmessenger.herokuapp.com/usuario
   
        


