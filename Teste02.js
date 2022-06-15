var arrFiboSequency = []

function Fibonacci(n){
    let n1 = 0
    let n2 = 1
    let n3 = 0
    for(let i = 0;n3 < 10000; i++ ){
        n3 = n1 + n2
        arrFiboSequency.push(n3)
        n1 = n2
        n2 = n3
        console
    }
     if(arrFiboSequency.includes(n) == true){
        console.log(`${n} pertence a sequência de Fibonacci`)
     }else{
        console.log(`${n} não pertence a sequência de Fibonacci`)
     }
}

// insira entre os parenteses o número a ser verificado
Fibonacci(4)