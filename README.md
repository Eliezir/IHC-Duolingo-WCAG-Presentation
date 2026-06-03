# Avaliação de Acessibilidade do Duolingo — WCAG 2.1

Apresentação interativa (slides em HTML/CSS/JS puro) da avaliação de acessibilidade do **Duolingo (versão desktop)** segundo as diretrizes **WCAG 2.1**, feita para a disciplina de **Interação Humano-Computador (IHC)** do **IFAL**.

🔗 **Apresentação ao vivo:** https://eliezir.github.io/IHC-Duolingo-WCAG-Presentation/

## Sobre

O deck é desenhado como um *onboarding do Duolingo*: abre com uma busca no Google por "duolingo", um *loader* no estilo do app e a capa — e segue para a equipe, o sumário em formato de **trilha**, a introdução à WCAG, a metodologia (checklist manual, **WAVE** e pesquisa com usuários), os problemas encontrados e os relatos de usuários reais.

A tese central: *um app bonito e premiado não é, necessariamente, acessível.*

## Como navegar

| Tecla | Ação |
|-------|------|
| `→` / `Espaço` | Avançar |
| `←` | Voltar |
| `T` | Sumário (índice) |
| `F` | Tela cheia |

Clicar nos cartões de opção também avança. No primeiro slide, **clique na caixa de busca** para iniciar a animação de abertura.

## Tecnologias

HTML, CSS e JavaScript puro — sem frameworks. Tema inspirado no design do Duolingo (cores oficiais, fonte Nunito, trilha de lições, tema claro).

## Equipe

- Eliezir
- Raphael
- Maryane

## Estrutura

```
index.html        # slides
css/theme.css     # tema (cores, componentes, animações)
js/engine.js      # engine de navegação
js/intro.js       # intro cinemática (Google → loader → capa)
images/           # avatares, gifs e screenshots
roteiro.md        # roteiro fala-a-fala da apresentação
```

---

IHC · IFAL · 2026.1
