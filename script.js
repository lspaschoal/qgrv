// Aviso de responsabilidade
alert('Aviso de responsabilidade:\nEssa página tem a finalidade única de auxiliar na consulta de exigência de vistos para o Brasil, usando como fonte o Quadro Geral de Regime de Vistos emitido pelo Itamaraty.\nEsta não é uma fonte oficial e não deve ser tratada como tal. O autor não se responsabiliza por informações equivocadas ou pelas consequëncias de sua utilização.');

// Array de Países
var paises = [
    ['Afeganistão', '1', '1', '1', '0'],
    ['África do Sul', '9', '9', '8', '0'],
    ['Albânia', '12', '12', '8*', '1'],
    ['Alemanha', '12', '12', '8*', '0'],
    ['Andorra', '1', '1', '8', '0'],
    ['Angola', '12', '12', '1', '0'],
    ['Antígua e Barbuda', '12', '12', '8', '0'],
    ['Arábia Saudita', '1', '1', '1', '0'],
    ['Argélia', '12', '12', '1', '0'],
    ['Argentina', '15', '12', '8#', '0'],
    ['Armênia', '12', '12', '8', '0'],
    ['Austrália', '11', '1¹', '8', '0'],
    ['Áustria', '12', '12', '8', '0'],
    ['Azerbaijão', '12', '12', '1', '1'],
    ['Bahamas', '12', '12', '8', '1'],
    ['Bahrein', '1', '1', '1', '0'],
    ['Bangladesh', '1', '1', '1', '1'],
    ['Barbados', '12', '12', '8', '0'],
    ['Belarus', '12', '12', '8', '0'],
    ['Bélgica', '12', '12', '8*', '0'],
    ['Belize', '12', '12', '8', '0'],
    ['Benin', '12', '12', '1', '0'],
    ['Bolívia', '9', '9', '8#', '0'],
    ['Bósnia', '12', '12', '8', '1'],
    ['Botsuana', '11', '11', '1', '0'],
    ['Brunei', '1', '1', '1', '0'],
    ['Bulgária', '9', '9', '8*', '0'],
    ['Burkina Faso', '12', '12', '1', '0'],
    ['Burundi', '12', '12', '1', '0'],
    ['Butão', '1', '1', '1', '0'],
    ['Cabo Verde', '12', '12', '1', '0'],
    ['Camboja', '11', '11', '1', '0'],
    ['Cameroun', '12', '12', '1', '0'],
    ['Canadá', '12', '1²', '8', '0'],
    ['Catar', '12', '12', '8', '0'],
    ['Cazaquistão', '12', '12', '2', '1'],
    ['Chade', '1', '1', '1', '0'],
    ['Chile', '12', '12', '8#', '0'],
    ['China', '11', '11', '1', '0'],
    ['Chipre', '9', '9', '8*', '0'],
    ['Colômbia', '15', '12', '8#', '0'],
    ['Comores', '1', '1', '1', '0'],
    ['Congo, República do', '12', '12', '1', '0'],
    ['Congo, República Democrática do', '1', '1', '1', '1'],
    ['Cook, Ilhas', '1', '1', '1', '0'],
    ['Coréia do Norte', '1', '1', '1', '0'],
    ['Coréia do Sul', '12', '12', '8', '1'],
    ['Costa do Marfim', '12', '12', '1', '0'],
    ['Costa Rica', '12', '12', '8', '0'],
    ['Croácia', '12', '12', '8', '1'],
    ['Cuba', '13', '1', '1', '0'],
    ['Dinamarca', '12', '12', '8*', '0'],
    ['Djibouti', '1', '1', '1', '0'],
    ['Dominica', '12', '12', '8*', '0'],
    ['Egito', '9', '9', '1', '0'],
    ['El Salvador', '9', '9', '8', '0'],
    ['Emirados Árabes', '9', '9', '8', '0'],
    ['Equador', '15', '12', '8#', '0'],
    ['Eritréia', '1', '1', '1', '0'],
    ['Eslováquia', '12', '12', '8', '0'],
    ['Eslovênia', '12', '12', '8*', '0'],
    ['Espanha', '12', '12', '8', '1'],
    ['Estados Unidos', '13', '1³', '8', '0'],
    ['Estônia', '9', '9', '8*', '0'],
    ['Etiópia', '12', '12', '1', '0'],
    ['Fiji, Ilhas', '12', '12', '8', '0'],
    ['Filipinas', '13', '13', '8', '1'],
    ['Finlândia', '12', '12', '8', '0'],
    ['França', '9', '9', '8*', '1'],
    ['Gabão', '12', '12', '1', '0'],
    ['Gâmbia', '1', '1', '1', '0'],
    ['Gana', '12', '12', '1', '0'],
    ['Geórgia', '12', '12', '8*', '1'],
    ['Granada', '12', '12', '8', '0'],
    ['Grécia', '12', '12', '8*', '0'],
    ['Guatemala', '9', '9', '8', '0'],
    ['Guiana', '11', '11', '8', '0'],
    ['Guiné', '1', '1', '1', '0'],
    ['Guiné-Bissau', '12', '12', '1', '0'],
    ['Guiné Equatorial', '10', '10', '1', '0'],
    ['Haiti', '12', '12', '1', '0'],
    ['Honduras', '12', '12', '8', '0'],
    ['Hong Kong', '-', '-', '8', '0'],
    ['Hungria', '12', '12', '8*', '1'],
    ['Iêmen', '1', '1', '1', '1'],
    ['Índia', '9', '9', '1', '1'],
    ['Indonésia', '19', '19', '2', '1'],
    ['Irã', '11', '1', '1', '0'],
    ['Iraque', '1', '1', '1', '0'],
    ['Irlanda', '15', '15', '8', '0'],
    ['Islândia', '9', '9', '8', '0'],
    ['Israel', '15', '12', '8', '0'],
    ['Itália', '12', '12', '8*', '0'],
    ['Jamaica', '12', '12', '8', '0'],
    ['Japão', '12', '12', '8', '0'],
    ['Jordânia', '11', '11', '1', '1'],
    ['Kiribati', '1', '1', '1', '1'],
    ['Kosovo', '16', '16', '16', '0'],
    ['Kuwait', '1', '1', '1', '0'],
    ['Laos', '12', '12', '1', '0'],
    ['Lesoto', '1', '1', '1', '0'],
    ['Letônia', '9', '9', '8*', '0'],
    ['Líbano', '12', '12', '1', '0'],
    ['Libéria', '1', '1', '1', '0'],
    ['Líbia', '1', '1', '1', '0'],
    ['Liechtenstein', '1', '1', '8', '0'],
    ['Lituânia', '12', '12', '8*', '0'],
    ['Luxemburgo', '12', '12', '8*', '1'],
    ['Macau', '–', '–', '8', '0'],
    ['Macedônia', '12', '12', '8*', '0'],
    ['Madagascar', '1', '1', '1', '1'],
    ['Malásia', '12', '12', '8', '0'],
    ['Malawi', '9', '9', '1', '0'],
    ['Maldivas', '1', '1', '1', '1'],
    ['Mali', '12', '12', '1', '0'],
    ['Malta', '9', '9', '8*', '0'],
    ['Marianas, Ilhas', '1', '1', '1', '0'],
    ['Marrocos', '12', '12', '8', '0'],
    ['Marshall, Ilhas', '1', '1', '1', '0'],
    ['Maurício', '1', '1', '1', '0'],
    ['Mauritânia', '12', '12', '1', '0'],
    ['México', '12', '12', '8', '0'],
    ['Micronésia', '1', '1', '1', '0'],
    ['Moçambique', '12', '12', '1', '0'],
    ['Moldova', '12', '12', '1', '1'],
    ['Mônaco', '1', '1', '8', '0'],
    ['Mongólia', '12', '12', '8', '0'],
    ['Montenegro', '12', '12', '8*', '1'],
    ['Myanmar', '19', '19', '1', '1'],
    ['Namíbia', '12', '12', '8', '0'],
    ['Nauru', '1', '1', '1', '0'],
    ['Nepal', '12', '12', '1', '0'],
    ['Nicarágua', '12', '12', '8', '0'],
    ['Níger', '1', '1', '1', '0'],
    ['Nigéria', '10', '10', '1', '1'],
    ['Noruega', '12', '12', '8', '0'],
    ['Nova Zelândia', '1', '1', '8', '0'],
    ['Omã', '10', '10', '1', '0'],
    ['Ordem Soberana e Militar de Malta', '15', '15', '8', '0'],
    ['Países Baixos', '9', '9', '8*', '0'],
    ['Palau', '1', '1', '1', '0'],
    ['Palestina', '1', '1', '1', '0'],
    ['Panamá', '12', '12', '8', '0'],
    ['Papua Nova Guiné', '1', '1', '1', '0'],
    ['Paquistão', '9', '1', '1', '1'],
    ['Paraguai', '15', '12', '8#', '0'],
    ['Peru', '15', '13', '8#', '0'],
    ['Polônia', '12', '12', '8', '0'],
    ['Portugal', '12', '12', '8', '0'],
    ['Quênia', '12', '12', '1', '0'],
    ['Quirguistão', '12', '12', '1', '0'],
    ['Reino Unido', '15', '15', '8', '0'],
    ['República Árabe Saaraui Democrática (RASD)', '17', '17', '17', '0'],
    ['República Centro-Africana', '1', '1', '1', '0'],
    ['República Dominicana', '12', '12', '1', '0'],
    ['República Tcheca', '12', '12', '8*', '0'],
    ['Romênia', '12', '12', '8', '0'],
    ['Ruanda', '1', '1', '1', '0'],
    ['Rússia', '12', '12', '8', '1'],
    ['Salomão, Ilhas', '1', '1', '1', '0'],
    ['Samoa Ocidental', '1', '1', '1', '0'],
    ['San Marino', '15', '15', '8', '0'],
    ['Santa Lúcia', '12', '12', '1', '0'],
    ['São Cristóvão e Nevis', '12', '12', '8', '0'],
    ['São Tomé e Príncipe', '12', '12', '1', '0'],
    ['São Vicente e Granadinas', '12', '12', '8', '0'],
    ['Senegal', '12', '12', '1', '0'],
    ['Serra Leoa', '1', '1', '1', '0'],
    ['Sérvia', '12', '12', '8', '0'],
    ['Seicheles', '12', '12', '8*', '0'],
    ['Singapura', '11', '11', '2', '0'],
    ['Síria', '1', '1', '1', '0'],
    ['Somália', '1', '1', '1', '0'],
    ['Sri Lanka', '12@', '12@', '1', '1'],
    ['Suazilândia', '1', '1', '1', '0'],
    ['Sudão', '11', '11', '1', '0'],
    ['Sudão do Sul', '1', '1', '1', '0'],
    ['Suécia', '12', '12', '8*', '0'],
    ['Suíça', '12', '12', '8*', '0'],
    ['Suriname', '9', '9', '8', '0'],
    ['Tajiquistão', '1', '1', '1', '0'],
    ['Tailândia', '12', '12', '8', '0'],
    ['Taiwan', '16', '16', '18', '0'],
    ['Tanzânia', '12', '12', '1', '1'],
    ['Timor-Leste', '1', '1', '1', '0'],
    ['Togo', '12', '12', '1', '0'],
    ['Tonga', '1', '1', '1', '0'],
    ['Trinidad e Tobago', '12', '12', '8', '0'],
    ['Tunísia', '15', '13', '8', '1'],
    ['Turcomenistão', '1', '1', '1', '1'],
    ['Turquia', '12', '12', '8', '0'],
    ['Tuvalu', '1', '1', '1', '0'],
    ['Ucrânia', '12', '12', '8*', '0'],
    ['Uganda', '1', '1', '1', '0'],
    ['Uruguai', '15', '15', '8#', '0'],
    ['Uzbequistão', '12', '1', '1', '0'],
    ['Vanuatu', '1', '1', '1', '1'],
    ['Vaticano', '15', '15', '8', '0'],
    ['Venezuela', '12', '9', '7#', '0'],
    ['Vietnã', '12', '12', '1', '0'],
    ['Zâmbia', '12', '12', '1', '0'],
    ['Zimbábue', '1', '1', '1', '0']
];

