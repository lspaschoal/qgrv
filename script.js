// Aviso de responsabilidade
//alert('Aviso de responsabilidade:\nEssa página tem a finalidade única de auxiliar na consulta de exigência de vistos para o Brasil, usando como fonte o Quadro Geral de Regime de Vistos emitido pelo Itamaraty.\nEsta não é uma fonte oficial e não deve ser tratada como tal. O autor não se responsabiliza por informações equivocadas ou pelas consequëncias de sua utilização.');

// Array de Países
var paises = [
  ["Afeganistão", "AFG", "AF", "1", "1", "1", "0"],
  ["África do Sul", "ZAF", "ZA", "5", "5", "4", "0"],
  ["Albânia", "ALB", "AL", "4", "4", "4*", "1"],
  ["Alemanha", "DEU", "DE", "8", "8", "4*", "0"],
  ["Andorra", "AND", "AD", "1", "1", "4", "0"],
  ["Angola", "AGO", "AO", "8", "8", "1", "0"],
  ["Antígua e Barbuda", "ATG", "AG", "8", "8", "4", "1"],
  ["Arábia Saudita", "SAU", "SA", "1", "1", "1", "0"],
  ["Argélia", "DZA", "DZ", "8", "8", "1", "0"],
  ["Argentina", "ARG", "AR", "11", "8", "4#", "0"],
  ["Armênia", "ARM", "AM", "8", "8", "4", "0"],
  ["Austrália", "AUS", "AU", "1¹", "1¹", "4", "0"],
  ["Áustria", "AUT", "AT", "8", "8", "4", "0"],
  ["Azerbaijão", "AZE", "AZ", "8", "8", "1", "1"],
  ["Bahamas", "BHS", "BS", "8", "8", "4", "1"],
  ["Bahrein", "BHR", "BH", "8", "8", "1", "0"],
  ["Bangladesh", "BGD", "BD", "8", "8", "1", "1"],
  ["Barbados", "BRB", "BB", "8", "8", "4", "0"],
  ["Belarus", "BLR", "BY", "8", "8", "4", "0"],
  ["Bélgica", "BEL", "BE", "8", "8", "4*", "0"],
  ["Belize", "BLZ", "BZ", "8", "8", "4", "0"],
  ["Benin", "BEN", "BJ", "8", "8", "1", "0"],
  ["Bolívia", "BOL", "BO", "5", "5", "4#", "0"],
  ["Bósnia", "BIH", "BA", "8", "8", "4", "1"],
  ["Botsuana", "BWA", "BW", "7", "7", "4", "0"],
  ["Brunei", "BRN", "BN", "1", "1", "1", "0"],
  ["Bulgária", "BGR", "BG", "5", "5", "4*", "0"],
  ["Burkina Faso", "BFA", "BF", "8", "8", "1", "0"],
  ["Burundi", "BDI", "BI", "8", "8", "1", "0"],
  ["Butão", "BTN", "BT", "1", "1", "1", "0"],
  ["Cabo Verde", "CPV", "CV", "8", "8", "1", "0"],
  ["Camboja", "KHM", "KH", "7", "7", "1", "0"],
  ["Cameroun", "CMR", "CM", "8", "8", "1", "0"],
  ["Canadá", "CAN", "CA", "1¹", "1¹", "4", "0"],
  ["Catar", "QAT", "QA", "8", "8", "4", "0"],
  ["Cazaquistão", "KAZ", "KZ", "8", "8", "2", "1"],
  ["Chade", "TCD", "TD", "1", "1", "1", "0"],
  ["Chile", "CHL", "CL", "8", "8", "4#", "0"],
  ["China", "CHN", "CN", "7", "7", "1", "0"],
  ["Chipre", "CYP", "CY", "5", "5", "4*", "0"],
  ["Colômbia", "COL", "CO", "11", "8", "4#", "0"],
  ["Comores", "COM", "KM", "1", "1", "1", "0"],
  ["Congo, República do", "COG", "CG", "8", "8", "1", "1"],
  ["Congo, República Democrática do", "COD", "CD", "1", "1", "1", "0"],
  ["Cook,  Ilhas", "COK", "CK", "1", "1", "1", "0"],
  ["Coréia do Norte", "PRK", "KP", "1", "1", "1", "0"],
  ["Coréia do Sul", "KOR", "KR", "8", "8", "4", "1"],
  ["Costa do Marfim", "CIV", "CI", "8", "8", "1", "0"],
  ["Costa Rica", "CRI", "CR", "8", "8", "4", "0"],
  ["Croácia", "HRV", "HR", "8", "8", "4", "1"],
  ["Cuba", "CUB", "CU", "9", "1", "1", "0"],
  ["Dinamarca", "DNK", "DK", "5", "5", "4*", "0"],
  ["Djibouti", "DJI", "DJ", "1", "1", "1", "0"],
  ["Dominica", "DMA", "DM", "8", "8", "4*", "0"],
  ["Egito", "EGY", "EG", "5", "5", "1", "0"],
  ["El Salvador", "SLV", "SV", "5", "5", "4", "0"],
  ["Emirados Árabes", "ARE", "AE", "5", "5", "4", "0"],
  ["Equador", "ECU", "EC", "11", "8", "4#", "0"],
  ["Eritréia", "ERI", "ER", "1", "1", "1", "0"],
  ["Eslováquia", "SVK", "SK", "8", "8", "4", "0"],
  ["Eslovênia", "SVN", "SI", "8", "8", "4*", "0"],
  ["Espanha", "ESP", "ES", "8", "8", "4", "1"],
  ["Estados Unidos", "USA", "US", "1¹", "1¹", "4", "0"],
  ["Estônia", "EST", "EE", "5", "5", "4*", "0"],
  ["Etiópia", "ETH", "ET", "8", "8", "1", "0"],
  ["Fiji,  Ilhas", "FJI", "FJ", "8", "4", "4", "0"],
  ["Filipinas", "PHL", "PH", "9", "9", "4", "1"],
  ["Finlândia", "FIN", "FI", "8", "8", "4", "0"],
  ["França", "FRA", "FR", "5", "5", "4*", "1"],
  ["Gabão", "GAB", "GA", "8", "8", "1", "0"],
  ["Gâmbia", "GMB", "GM", "1", "1", "1", "0"],
  ["Gana", "GHA", "GH", "8", "8", "1", "0"],
  ["Geórgia", "GEO", "GE", "8", "8", "4*", "1"],
  ["Granada", "GRD", "GD", "8", "8", "4", "0"],
  ["Grécia", "GRC", "GR", "8", "8", "4*", "0"],
  ["Guatemala", "GTM", "GT", "5", "5", "4", "0"],
  ["Guiana", "GUY", "GY", "7", "7", "4", "0"],
  ["Guiné", "GIN", "GN", "8", "8", "1", "0"],
  ["Guiné-Bissau", "GNB", "GW", "8", "8", "1", "0"],
  ["Guiné Equatorial", "GNQ", "GQ", "6", "6", "1", "0"],
  ["Haiti", "HTI", "HT", "8", "8", "1", "0"],
  ["Honduras", "HND", "HN", "8", "8", "4", "0"],
  ["Hong Kong", "HKG", "HK", "-", "-", "4", "0"],
  ["Hungria", "HUN", "HU", "8", "8", "4*", "1"],
  ["Iêmen", "YEM", "YE", "1", "1", "1", "1"],
  ["Índia", "IND", "IN", "5", "5", "1", "1"],
  ["Indonésia", "IDN", "ID", "15", "15", "2", "1"],
  ["Irã", "IRN", "IR", "7", "1", "1", "0"],
  ["Iraque", "IRQ", "IQ", "1", "1", "1", "1"],
  ["Irlanda", "IRL", "IE", "11", "11", "4", "0"],
  ["Islândia", "ISL", "IS", "5", "5", "4", "0"],
  ["Israel", "ISR", "IL", "11", "8", "4", "0"],
  ["Itália", "ITA", "IT", "8", "8", "4*", "0"],
  ["Jamaica", "JAM", "JM", "8", "8", "4", "0"],
  ["Japão", "JPN", "JP", "8", "8", "4", "0"],
  ["Jordânia", "JOR", "JO", "7", "7", "1", "1"],
  ["Kiribati", "KIR", "KI", "1", "1", "1", "1"],
  ["Kosovo", "XKX", "XK", "12", "12", "12", "0"],
  ["Kuwait", "KWT", "KW", "1", "1", "1", "0"],
  ["Laos", "LAO", "LA", "8", "8", "1", "0"],
  ["Lesoto", "LSO", "LS", "1", "1", "1", "0"],
  ["Letônia", "LVA", "LV", "5", "5", "4*", "0"],
  ["Líbano", "LBN", "LB", "8", "8", "1", "0"],
  ["Libéria", "LBR", "LR", "1", "1", "1", "0"],
  ["Líbia", "LBY", "LY", "1", "1", "1", "0"],
  ["Liechtenstein", "LIE", "LI", "1", "1", "4", "0"],
  ["Lituânia", "LTU", "LT", "8", "8", "4*", "0"],
  ["Luxemburgo", "LUX", "LU", "8", "8", "4*", "1"],
  ["Macau", "MAC", "MO", "–", "–", "4", "0"],
  ["Macedônia", "MKD", "MK", "8", "8", "4*", "0"],
  ["Madagascar", "MDG", "MG", "1", "1", "1", "1"],
  ["Malásia", "MYS", "MY", "8", "8", "4", "0"],
  ["Malawi", "MWI", "MW", "5", "5", "1", "0"],
  ["Maldivas", "MDV", "MV", "1", "1", "1", "1"],
  ["Mali", "MLI", "ML", "8", "8", "1", "0"],
  ["Malta", "MLT", "MT", "5", "5", "4*", "0"],
  ["Marianas, Ilhas", "MNP", "MP", "1", "1", "1", "0"],
  ["Marrocos", "MAR", "MA", "8", "8", "4", "0"],
  ["Marshall, Ilhas", "MHL", "MH", "1", "1", "1", "1"],
  ["Maurício", "MUS", "MU", "1", "1", "1", "0"],
  ["Mauritânia", "MRT", "MR", "8", "8", "1", "0"],
  ["México", "MEX", "MX", "8", "8", "4", "0"],
  ["Micronésia", "FSM", "FM", "1", "1", "1", "0"],
  ["Moçambique", "MOZ", "MZ", "8", "8", "1", "0"],
  ["Moldova", "MDA", "MD", "8", "8", "4", "1"],
  ["Mônaco", "MCO", "MC", "1", "1", "4", "0"],
  ["Mongólia", "MNG", "MN", "8", "8", "4", "0"],
  ["Montenegro", "MNE", "ME", "8", "8", "4*", "1"],
  ["Myanmar", "MSR", "MS", "15", "15", "1", "1"],
  ["Namíbia", "NAM", "NA", "8", "8", "4", "0"],
  ["Nauru", "NRU", "NR", "1", "1", "1", "0"],
  ["Nepal", "NPL", "NP", "8", "8", "1", "0"],
  ["Nicarágua", "NIC", "NI", "8", "8", "4", "0"],
  ["Níger", "NER", "NE", "1", "1", "1", "0"],
  ["Nigéria", "NGA", "NG", "6", "6", "1", "1"],
  ["Noruega", "NOR", "NO", "8", "8", "4", "0"],
  ["Nova Zelândia", "NZL", "NZ", "1", "1", "4", "0"],
  ["Omã", "OMN", "OM", "6", "6", "1", "0"],
  ["Ordem Soberana e Militar de Malta", "OSMM", "", "11", "11", "4", "0"],
  ["Países Baixos", "NLD", "NL", "5", "5", "4*", "0"],
  ["Palau", "PLW", "PW", "1", "1", "1", "0"],
  ["Palestina", "PSE", "PS", "1", "1", "1", "0"],
  ["Panamá", "PAN", "PA", "8", "8", "4", "0"],
  ["Papua Nova Guiné", "PNG", "PG", "1", "1", "1", "0"],
  ["Paquistão", "PAK", "PK", "5", "1", "1", "1"],
  ["Paraguai", "PRY", "PY", "11", "8", "4#", "0"],
  ["Peru", "PER", "PE", "11", "9", "4#", "0"],
  ["Polônia", "POL", "PL", "8", "8", "4", "0"],
  ["Portugal", "PRT", "PT", "8", "8", "4", "0"],
  ["Quênia", "KEN", "KE", "8", "8", "1", "0"],
  ["Quirguistão", "KGZ", "KG", "8", "8", "1", "0"],
  ["Reino Unido", "GBR", "GB", "11", "11", "4", "0"],
  [
    "República Árabe Saaraui Democrática (RASD)",
    "ESH",
    "EH",
    "13",
    "13",
    "13",
    "0",
  ],
  ["República Centro-Africana", "CAF", "CF", "1", "1", "1", "0"],
  ["República Dominicana", "DOM", "DO", "8", "8", "3", "0"],
  ["República Tcheca", "CZE", "CZ", "8", "8", "4*", "0"],
  ["Romênia", "ROU", "RO", "8", "8", "4", "0"],
  ["Ruanda", "RWA", "RW", "8", "8", "1", "0"],
  ["Rússia", "RUS", "RU", "8", "8", "4", "1"],
  ["Salomão,  Ilhas", "SLB", "SB", "1", "1", "1", "0"],
  ["Samoa Ocidental", "ASM", "AS", "1", "1", "1", "0"],
  ["San Marino", "SMR", "SM", "11", "11", "4", "0"],
  ["Santa Lúcia", "LCA", "LC", "8", "8", "4", "0"],
  ["São Cristóvão e Nevis", "KNA", "KN", "8", "8", "4", "0"],
  ["São Tomé e Príncipe", "STP", "ST", "8", "8", "1", "0"],
  ["São Vicente e Granadinas", "VCT", "VC", "8", "8", "4", "0"],
  ["Senegal", "SEN", "SN", "8", "8", "1", "0"],
  ["Serra Leoa", "SLE", "SL", "1", "1", "1", "0"],
  ["Sérvia", "SRB", "RS", "8", "8", "4", "0"],
  ["Seicheles", "SYC", "SC", "8", "8", "4*", "0"],
  ["Singapura", "SGP", "SG", "7", "7", "2", "0"],
  ["Síria", "SYR", "SY", "1", "1", "1", "0"],
  ["Somália", "SOM", "SO", "1", "1", "1", "0"],
  ["Sri Lanka", "LKA", "LK", "8@", "8@", "1", "1"],
  ["Suazilândia", "SWZ", "SZ", "1", "1", "1", "0"],
  ["Sudão", "SDN", "SD", "7", "7", "1", "0"],
  ["Sudão do Sul", "SSD", "SS", "1", "1", "1", "0"],
  ["Suécia", "SWE", "SE", "8", "8", "4*", "0"],
  ["Suíça", "CHE", "CH", "8", "8", "4*", "0"],
  ["Suriname", "SUR", "SR", "5", "5", "4", "0"],
  ["Tajiquistão", "TJK", "TJ", "1", "1", "1", "0"],
  ["Tailândia", "THA", "TH", "8", "8", "4", "0"],
  ["Taiwan", "TWN", "TW", "12", "12", "14", "0"],
  ["Tanzânia", "TZA", "TZ", "8", "8", "1", "1"],
  ["Timor-Leste", "TLS", "TL", "5", "5", "1", "0"],
  ["Togo", "TGO", "TG", "8", "8", "1", "0"],
  ["Tonga", "TON", "TO", "1", "1", "1", "0"],
  ["Trinidad e Tobago", "TTO", "TT", "8", "8", "4", "0"],
  ["Tunísia", "TUN", "TN", "11", "9", "4", "1"],
  ["Turcomenistão", "TKM", "TM", "1", "1", "1", "1"],
  ["Turquia", "TUR", "TR", "8", "8", "4", "0"],
  ["Tuvalu", "TUV", "TV", "1", "1", "1", "0"],
  ["Ucrânia", "UKR", "UA", "8", "8", "4*", "0"],
  ["Uganda", "UGA", "UG", "1", "1", "1", "0"],
  ["Uruguai", "URY", "UY", "11", "11", "4#", "0"],
  ["Uzbequistão", "UZB", "UZ", "8", "1", "1", "0"],
  ["Vanuatu", "VUT", "VU", "1", "1", "1", "1"],
  ["Vaticano", "VAT", "VA", "11", "11", "4", "0"],
  ["Venezuela", "VEN", "VE", "8", "5", "3#²", "0"],
  ["Vietnã", "VNM", "VN", "8", "8", "1", "0"],
  ["Zâmbia", "ZMB", "ZM", "8", "8", "1", "0"],
  ["Zimbábue", "ZWE", "ZW", "1", "1", "1", "0"],
];

