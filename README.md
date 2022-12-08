# cronometo-v1

Pequeno projeto de um cronômetro usando o básico do básico de javascript.

Minha maior "dificuldade" criando esse script foi o simples fato de querer colocar um zero a esquerda de cada número abaixo de 10.

Tentei usando uma arrow function passando como parâmetros a variável que continha os valores de segundos ou de minutos e adicionar os zeros usando for
mas voltei atrás pois não saiu como eu esperava e deixou muito "grande".

Então simplesmente coloquei um if na mesma variável em que crio os <options> de minutos e segundos, responsável por essa verificação, abandonando a ideia 
dos segundos não terem "00", pois isso acarretava em -1 quando clicava no play.

Mas pra resolver isso eu coloquei outra verificação, agora no próprio serInterval, que caso os segundos fossem igual a 0 apenas tocasse o áudio.




# Tentarei de agora em diante descrever um pouco do que fiz em cada projeto novo, mesmo que pequeno.
# Obrigado a você que esteja lendo isso até aqui, ainda sou muito iniciante, mas se estiver lendo no final de contas isso significa muito pra mim.
