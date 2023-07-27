
/*ATIVIDADE SOFTEX
Faça uma função calculadora de dois números com três parâmetros: os dois primeiros serão os números da operação e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:
1. Soma
2. Subtração
3. Multiplicação
4. Divisão

Caso seja inserido um número de operação que não exista, o resultado deverá ser 0.*/


//Calculadora com operador CORRETO
function resultadoOperacao(numero1,numero2, operador){
    switch (operador) {
        case '+':
            return numero1 + numero2

        case '-':
            return numero1 - numero2
        
        case '*':
            return numero1 * numero2
            
        case '/':
            return numero1 / numero2
 
        default:
            return "0"
        
    }
 }
     console.log(resultadoOperacao(2,4,'*'))
 
     
//Calculadora com operador INCORRETO (retorna 0)
function resultadoOperacao(numero1,numero2, operador){
    switch (operador) {
        case '+':
            return numero1 + numero2

        case '-':
            return numero1 - numero2
        
        case '*':
            return numero1 * numero2
            
        case '/':
            return numero1 / numero2
 
        default:
            return "0"
        
    }
 }
     console.log(resultadoOperacao(2,4,'ç'))