// Array de legendas
var legenda = [
  ["#", "Ingresso permitido com Cédula de Identidade Civil."],
  [
    "@",
    "Dispensa de Visto, por até 90 dias, para funcionários não acreditados no Brasil. Para funcionários acreditados, isenção pelo prazo da missão, inclusive para filhos dependentes com até 16 anos. Filhos dependentes, maiores de 16 anos, vistos por até 2 anos.",
  ],
  ["*", "Máximo 90 dias de estada a cada 180 dias."],
  ["1", "Visto exigido."],
  ["2", "Dispensa de Visto, por até 30 dias."],
  ["3", "Dispensa de Visto, por até 60 dias."],
  ["4", "Dispensa de Visto, por até 90 dias."],
  [
    "5",
    "Dispensa de Visto, por até 90 dias, para funcionários não acreditados no Brasil. Para funcionários acreditados, Visto pelo prazo da missão.",
  ],
  [
    "6",
    "Dispensa de Visto, por até 90 dias, para funcionários não acreditados no Brasil. Para funcionários acreditados, dispensa de visto para entrar no território brasileiro, mas deverão solicitar ao MRE visto pelo prazo da missão no período de 30 (trinta) dias da primeira entrada.",
  ],
  [
    "7",
    "Dispensa de Visto, por até 30 dias, para funcionários não acreditados no Brasil. Para funcionários acreditados, Isenção pelo prazo da missão.",
  ],
  [
    "8",
    "Dispensa de Visto, por até 90 dias, para funcionários não acreditados no Brasil. Para funcionários acreditados, Isenção pelo prazo da missão.",
  ],
  [
    "9",
    "Dispensa de Visto, por até 180 dias, para funcionários não acreditados no Brasil. Para funcionários acreditados, Isenção pelo prazo da missão.",
  ],
  [
    "10",
    "Dispensa de Visto, por até 14 dias, para funcionários não acreditados no Brasil. Para funcionários acreditados, Visto pelo prazo da missão.",
  ],
  [
    "11",
    "Isenção de Visto, por prazo indeterminado, para funcionários acreditados e não acreditados.",
  ],
  [
    "12",
    "O Brasil não mantém relações diplomáticas. Visto concedido por até 90 dias. Não se concede Visto Diplomático ou Visto Oficial.",
  ],
  [
    "13",
    'O Brasil não mantém relações diplomáticas. Visto concedido sobre "laissez-passer", por até 90 dias. Não se concede Visto Diplomático ou Oficial.',
  ],
  [
    "14",
    "O Brasil não mantém relações diplomáticas. VIVIS concedido com validade de até 5 anos, com estada de até 90 dias e permanência total de até 180 dias por ano, contados da primeira entrada. Não se concede vistos em PADIP, PASOF ou PASER taiwanês.",
  ],
  [
    "15",
    "Dispensa de Visto, por até 30 dias, para funcionários não acreditados no Brasil. Para funcionários acreditados, dispensa de visto para entrar no território brasileiro, mas deverão solicitar ao MRE visto pelo prazo da missão no período de 30 (trinta) dias da primeira entrada.",
  ],
  [
    "16",
    "Dispensa de Visto por até 14 dias, prorrogáveis por período máximo de 90 dias a cada 12 meses.",
  ],
  [
    "¹",
    "Portadores de PADIP e PASOF em viagem com propósito de visita farão jus à isenção do Decreto nº 9.731/2019.",
  ],
  [
    "²",
    "Passaportes venezuelanos tem validade estendida por 5 anos a partir da data de sua expiração.",
  ],
  ["-", "Informação não disponível."],
];

