let a = prompt("nombre");
let b = prompt("operator");
let c = prompt("deuxieme nombre");
function add(un, deux){
    a = parseInt(a), c = parseInt(c);
    if (b == "+"){
        return a+c;
    }
    else if (b == "-"){
        return a-c;
    }
    else if (b == "*"){
        return a*c;
    }
    else if (b == "/"){
        return a/c;
    }
    else
        return "essayer avec des operator valide";
}
    console.log(add(a, b, c));

