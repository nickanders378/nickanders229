# MANUAL DE UTILIZAÇÃO DO SISTEMA/SITE

## CAPÍTULO 1 - Configuração do Git no Computador

### 1.1. Consultando a Documentação do Git
Para instalar o Git no seu computador com Windows, siga as instruções detalhadas na documentação oficial do Git: [Instalar Git](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git).

### 1.2. Verificando a Instalação do Git
Após instalar o Git, verifique se a instalação foi bem-sucedida abrindo o Terminal ou Prompt de Comando e digitando o seguinte comando:

```sh
git --version
```

Se o Git estiver instalado corretamente, você verá a versão do Git instalada no seu sistema.

### 1.3. Caso Não Esteja Instalado
Se o Git não estiver instalado, você pode baixá-lo e instalá-lo a partir do site oficial: [Instalar o Git - Download](https://git-scm.com/downloads) versão Windows.

### 1.4. Conectando o Git no Windows
Após a instalação, você precisa configurar seu nome de usuário e email para que o Git saiba quem está fazendo as alterações. No Terminal ou Prompt de Comando, execute os seguintes comandos, substituindo "Seu Nome" e "seuemail@example.com" pelas suas informações:

```sh
git config --global user.name "Seu Nome"
git config --global user.email seuemail@example.com
```

### 1.5. Criando o Par de Chaves SSH
Para permitir uma conexão segura entre seu computador e o GitHub, você precisa gerar uma chave SSH. No Terminal ou Prompt de Comando, execute o seguinte comando:

```sh
ssh-keygen
```

Siga as instruções na tela para gerar a chave. Geralmente, você pode pressionar Enter para aceitar os valores padrão.

### 1.6. Copiando o Conteúdo da Chave Pública
Após gerar a chave SSH, você precisa copiar o conteúdo da chave pública para adicioná-la ao GitHub. No Terminal ou Prompt de Comando, navegue até a pasta `.ssh` e exiba o conteúdo da chave pública com os seguintes comandos:

```sh
cd ~/.ssh
cat id_rsa.pub
```

Copie o conteúdo exibido na tela.

## CAPÍTULO 2 - Criando Repositório no Git

### 2.1. Incluindo Chave Pública no GitHub
Antes de criar um repositório no GitHub, você precisa adicionar a chave pública copiada no passo anterior à sua conta do GitHub.

1. Acesse o GitHub e faça login na sua conta.
2. Clique no ícone do seu perfil no canto superior direito e selecione **Settings**.
3. No menu à esquerda, clique em **SSH and GPG keys**.
4. Clique no botão **New SSH key**.
5. Cole o conteúdo da chave pública no campo "Key" e dê um nome descritivo à chave no campo "Title".
6. Clique em **Add SSH key**.

### 2.2. Criando um Projeto no GitHub
Depois de adicionar a chave SSH, você pode criar um novo repositório no GitHub.

1. Acesse o [GitHub](https://github.com/) no navegador e faça login.
2. No canto superior direito, clique no ícone **+** e selecione **New repository**.
3. Preencha o nome do repositório e uma descrição opcional.
4. Escolha se o repositório será público ou privado.
5. Clique em **Create repository**.

### 2.3. Clonando o Projeto para seu Computador
Com o repositório criado, você pode cloná-lo para o seu computador. No Terminal ou Prompt de Comando, execute o seguinte comando, substituindo "seuusuario" e "seudepositorio" pelo nome de usuário e nome do repositório que você criou:

```sh
git clone git@github.com:seuusuario/seudepositorio.git
```

### 2.4. Comandos Administrativos do Git
Agora que você clonou o repositório, você pode usar os seguintes comandos Git para gerenciar seu projeto:

- **Verificar o status dos arquivos:**

  ```sh
  git status
  ```

- **Adicionar arquivos ao repositório:**

  ```sh
  git add index.html
  ```
  ou para adicionar todos os arquivos modificados:

  ```sh
  git add .
  ```

- **Fazer o commit das alterações:**

  ```sh
  git commit -m "Mensagem do desenvolvedor"  # Ex: "Atualizar arquivo README"
  ```

- **Enviar as alterações para o repositório remoto:**

  ```sh
  git push -u origin master  # ou main
  ```

Este manual proporciona uma visão geral de como configurar e utilizar o Git em seu computador, criar repositórios no GitHub e executar comandos básicos do Git. Para mais informações e detalhes, consulte a [documentação oficial do Git](https://git-scm.com/doc).