// Array de legenda
var legenda = [
    ['#', 'Ingresso permitido com Cédula de Identidade Civil'],
    ['@', 'Dispensa de Visto, por até 90 dias, para funcionários não acreditados no Brasil. Para funcionários acreditados, isenção pelo prazo da missão, inclusive para filhos dependentes com até 16 anos. Filhos dependentes, maiores de 16 anos, vistos por até 2 anos.'],
    ['*', 'Máximo 90 dias de estada a cada 180 dias.'],
    ['1', 'Visto exigido.'],
    ['2', 'Dispensa de Visto, por até 30 dias.'],
    ['7', 'Dispensa de Visto, por até 60 dias. Passaportes venezuelanos são válidos por 5 anos adicionais a partir da data de sua expiração.'],
    ['8', 'Dispensa de Visto, por até 90 dias.'],
    ['9', 'Dispensa de Visto, por até 90 dias, para funcionários não acreditados no Brasil. Para funcionários acreditados, Visto pelo prazo da missão.'],
    ['10', 'Dispensa de Visto, por até 90 dias, para funcionários não acreditados no Brasil. Para funcionários acreditados, dispensa de visto para entrar no território brasileiro, mas deverão solicitar ao MRE visto pelo prazo da missão no período de 30 (trinta) dias da primeira entrada.'],
    ['11', 'Dispensa de Visto, por até 30 dias, para funcionários não acreditados no Brasil. Para funcionários acreditados, Isenção pelo prazo da missão.'],
    ['12', 'Dispensa de Visto, por até 90 dias, para funcionários não acreditados no Brasil. Para funcionários acreditados, Isenção pelo prazo da missão.'],
    ['13', 'Dispensa de Visto, por até 180 dias, para funcionários não acreditados no Brasil. Para funcionários acreditados, Isenção pelo prazo da missão.'],
    ['14', 'Dispensa de Visto, por até 14 dias, para funcionários não acreditados no Brasil. Para funcionários acreditados, Visto pelo prazo da missão.'],
    ['15', 'Isenção de Visto, por prazo indeterminado, para funcionários acreditados e não acreditados.'],
    ['16', 'O Brasil não mantém relações diplomáticas. Visto concedido por até 90 dias. Não se concede Visto Diplomático ou Visto Oficial.'],
    ['17', 'O Brasil não mantém relações diplomáticas. Visto concedido sobre "laissez-passer", por até 90 dias. Não se concede Visto Diplomático ou Oficial.'],
    ['18', 'O Brasil não mantém relações diplomáticas. VIVIS concedido com validade de até 5 anos, com estada de até 90 dias e permanência total de até 180 dias por ano, contados da primeira entrada. Não se concede vistos em PADIP, PASOF ou PASER taiwanês.'],
    ['19', 'Dispensa de Visto, por até 30 dias, para funcionários não acreditados no Brasil. Para funcionários acreditados, dispensa de visto para entrar no território brasileiro, mas deverão solicitar ao MRE visto pelo prazo da missão no período de 30 (trinta) dias da primeira entrada.'],
    ['21', 'Dispensa de Visto por até 14 dias, prorrogáveis por período máximo de 90 dias a cada 12 meses.'],
    ['¹', 'Portadores de PADIP e PASOF em viagem com propósito de visita farão jus à isenção do Decreto nº 9.731/2019.'],
    ['²', 'Portadores de PADIP e PASOF em viagem com propósito de visita farão jus à isenção do Decreto nº 9.731/2020.'],
    ['³', 'Portadores de PADIP e PASOF em viagem com propósito de visita farão jus à isenção do Decreto nº 9.731/2021.'],
    ['-', 'Informação não disponível. Consultar um servidor.'],

];

