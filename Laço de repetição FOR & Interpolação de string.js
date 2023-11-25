/*
Instruções:
Copie e cole o array 'numerosDaSorte', e:
logo em seguida escreva o código necessário para avaliar cada elemento do array
e imprimir uma frase seguindo algum dos seguintes três modelos:

- X é par e menor que 50
- X é menor que 50
- X é maior que 50

ARRAY: numerosDaSorte = [37, 14, 26, 5, 94, 87]
*/

let numerosDaSorte = [37, 14, 26, 5, 94, 87]; //array de numeros

//estrutura de um laço de repetição:
//for let i = NUMERO-QUE-QUER INICIAR O LAÇO; VARIVAVEL INDICE i < array; INCREMENTAR A VARIVAVEL INDEXADORA
for(let i = 0; i < numerosDaSorte.length; i++) {

//PARA PEGAR O ELEMENTO DENTRO DO ARRAY CRIA-SE UMA VARIAVEL E ATRIBUI A ESTA VARIVAVEL O ELEMENTO 
    let elemento = numerosDaSorte[i];
    
//CONDIÇÕES CHECADAS DENTRO DO LAÇO DE REPETICAO
    if (elemento % 2 === 0 && elemento < 50) {
      console.log(`${elemento} numero par e menor que 50`)
  } else if (elemento > 50) {
    console.log(`${elemento} Maior que 50`)
  } else  { 
    console.log(`${elemento} Menor que 50`)
  }
/*PARA EXIBIR O CONTEUDO DE UMA VARIAVEL DENTRO DE UM CONSOLE.LOG USAMOS A INTERPOLAÇÃO
DENTRO DO CAMPO DE TEXTO DO CONSOLE.LOG NORMALMENTE PREENCHIDO COM "ASPAS"
USAMOS A CRASE ` MAIS CIFRÃO $, ABRIMOS CHAVES {, COLOCAMOS O NOME DA VARIAVEL, FECHAMOS CHAVES }
INSERIMOS O TEXTO E FECHAMOS A CRASE `
DESSA FORMA É POSSIVEL INTERPOLAR TEXTOS
*/
}

 