/*
    Funções
*/
function setSeletor() {
  for (i = 0; i < paises.length; i++) {
    document.getElementById("pais").innerHTML +=
      "<option value='" + paises[i][1] + "'>" + paises[i][0] + "</option>";
  }
}
// Chamando a função na inicialização da página
setSeletor();

// Retorna o índice do país informado
function getIndice(pais) {
  for (i = 0; i < paises.length; i++) {
    if (paises[i][1] == pais) {
      return i;
    }
  }
  return -1;
}

// Decodifica a legenda
function decodifica(leg) {
  var numeral = "",
    simbolo = [],
    resultado = "";
  for (i = 0; i < leg.length; i++) {
    switch (leg[i]) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        numeral += leg[i];
        break;
      default:
        simbolo.push(leg[i]);
    }
  }

  // Lendo a parte numeral
  for (let i = 0; i < legenda.length; i++) {
    if (legenda[i][0] == numeral) {
      resultado += legenda[i][1];
    }
  }
  // Lendo os símbolos
  for (let i = 0; i < simbolo.length; i++) {
    for (let j = 0; j < legenda.length; j++) {
      if (legenda[j][0] == simbolo[i][0]) {
        resultado += " " + legenda[j][1];
      }
    }
  }
  return resultado;
}

// Função limpar
function limpar() {
  document.getElementById("pais").value = "default";
  document.getElementById("bandeira").src = "bandeiras/branca.png";
  document.getElementById("bandeira").hidden = true;
  document.getElementById("padip").innerHTML = "";
  document.getElementById("pasof").innerHTML = "";
  document.getElementById("vivis").innerHTML = "";
  document.getElementById("maritimo").innerHTML = "";
  document.getElementById("data1").value = "";
  document.getElementById("data2").value = "";
  document.getElementById("dataref").value = "";
  document.getElementById("numDias").value = "";
  document.getElementById("resultado_datas").innerHTML = "";
  document.getElementById("resultado_dias").innerHTML = "";
  document.getElementById("cod_pep").value = "";
  document.getElementById("decodifica_pep").innerHTML = "";
}