/*
    Funções
*/
function setSeletor() {
    for (i = 0; i < paises.length; i++) {
        document.getElementById('nome').innerHTML += "<option value='" + paises[i][0] + "'>" + paises[i][0] + "</option>";
    }
}
// Chamando a função na inicialização da página
setSeletor();

// Retorna o índice do país informado
function getIndice(pais) {
    for (i = 0; i < paises.length; i++) {
        if (paises[i][0] == pais) {
            return i;
        }
    }
    return -1;
}

// Decodifica a legenda
function decodifica(leg) {
    var numeral = '', simbolo = [], resultado = '';
    for (i = 0; i < leg.length; i++) {
        switch (leg[i]) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                numeral += leg[i];
                break;
            default:
                simbolo.push(leg[i]);
        }
    }
    // Lendo a parte numeral
    for (i = 0; i < legenda.length; i++) {
        if (legenda[i][0] == numeral) {
            resultado += legenda[i][1];
        }
    }
    // Lendo os símbolos
    for (i = 0; i < simbolo.length; i++) {
        for (j = 0; j < legenda.length; j++) {
            if (legenda[j][0] == simbolo[i]) {
                resultado += ' ' + legenda[j][1];
            }
        }
    }
    return resultado;
}

// Função limpar
function limpar() {
    document.getElementById('nome').value = 'default';
    document.getElementById('padip').innerHTML = "";
    document.getElementById('pasof').innerHTML = "";
    document.getElementById('vivis').innerHTML = "";
    document.getElementById('maritimo').innerHTML = "";
}

