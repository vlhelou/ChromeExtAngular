# ChromeExtAngular
Código que cria uma extensão no chrome para inserir um botão para um contexto específico de uma aplicação SPA, no caso angular

## Projetos
### Extensão
código específico da extensão, que detecta se um input aparecer na tela, e quando esse input aparece,
é inserido um botão que aciona um botão que consulta uma api, e altera o resultado do referido input

### Api
código em c# simples que retorna um valor simples

### SPA
página simples em angular, que de acordo com algumas opções, mostra inputs, e se a opção 2 for escolhida, assim sim o extensão excuta o código