// Método de consulta do país
function consulta(pais) {
  if (pais == "default") {
    limpar();
  } else {
    indicePais = getIndice(pais);
    // Bandeira
    if (document.getElementById("pais").value == "OSMM") {
      document.getElementById("bandeira").src = "bandeiras/branca.png";
    } else {
      document.getElementById("bandeira").hidden = false;
      document.getElementById("bandeira").src =
        "bandeiras/" + document.getElementById("pais").value + ".png";
    }
    // Campo PADIP
    document.getElementById("padip").innerHTML = decodifica(
      paises[indicePais][3]
    );
    // Campo PASOF
    document.getElementById("pasof").innerHTML = decodifica(
      paises[indicePais][4]
    );
    // Campo VIVIS
    document.getElementById("vivis").innerHTML = decodifica(
      paises[indicePais][5]
    );
    // Campo Marítimo
    if (paises[indicePais][6] == "1") {
      document.getElementById("maritimo").innerHTML =
        paises[indicePais][0] + " faz parte da convenção OIT 185.<br>";
      if (
        document.getElementById("vivis").innerHTML.indexOf("Visto exigido") > -1
      ) {
        document.getElementById("maritimo").innerHTML += imprimeMaritimo(
          true,
          true
        );
      } else {
        document.getElementById("maritimo").innerHTML += imprimeMaritimo(
          true,
          false
        );
      }
    } else {
      document.getElementById("maritimo").innerHTML =
        paises[indicePais][0] + " NÃO faz parte da convenção OIT 185.<br>";
      if (
        document.getElementById("vivis").innerHTML.indexOf("Visto exigido") > -1
      ) {
        document.getElementById("maritimo").innerHTML += imprimeMaritimo(
          false,
          true
        );
      } else {
        document.getElementById("maritimo").innerHTML += imprimeMaritimo(
          false,
          false
        );
      }
    }
  }
}