// Método de consulta do país
function consulta(pais) {
    if (pais == 'default') {
        limpar();
    } else {
        indicePais = getIndice(pais);
        // Campo PADIP
        document.getElementById('padip').innerHTML = decodifica(paises[indicePais][1]);
        // Campo PASOF
        document.getElementById('pasof').innerHTML = decodifica(paises[indicePais][2]);
        // Campo VIVIS
        document.getElementById('vivis').innerHTML = decodifica(paises[indicePais][3]);
        // Campo Marítimo
        if (paises[indicePais][4] == '1') {
            document.getElementById('maritimo').innerHTML = pais + " faz parte da convenção OIT 185.<br>";
            if (document.getElementById('vivis').innerHTML.indexOf('Visto exigido') > -1) {
                document.getElementById('maritimo').innerHTML += imprimeMaritimo(true, true);
            } else {
                document.getElementById('maritimo').innerHTML += imprimeMaritimo(true, false);
            }
        } else {
            document.getElementById('maritimo').innerHTML = pais + " NÃO faz parte da convenção OIT 185.<br>"
            if (document.getElementById('vivis').innerHTML.indexOf('Visto exigido') > -1) {
                document.getElementById('maritimo').innerHTML += imprimeMaritimo(false, true);
            } else {
                document.getElementById('maritimo').innerHTML += imprimeMaritimo(false, false);
            }
        }
    }
}

