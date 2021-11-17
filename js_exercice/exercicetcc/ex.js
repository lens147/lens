let HorsTaxe = [10,21,12,80,79,44];
let ToutTaxe = [];

let TotalprixHT;
let TotalprixTCC;

let TVA = 1.20;


function tccCacule(ht) {
    

    for (let i = 0; i < ht.length; i++) {
        let nr = ht[i] * TVA;
        ToutTaxe.push(nr);
    }

}

tccCacule(HorsTaxe);

console.log(ToutTaxe);