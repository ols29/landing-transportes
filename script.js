document.getElementById('frete-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const dados = {
        origem: document.getElementById('origem').value,
        destino: document.getElementById('destino').value,
        distancia: parseFloat(document.getElementById('distancia').value),
        itens: parseInt(document.getElementById('itens').value)
    };

    try {
   
        const response = await fetch('http://localhost:3001/api/orcamento', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });


const mensagemPersonalizada = `Olá Dois Amigos Transportes! Acabei de simular um frete no site:\n\n📍 Origem: ${data.origem}\n🏁 Destino: ${data.destino}\n💰 Valor Estimado: R$ ${data.precoTotal}\n\nPodemos prosseguir?`;

const linkFinal = `https://wa.me/55419999999?text=${encodeURIComponent(mensagemPersonalizada)}`;

document.getElementById('btnWhats').onclick = () => window.open(linkFinal);
document.getElementById('wa-floating').href = linkFinal;

document.getElementById('btnWhats').onclick = () => window.open(linkWhats);
document.getElementById('wa-floating').href = linkWhats;

        const data = await response.json();

        
        const divResultado = document.getElementById('resultado');
        divResultado.classList.remove('hidden');
        document.getElementById('preco-txt').innerText = `R$ ${data.precoTotal}`;

        
        document.getElementById('btn-whatsapp').onclick = () => {
            const msg = `Olá! Gostaria de confirmar o frete de ${data.rota.origem} para ${data.rota.destino}. Valor: R$ ${data.precoTotal}`;
            window.open(`https://wa.me/554199999992?text=${encodeURIComponent(msg)}`);
        };

    } catch (error) {
        alert("Erro ao calcular. O servidor está ligado?");
    }
});