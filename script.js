let cargoAtual = 'presidente';
let numeroDigitado = '';
let votos = {}; 

const cargos = ['presidente', 'governador', 'senador', 'deputado federal'];
const candidatos = {
    presidente: {
        '15': { nome: 'Ana Luzia', partido: 'PNTB', foto: 'Imagens/PNTB/Presidente/Ana Luzia.png', fotoPartido: 'Partidos/PNTB.png' },
        '17': { nome: 'Arthur Siqueira', partido: 'PRCB', foto: 'Imagens/PRCB/Presidente/Arthur Siqueira.png', fotoPartido: 'Partidos/PRCB.png' },
        '10': { nome: 'Daniel Menezes', partido: 'PCB', foto: 'Imagens/PCB/Presidente/Daniel Menezes.png', fotoPartido: 'Partidos/PCB.png' },
        '12': { nome: 'Isabela Santos', partido: 'PSR', foto: 'Imagens/PSR/Presidente/Isabela Santos.png', fotoPartido: 'Partidos/PSR.png' },
        '16': { nome: 'João Ferreira', partido: 'PTR', foto: 'Imagens/PTR/Presidente/João Ferreira.png', fotoPartido: 'Partidos/PTR.png' },
        '14': { nome: 'Gustavo Soarez', partido: 'UDB', foto: 'Imagens/UDB/Presidente/Gustavo Soarez.png', fotoPartido: 'Partidos/UDB.png' },
        '21': { nome: 'Ricardo Albuqerque', partido: 'UL', foto: 'Imagens/UL/Presidente/Ricardo Albuqerque.png', fotoPartido: 'Partidos/UL.png' }
    },
    governador: {
        '15': { nome: 'Joana Silva', partido: 'PNTB', foto: 'Imagens/PNTB/Governador/Joana Silva.png', fotoPartido: 'Partidos/PNTB.png' },
        '17': { nome: 'Carlos Brandão', partido: 'PRCB', foto: 'Imagens/PRCB/Governador/Carlos Brandão.png', fotoPartido: 'Partidos/PRCB.png' },
        '10': { nome: 'Felipe Soarez', partido: 'PCB', foto: 'Imagens/PCB/Governador/Felipe Soarez.png', fotoPartido: 'Partidos/PCB.png' },
        '12': { nome: 'Lívia Ramos', partido: 'PSR', foto: 'Imagens/PSR/Governador/Lívia Ramos.png', fotoPartido: 'Partidos/PSR.png' },
        '16': { nome: 'Rubens Rocha', partido: 'PTR', foto: 'Imagens/PTR/Governador/Rubens Rocha.png', fotoPartido: 'Partidos/PTR.png' },
        '14': { nome: 'Daniel Vieira', partido: 'UDB', foto: 'Imagens/UDB/Governador/Daniel Vieira.png', fotoPartido: 'Partidos/UDB.png' },
        '21': { nome: 'Leonardo Oliveira', partido: 'UL', foto: 'Imagens/UL/Governador/Leonardo Oliveira.png', fotoPartido: 'Partidos/UL.png' }
    },
    senador: {
        '150': { nome: 'Pedro dos Santos', partido: 'PNTB', foto: 'Imagens/PNTB/Senador/Pedro dos Santos.png', fotoPartido: 'Partidos/PNTB.png' },
        '170': { nome: 'Antônia Oliveira', partido: 'PRCB', foto: 'Imagens/PRCB/Senador/Antônia Oliveira.png', fotoPartido: 'Partidos/PRCB.png' },
        '100': { nome: 'Silvia Costa', partido: 'PCB', foto: 'Imagens/PCB/Senador/Silvia Costa.png', fotoPartido: 'Partidos/PCB.png' },
        '120': { nome: 'Ana Lúcia', partido: 'PSR', foto: 'Imagens/PSR/Senador/Ana Lúcia.png', fotoPartido: 'Partidos/PSR.png' },
        '160': { nome: 'José Carlos', partido: 'PTR', foto: 'Imagens/PTR/Senador/José Carlos.png', fotoPartido: 'Partidos/PTR.png' },
        '140': { nome: 'Maria Eduarda', partido: 'UDB', foto: 'Imagens/UDB/Senador/Maria Eduarda.png', fotoPartido: 'Partidos/UDB.png' },
        '210': { nome: 'Cláudio Rodrigues', partido: 'UL', foto: 'Imagens/UL/Senador/Cláudio Rodrigues.png', fotoPartido: 'Partidos/UL.png' }
    },
    'deputado federal': {
        '1500': { nome: 'Renato Farias', partido: 'PNTB', foto: 'Imagens/PNTB/Deputado Federal/Renato Farias.png', fotoPartido: 'Partidos/PNTB.png' },
        '1700': { nome: 'Gustavo Almeida', partido: 'PRCB', foto: 'Imagens/PRCB/Deputado Federal/Gustavo Almeida.png', fotoPartido: 'Partidos/PRCB.png' },
        '1000': { nome: 'Thiago Martins', partido: 'PCB', foto: 'Imagens/PCB/Deputado Federal/Thiago Martins.png', fotoPartido: 'Partidos/PCB.png' },
        '1200': { nome: 'Daniela Santos', partido: 'PSR', foto: 'Imagens/PSR/Deputado Federal/Daniela Santos.png', fotoPartido: 'Partidos/PSR.png' },
        '1600': { nome: 'Sérgio Costa', partido: 'PTR', foto: 'Imagens/PTR/Deputado Federal/Sérgio Costa.png', fotoPartido: 'Partidos/PTR.png' },
        '1400': { nome: 'Sofia Oliveira', partido: 'UDB', foto: 'Imagens/UDB/Deputado Federal/Sofia Oliveira.png', fotoPartido: 'Partidos/UDB.png' },
        '2100': { nome: 'Rodrigo Freitas', partido: 'UL', foto: 'Imagens/UL/Deputado Federal/Rodrigo Freitas.png', fotoPartido: 'Partidos/UL.png' }
    }
};