// Método para imprimir a mensagem dos marítimos
function imprimeMaritimo(sid, necessita_visto) {
  // sid true = país signatário
  // necessita_visto true = pax precisa de visto de visita
  texto =
    "<p>Se o viajante possuir RNM/RNE ou visto de <b>negócios</b> no passaporte válido:<br>";
  texto += "<ul><li>RNM/RNE: classificar com o código 100</li>";
  texto += "<li>VIVIS <b>(negócios)</b>: classificar com o código 102</li>";
  texto += "<li>VITEM: classificar com o código 201</li></ul></p>";
  texto += "<p><b>SENÃO:</b></p>";
  texto += "<p>";
  if (sid == true) {
    texto +=
      "Se o viajante estiver portando a Seafearer's ID (SID):<br>" +
      "<ul><li>Para estadia de até 180 dias classificar com o código 130 e prazo 180 dias.</li>" +
      "<li>No caso de estadia SUPERIOR a 180 dias o VISTO É NECESSÁRIO.</li></ul></p>" +
      "<p>Se o viajante não estiver portando a Seafearer's ID (SID):<br>";
  }
  if (necessita_visto == true) {
    texto += "<ul><li><b>Visto EXIGIDO.</b></li></ul>";
  } else {
    texto +=
      "<ul><li>Para estadia de até 90 dias, comprovada pela carta da empresa para a qual irá trabalhar, classificar com o código 118.</li>" +
      "<li>Para estadia SUPERIOR a 90 dias o VISTO É NECESSÁRIO. Consultar o servidor de plantão.</li></ul>";
  }
  texto += "</p>";
  return texto;
}

