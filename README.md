MANUAL DE UTILIZAÇÃO DO SISTEMA/SITE
CAPÍTULO 1 - Configuração do Git no Computador
1.1. Consultando a Documentação do Git
Para instalar o Git no seu computador com Windows, siga as instruções detalhadas na documentação oficial do Git: Instalar Git.

1.2. Verificando a Instalação do Git
Após instalar o Git, verifique se a instalação foi bem-sucedida abrindo o Terminal ou Prompt de Comando e digitando o seguinte comando:

git --version
Se o Git estiver instalado corretamente, você verá a versão do Git instalada no seu sistema.

1.3. Caso Não Esteja Instalado
Se o Git não estiver instalado, você pode baixá-lo e instalá-lo a partir do site oficial: Instalar o Git - Download versão Windows.

1.4. Conectando o Git no Windows
Após a instalação, você precisa configurar seu nome de usuário e email para que o Git saiba quem está fazendo as alterações. No Terminal ou Prompt de Comando, execute os seguintes comandos, substituindo "Seu Nome" e "seuemail@example.com" pelas suas informações:

git config --global user.name "Seu Nome"
git config --global user.email seuemail@example.com
1.5. Criando o Par de Chaves SSH
Para permitir uma conexão segura entre seu computador e o GitHub, você precisa gerar uma chave SSH. No Terminal ou Prompt de Comando, execute o seguinte comando:

ssh-keygen
Siga as instruções na tela para gerar a chave. Geralmente, você pode pressionar Enter para aceitar os valores padrão.

1.6. Copiando o Conteúdo da Chave Pública
Após gerar a chave SSH, você precisa copiar o conteúdo da chave pública para adicioná-la ao GitHub. No Terminal ou Prompt de Comando, navegue até a pasta .ssh e exiba o conteúdo da chave pública com os seguintes comandos:

cd ~/.ssh
cat id_rsa.pub
Copie o conteúdo exibido na tela.

CAPÍTULO 2 - Criando Repositório no Git
2.1. Incluindo Chave Pública no GitHub
Antes de criar um repositório no GitHub, você precisa adicionar a chave pública copiada no passo anterior à sua conta do GitHub.

Acesse o GitHub e faça login na sua conta.
Clique no ícone do seu perfil no canto superior direito e selecione Settings.
No menu à esquerda, clique em SSH and GPG keys.
Clique no botão New SSH key.
Cole o conteúdo da chave pública no campo "Key" e dê um nome descritivo à chave no campo "Title".
Clique em Add SSH key.
2.2. Criando um Projeto no GitHub
Depois de adicionar a chave SSH, você pode criar um novo repositório no GitHub.

Acesse o GitHub no navegador e faça login.
No canto superior direito, clique no ícone + e selecione New repository.
Preencha o nome do repositório e uma descrição opcional.
Escolha se o repositório será público ou privado.
Clique em Create repository.
2.3. Clonando o Projeto para seu Computador
Com o repositório criado, você pode cloná-lo para o seu computador. No Terminal ou Prompt de Comando, execute o seguinte comando, substituindo "seuusuario" e "seudepositorio" pelo nome de usuário e nome do repositório que você criou:

git clone git@github.com:seuusuario/seudepositorio.git
2.4. Comandos Administrativos do Git
Agora que você clonou o repositório, você pode usar os seguintes comandos Git para gerenciar seu projeto:

Verificar o status dos arquivos:

git status
Adicionar arquivos ao repositório:

git add index.html
ou para adicionar todos os arquivos modificados:

git add .
Fazer o commit das alterações:

git commit -m "Mensagem do desenvolvedor"  # Ex: "Atualizar arquivo README"
Enviar as alterações para o repositório remoto:

git push -u origin master  # ou main
Este manual proporciona uma visão geral de como configurar e utilizar o Git em seu computador, criar repositórios no GitHub e executar comandos básicos do Git. Para mais informações e detalhes, consulte a documentação oficial do Git.

About
.

Resources
 Readme
 Activity
Stars
 0 stars
Watchers
 1 watching
Forks
 0 forks
Releases
No releases published
Create a new release
Packages
No packages published
Publish your first package
Languages
HTML
76.7%
 
CSS
17.3%
 
JavaScript
6.0%
Suggested workflows
Based on your tech stack
Gulp logo
Gulp
Build a NodeJS project with npm and gulp.
Jekyll using Docker image logo
Jekyll using Docker image
Package a Jekyll site using the jekyll/builder Docker image.
Publish Node.js Package to GitHub Packages logo
Publish Node.js Package to GitHub Packages
Publishes a Node.js package to GitHub Packages.
More workflows
Footer
