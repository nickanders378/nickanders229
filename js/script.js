// Seleciona elementos do formulário e da área de exibição de usuários
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const filmeFavoritoInput = document.getElementById('filme-favorito');
const userList = document.querySelector('#user-list ul');

// Função para adicionar usuário na lista
function addUser(name, email, filmeFavorito) {
  const listItem = document.createElement('li');
  listItem.textContent = `Nome: ${name} | E-mail: ${email} | Filme Favorito: ${filmeFavorito}`;
  userList.appendChild(listItem);
}

// Evento para capturar e exibir os dados do formulário
form.addEventListener('submit', function (event) {
  event.preventDefault(); 
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const filmeFavorito = filmeFavoritoInput.value.trim();

  if (name && email && filmeFavorito) {
    addUser(name, email, filmeFavorito); 
    form.reset(); 
  } else {
    alert('Por favor, preencha todos os campos!');
  }
});

// Inserindo dados automaticamente
addUser("Nicollas", "nicollas.macedo@aluno.senai.br", "Ford vs Ferrari");