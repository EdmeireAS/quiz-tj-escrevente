const questions = [
  {
    text: "Qual a forma correta do plural de 'cidadão'?",
    options: ["Cidadãos", "Cidadães", "Cidadãoss", "Cidadões"],
    correctIndex: 0,
    explanation: "O plural correto é 'cidadãos'."
  },
  {
    text: "O que é verbo transitivo?",
    options: [
      "Verbo que não necessita de complemento",
      "Verbo que necessita de complemento",
      "Verbo de ligação",
      "Verbo intransitivo"
    ],
    correctIndex: 1,
    explanation: "Verbo transitivo exige complemento para completar sentido."
  },
 const questions = [
  // Direito Constitucional (25)
  {
    text: "Qual é a principal função do Poder Judiciário?",
    options: [
      "Elaborar leis",
      "Executar políticas públicas",
      "Julgar conflitos de interesse",
      "Fiscalizar o Poder Executivo",
      "Administrar recursos públicos"
    ],
    correctIndex: 2,
    explanation: "O Poder Judiciário tem como função principal julgar conflitos de interesse, garantindo a aplicação das leis."
  },
  {
    text: "A Constituição Federal de 1988 é conhecida como:",
    options: [
      "Constituição Cidadã",
      "Constituição Outorgada",
      "Constituição Flexível",
      "Constituição Transitória",
      "Constituição Autocrática"
    ],
    correctIndex: 0,
    explanation: "A CF de 1988 é chamada Constituição Cidadã por ter ampliado direitos e garantias."
  },
  {
    text: "Qual princípio é essencial para a administração pública?",
    options: [
      "Legalidade",
      "Procrastinação",
      "Arbitrariedade",
      "Imparcialidade",
      "Sigilo absoluto"
    ],
    correctIndex: 0,
    explanation: "A legalidade obriga a administração pública a agir conforme a lei."
  },
  {
    text: "O que é um ato legislativo?",
    options: [
      "Decisão judicial",
      "Manifestação unilateral da administração pública",
      "Lei, decreto, resolução ou medida provisória",
      "Contrato entre particulares",
      "Sentença penal"
    ],
    correctIndex: 2,
    explanation: "Atos legislativos são aqueles produzidos pelo Poder Legislativo, como leis e medidas provisórias."
  },
  {
    text: "A separação dos poderes é um princípio que busca:",
    options: [
      "Concentrar poder em uma única autoridade",
      "Distribuir funções entre Legislativo, Executivo e Judiciário",
      "Eliminar o Poder Judiciário",
      "Permitir intervenção militar",
      "Conceder mais poder ao Legislativo"
    ],
    correctIndex: 1,
    explanation: "Separação dos poderes busca equilíbrio e independência entre os poderes do Estado."
  },
  {
    text: "O controle de constitucionalidade serve para:",
    options: [
      "Aplicar penas aos infratores",
      "Verificar se as leis estão de acordo com a Constituição",
      "Criar novas leis",
      "Executar políticas públicas",
      "Fiscalizar as eleições"
    ],
    correctIndex: 1,
    explanation: "Controle de constitucionalidade verifica a conformidade das leis com a Constituição."
  },
  {
    text: "Quem tem competência para propor ação direta de inconstitucionalidade (ADI)?",
    options: [
      "Qualquer cidadão",
      "Ministro do Supremo Tribunal Federal e órgãos específicos",
      "Prefeitos",
      "Advogados particulares",
      "Juízes de primeira instância"
    ],
    correctIndex: 1,
    explanation: "Somente órgãos e autoridades indicadas pela Constituição podem propor ADI."
  },
  {
    text: "O direito de votar e ser votado é chamado de:",
    options: [
      "Elegibilidade",
      "Sufrágio",
      "Mandato",
      "Competência",
      "Prerrogativa"
    ],
    correctIndex: 0,
    explanation: "Elegibilidade é o direito de ser candidato a cargos públicos eletivos."
  },
  {
    text: "No Brasil, o voto é:",
    options: [
      "Obrigatório para maiores de 16 anos",
      "Opcional para maiores de 18 anos",
      "Obrigatório para maiores de 18 anos e facultativo para jovens entre 16 e 17 anos",
      "Nunca obrigatório",
      "Somente facultativo"
    ],
    correctIndex: 2,
    explanation: "O voto é obrigatório para maiores de 18 anos e facultativo para jovens de 16 e 17 anos."
  },
  {
    text: "A Constituição Federal pode ser alterada por:",
    options: [
      "Medidas provisórias simples",
      "Emendas constitucionais",
      "Decretos executivos",
      "Leis ordinárias",
      "Resoluções administrativas"
    ],
    correctIndex: 1,
    explanation: "Somente emendas constitucionais alteram o texto da Constituição."
  },
  {
    text: "O mandado de segurança é usado para proteger:",
    options: [
      "Direitos políticos",
      "Direitos líquidos e certos, não amparados por habeas corpus ou habeas data",
      "Direitos autorais",
      "Direitos trabalhistas",
      "Direitos civis exclusivamente"
    ],
    correctIndex: 1,
    explanation: "Mandado de segurança protege direito líquido e certo quando não há outro remédio legal."
  },
  {
    text: "Quem pode propor ação popular?",
    options: [
      "Qualquer cidadão",
      "Apenas parlamentares",
      "O presidente da República",
      "Ministros do STF",
      "O prefeito"
    ],
    correctIndex: 0,
    explanation: "Ação popular pode ser proposta por qualquer cidadão para anular atos ilegais."
  },
  {
    text: "O princípio da publicidade determina que os atos administrativos devem ser:",
    options: [
      "Reservados ao público",
      "Sigilosos",
      "Divulgados para conhecimento geral",
      "Publicados apenas para autoridades",
      "Mantidos em sigilo judicial"
    ],
    correctIndex: 2,
    explanation: "Princípio da publicidade assegura transparência dos atos públicos."
  },
  {
    text: "A Constituição brasileira prevê que o regime político é:",
    options: [
      "Monarquia absoluta",
      "República federativa",
      "Ditadura militar",
      "Monarquia parlamentarista",
      "Autocracia"
    ],
    correctIndex: 1,
    explanation: "O Brasil é uma República Federativa, com divisão de poderes e estados autônomos."
  },
  {
    text: "Qual órgão é responsável pelo julgamento do Presidente da República em crimes comuns?",
    options: [
      "Supremo Tribunal Federal",
      "Senado Federal",
      "Câmara dos Deputados",
      "Tribunal de Contas",
      "STJ"
    ],
    correctIndex: 0,
    explanation: "O STF julga o presidente da República em crimes comuns após autorização da Câmara."
  },
  {
    text: "A quem compete elaborar leis municipais?",
    options: [
      "Câmara Municipal",
      "Prefeito",
      "Assembleia Legislativa",
      "Congresso Nacional",
      "Governador"
    ],
    correctIndex: 0,
    explanation: "A Câmara Municipal é o órgão legislativo do município."
  },
  {
    text: "O habeas corpus é um remédio constitucional que visa:",
    options: [
      "Garantir liberdade de locomoção",
      "Garantir direito de propriedade",
      "Garantir direito à educação",
      "Garantir direito de voto",
      "Garantir direito à saúde"
    ],
    correctIndex: 0,
    explanation: "Habeas corpus protege contra prisões ilegais ou abusivas."
  },
  {
    text: "Quem pode ser ministro do Supremo Tribunal Federal?",
    options: [
      "Qualquer cidadão brasileiro",
      "Advogados com mais de 10 anos de atividade",
      "Cidadãos com notável saber jurídico e reputação ilibada",
      "Políticos eleitos",
      "Juízes de primeira instância"
    ],
    correctIndex: 2,
    explanation: "Ministros do STF são indicados entre pessoas de notável saber jurídico e reputação ilibada."
  },
  {
    text: "A Constituição Federal é a lei:",
    options: [
      "De menor hierarquia",
      "Suprema do país",
      "Igual a outras leis ordinárias",
      "Revogável por decreto",
      "De caráter transitório"
    ],
    correctIndex: 1,
    explanation: "A Constituição Federal é a lei suprema, que prevalece sobre as demais."
  },
  {
    text: "O que é um direito fundamental?",
    options: [
      "Direito administrativo",
      "Direito penal",
      "Direitos básicos e garantias essenciais do cidadão",
      "Direitos trabalhistas",
      "Direitos tributários"
    ],
    correctIndex: 2,
    explanation: "Direitos fundamentais são garantias essenciais para a dignidade humana."
  },
  {
    text: "O princípio da dignidade da pessoa humana é:",
    options: [
      "Opcional",
      "Fundamental e base da República",
      "Apenas uma recomendação",
      "Exclusivo para maiores de 18 anos",
      "Aplicável somente no direito penal"
    ],
    correctIndex: 1,
    explanation: "É princípio fundamental e base do Estado Democrático de Direito."
  },
  {
    text: "Qual órgão exerce a função legislativa no âmbito federal?",
    options: [
      "Supremo Tribunal Federal",
      "Congresso Nacional",
      "Presidência da República",
      "Tribunal de Contas da União",
      "Assembleia Legislativa"
    ],
    correctIndex: 1,
    explanation: "O Congresso Nacional é o órgão legislativo federal."
  },
  {
    text: "A Constituição Federal garante o direito de reunião desde que:",
    options: [
      "Seja armada",
      "Seja pacífica e sem armas",
      "Seja apenas com autorização do governo",
      "Seja dentro das casas de leis",
      "Seja sem comunicação pública"
    ],
    correctIndex: 1,
    explanation: "Reuniões devem ser pacíficas e sem armas, conforme a Constituição."
  },
  {
    text: "O direito à educação é assegurado:",
    options: [
      "Apenas para maiores de 18 anos",
      "Somente no ensino básico",
      "Para todos, conforme princípios da Constituição",
      "Somente para cidadãos com título eleitoral",
      "Apenas para estudantes universitários"
    ],
    correctIndex: 2,
    explanation: "A Constituição assegura educação para todos, com acesso universal."
  },

  // Direito Administrativo (20)
  {
    text: "Qual é o princípio básico da administração pública?",
    options: [
      "Moralidade",
      "Burocracia",
      "Sigilo",
      "Privacidade",
      "Competitividade"
    ],
    correctIndex: 0,
    explanation: "O princípio da moralidade impõe ética e legalidade à administração."
  },
  {
    text: "O que é licitação pública?",
    options: [
      "Contratação direta sem concorrência",
      "Procedimento para contratar serviços ou compras garantindo isonomia",
      "Lei que rege os servidores públicos",
      "Atividade do Poder Judiciário",
      "Sistema de fiscalização eleitoral"
    ],
    correctIndex: 1,
    explanation: "Licitação é o processo para contratar garantindo igualdade entre concorrentes."
  },
  {
    text: "Qual das alternativas NÃO é uma modalidade de licitação?",
    options: [
      "Concorrência",
      "Tomada de preços",
      "Convite",
      "Depósito judicial",
      "Pregão"
    ],
    correctIndex: 3,
    explanation: "Depósito judicial não é modalidade de licitação."
  },
  {
    text: "O que caracteriza o servidor público estatutário?",
    options: [
      "Regido pela CLT",
      "Tem vínculo por contrato temporário",
      "Regido por estatuto próprio e regime jurídico único",
      "É terceirizado",
      "Trabalha apenas em empresas privadas"
    ],
    correctIndex: 2,
    explanation: "Servidor estatutário é regido por estatuto próprio, com direitos e deveres específicos."
  },
  {
    text: "O ato administrativo pode ser:",
    options: [
      "Unilateral, bilateral ou multilateral",
      "Somente bilateral",
      "Somente judicial",
      "Apenas contrato privado",
      "Somente decisão judicial"
    ],
    correctIndex: 0,
    explanation: "Atos administrativos podem ser unilaterais (ex: decreto), bilaterais (ex: contratos)."
  },
  {
    text: "Qual princípio administrativo exige que a administração pública atue dentro da lei?",
    options: [
      "Impessoalidade",
      "Legalidade",
      "Eficiência",
      "Publicidade",
      "Moralidade"
    ],
    correctIndex: 1,
    explanation: "Legalidade significa agir conforme a legislação vigente."
  },
  {
    text: "O que é improbidade administrativa?",
    options: [
      "Atos que violam os princípios da administração e causam dano ao erário",
      "Atos de funcionários honestos",
      "Ações judiciais contra particulares",
      "Medidas para proteger servidores",
      "Atos relacionados à segurança pública"
    ],
    correctIndex: 0,
    explanation: "Improbidade administrativa são atos ilícitos cometidos por agentes públicos."
  },
  {
    text: "O que é concessão administrativa?",
    options: [
      "Contrato entre particulares",
      "Permissão do poder público para particular explorar serviço público",
      "Lei municipal",
      "Ato do Poder Judiciário",
      "Concurso público"
    ],
    correctIndex: 1,
    explanation: "Concessão permite a particulares prestar serviço público."
  },
  {
    text: "Qual o prazo máximo para um servidor público em estágio probatório?",
    options: [
      "6 meses",
      "1 ano",
      "2 anos",
      "3 anos",
      "5 anos"
    ],
    correctIndex: 3,
    explanation: "Estágio probatório dura até 3 anos para avaliação do servidor."
  },
  {
    text: "Qual órgão tem a função de fiscalizar as contas públicas?",
    options: [
      "Ministério Público",
      "Tribunal de Contas",
      "STF",
      "Assembleia Legislativa",
      "Conselho Nacional de Justiça"
    ],
    correctIndex: 1,
    explanation: "Tribunais de Contas fiscalizam finanças públicas e administração."
  },
  {
    text: "O que é responsabilidade civil do Estado?",
    options: [
      "Dever de indenizar por danos causados por seus agentes",
      "Isenção total em casos de danos",
      "Atos criminais dos servidores",
      "Imunidade tributária",
      "Licitação"
    ],
    correctIndex: 0,
    explanation: "Estado responde civilmente pelos danos causados a terceiros."
  },
  {
    text: "O que é poder de polícia?",
    options: [
      "Capacidade de limitar direitos para proteger interesse público",
      "Força policial exclusiva",
      "Poder legislativo",
      "Liberdade total",
      "Contratação de servidores"
    ],
    correctIndex: 0,
    explanation: "Poder de polícia é limitar direitos para preservar ordem pública."
  },
  {
    text: "O ato administrativo pode ser anulado quando:",
    options: [
      "Produzir efeitos jurídicos válidos",
      "For ilegal ou inválido",
      "Tiver consentimento do interessado",
      "For uma decisão judicial",
      "For contrato entre particulares"
    ],
    correctIndex: 1,
    explanation: "Atos ilegais ou inválidos podem ser anulados pela administração."
  },
  {
    text: "Qual a diferença entre ato vinculado e ato discricionário?",
    options: [
      "Ato vinculado depende de escolha; ato discricionário não",
      "Ato discricionário permite margem de escolha; ato vinculado não",
      "Ambos são iguais",
      "Ato vinculado é sempre ilegal",
      "Ato discricionário é sempre obrigatório"
    ],
    correctIndex: 1,
    explanation: "Ato discricionário permite margem de decisão; ato vinculado deve ser cumprido conforme lei."
  },
  {
    text: "O que caracteriza um servidor público comissionado?",
    options: [
      "Contrato temporário para cargos de confiança",
      "Servidor efetivo aprovado em concurso",
      "Trabalhador terceirizado",
      "Empregado privado",
      "Servidor estatutário"
    ],
    correctIndex: 0,
    explanation: "Servidores comissionados ocupam cargos de confiança, sem necessidade de concurso."
  },
  {
    text: "O regime jurídico único aplica-se a:",
    options: [
      "Todos os trabalhadores formais do país",
      "Servidores públicos estatutários",
      "Terceirizados",
      "Empregados domésticos",
      "Pessoas jurídicas privadas"
    ],
    correctIndex: 1,
    explanation: "Regime jurídico único é o conjunto de normas que rege servidores estatutários."
  },
  {
    text: "O que é ato administrativo discricionário?",
    options: [
      "Atos sem margem de escolha",
      "Atos que dependem da vontade da administração",
      "Atos emitidos pelo Judiciário",
      "Atos legislativos",
      "Atos entre particulares"
    ],
    correctIndex: 1,
    explanation: "Atos discricionários são decisões que a administração pode ajustar conforme conveniência."
  },
  {
    text: "Qual o prazo para prescrição da ação por improbidade administrativa?",
    options: [
      "3 anos",
      "5 anos",
      "10 anos",
      "20 anos",
      "Indeterminado"
    ],
    correctIndex: 2,
    explanation: "Prazo de prescrição da ação por improbidade administrativa é de 5 anos, contados da ciência do ato."
  },
  {
    text: "A contratação direta sem licitação é permitida em casos de:",
    options: [
      "Emergência ou guerra",
      "Compra de materiais comuns",
      "Todas as obras públicas",
      "Contratação de servidores",
      "Nenhum caso"
    ],
    correctIndex: 0,
    explanation: "Em casos emergenciais, a licitação pode ser dispensada."
  },
  {
    text: "Qual é o principal objetivo da eficiência na administração pública?",
    options: [
      "Reduzir gastos a qualquer custo",
      "Garantir a melhor prestação de serviços com menor custo e maior qualidade",
      "Aumentar a burocracia",
      "Impedir o acesso do público aos atos administrativos",
      "Manter os servidores sempre concursados"
    ],
    correctIndex: 1,
    explanation: "Eficiência busca melhores resultados para a sociedade com recursos limitados."
  },

  // Direito Civil (15)
  {
    text: "O que é capacidade civil?",
    options: [
      "Capacidade de entender e praticar atos jurídicos",
      "Poder político",
      "Capacidade física",
      "Condição financeira",
      "Aptidão para cargos públicos"
    ],
    correctIndex: 0,
    explanation: "Capacidade civil é a aptidão para exercer direitos e contrair obrigações."
  },
  {
    text: "O que é contrato segundo o Código Civil?",
    options: [
      "Acordo de vontades para criar, modificar ou extinguir direitos",
      "Sentença judicial",
      "Norma constitucional",
      "Atividade econômica do Estado",
      "Documento público"
    ],
    correctIndex: 0,
    explanation: "Contrato é o acordo de vontades entre partes com efeitos jurídicos."
  },
  {
    text: "Qual o prazo da prescrição para cobrança de dívida líquida comprovada por instrumento escrito?",
    options: [
      "3 anos",
      "5 anos",
      "10 anos",
      "20 anos",
      "1 ano"
    ],
    correctIndex: 0,
    explanation: "A prescrição para cobrança é de 3 anos conforme o Código Civil."
  },
  {
    text: "O que é a posse?",
    options: [
      "Detenção da coisa com intenção de ter para si",
      "Posse de cargo público",
      "Direito constitucional",
      "Obrigação de pagar impostos",
      "Direito penal"
    ],
    correctIndex: 0,
    explanation: "Posse é o exercício de fato do poder sobre coisa, com intenção."
  },
  {
    text: "Qual é a validade da doação feita por pessoa incapaz?",
    options: [
      "Sempre válida",
      "Nula, pois incapaz não pode doar",
      "Válida se houver autorização judicial",
      "Válida somente se for entre familiares",
      "Válida se houver testemunhas"
    ],
    correctIndex: 2,
    explanation: "Doações por incapazes necessitam de autorização judicial para validade."
  },
  {
    text: "Qual a diferença entre bens móveis e imóveis?",
    options: [
      "Móveis são transportáveis; imóveis não",
      "Imóveis são transportáveis; móveis não",
      "Ambos são a mesma coisa",
      "Móveis são pessoas; imóveis são coisas",
      "Nenhuma diferença"
    ],
    correctIndex: 0,
    explanation: "Bens móveis podem ser transportados; imóveis são fixos ao solo."
  },
  {
    text: "O que é sucessão hereditária?",
    options: [
      "Transmissão de bens após a morte",
      "Venda de bens",
      "Doação entre vivos",
      "Contrato de aluguel",
      "Atos de posse"
    ],
    correctIndex: 0,
    explanation: "Sucessão hereditária é a transferência do patrimônio após falecimento."
  },
  {
    text: "Qual a idade mínima para casar sem consentimento dos pais?",
    options: [
      "16 anos",
      "18 anos",
      "21 anos",
      "14 anos",
      "20 anos"
    ],
    correctIndex: 1,
    explanation: "18 anos é a idade para casar sem autorização dos pais."
  },
  {
    text: "O que é obrigação solidária?",
    options: [
      "Obrigações que somente um responde",
      "Obrigações em que todos os devedores respondem pela totalidade da dívida",
      "Obrigações não previstas em lei",
      "Obrigação penal",
      "Obrigação acessória"
    ],
    correctIndex: 1,
    explanation: "Na obrigação solidária, qualquer devedor pode ser cobrado pela totalidade da dívida."
  },
  {
    text: "O que caracteriza a responsabilidade civil objetiva?",
    options: [
      "Depende de culpa",
      "Independe de culpa, basta o dano e nexo causal",
      "Só ocorre em contratos",
      "Só ocorre em casos criminais",
      "É sempre subjetiva"
    ],
    correctIndex: 1,
    explanation: "Responsabilidade objetiva dispensa a comprovação de culpa."
  },
  {
    text: "Qual o prazo para anular um negócio jurídico por vício de consentimento?",
    options: [
      "4 anos",
      "2 anos",
      "10 anos",
      "1 ano",
      "Indeterminado"
    ],
    correctIndex: 0,
    explanation: "O prazo para anulação é de 4 anos a partir da descoberta do vício."
  },
  {
    text: "O que é usufruto?",
    options: [
      "Direito real de usar e fruir coisa alheia sem alterar sua substância",
      "Posse de imóvel alugado",
      "Propriedade plena",
      "Contrato de aluguel",
      "Posse direta"
    ],
    correctIndex: 0,
    explanation: "Usufruto é o direito de usar e aproveitar um bem pertencente a outro."
  },
  {
    text: "O que é a teoria do fato consumado?",
    options: [
      "Aceitação tácita de atos administrativos quando não contestados em prazo legal",
      "Teoria penal",
      "Aplicável apenas a contratos civis",
      "Exclusivo do direito trabalhista",
      "Teoria constitucional"
    ],
    correctIndex: 0,
    explanation: "Fato consumado ocorre quando a administração não anula atos em tempo legal."
  },
  {
    text: "O que caracteriza a tutela antecipada no processo civil?",
    options: [
      "Decisão provisória concedida antes do julgamento final",
      "Sentença definitiva",
      "Medida criminal",
      "Recurso judicial",
      "Ação penal"
    ],
    correctIndex: 0,
    explanation: "Tutela antecipada visa garantir direitos urgentes antes da decisão final."
  },
  {
    text: "Qual o prazo para prescrição da ação de reparação civil?",
    options: [
      "3 anos",
      "5 anos",
      "10 anos",
      "4 anos",
      "1 ano"
    ],
    correctIndex: 0,
    explanation: "O prazo para prescrição da ação de reparação civil é de 3 anos."
  },

  // Língua Portuguesa (20)
  {
    text: "Qual é a função da vírgula em uma frase?",
    options: [
      "Separar orações e elementos para facilitar a leitura",
      "Indicar uma pergunta",
      "Substituir o ponto final",
      "Unir frases",
      "Finalizar uma frase"
    ],
    correctIndex: 0,
    explanation: "A vírgula serve para separar elementos na frase, evitando ambiguidade."
  },
  {
    text: "Qual a classificação da palavra 'feliz' na frase: 'Ele está feliz'?",
    options: [
      "Substantivo",
      "Verbo",
      "Adjetivo",
      "Advérbio",
      "Preposição"
    ],
    correctIndex: 2,
    explanation: "'Feliz' é um adjetivo que qualifica o sujeito."
  },
  {
    text: "Qual é o sujeito na frase: 'O cachorro latiu alto'?",
    options: [
      "O cachorro",
      "Latiu",
      "Alto",
      "Frase sem sujeito",
      "O"
    ],
    correctIndex: 0,
    explanation: "Sujeito é quem pratica a ação, neste caso, 'O cachorro'."
  },
  {
    text: "O que é uma oração subordinada?",
    options: [
      "Oração independente",
      "Oração que depende de outra para ter sentido completo",
      "Oração principal",
      "Frase imperativa",
      "Frase interrogativa"
    ],
    correctIndex: 1,
    explanation: "Oração subordinada depende da oração principal para sentido completo."
  },
  {
    text: "Qual a forma correta do plural de 'cidadão'?",
    options: [
      "Cidadãos",
      "Cidadães",
      "Cidadãos",
      "Cidadãoss",
      "Cidadões"
    ],
    correctIndex: 0,
    explanation: "O plural correto é 'cidadãos'."
  },
  {
    text: "O que é verbo transitivo?",
    options: [
      "Verbo que não necessita de complemento",
      "Verbo que necessita de complemento",
      "Verbo de ligação",
      "Verbo intransitivo",
      "Verbo auxiliar"
    ],
    correctIndex: 1,
    explanation: "Verbo transitivo exige complemento para completar sentido."
  },
  {
    text: "O que é a crase?",
    options: [
      "Fusão de duas vogais idênticas",
      "Contração da preposição 'a' com o artigo definido feminino 'a'",
      "Uso de vírgula",
      "Uso do ponto final",
      "Contração de dois artigos"
    ],
    correctIndex: 1,
    explanation: "Crase é a fusão da preposição 'a' com o artigo 'a'."
  },
  {
    text: "Qual o tempo verbal da frase: 'Eu estudarei amanhã'?",
    options: [
      "Presente",
      "Pretérito",
      "Futuro do presente",
      "Futuro do pretérito",
      "Imperativo"
    ],
    correctIndex: 2,
    explanation: "Frase está no futuro do presente."
  },
  {
    text: "O que é sujeito indeterminado?",
    options: [
      "Sujeito não explícito ou desconhecido",
      "Sujeito explícito",
      "Sujeito composto",
      "Sujeito simples",
      "Sujeito inexistente"
    ],
    correctIndex: 0,
    explanation: "Sujeito indeterminado é aquele não expresso claramente."
  },
  {
    text: "O que é uma oração coordenada?",
    options: [
      "Oração que depende de outra",
      "Oração independente, ligada por conjunção",
      "Oração subordinada",
      "Frase nominal",
      "Frase interrogativa"
    ],
    correctIndex: 1,
    explanation: "Oração coordenada é independente e ligada à outra por conjunção."
  },
  {
    text: "O que é um advérbio?",
    options: [
      "Palavra que modifica verbo, adjetivo ou outro advérbio",
      "Nome próprio",
      "Verbo auxiliar",
      "Substantivo",
      "Pronome"
    ],
    correctIndex: 0,
    explanation: "Advérbio modifica verbo, adjetivo ou outro advérbio."
  },
  {
    text: "Qual é o plural correto de 'fóssil'?",
    options: [
      "Fósseis",
      "Fóssils",
      "Fossis",
      "Fóssiles",
      "Fóssil"
    ],
    correctIndex: 0,
    explanation: "O plural correto é 'fósseis'."
  },
  {
    text: "O que é um sujeito composto?",
    options: [
      "Sujeito com mais de um núcleo",
      "Sujeito com verbo composto",
      "Sujeito inexistente",
      "Sujeito simples",
      "Sujeito indeterminado"
    ],
    correctIndex: 0,
    explanation: "Sujeito composto tem mais de um núcleo."
  },
  {
    text: "Qual a forma correta de usar 'por que' em perguntas?",
    options: [
      "Usa-se 'por que' separado para perguntas",
      "Usa-se 'porque' junto",
      "Usa-se 'por quê' sem acento",
      "Usa-se 'porquê' como pronome",
      "Nenhuma forma"
    ],
    correctIndex: 0,
    explanation: "'Por que' separado é usado em perguntas."
  },
  {
    text: "O que é a voz ativa?",
    options: [
      "Sujeito pratica a ação",
      "Sujeito sofre a ação",
      "Verbo no particípio",
      "Verbo no gerúndio",
      "Verbo no infinitivo"
    ],
    correctIndex: 0,
    explanation: "Na voz ativa, sujeito é quem realiza a ação."
  },
  {
    text: "O que é a oração subordinada adverbial?",
    options: [
      "Orações que exercem função de advérbio",
      "Orações principais",
      "Orações independentes",
      "Frases nominais",
      "Orações sem verbo"
    ],
    correctIndex: 0,
    explanation: "São orações que indicam circunstâncias como tempo, causa, condição."
  },
  {
    text: "Qual a função do sujeito na oração?",
    options: [
      "Praticar a ação do verbo",
      "Modificar o verbo",
      "Conectar frases",
      "Indicar tempo",
      "Indicar modo"
    ],
    correctIndex: 0,
    explanation: "Sujeito é quem pratica a ação expressa pelo verbo."
  },
  {
    text: "O que é um predicado?",
    options: [
      "Parte da oração que contém o verbo e o que se declara do sujeito",
      "Parte que indica o sujeito",
      "Frase sem sentido",
      "Conjunção",
      "Pronome"
    ],
    correctIndex: 0,
    explanation: "Predicado é tudo que se declara sobre o sujeito."
  },
  {
    text: "Qual a forma correta do plural de 'cidadão'?",
    options: [
      "Cidadãos",
      "Cidadães",
      "Cidadãoss",
      "Cidadões",
      "Cidadãos"
    ],
    correctIndex: 0,
    explanation: "O plural correto é 'cidadãos'."
  },

  // Matemática (15)
  {
    text: "Qual é a fórmula da área do círculo?",
    options: [
      "πr²",
      "2πr",
      "πd",
      "r²",
      "πr"
    ],
    correctIndex: 0,
    explanation: "Área do círculo é π vezes o raio ao quadrado."
  },
  {
    text: "O que é um número primo?",
    options: [
      "Número divisível apenas por 1 e por ele mesmo",
      "Número par",
      "Número ímpar",
      "Número composto",
      "Número decimal"
    ],
    correctIndex: 0,
    explanation: "Número primo só tem dois divisores: 1 e ele mesmo."
  },
  {
    text: "Qual o resultado de 15 + 27?",
    options: [
      "42",
      "43",
      "41",
      "44",
      "45"
    ],
    correctIndex: 0,
    explanation: "15 + 27 = 42."
  },
  {
    text: "Qual o valor de π aproximado?",
    options: [
      "3,14",
      "3,15",
      "3,16",
      "3,13",
      "3,20"
    ],
    correctIndex: 0,
    explanation: "Valor aproximado de π é 3,14."
  },
  {
    text: "O que é um ângulo reto?",
    options: [
      "Ângulo de 90 graus",
      "Ângulo maior que 90 graus",
      "Ângulo menor que 90 graus",
      "Ângulo de 180 graus",
      "Ângulo de 45 graus"
    ],
    correctIndex: 0,
    explanation: "Ângulo reto mede 90°."
  },
  {
    text: "Qual é o resultado da multiplicação de 7 x 8?",
    options: [
      "56",
      "54",
      "58",
      "60",
      "52"
    ],
    correctIndex: 0,
    explanation: "7 vezes 8 é 56."
  },
  {
    text: "O que é um número par?",
    options: [
      "Número divisível por 2",
      "Número ímpar",
      "Número primo",
      "Número decimal",
      "Número negativo"
    ],
    correctIndex: 0,
    explanation: "Número par é divisível por 2."
  },
  {
    text: "Qual o resultado de 100 dividido por 5?",
    options: [
      "20",
      "15",
      "25",
      "10",
      "30"
    ],
    correctIndex: 0,
    explanation: "100 dividido por 5 é 20."
  },
  {
    text: "O que é uma fração?",
    options: [
      "Representação da divisão de uma parte pelo todo",
      "Número inteiro",
      "Número decimal",
      "Número negativo",
      "Número primo"
    ],
    correctIndex: 0,
    explanation: "Fração representa uma parte de um todo."
  },
  {
    text: "Qual é o valor de 5²?",
    options: [
      "25",
      "10",
      "5",
      "20",
      "15"
    ],
    correctIndex: 0,
    explanation: "5 ao quadrado é 25."
  },
  {
    text: "O que é uma equação?",
    options: [
      "Expressão matemática com igualdade",
      "Expressão sem valor",
      "Número primo",
      "Número par",
      "Número ímpar"
    ],
    correctIndex: 0,
    explanation: "Equação tem um sinal de igual indicando igualdade."
  },
  {
    text: "Qual o resultado de 12 - 7?",
    options: [
      "5",
      "4",
      "6",
      "7",
      "3"
    ],
    correctIndex: 0,
    explanation: "12 menos 7 é 5."
  },
  {
    text: "Qual é o número natural seguinte de 9?",
    options: [
      "10",
      "11",
      "8",
      "12",
      "9"
    ],
    correctIndex: 0,
    explanation: "Número natural seguinte de 9 é 10."
  },
  {
    text: "O que é o perímetro de um polígono?",
    options: [
      "Soma dos lados do polígono",
      "Área do polígono",
      "Altura do polígono",
      "Número de lados",
      "Diâmetro do polígono"
    ],
    correctIndex: 0,
    explanation: "Perímetro é a soma de todos os lados."
  },
  {
    text: "Qual o resultado de 3³?",
    options: [
      "27",
      "9",
      "18",
      "6",
      "3"
    ],
    correctIndex: 0,
    explanation: "3 ao cubo é 27."
  },

  // História (10)
  {
    text: "Quem foi o primeiro presidente do Brasil?",
    options: [
      "Deodoro da Fonseca",
      "Getúlio Vargas",
      "Juscelino Kubitschek",
      "Dilma Rousseff",
      "Jânio Quadros"
    ],
    correctIndex: 0,
    explanation: "Deodoro da Fonseca foi o primeiro presidente do Brasil."
  },
  {
    text: "Em que ano ocorreu a Proclamação da República no Brasil?",
    options: [
      "1889",
      "1822",
      "1964",
      "1930",
      "1500"
    ],
    correctIndex: 0,
    explanation: "A Proclamação da República foi em 1889."
  },
  {
    text: "Quem foi Tiradentes?",
    options: [
      "Líder da Inconfidência Mineira",
      "Presidente do Brasil",
      "Poeta brasileiro",
      "General do Exército",
      "Presidente da Câmara"
    ],
    correctIndex: 0,
    explanation: "Tiradentes foi líder da Inconfidência Mineira."
  },
  {
    text: "Qual era a principal atividade econômica do Brasil colonial?",
    options: [
      "Agricultura e mineração",
      "Indústria automobilística",
      "Tecnologia da informação",
      "Comércio internacional",
      "Turismo"
    ],
    correctIndex: 0,
    explanation: "Economia colonial baseava-se na agricultura e mineração."
  },
  {
    text: "O que foi a Revolução de 1930?",
    options: [
      "Golpe que levou Getúlio Vargas ao poder",
      "Guerra civil",
      "Independência do Brasil",
      "Descobrimento do Brasil",
      "Proclamação da República"
    ],
    correctIndex: 0,
    explanation: "Revolução de 1930 levou Vargas ao poder."
  },
  {
    text: "Quem foi Dom Pedro I?",
    options: [
      "Imperador do Brasil e proclamador da independência",
      "Presidente do Brasil",
      "General português",
      "Explorador espanhol",
      "Governador da Bahia"
    ],
    correctIndex: 0,
    explanation: "Dom Pedro I proclamou a independência do Brasil."
  },
  {
    text: "Quando foi a escravidão abolida no Brasil?",
    options: [
      "1888",
      "1822",
      "1500",
      "1930",
      "1964"
    ],
    correctIndex: 0,
    explanation: "A escravidão foi abolida em 1888."
  },
  {
    text: "Quem foi Getúlio Vargas?",
    options: [
      "Presidente do Brasil entre 1930 e 1945 e 1951 a 1954",
      "Imperador do Brasil",
      "Explorador português",
      "Poeta brasileiro",
      "Governador de São Paulo"
    ],
    correctIndex: 0,
    explanation: "Getúlio Vargas foi presidente em dois períodos."
  },
  {
    text: "Qual foi a importância da Inconfidência Mineira?",
    options: [
      "Foi um movimento pela independência do Brasil",
      "Foi uma guerra",
      "Foi um poema",
      "Foi uma festa",
      "Foi uma revolução industrial"
    ],
    correctIndex: 0,
    explanation: "Inconfidência Mineira foi um movimento de independência."
  },
  {
    text: "Quem foi Juscelino Kubitschek?",
    options: [
      "Presidente do Brasil conhecido pelo Plano de Metas",
      "Imperador do Brasil",
      "Poeta brasileiro",
      "General do Exército",
      "Governador da Bahia"
    ],
    correctIndex: 0,
    explanation: "Juscelino Kubitschek foi presidente com o Plano de Metas."
  }
]
];

