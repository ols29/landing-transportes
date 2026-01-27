const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(express.json());

const DATABASE_FILE = 'pedidos.json';

//func save BD
const salvarPedido = (pedido) => {
    let pedidos = [];
    if (fs.existsSync(DATABASE_FILE)) {
        pedidos = JSON.parse(fs.readFileSync(DATABASE_FILE));
    }
    pedidos.push(pedido);
    fs.writeFileSync(DATABASE_FILE, JSON.stringify(pedidos, null, 2));
};


app.post('/api/orcamento', (req, res) => {
    const { origem, destino, distancia, itens } = req.body;
    
    const precoTotal = 60 + (distancia * 3.5) + (itens * 20);
    
    const novoPedido = {
        id: Date.now(),
        origem,
        destino,
        distancia,
        precoTotal: precoTotal.toFixed(2),
        data: new Date().toLocaleString('pt-BR')
    };

    salvarPedido(novoPedido); 
    res.json(novoPedido);
});

// ROTA DO ADMIN (Para ver todos os pedidos realizados)
app.get('/api/admin/pedidos', (req, res) => {
    if (fs.existsSync(DATABASE_FILE)) {
        const pedidos = JSON.parse(fs.readFileSync(DATABASE_FILE));
        res.json(pedidos);
    } else {
        res.json([]);
    }
});

app.listen(3001, () => console.log("Servidor Profissional rodando na porta 3001"));
if (req.body.urgente) precoTotal *= 1.5; 