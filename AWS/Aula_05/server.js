const WebSocketServer = require('ws');
const ws = new WebSocketServer.Server({port:8080})

console.log('Servidor rodando na porta 8080')

let clientes = [];

let perguntas = new Map()
perguntas.set('Que dia foi dada a aula de websocket?', '30 maio de 2022')
perguntas.set('Quando começa a copa?', '21 de novembro de 2022')
perguntas.set('Quando começa as eleições?', '2 de outubro de 2022')
perguntas.set('Qual o nome dessa disciplina?', 'AWS')


ws.on("connection", (ws, req) => {
    clientes.push(ws)
    console.log('Conexão foi estabelecida')

    ws.on('message', data => {
        console.log(`Dados: ${data}`)

        let pergunta = data.toString();
        let resposta; 

        if(perguntas.has(pergunta)){
            resposta = perguntas.get(pergunta)
            ws.send(resposta)
        }else{
            ws.send('A pergunta não foi encontrada.')
        }

        // Broadcasting
        clientes.forEach((cliente) => {
            cliente.send(`Eco: ${resposta}`)
        })
    })

    ws.on('close', () => {
        console.log('Conexão fechada')
    })
})

