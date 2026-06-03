# Roteiro — Avaliação de Acessibilidade do Duolingo (WCAG 2.1)

**Disciplina:** IHC · IFAL · 2026.1
**Duração-alvo:** ~12–14 min
**Tom:** apresentador(a) humano(a) conduz; o **Duo** aparece na tela como guia/mascote (em 3ª pessoa, fala *sobre* o Duolingo). Leveza com ironia, mas a tese é séria: *um app lindo pode ser inacessível.*
**Navegação:** `→`/espaço avança · `←` volta · `T` sumário · `F` tela cheia · clicar num cartão de opção também avança.

> Legenda: 🎤 = fala sugerida · 🖱️ = ação na tela · 💡 = nota pro apresentador

---

## Slide 1 — Capa: equipe + sumário
🎤 "Boa noite! Somos o grupo [nomes], e hoje a gente vai avaliar a **acessibilidade do Duolingo** — pela WCAG 2.1, na versão **desktop**. O roteiro é esse aqui: o que é o Duolingo, o que é a WCAG, como avaliamos, os problemas que achamos, o que os usuários dizem, e no fim um leitor de tela na prática."
💡 Apresente cada integrante rapidamente. Cada um é um "personagem" do Duolingo. 🖱️ COMEÇAR.

## Slide 2 — Abertura "Dois olhares" (splash)
🎤 "Antes de qualquer coisa, olhem essa tela. À esquerda, o Duolingo como **a gente** vê: colorido, o Duo, os botões, os corações. À direita, o **mesmo** app como um leitor de tela 'enxerga': 'imagem sem descrição', 'botão', 'botão'… vazio. **Bonito pra uns. Invisível pra outros.** É disso que a gente vai falar."
💡 Deixe a tela respirar 3–4s antes de falar — o contraste fala sozinho. 🖱️ COMEÇAR.

## Slide 3 — O que é o Duolingo? (versão desktop)
🎤 "Pra nivelar: o Duolingo é o app de idiomas mais usado do mundo — **mais de 100 milhões** de usuários ativos por mês. É gamificado (ofensiva, XP, ligas, vidas) e tem um **design premiado**. Tem app de celular, mas existe **também no navegador**, em duolingo.com — e é justamente a **versão desktop** que a gente avaliou."
💡 Bata na palavra *premiado* e no escopo *desktop* — os dois voltam depois.

## Slide 4 — Você usa? (enquete)
🎤 "Primeira pergunta, levantem a mão: quem aqui **usa** o Duolingo? Todo dia? Já usou e largou? Só conhece?"
🖱️ Clique na opção que a maioria responder — o cartão acende e avança.

## Slide 5 — É bem desenhado? (enquete)
🎤 "Segunda pergunta: quem acha que o Duolingo é **bonito e bem feito**?" (espera as mãos) "Pois é — quase todo mundo. Segura essa resposta."
🖱️ Selecionar e avançar.

## Slide 6 — O porém (a virada)
🎤 "E é aqui que vem o porém. O Duolingo é bonito **e** super bem pensado. Mas tem uma coisa que quase ninguém percebe: **lindo de ver, difícil de usar** pra quem tem deficiência. Por trás da interface premiada existem dezenas de barreiras de acessibilidade. Bora encontrá-las."
🖱️ BORA VER.

## Slide 7 — Quem depende de acessibilidade?
🎤 "Mas quem depende disso? Pessoas **cegas**, que usam leitor de tela como VoiceOver e NVDA. Pessoas com **baixa visão**, que precisam de contraste e texto legível. Pessoas **surdas**, e pessoas com **deficiência motora**, que navegam só pelo teclado. Acessibilidade não é detalhe — pra essas pessoas, decide se dá ou não pra usar."

## Slide 8 — WCAG: os 4 princípios (P.O.C.R.)
🎤 "Pra medir isso existe um padrão internacional: a **WCAG**, do W3C. Quatro princípios — o conteúdo tem que ser **Perceptível, Operável, Compreensível e Robusto**. Todo critério cai num desses quatro."
💡 (Se quiser citar o relatório:) "Surgiu em 1999, virou referência com a 2.0 em 2008 — base do **eMAG** no Brasil — e usamos a **2.1, de 2018**."

