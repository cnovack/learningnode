# Aprendendo Git
```sh
git init
git add .
git config --global user.email "carlosnovack@gmail.com"
git config --global user.name "Carlos Novack"
git commit -sm "Primeiro Commit"
git remote add origin https://github.com/cnovack/learningnode.git
git push origin master
```

## New commits
```sh
git add .
git commit -sm "New message"
git push origin master
```

## MySQL Database connection
A conexão com a base de dados é estabelecida no seguinte código:
```js
    var connection = mysql.createConnection({
      host : process.env.MYSQL_SERVER,
      user : process.env.MYSQL_USER,
      password : process.env.MYSQL_PASSWORD,
      database :process.env.MYSQL_DATABASE
    });
```

Antes de iniciar o server, deve exportar environment variables do sistema operacional
- Criar o arquivo .env copiando do exemplo
```sh
cp .env.sample .env
```
- Completar os valores dos dados da conexão com o database

# Iniciar server
```sh
npm start
```