/*
Calculadora de datas
*/
var hoje = new Date();
var noventa_dias_atras = new Date();
noventa_dias_atras.setDate(hoje.getDate() - 90);
var sessenta_dias = new Date();
sessenta_dias.setDate(hoje.getDate() + 60);
var noventa_dias = new Date();
noventa_dias.setDate(hoje.getDate() + 90);
var cento_oitenta_dias = new Date();
cento_oitenta_dias.setDate(hoje.getDate() + 180);
document.getElementById("data_atual").innerHTML =
  "A data atual é: " +
  doisDigitos(hoje.getDate()) +
  "/" +
  doisDigitos(hoje.getMonth() + 1) +
  "/" +
  hoje.getFullYear();
document.getElementById("noventa_dias_atras").innerHTML =
  "A data a 90 dias atrás era: " +
  doisDigitos(noventa_dias_atras.getDate()) +
  "/" +
  doisDigitos(noventa_dias_atras.getMonth() + 1) +
  "/" +
  noventa_dias_atras.getFullYear();
document.getElementById("sessenta_dias").innerHTML =
  "A data daqui a 60 dias será: " +
  doisDigitos(sessenta_dias.getDate()) +
  "/" +
  doisDigitos(sessenta_dias.getMonth() + 1) +
  "/" +
  sessenta_dias.getFullYear();