## Slide 9 — Níveis A / AA / AAA
🎤 "Três níveis de conformidade. **A** é o mínimo — falhar aqui **bloqueia** o acesso de alguém. **AA** é o recomendado, exigido pela maioria das leis. **AAA** é o avançado. A WCAG 2.1 tem 13 diretrizes e **78 critérios** — 17 a mais que a 2.0, pra cobrir **celular, baixa visão e deficiência cognitiva**. O padrão real é cumprir **A + AA**."

## Slide 10 — eMAG
🎤 "No Brasil ainda temos o **eMAG**: 45 recomendações, baseado na WCAG, **obrigatório** pros sites do governo. O Duolingo é privado, então não é obrigado — mas o eMAG serve de referência de boa prática."

## Slide 11 — Metodologia (3 frentes)
🎤 "Como a avaliação foi feita? Três frentes: **checklist manual** (acessoparatodos), a ferramenta **WAVE** da WebAIM, e **pesquisa** com relatos de usuários reais. Quando as três apontam o mesmo problema, não é coincidência — é barreira de verdade."

## Slide 12 — Resultado: 3,3 / 10
🎤 "E o resultado do WAVE no Duolingo foi… **3,3 de 10**. Conformidade muito baixa. Foram **46 erros**, **20** de contraste, 5 alertas e 83 itens de ARIA. E o mais grave: a maioria é **nível A** — o mínimo. Repara na barrinha de vidas: é mais ou menos como a gente se sente vendo isso."
💡 Pausa pro número '3,3' impactar. 🖱️ VER OS PROBLEMAS.

## Slide 13 — Imagens sem texto alternativo (1.1.1 · A · 43×)
🎤 "Primeiro problema, o mais crítico: **43 imagens sem atributo alt**. Pra quem usa leitor de tela, esse conteúdo simplesmente **não existe**. E ainda há 2 imagens que são **links** sem descrição — o leitor não sabe nem pra onde vai. Correção: alt descritivo nas informativas, `alt=""` nas decorativas."

## Slide 14 — Contraste baixo (1.4.3 · AA · 20×)
🎤 "**20 textos** não atingem o contraste mínimo de 4,5 pra 1. Quem tem baixa visão, daltonismo, ou tá no sol, não consegue ler. Correção direta: ajustar as cores e checar no WebAIM Contrast Checker."
💡 (Bônus WCAG 2.1:) "Pela 2.1 ainda entra o **1.4.11**: ícones de vida, XP e streak também precisam de 3:1 nas bordas."

## Slide 15 — Botão de fechar lição sem rótulo (3.3.2 / 4.1.2 · AA)
🎤 "Esse é meu favorito de tão sério. Na tela de lição, o **'X' de fechar não tem rótulo** — nem texto, nem aria-label. O leitor anuncia só: 'botão'. Imagina: você errou, perdeu uma vida, navega no teclado e aperta o tal 'botão'… e **abandona a lição inteira**. Correção: `aria-label="Fechar lição"` e o ícone com `aria-hidden`."

## Slide 16 — Telas de atividade (3.7 / 3.8 / 3.9 · A) 🆕
🎤 "E quando rodamos o WAVE **dentro** da lição, apareceram mais três:
1. **Sem regiões de página** — não tem `<main>` nem `<nav>`, então o leitor é obrigado a percorrer cabeçalho, barra de XP e vidas **a cada questão**.
2. A **barra de progresso** tem `aria-label='Day'` e o valor é um decimal tipo `0.0138` — ninguém entende 'zero vírgula zero um' lido em voz alta. O certo seria 'Questão 2 de 15'.
3. As opções erradas ficam `aria-disabled` mas **ainda recebem foco**, e o grupo se chama só 'choice'. Confuso e sem feedback de acerto/erro."

## Slide 17 — Links e alt redundantes (2.4.4 / 1.1.1 · A)
🎤 "Dois problemas menores, mas que incomodam: um **alt repetindo** o texto que já está do lado (eco duplo pro leitor de tela) e dois **links diferentes apontando pro mesmo lugar**. Solução: `alt=""` quando já tem texto, e consolidar os links."

