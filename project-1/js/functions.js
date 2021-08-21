function soma(a, b) {
    return a + b;
}

// console.log(soma(2, 3));
// console.log(soma(10, 7));

var quadrado = function (numero) {
    return numero * numero;
}

// console.log(quadrado(5));

var fatorialTernario = function fac(n) {
    return n < 2 ? 1 : n * fac(n-1);
}

var fatorialNaoTernario = function fac(n) {
    if (n < 2) {
        return 1;
    } else {
        return n * fac(n-1);
    }
}

// console.log(fatorialTernario(3));
// console.log(fatorialNaoTernario(3));


function getScore(num1, num2) {
    soma(num1, num2);

    function printar() {
        console.log("Os numeros são: " + num1 + ", " + num2);
    }

    return printar
}


printar();