document.getElementById("noventa_dias").innerHTML =
  "A data daqui a 90 dias será: " +
  doisDigitos(noventa_dias.getDate()) +
  "/" +
  doisDigitos(noventa_dias.getMonth() + 1) +
  "/" +
  noventa_dias.getFullYear();
document.getElementById("cento_oitenta_dias").innerHTML =
  "A data daqui a 180 dias será: " +
  doisDigitos(cento_oitenta_dias.getDate()) +
  "/" +
  doisDigitos(cento_oitenta_dias.getMonth() + 1) +
  "/" +
  cento_oitenta_dias.getFullYear();

function doisDigitos(numero) {
  return numero > 9 ? numero : "0" + numero;
}

function calculaDiferencaDatas() {
  if (
    document.getElementById("data1").value !== "" &&
    document.getElementById("data2").value !== ""
  ) {
    let data1 = new Date(
      Date.parse(document.getElementById("data1").value.replace(/-/g, "/"))
    );
    let data2 = new Date(
      Date.parse(document.getElementById("data2").value.replace(/-/g, "/"))
    );
    let dias = Math.round((data2 - data1) / 86400000);
    document.getElementById("resultado_datas").innerHTML = dias;
  }
}

function addSubDias() {
  if (
    document.getElementById("dataref").value != "" &&
    document.getElementById("numDias").value != ""
  ) {
    let data = new Date(
      Date.parse(document.getElementById("dataref").value.replace(/-/g, "/"))
    );
    let dias = document.getElementById("numDias").value;
    document.getElementById("add").checked
      ? data.setDate(data.getDate() + Number(dias))
      : data.setDate(data.getDate() - dias);
    document.getElementById("resultado_dias").innerHTML =
      data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
  }
}

// modal
const closeModal = function () {
  document.querySelector(".modal").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
};

document.querySelector(".close-modal").addEventListener("click", closeModal);
document.querySelector(".overlay").addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (
    e.key === "Escape" &&
    !document.querySelector(".modal").classList.contains("hidden")
  ) {
    closeModal();
  }
});