## Slide 18 — ARIA e tabindex (4.1.2 / 2.4.3 · A)
🎤 "A parte técnica: **24 'botões' que na verdade são `<div>`** marcados com ARIA — podem nem receber foco pelo teclado. Mais **24 `tabindex`** mexendo na ordem, e **26 aria-labels** pra auditar um a um. Regra de ouro: usar `<button>` de verdade; ARIA é remendo, não atalho."

## Slide 19 — A trilha do Duolingo
🎤 "Aquela trilha de lições linda? Cada bolinha é uma **imagem sem alt** e cada nó é uma **`div`** fingindo ser botão. O elemento mais icônico do app é, ao mesmo tempo, um dos mais inacessíveis. Por isso foi nosso ponto de partida."

## Slide 20 — Mapeamento por princípio WCAG
🎤 "Organizando pelos quatro princípios: em **Perceptível**, imagens e contraste; em **Operável**, tabindex, links e a falta de regiões nas atividades; em **Compreensível**, o botão sem rótulo; e em **Robusto**, os ARIA buttons, a progressbar e o aria-disabled. A concentração em Perceptível e Robusto mostra: o maior prejudicado é quem usa **leitor de tela**."

## Slide 21 — O que dizem os usuários reais (galeria)
🎤 "E não é teoria nossa. Usuários reais dizem o mesmo, em todo canto: no **Twitter/X**, no **Reddit** e até no **fórum oficial** do próprio Duolingo — 'não funciona com leitor de tela', 'as imagens não têm rótulo', 'o botão é anunciado só como botão'. Tem até vídeo no YouTube sobre isso. Os três caminhos — ferramenta, checklist e pessoas — apontam pro mesmo lugar."
💡 🖱️ Aponte cada print conforme fala. (Trocar os placeholders pelos recortes reais antes da defesa.)

## Slide 22 — Leitor de tela no celular (vídeo) 🆕
🎤 "Chega de teoria — olha como é **de verdade**. Um colega do grupo gravou a tela navegando no Duolingo com o **leitor de tela** ligado. Reparem nos 'botão… botão… imagem' sem descrição, e na dificuldade de saber **onde está** e o que foi **acertado**. É exatamente o que o WAVE apontou — agora **vivido**."
🖱️ Dê play no vídeo. 💡 Deixe o vídeo falar; comente só os pontos-chave. (Inserir o arquivo `images/leitor-celular.mp4`.)

## Slide 23 — Conclusão e prioridades
🎤 "Concluindo: o Duolingo desktop tira **3,3 de 10**, e a maioria das falhas é nível A. As prioridades, em ordem: (1) alt nas 43 imagens; (2) corrigir os 20 contrastes; (3) rótulo no botão de fechar; (4) trocar ARIA por HTML semântico; (5) regiões `<main>/<nav>` nas atividades; (6) progressbar legível e aria-disabled sem foco. Nada disso é difícil — é questão de **prioridade**."
🖱️ CONCLUIR.

## Slide 24 — Concluído! (encerramento)
🎤 "O Duolingo é prova de que **design bonito e acessibilidade não são a mesma coisa** — e que dá pra ter os dois. Por enquanto, ele ganhou +0 XP de acessibilidade… mas, como todo mundo aqui sabe, é só manter a ofensiva. 😄 Obrigado! Perguntas?"

---

## Pendências de produção (assets)
- [ ] **Slide 1:** trocar "Membro 1..4" pelos nomes reais (e ajustar a quantidade de cartões em `index.html`).
- [ ] **Slide 21:** capturar os prints reais (Twitter/X, Reddit, fórum oficial) e trocar cada `.media-ph` por `<img>`.
- [ ] **Slide 22:** gravar o vídeo do leitor de tela no celular e inserir como `images/leitor-celular.mp4` (trocar o bloco `.video-ph` pelo `<video class="screen-vid">`).
- [ ] **Revisão dos problemas (slides 13–20):** conferir números e critérios contra o relatório final antes da defesa.
- [ ] Publicar no GitHub Pages quando os assets estiverem prontos.