let currentQuestionIndex = 0;

function showQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById("question-text").textContent = question.text;

  const optionsList = document.getElementById("options-list");
  optionsList.innerHTML = ""; // Limpa opções anteriores

  question.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<label><input type="radio" name="option" value="${index}"> ${option}</label>`;
    optionsList.appendChild(li);
  });

  document.getElementById("feedback").textContent = "";
  document.getElementById("submit-button").textContent = "Responder";
  document.getElementById("submit-button").disabled = false;
}

document.getElementById("submit-button").addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  const feedback = document.getElementById("feedback");
  const submitButton = document.getElementById("submit-button");

  if (submitButton.textContent === "Próxima") {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      // Quiz finalizado
      document.getElementById("question-container").innerHTML = "<p>Parabéns! Você concluiu o quiz.</p>";
    }
    return;
  }

  if (!selectedOption) {
    feedback.textContent = "Por favor, selecione uma opção.";
    feedback.style.color = "orange";
    return;
  }

  const selectedIndex = parseInt(selectedOption.value, 10);
  const question = questions[currentQuestionIndex];

  if (selectedIndex === question.correctIndex) {
    feedback.textContent = "Correto! " + question.explanation;
    feedback.style.color = "green";
  } else {
    feedback.textContent = "Incorreto. " + question.explanation;
    feedback.style.color = "red";
  }

  submitButton.textContent = "Próxima";
  submitButton.disabled = false;
});

showQuestion();
