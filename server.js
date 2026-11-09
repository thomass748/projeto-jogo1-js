const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Diz ao servidor para usar a pasta 'public' para os arquivos do jogo (HTML, imagens, etc)
app.use(express.static(__dirname + '/public'));

// Gerencia as conexões dos jogadores
io.on('connection', (socket) => {
    console.log('Um jogador conectou! ID:', socket.id);

    // Quando o jogador sair do jogo
    socket.on('disconnect', () => {
        console.log('Jogador desconectou:', socket.id);
    });
});

// Liga o servidor na porta 3000
http.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});