# Mini BuzzFeed Quiz


Um quiz de personalidade simples e moderno, inspirado no estilo do BuzzFeed, que determina o perfil dominante do usuário com base em 5 perguntas. Desenvolvido com Angular 22.x e Node.js 22.x.

![image](https://github.com/user-attachments/assets/a2f37e9b-d6d1-490d-85ff-6d2b75b05a4f)

## Descrição
Este projeto é um quiz de personalidade que avalia 5 traços (Abertura a Experiências, Conscienciosidade, Extroversão, Amabilidade e Neuroticismo) com uma pergunta por perfil. O usuário responde em uma escala de 1 a 5 ("Nada" a "Muito"), e o resultado exibe o perfil dominante com um comentário no estilo de Jordan B. Peterson. O design é clean e moderno, com botões circulares e um layout roxo.
## Funcionalidades
5 perguntas, uma por perfil de personalidade.

Escala de 1 a 5 com rótulos claros ("Nada", "Pouco", "Neutro", "Bastante", "Muito").

Resultado final exibe o perfil dominante (ex.: "Abertura a Experiências") e um comentário.

Botão "Realizar o Teste Novamente" para reiniciar o quiz.

Design moderno com botões circulares, bordas verdes neon e fundo roxo.

## Tecnologias Utilizadas
Angular 22.x: Framework para o front-end.

Node.js 22.x: Ambiente de execução.

CSS: Estilização com layout centralizado e design responsivo.

## Como Executar
Clone o repositório: https://github.com/MeloRods/DecolaTech-Mini-Buzzfeed.git

Instale as dependências. Inicie o servidor e acesse o quiz em http://localhost:4200.

## Estrutura do Projeto
src/app/services/quiz.service.ts: Gerencia as perguntas, respostas e resultados.

src/app/components/quiz/quiz.component.ts: Controla a lógica do quiz (navegação, seleção de respostas, reinício).

src/app/components/quiz/quiz.component.html: Template do quiz com perguntas e resultados.

src/app/components/quiz/quiz.component.css: Estilos dos botões, rótulos e layout.

src/styles.css: Estilos globais (fundo roxo, tipografia).

## Exemplos

![image](https://github.com/user-attachments/assets/a4d91512-95e0-4788-8a87-9fc4c528284f)


### Dificuldade Encontrada
Design Inicial dos Botões: Os botões tinham tamanhos inconsistentes e rótulos confusos, o que foi ajustado para um layout mais coeso com botões circulares e rótulos claros ("Nada" a "Muito").


Autor
Feito por Rodrigo Melo como um projeto de aprendizado em Angular.