// Método para imprimir a mensagem dos marítimos
function imprimeMaritimo(sid, necessita_visto) {
    // sid true = país signatário
    // necessita_visto true = pax precisa de visto de visita
    texto = "<p>Se o viajante possuir RNM/RNE ou visto de <b>negócios</b> no passaporte válido:<br>";
    texto += "<ul><li>RNM/RNE: classificar com o código 100</li>";
    texto += "<li>VIVIS <b>(negócios)</b>: classificar com o código 102</li>";
    texto += "<li>VITEM: classificar com o código 201</li></ul></p>";
    texto += "<p><b>SENÃO:</b></p>";
    texto += "<p>";
    if (sid == true) {
        texto += "Se o viajante estiver portando a Seafearer's ID (SID):<br>" +
            "<ul><li>Para estadia de até 90 dias classificar com o código 118.</li>" +
            "<li>Para estadia entre 90 e 180 dias classificar com o código 130.</li>" +
            "<li>No caso de estadia SUPERIOR a 180 dias o VISTO É NECESSÁRIO.</li></ul></p>" +
            "<p>Se o viajante não estiver portando a Seafearer's ID (SID):<br>";
    }
    if (necessita_visto == true) {
        texto += "<ul><li><b>Visto EXIGIDO.</b></li></ul>";
    } else {
        texto += "<ul><li>Para estadia de até 90 dias, comprovada pela carta da empresa para a qual irá trabalhar, classificar com o código 118.</li>" +
            "<li>Para estadia SUPERIOR a 90 dias o VISTO É NECESSÁRIO.</li></ul>";
    }
    texto += '</p>';
    return texto;
}