const tela = document.querySelector('.tela');
const htmlOriginalTela = tela.innerHTML; 

let tituloCargo, numerosContainer, candidatoNome, candidatoFoto, aviso, partidoFoto;
const somUrna = document.getElementById('somUrna');
const somClick = document.getElementById('somClick');
// AQUI: Novas variáveis para os sons de Branco e Corrige
const somBranco = document.getElementById('somBranco');
const somCorrige = document.getElementById('somCorrige');

function vincularElementos() {
    tituloCargo = document.querySelector('.cargo-titulo');
    numerosContainer = document.querySelector('.numeros-container');
    candidatoNome = document.querySelector('.candidato-nome');
    candidatoFoto = document.querySelector('.candidato-foto');
    aviso = document.querySelector('.aviso');
    partidoFoto = document.querySelector('.partido-foto');
}

function iniciarVotacao() {
    cargoAtual = 'presidente';
    numeroDigitado = '';
    atualizarTela();
}

document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (key >= '0' && key <= '9') {
        digitar(parseInt(key));
    } else if (key === 'Enter') {
        confirma();
    } else if (key === 'Backspace' || key === 'Backspace') {
        corrige();
    } else if (key === '*' || key === '*') {
        votarBranco();
    }
});

function atualizarTela() {
    tituloCargo.textContent = `Cargo: ${cargoAtual.toUpperCase()}`;
    
    const limite = {
        'presidente': 2,
        'governador': 2,
        'senador': 3,
        'deputado federal': 4
    };
    const limiteNumeros = limite[cargoAtual];
    
    numerosContainer.innerHTML = '';

    for (let i = 0; i < limiteNumeros; i++) {
        const caixa = document.createElement('div');
        caixa.classList.add('numero-caixa');
        caixa.textContent = numeroDigitado[i] || '';
        numerosContainer.appendChild(caixa);
    }
    
    if (numeroDigitado.length === limiteNumeros) {
        const candidato = candidatos[cargoAtual][numeroDigitado];
        if (candidato) {
            candidatoNome.textContent = `${candidato.nome} (${candidato.partido})`; 
            candidatoFoto.src = candidato.foto;
            candidatoFoto.style.display = 'block';
            partidoFoto.src = candidato.fotoPartido;
            partidoFoto.style.display = 'block';
            aviso.textContent = '';
        } else {
            candidatoNome.textContent = 'Voto Nulo';
            candidatoFoto.src = '';
            candidatoFoto.style.display = 'none';
            partidoFoto.src = '';
            partidoFoto.style.display = 'none';
            aviso.textContent = 'Número inválido';
        }
    } else {
        candidatoNome.textContent = '';
        candidatoFoto.src = '';
        candidatoFoto.style.display = 'none';
        partidoFoto.src = '';
        partidoFoto.style.display = 'none';
        aviso.textContent = '';
    }
}

function digitar(numero) {
    const limite = {
        'presidente': 2,
        'governador': 2,
        'senador': 3,
        'deputado federal': 4
    };

    if (numeroDigitado.length < limite[cargoAtual]) {
        numeroDigitado += numero;
        somClick.play();
        atualizarTela();
    }
}

function votarBranco() {
    // Agora usa o som específico para o botão Branco
    somBranco.play(); 
    numeroDigitado = 'branco';
    confirma();
}

function corrige() {
    // Agora usa o som específico para o botão Corrige
    somCorrige.play();
    numeroDigitado = '';
    atualizarTela();
}

