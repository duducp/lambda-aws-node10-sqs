# Lambda Serverless AWS - Node.Js 10

Essa uma lambda que publica e consome um pacote da fila SQS.

## Descrição

Para a criação dessa função foi utilizado o framework [Serverless](https://serverless.com/).

Instalação:
```
npm i serverless -g
```

Template utilizado
```
serverless create --template aws-nodejs --path nodeless
```

Configurar credenciais da AWS
```
serverless config credentials -o --provider aws --key=SUA_KEY -- secret SUA_SECRET
```

Fazer deploy da função
```
serverless deploy -v
```

Para informações do serverless
```
serverless info
```

Disparar função
```
serverless invoke -f handle -l
```

Remover função da AWS
```
serverless remove
```
