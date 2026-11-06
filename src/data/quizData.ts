import { Subject, Question } from '../types/quiz';
export const SUBJECTS: Subject[] = [
  {
    id: 'linguagens',
    title: 'Linguagens, Códigos e suas Tecnologias',
    shortTitle: 'Linguagens',
    subtitle: 'Língua Portuguesa, Literatura, Artes, Língua Estrangeira e Educação Física',
    description: 'Interpretação textual, gêneros e tipologias, funções da linguagem, variação linguística e manifestações culturais.',
    accentColor: 'indigo',
    iconName: 'book',
    topics: ['Interpretação de Texto', 'Variação Linguística', 'Gêneros Textuais', 'Literatura Brasileira', 'Funções da Linguagem']
  },
  {
    id: 'matematica',
    title: 'Matemática e suas Tecnologias',
    shortTitle: 'Matemática',
    subtitle: 'Aritmética, Álgebra, Geometria, Estatística e Probabilidade',
    description: 'Resolução de problemas do cotidiano, porcentagem, razão e proporção, leitura de gráficos e raciocínio lógico.',
    accentColor: 'blue',
    iconName: 'calculator',
    topics: ['Razão e Proporção', 'Porcentagem & Finanças', 'Geometria Plana e Espacial', 'Funções e Gráficos', 'Estatística Básica']
  },
  {
    id: 'humanas',
    title: 'Ciências Humanas e suas Tecnologias',
    shortTitle: 'Ciências Humanas',
    subtitle: 'História, Geografia, Filosofia e Sociologia',
    description: 'Processos históricos do Brasil e do mundo, cidadania, direitos humanos, urbanização, geopolítica e pensamento crítico.',
    accentColor: 'amber',
    iconName: 'globe',
    topics: ['História do Brasil', 'Cidadania e Direitos', 'Geografia Urbana e Agrária', 'Filosofia Ética', 'Mundo do Trabalho']
  },
  {
    id: 'natureza',
    title: 'Ciências da Natureza e suas Tecnologias',
    shortTitle: 'Ciências da Natureza',
    subtitle: 'Biologia, Física e Química',
    description: 'Ecologia, saúde pública, transformações da matéria, fontes de energia, ondas e fenômenos do cotidiano.',
    accentColor: 'emerald',
    iconName: 'atom',
    topics: ['Ecologia e Meio Ambiente', 'Cinemática e Energia', 'Química Ambiental', 'Genética e Saúde', 'Eletricidade Básica']
  }
];
export const QUESTIONS: Question[] = [
  {
    id: 'ling-1',
    subjectId: 'linguagens',
    subjectName: 'Linguagens e Códigos',
    topic: 'Variação Linguística',
    enemYear: 2021,
    contextText: '“Numa das salas da universidade, um grupo de estudantes debatia se o uso de expressões como \'a gente fomos\' ou \'nós vai\' poderia ser considerado correto na linguagem informal de grupos comunitários. Um dos participantes argumentou que a língua é viva e se adapta aos seus falantes.”',
    questionText: 'Sob a perspectiva da sociolinguística contemporânea adotada pelo ENEM, a variação linguística descrita no texto deve ser entendida como:',
    options: [
      { id: 'A', text: 'Uma deformação gramatical que deve ser erradicada dos ambientes de trabalho.' },
      { id: 'B', text: 'Um fenômeno legítimo de adequação cultural e social, desprovido de inferioridade estrutural.' },
      { id: 'C', text: 'Um sintoma de falta de acesso às novas tecnologias de informação e comunicação.' },
      { id: 'D', text: 'Um erro comum resultante da fusão entre idiomas de origens germânica e latina.' },
      { id: 'E', text: 'Um registro aceitável unicamente na linguagem poética e nas canções populares.' }
    ],
    correctOptionId: 'B',
    explanation: 'A sociolinguística demonstra que não há línguas ou dialetos superiores ou inferiores. Toda variedade linguística atende com eficácia às necessidades de comunicação de sua comunidade. O preconceito linguístico ocorre quando se julga o falante e não o código em si.',
    difficulty: 'Fácil'
  },
  {
    id: 'ling-2',
    subjectId: 'linguagens',
    subjectName: 'Linguagens e Códigos',
    topic: 'Gêneros e Intencionalidade Discursiva',
    enemYear: 2022,
    contextText: 'Uma campanha institucional do Ministério da Saúde veicula o slogan: "Vacinar é um ato de amor e responsabilidade coletiva. Proteja quem você ama e quem você nem conhece. Procure o posto de saúde mais próximo."',
    questionText: 'Nesse anúncio publicitário institucional, a função de linguagem predominante e o recurso verbal empregado para convencer o interlocutor são, respectivamente:',
    options: [
      { id: 'A', text: 'Função metalinguística e verbos no modo subjuntivo.' },
      { id: 'B', text: 'Função emotiva e repetição de pronomes de primeira pessoa.' },
      { id: 'C', text: 'Função fática e expressões de teste de canal sonoro.' },
      { id: 'D', text: 'Função conativa (ou apelativa) e verbos no modo imperativo.' },
      { id: 'E', text: 'Função poética e métrica rítmica com rimas ricas.' }
    ],
    correctOptionId: 'D',
    explanation: 'A função conativa (ou apelativa) centra-se no receptor da mensagem, tendo como objetivo persuadi-lo ou induzi-lo a uma ação. É tipicamente marcada pelo uso de verbos no imperativo ("Proteja", "Procure").',
    difficulty: 'Fácil'
  },
  {
    id: 'ling-3',
    subjectId: 'linguagens',
    subjectName: 'Linguagens e Códigos',
    topic: 'Interpretação e Recursos Expressivos',
    enemYear: 2020,
    contextText: '“O comércio eletrônico cresceu expressivamente, mas trouxe consigo o fenômeno da infoxicação: o bombardeio ininterrupto de notificações, ofertas e dados que sobrecarrega a tomada de decisão do consumidor moderno.”',
    questionText: 'O vocábulo "infoxicação" foi criado por meio de um processo de formação de palavras conhecido como neologismo por:',
    options: [
      { id: 'A', text: 'Aglutinação entre as palavras informação e intoxicação.' },
      { id: 'B', text: 'Derivação parassintética a partir do radical "foco".' },
      { id: 'C', text: 'Derivação imprópria ao transformar adjetivo em substantivo.' },
      { id: 'D', text: 'Prefixação com o prefixo latino de negação "in-".' },
      { id: 'E', text: 'Onomatopeia que imita o som de alertas eletrônicos.' }
    ],
    correctOptionId: 'A',
    explanation: '"Infoxicação" é um neologismo formado pela fusão (amálgama/aglutinação) de "informação" + "intoxicação", expressando a ideia de que o excesso desmedido de informações produz um efeito tóxico mental na sociedade contemporânea.',
    difficulty: 'Médio'
  },
  {
    id: 'ling-4',
    subjectId: 'linguagens',
    subjectName: 'Linguagens e Códigos',
    topic: 'Literatura Brasileira',
    enemYear: 2021,
    contextText: 'No romance "Vidas Secas", de Graciliano Ramos, a cachorra Baleia e a família de retirantes enfrentam a seca no sertão nordestino em condições sub-humanas, em que os personagens quase não usam palavras para expressar seus pensamentos mais profundos.',
    questionText: 'A escassez de diálogos entre Fabiano e sua família nessa obra do Modernismo brasileiro reflete:',
    options: [
      { id: 'A', text: 'O desinteresse dos personagens pelas manifestações culturais da região.' },
      { id: 'B', text: 'A recusa consciente de Fabiano em aprender o idioma português formal.' },
      { id: 'C', text: 'A desumanização provocada pela miséria e pela opressão socioeconômica extrema.' },
      { id: 'D', text: 'A adesão dos sertanejos ao ideal estético do Romantismo indigenista.' },
      { id: 'E', text: 'A influência da literatura de vanguarda futurista europeia na linguagem sertaneja.' }
    ],
    correctOptionId: 'C',
    explanation: 'Em "Vidas Secas" (Segunda Fase do Modernismo), a mudez e a dificuldade de articulação verbal dos personagens simbolizam a "zoomorfização" e a opressão social que lhes retiram até mesmo a plena capacidade de expressão humana perante a crueldade da seca e da exploração.',
    difficulty: 'Médio'
  },
  {
    id: 'ling-5',
    subjectId: 'linguagens',
    subjectName: 'Linguagens e Códigos',
    topic: 'Linguagem e Cidadania',
    enemYear: 2023,
    contextText: 'O acesso a serviços públicos digitais exige o preenchimento de formulários complexos. Para garantir a acessibilidade a todos os cidadãos, especialistas recomendam o uso da diretriz de "Linguagem Simples" (Plain Language).',
    questionText: 'O movimento pela "Linguagem Simples" no setor público tem como objetivo primordial:',
    options: [
      { id: 'A', text: 'Substituir a literatura clássica por resumos automáticos gerados por algoritmos.' },
      { id: 'B', text: 'Democratizar a informação pública e assegurar o pleno exercício dos direitos civis.' },
      { id: 'C', text: 'Eliminar os cursos de redação e gramática das escolas de ensino fundamental.' },
      { id: 'D', text: 'Uniformizar a fala coloquial de todas as regiões brasileiras em um só dialeto.' },
      { id: 'E', text: 'Restringir a publicação de leis e editais apenas a especialistas em direito.' }
    ],
    correctOptionId: 'B',
    explanation: 'A diretriz de Linguagem Simples busca tornar textos informativos e jurídicos claros e compreensíveis para qualquer cidadão, evitando termos herméticos (juridiquês) e promovendo a transparência ativa e a inclusão social.',
    difficulty: 'Fácil'
  },
  {
    id: 'ling-6',
    subjectId: 'linguagens',
    subjectName: 'Linguagens e Códigos',
    topic: 'Coesão e Coerência Textual',
    enemYear: 2022,
    contextText: '“Os combustíveis fósseis ainda representam grande parte da matriz energética mundial; NÃO OBSTANTE, os investimentos em energia eólica e solar registraram recordes históricos no último ano.”',
    questionText: 'A locução conjuntiva em destaque ("NÃO OBSTANTE") estabelece entre as orações uma relação semântica de:',
    options: [
      { id: 'A', text: 'Concessão / oposição atenuada (adversidade).' },
      { id: 'B', text: 'Consequência imediata.' },
      { id: 'C', text: 'Condição indispensável.' },
      { id: 'D', text: 'Causa originária.' },
      { id: 'E', text: 'Conclusão lógica definitiva.' }
    ],
    correctOptionId: 'A',
    explanation: 'A expressão "não obstante" tem valor adversativo ou concessivo (equivalente a "apesar disso", "contudo", "no entanto"), contrastando o uso de fósseis com o aumento dos investimentos renováveis.',
    difficulty: 'Médio'
  },
  {
    id: 'mat-1',
    subjectId: 'matematica',
    subjectName: 'Matemática e suas Tecnologias',
    topic: 'Razão, Proporção e Escala',
    enemYear: 2021,
    contextText: 'Um estudante de um curso técnico elabora a planta baixa de uma sala de estudos utilizando a escala de 1 : 50. Na representação no papel, o comprimento da parede principal mede exatamente 8 centímetros.',
    questionText: 'Qual é o comprimento real dessa parede no espaço físico da sala de aula?',
    options: [
      { id: 'A', text: '0,40 metro' },
      { id: 'B', text: '4,00 metros' },
      { id: 'C', text: '40,00 metros' },
      { id: 'D', text: '400,00 metros' },
      { id: 'E', text: '4 000,00 metros' }
    ],
    correctOptionId: 'B',
    explanation: 'Na escala 1 : 50, cada 1 cm no desenho corresponde a 50 cm no real. Portanto: Comprimento real = 8 cm × 50 = 400 cm. Como 1 metro equivale a 100 cm, 400 cm ÷ 100 = 4,00 metros.',
    difficulty: 'Fácil'
  },
  {
    id: 'mat-2',
    subjectId: 'matematica',
    subjectName: 'Matemática e suas Tecnologias',
    topic: 'Porcentagem e Matemática Financeira',
    enemYear: 2022,
    contextText: 'Uma trabalhadora autônoma adquiriu um notebook para suas atividades escolares e profissionais. O valor à vista era de R$ 2.000,00. Por ter pago com desconto promocional em parcela única, ela pagou R$ 1.700,00.',
    questionText: 'O percentual de desconto concedido sobre o valor original da mercadoria foi de:',
    options: [
      { id: 'A', text: '10%' },
      { id: 'B', text: '12%' },
      { id: 'C', text: '15%' },
      { id: 'D', text: '20%' },
      { id: 'E', text: '30%' }
    ],
    correctOptionId: 'C',
    explanation: 'O valor do desconto em reais foi: R$ 2.000 - R$ 1.700 = R$ 300. Para encontrar a porcentagem em relação ao preço inicial: (300 / 2.000) × 100 = 0,15 × 100 = 15%.',
    difficulty: 'Fácil'
  },
  {
    id: 'mat-3',
    subjectId: 'matematica',
    subjectName: 'Matemática e suas Tecnologias',
    topic: 'Estatística (Média, Moda e Mediana)',
    enemYear: 2020,
    contextText: 'Em um grupo de estudos preparatório para o ENEM com 5 estudantes, as idades registradas foram: 18, 22, 25, 29 e 36 anos.',
    questionText: 'A média aritmética e a mediana das idades desse grupo são, respectivamente:',
    options: [
      { id: 'A', text: '26 anos e 25 anos.' },
      { id: 'B', text: '25 anos e 26 anos.' },
      { id: 'C', text: '27 anos e 22 anos.' },
      { id: 'D', text: '24 anos e 25 anos.' },
      { id: 'E', text: '26 anos e 29 anos.' }
    ],
    correctOptionId: 'A',
    explanation: 'Soma das idades = 18 + 22 + 25 + 29 + 36 = 130 anos. Média = 130 / 5 = 26 anos. Como os dados já estão em ordem crescente (18, 22, 25, 29, 36), o termo central (mediana) é exatamente o terceiro valor: 25 anos.',
    difficulty: 'Fácil'
  },
  {
    id: 'mat-4',
    subjectId: 'matematica',
    subjectName: 'Matemática e suas Tecnologias',
    topic: 'Geometria Espacial (Volumes)',
    enemYear: 2021,
    contextText: 'Uma caixa-d\'água em formato de paralelepípedo retângulo possui dimensões internas de 2 metros de comprimento, 1,5 metro de largura e 1 metro de profundidade.',
    questionText: 'Considerando que 1 m³ corresponde à capacidade volumétrica de 1.000 litros, a capacidade máxima dessa caixa-d\'água é de:',
    options: [
      { id: 'A', text: '1.500 litros' },
      { id: 'B', text: '2.000 litros' },
      { id: 'C', text: '3.000 litros' },
      { id: 'D', text: '4.500 litros' },
      { id: 'E', text: '6.000 litros' }
    ],
    correctOptionId: 'C',
    explanation: 'O volume do paralelepípedo é dado por: V = comprimento × largura × altura = 2 m × 1,5 m × 1 m = 3 m³. Convertendo para litros: 3 m³ × 1.000 L/m³ = 3.000 litros.',
    difficulty: 'Médio'
  },
  {
    id: 'mat-5',
    subjectId: 'matematica',
    subjectName: 'Matemática e suas Tecnologias',
    topic: 'Função Afim e Gráficos do 1º Grau',
    enemYear: 2023,
    contextText: 'Uma empresa de transporte por aplicativo cobra uma tarifa fixa de partida de R$ 5,00 (bandeirada) mais uma taxa variável de R$ 2,50 por cada quilômetro (x) percorrido na viagem.',
    questionText: 'A lei da função matemática V(x) que determina o valor total cobrado em função da distância x percorrida é expressa por:',
    options: [
      { id: 'A', text: 'V(x) = 5x + 2,5' },
      { id: 'B', text: 'V(x) = 2,5x + 5' },
      { id: 'C', text: 'V(x) = 7,5x' },
      { id: 'D', text: 'V(x) = 2,5x - 5' },
      { id: 'E', text: 'V(x) = 5 / (2,5x)' }
    ],
    correctOptionId: 'B',
    explanation: 'Em uma função linear do tipo f(x) = ax + b, o termo \'b\' representa o coeficiente linear (valor fixo independente de x, ou seja, R$ 5,00) e \'a\' é o coeficiente angular (custo por quilômetro: R$ 2,50). Logo, V(x) = 2,5x + 5.',
    difficulty: 'Fácil'
  },
  {
    id: 'mat-6',
    subjectId: 'matematica',
    subjectName: 'Matemática e suas Tecnologias',
    topic: 'Probabilidade Básica',
    enemYear: 2022,
    contextText: 'Em uma urna utilizada em um sorteio escolar de bolsas de estudo, foram colocadas 12 bolas numeradas com números pares e 8 bolas com números ímpares, todas de mesmo tamanho e peso.',
    questionText: 'Ao retirar uma bola ao acaso dessa urna, a probabilidade de o número sorteado ser par é de:',
    options: [
      { id: 'A', text: '40%' },
      { id: 'B', text: '50%' },
      { id: 'C', text: '60%' },
      { id: 'D', text: '66,6%' },
      { id: 'E', text: '75%' }
    ],
    correctOptionId: 'C',
    explanation: 'Total de casos possíveis (espaço amostral) = 12 pares + 8 ímpares = 20 bolas. Casos favoráveis (números pares) = 12 bolas. Probabilidade = 12 / 20 = 6 / 10 = 0,60 = 60%.',
    difficulty: 'Médio'
  },
  {
    id: 'hum-1',
    subjectId: 'humanas',
    subjectName: 'Ciências Humanas',
    topic: 'Cidadania e Constituição Brasileira',
    enemYear: 2020,
    contextText: 'A Constituição Federal de 1988, cognominada "Constituição Cidadã" pelo deputado Ulysses Guimarães, consagrou amplos direitos sociais, como a universalização da saúde pública através do SUS e o dever estatal da educação básica gratuita e obrigatória.',
    questionText: 'O título de "Constituição Cidadã" concedido à Carta Magna de 1988 se justifica fundamentalmente porque ela:',
    options: [
      { id: 'A', text: 'Restringiu a participação eleitoral a cidadãos com comprovante de renda formal.' },
      { id: 'B', text: 'Marcou a transição democrática, institucionalizando garantias individuais e direitos fundamentais.' },
      { id: 'C', text: 'Subordinou as decisões do Poder Judiciário às diretrizes exclusivas do Poder Executivo.' },
      { id: 'D', text: 'Extinguiu os direitos trabalhistas consolidados nas décadas anteriores.' },
      { id: 'E', text: 'Proibiu a criação e a livre atuação de novos partidos e sindicatos operários.' }
    ],
    correctOptionId: 'B',
    explanation: 'A Constituição de 1988 marcou o fim da ditadura civil-militar no Brasil, restabelecendo as liberdades civis, o Estado Democrático de Direito e ampliando enormemente a seguridade social e os direitos humanos fundamentais.',
    difficulty: 'Fácil'
  },
  {
    id: 'hum-2',
    subjectId: 'humanas',
    subjectName: 'Ciências Humanas',
    topic: 'Geografia Urbana e Mobilidade',
    enemYear: 2021,
    contextText: 'Nas grandes regiões metropolitanas brasileiras, milhões de trabalhadores e estudantes residem em municípios periféricos e se deslocam diariamente em transportes públicos superlotados até as áreas centrais onde se concentram os empregos.',
    questionText: 'Esse movimento diário e regular de ida e volta entre o local de moradia e o local de trabalho ou estudo é denominado geograficamente de migração:',
    options: [
      { id: 'A', text: 'Transumância sazonal.' },
      { id: 'B', text: 'Êxodo rural.' },
      { id: 'C', text: 'Pendular.' },
      { id: 'D', text: 'Refúgio ambiental.' },
      { id: 'E', text: 'Nomadismo tecnológico.' }
    ],
    correctOptionId: 'C',
    explanation: 'A migração pendular é o deslocamento diário de pessoas entre cidades vizinhas ou bairros periféricos para trabalhar ou estudar no polo central, retornando às suas residências no final do dia, semelhante ao movimento de vaivém de um pêndulo.',
    difficulty: 'Fácil'
  },
  {
    id: 'hum-3',
    subjectId: 'humanas',
    subjectName: 'Ciências Humanas',
    topic: 'História do Trabalho no Brasil',
    enemYear: 2022,
    contextText: 'Promulgada na década de 1940 durante o governo de Getúlio Vargas, a Consolidação das Leis do Trabalho (CLT) unificou a legislação trabalhista brasileira, assegurando jornada máxima de 8 horas diárias, descanso semanal remunerado e férias regulamentadas.',
    questionText: 'Do ponto de vista político e social da Era Vargas, a criação da CLT objetivava:',
    options: [
      { id: 'A', text: 'Estimular greves gerais autônomas dirigidas por organizações anarquistas.' },
      { id: 'B', text: 'Atender reivindicações históricas dos trabalhadores sob a tutela e mediação direta do Estado.' },
      { id: 'C', text: 'Abolir os sindicatos operários e proibir a atuação de advogados trabalhistas.' },
      { id: 'D', text: 'Favorecer a importação de mão de obra escravizada dos países vizinhos.' },
      { id: 'E', text: 'Desestimular a industrialização nacional em prol da lavoura cafeeira tradicional.' }
    ],
    correctOptionId: 'B',
    explanation: 'Vargas adotou uma política trabalhista populista e reguladora (trabalhismo): ao mesmo tempo em que concedeu direitos reais muito demandados pelas classes populares, atrelou a estrutura sindical ao controle do Ministério do Trabalho, minimizando conflitos violentos.',
    difficulty: 'Médio'
  },
  {
    id: 'hum-4',
    subjectId: 'humanas',
    subjectName: 'Ciências Humanas',
    topic: 'Filosofia e Ética',
    enemYear: 2021,
    contextText: 'Para Immanuel Kant, agir eticamente consiste em obedecer ao chamado "imperativo categórico": “Age apenas segundo uma máxima tal que possas ao mesmo tempo querer que ela se torne uma lei universal”.',
    questionText: 'De acordo com a ética deontológica formulada por Kant, uma ação humana é genuinamente moral quando:',
    options: [
      { id: 'A', text: 'Busca a obtenção de elogios e reconhecimento perante os outros membros do grupo.' },
      { id: 'B', text: 'Gera vantagens financeiras e acúmulo material sem violar os costumes locais.' },
      { id: 'C', text: 'É motivada estritamente pelo respeito ao dever racional, independentemente dos interesses particulares.' },
      { id: 'D', text: 'Garante o prazer sensorial imediato do indivíduo a qualquer custo.' },
      { id: 'E', text: 'Depende unicamente do medo de penalidades judiciais do Estado.' }
    ],
    correctOptionId: 'C',
    explanation: 'A ética kantiana é deontológica (baseada no dever). Uma conduta só tem valor moral intrínseco se for praticada por dever e respeito à lei moral universal gerada pela razão, e não por conveniência, medo de punição ou interesse pessoal egoísta.',
    difficulty: 'Médio'
  },
  {
    id: 'hum-5',
    subjectId: 'humanas',
    subjectName: 'Ciências Humanas',
    topic: 'Sociologia e Cultura Digital',
    enemYear: 2023,
    contextText: 'O sociólogo Zygmunt Bauman utilizou a metáfora da "modernidade líquida" para descrever uma sociedade caracterizada pela volatilidade, fluidez das relações interpessoais e precarização das certezas institucionais.',
    questionText: 'Na visão de Bauman, a principal consequência dessa "liquidez" sobre as relações humanas contemporâneas é:',
    options: [
      { id: 'A', text: 'A criação de laços comunitários permanentes e invioláveis em todas as esferas.' },
      { id: 'B', text: 'A fragilização dos vínculos afetivos, transformados em conexões efêmeras e descartáveis.' },
      { id: 'C', text: 'O desaparecimento completo da lógica mercantil e de consumo nas redes sociais.' },
      { id: 'D', text: 'O fortalecimento inabalável das instituições democráticas tradicionais.' },
      { id: 'E', text: 'A rejeição unânime da tecnologia pelos jovens em favor da vida bucólica.' }
    ],
    correctOptionId: 'B',
    explanation: 'Na modernidade líquida, os laços humanos sólidos são substituídos por redes flexíveis e facilmente desconectáveis, onde prevalece o individualismo e a mercantilização das relações humanas.',
    difficulty: 'Fácil'
  },
  {
    id: 'hum-6',
    subjectId: 'humanas',
    subjectName: 'Ciências Humanas',
    topic: 'Geopolítica e Globalização',
    enemYear: 2022,
    contextText: 'Com o fim da Guerra Fria e a intensificação da globalização, o sistema internacional migrou da bipolaridade (EUA versus URSS) para uma nova ordem mundial marcada pela multipolaridade econômica.',
    questionText: 'Constitui um traço marcante dessa multipolaridade na geopolítica contemporânea:',
    options: [
      { id: 'A', text: 'O isolamento comercial absoluto do continente asiático.' },
      { id: 'B', text: 'A emergência de blocos econômicos e a ascensão de potências como a China e a União Europeia.' },
      { id: 'C', text: 'O fim definitivo de qualquer conflito armado ou disputa fronteiriça no globo.' },
      { id: 'D', text: 'A concentração de 100% da produção industrial mundial na América do Norte.' },
      { id: 'E', text: 'O retorno ao sistema colonialista mercantilista do século XVI.' }
    ],
    correctOptionId: 'B',
    explanation: 'A ordem multipolar caracteriza-se pela desconcentração do poder econômico entre vários polos de influência global (EUA, União Europeia, China, Japão e países emergentes como os BRICS).',
    difficulty: 'Fácil'
  },
  {
    id: 'nat-1',
    subjectId: 'natureza',
    subjectName: 'Ciências da Natureza',
    topic: 'Ecologia e Cadeias Alimentares',
    enemYear: 2021,
    contextText: 'Em um ecossistema aquático poluído por metais pesados (como o mercúrio) provenientes do garimpo ilegal, biólogos observaram que a concentração dessa substância tóxica aumentava expressivamente a cada nível trófico da cadeia alimentar.',
    questionText: 'O fenômeno ecológico descrito, no qual poluentes não biodegradáveis se acumulam em concentrações crescentes nos níveis superiores da cadeia trófica, é denominado:',
    options: [
      { id: 'A', text: 'Eutrofização artificial.' },
      { id: 'B', text: 'Magnificação trófica (ou biomagnificação).' },
      { id: 'C', text: 'Sucessão ecológica primária.' },
      { id: 'D', text: 'Fixação biológica de nitrogênio.' },
      { id: 'E', text: 'Mimetismo batesiano.' }
    ],
    correctOptionId: 'B',
    explanation: 'A magnificação trófica (ou bioacumulação ao longo da cadeia alimentar) ocorre com compostos que o organismo não consegue metabolizar ou excretar. Assim, o predador do topo (como peixes carnívoros e seres humanos) acumula a maior concentração de poluentes.',
    difficulty: 'Fácil'
  },
  {
    id: 'nat-2',
    subjectId: 'natureza',
    subjectName: 'Ciências da Natureza',
    topic: 'Física - Eletricidade e Potência',
    enemYear: 2020,
    contextText: 'O chuveiro elétrico é um dos aparelhos de maior consumo em residências. Durante o inverno, uma família ajusta a chave seletora para a posição "Inverno", o que eleva a temperatura da água sem alterar a tensão da rede (127 V).',
    questionText: 'Para aumentar a potência elétrica do chuveiro e aquecer mais a água mantendo a tensão constante, a resistência elétrica do resistor interno do aparelho deve:',
    options: [
      { id: 'A', text: 'Ser diminuída, aumentando assim a corrente elétrica.' },
      { id: 'B', text: 'Ser aumentada, diminuindo a passagem de elétrons.' },
      { id: 'C', text: 'Permanecer inalterada, dependendo apenas da pressão da água.' },
      { id: 'D', text: 'Ser substituída por um isolante de borracha sintética.' },
      { id: 'E', text: 'Ser invertida mecanicamente de polo positivo para negativo.' }
    ],
    correctOptionId: 'A',
    explanation: 'Pela fórmula da potência elétrica P = U² / R, como a tensão U é constante (127 V), a potência P é inversamente proporcional à resistência R. Diminuindo o comprimento útil da resistência, aumenta-se a corrente (I = U / R) e a potência de aquecimento.',
    difficulty: 'Médio'
  },
  {
    id: 'nat-3',
    subjectId: 'natureza',
    subjectName: 'Ciências da Natureza',
    topic: 'Química Ambiental e pH',
    enemYear: 2022,
    contextText: 'A queima de combustíveis fósseis derivados do petróleo e carvão mineral emite óxidos como dióxido de enxofre (SO2) e dióxidos de nitrogênio (NO2) para a atmosfera, reagindo com o vapor de água e formando ácidos fortes.',
    questionText: 'A precipitação da chuva ácida resultante desses compostos provoca no solo e nos corpos hídricos:',
    options: [
      { id: 'A', text: 'Aumento expressivo do pH, tornando o meio fortemente alcalino.' },
      { id: 'B', text: 'Diminuição do pH (aumento da acidez), com lixiviação de nutrientes minerais essenciais.' },
      { id: 'C', text: 'Neutralização total de qualquer microrganismo patogênico sem efeitos colaterais.' },
      { id: 'D', text: 'Formação espontânea de ozônio na troposfera marinha.' },
      { id: 'E', text: 'Transformação imediata de rochas graníticas em calcário.' }
    ],
    correctOptionId: 'B',
    explanation: 'A chuva ácida (com presença de ácido sulfúrico H2SO4 e nítrico HNO3) reduz o pH da água e do solo para valores abaixo de 5,0, acidificando mananciais, destruindo a fauna aquática e solubilizando metais tóxicos no solo.',
    difficulty: 'Fácil'
  },
  {
    id: 'nat-4',
    subjectId: 'natureza',
    subjectName: 'Ciências da Natureza',
    topic: 'Biologia Celular e Imunização',
    enemYear: 2021,
    contextText: 'Durante uma campanha de conscientização sanitária, explicou-se a diferença crucial entre a administração de uma vacina preventiva e a aplicação de um soro terapêutico contra veneno de cobra (soro antiofídico).',
    questionText: 'A vacina difere do soro porque a vacina atua estimulando:',
    options: [
      { id: 'A', text: 'Imunidade passiva temporária através de anticorpos prontos inoculados.' },
      { id: 'B', text: 'Imunidade ativa duradoura, estimulando a produção própria de anticorpos e células de memória.' },
      { id: 'C', text: 'A coagulação imediata do sangue para impedir a circulação de toxinas.' },
      { id: 'D', text: 'A destruição dos glóbulos vermelhos infectados por bactérias.' },
      { id: 'E', text: 'O relaxamento muscular do sistema respiratório contra espasmos.' }
    ],
    correctOptionId: 'B',
    explanation: 'A vacina contém antígenos inativados ou atenuados que treinam o sistema imunológico do indivíduo a fabricar seus próprios anticorpos e células de memória (imunização ativa). O soro, por sua vez, contém anticorpos já prontos para emergências (imunização passiva).',
    difficulty: 'Fácil'
  },
  {
    id: 'nat-5',
    subjectId: 'natureza',
    subjectName: 'Ciências da Natureza',
    topic: 'Física - Ondulatória e Espectro',
    enemYear: 2023,
    contextText: 'As transmissões de dados em redes Wi-Fi, telefonia móvel 5G e as transmissões de rádio FM utilizam ondas que se propagam no vácuo com velocidade de aproximadamente 300.000 km/s.',
    questionText: 'Todas essas tecnologias utilizam radiações que pertencem à categoria das ondas:',
    options: [
      { id: 'A', text: 'Mecânicas longitudinais que necessitam impreterivelmente de ar para se propagar.' },
      { id: 'B', text: 'Eletromagnéticas, geradas pela oscilação combinada de campos elétricos e magnéticos.' },
      { id: 'C', text: 'Gravitacionais de altíssima densidade molecular.' },
      { id: 'D', text: 'Sonoras ultrassônicas inaudíveis ao ouvido humano.' },
      { id: 'E', text: 'Térmicas de convecção restritas ao solo.' }
    ],
    correctOptionId: 'B',
    explanation: 'Sinais de rádio, TV, celular, Wi-Fi e micro-ondas são ondas eletromagnéticas. Ao contrário do som (onda mecânica), as ondas eletromagnéticas não necessitam de meio material para se propagar e viajam na velocidade da luz.',
    difficulty: 'Fácil'
  },
  {
    id: 'nat-6',
    subjectId: 'natureza',
    subjectName: 'Ciências da Natureza',
    topic: 'Química - Separação de Misturas',
    enemYear: 2022,
    contextText: 'Nas estações de tratamento de água (ETA) para consumo urbano em cidades brasileiras, a água captada de rios e represas passa por várias etapas sucessivas antes de chegar às torneiras das residências.',
    questionText: 'A etapa na qual se adiciona sulfato de alumínio para aglutinar partículas de sujeira em flocos maiores e mais pesados que descem para o fundo do tanque é denominada:',
    options: [
      { id: 'A', text: 'Filtração por membranas sintéticas.' },
      { id: 'B', text: 'Coagulação / Floculação seguida de decantação.' },
      { id: 'C', text: 'Destilação fracionada a vapor.' },
      { id: 'D', text: 'Evaporação solar acelerada.' },
      { id: 'E', text: 'Centrifugação nuclear.' }
    ],
    correctOptionId: 'B',
    explanation: 'Na coagulação/floculação, o sulfato de alumínio desestabiliza as partículas coloidais de argila e impurezas, que se unem forming flocos densos. Em seguida, na decantação, esses flocos sedimentam no fundo pela ação da gravidade.',
    difficulty: 'Fácil'
  }
];
export function getQuestionsBySubject(subjectId: string): Question[] {
  return QUESTIONS.filter((q) => q.subjectId === subjectId);
}
export function getSubjectById(subjectId: string): Subject | undefined {
  return SUBJECTS.find((s) => s.id === subjectId);
}