function confirma() {
    let voto = numeroDigitado;
    somUrna.play();

    if (!votos[cargoAtual]) {
        votos[cargoAtual] = { 'brancos': 0, 'nulos': 0, 'candidatos': {} };
    }

    if (voto === 'branco') {
        votos[cargoAtual]['brancos']++;
    } else {
        if (candidatos[cargoAtual][voto]) {
            if (!votos[cargoAtual]['candidatos'][voto]) {
                votos[cargoAtual]['candidatos'][voto] = 0;
            }
            votos[cargoAtual]['candidatos'][voto]++;
        } else {
            votos[cargoAtual]['nulos']++;
        }
    }

    const proximoCargoIndex = cargos.indexOf(cargoAtual) + 1;
    if (proximoCargoIndex < cargos.length) {
        cargoAtual = cargos[proximoCargoIndex];
        numeroDigitado = '';
        atualizarTela();
    } else {
        finalizarVotacao();
    }
}

function finalizarVotacao() {
    tela.innerHTML = `
        <div class="menu-final">
            <h1>FIM DA VOTAÇÃO</h1>
            <p>Escolha uma opção:</p>
            <button onclick="acessarMenu('new')">Nova Votação</button>
            <button onclick="acessarMenu('password')">Apuração de Votos</button>
            <button onclick="acessarMenu('Eraser')">Zerar Votação</button>
        </div>
    `;
    salvarVotos();
}

function acessarMenu(acao) {
    const senhas = {
        'new': 'new',
        'password': 'password',
        'Eraser': 'Eraser'
    };

    const senha = prompt("Digite a senha para continuar:");
    if (senha === senhas[acao]) {
        if (acao === 'new') {
            reiniciarVotacao();
        } else if (acao === 'password') {
            apurarVotos();
        } else if (acao === 'Eraser') {
            zerarVotacao();
        }
    } else {
        alert('Senha incorreta.');
    }
}

function reiniciarVotacao() {
    tela.innerHTML = htmlOriginalTela;
    vincularElementos();
    iniciarVotacao();
}

function apurarVotos() {
    let apuracaoTexto = '<h2>APURAÇÃO DE VOTOS</h2>';
    
    for (const cargo of cargos) {
        apuracaoTexto += `<h3>${cargo.toUpperCase()}</h3>`;
        
        const votosCargo = votos[cargo] || { 'brancos': 0, 'nulos': 0, 'candidatos': {} };
        const totalVotosCargo = (votosCargo.brancos || 0) + (votosCargo.nulos || 0) + 
                                Object.values(votosCargo.candidatos).reduce((sum, count) => sum + count, 0);

        for (const num in candidatos[cargo]) {
            const candidato = candidatos[cargo][num];
            const votosCandidato = votosCargo.candidatos[num] || 0;
            const porcentagem = totalVotosCargo > 0 ? ((votosCandidato / totalVotosCargo) * 100).toFixed(2) : 0;
            apuracaoTexto += `<p>${candidato.nome} (${candidato.partido}): ${votosCandidato} votos (${porcentagem}%)</p>`;
        }
        
        const votosBrancosCargo = votosCargo.brancos || 0;
        const votosNulosCargo = votosCargo.nulos || 0;
        const porcentagemBrancos = totalVotosCargo > 0 ? ((votosBrancosCargo / totalVotosCargo) * 100).toFixed(2) : 0;
        const porcentagemNulos = totalVotosCargo > 0 ? ((votosNulosCargo / totalVotosCargo) * 100).toFixed(2) : 0;
        
        apuracaoTexto += `<p>Votos em Branco: ${votosBrancosCargo} (${porcentagemBrancos}%)</p>`;
        apuracaoTexto += `<p>Votos Nulos: ${votosNulosCargo} (${porcentagemNulos}%)</p>`;
        apuracaoTexto += `<p>Total de Votos Válidos: ${totalVotosCargo - votosNulosCargo - votosBrancosCargo}</p>`;
        apuracaoTexto += `<p>Total Geral de Votos: ${totalVotosCargo}</p>`;
    }
    
    apuracaoTexto += `
        <div class="download-opcoes">
            <button onclick="baixarTexto()">Baixar em Texto</button>
            <button onclick="baixarPNG()">Baixar como PNG</button>
            <button onclick="baixarPDF()">Baixar como PDF</button>
        </div>
    `;
    
    tela.innerHTML = apuracaoTexto;
}

function baixarTexto() {
    const apuracao = tela.innerText;
    const blob = new Blob([apuracao], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'apuracao.txt';
    link.click();
}

function baixarPNG() {
    html2canvas(tela).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'apuracao.png';
        link.click();
    });
}

function baixarPDF() {
    html2canvas(tela).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgProps= pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save("apuracao.pdf");
    });
}

function zerarVotacao() {
    votos = {};
    localStorage.removeItem('votosEleicao');
    alert('Votação zerada com sucesso!');
    reiniciarVotacao();
}

function salvarVotos() {
    localStorage.setItem('votosEleicao', JSON.stringify(votos));
}

function carregarVotos() {
    const votosSalvos = localStorage.getItem('votosEleicao');
    if (votosSalvos) {
        votos = JSON.parse(votosSalvos);
    }
}

vincularElementos();
carregarVotos();
iniciarVotacao();