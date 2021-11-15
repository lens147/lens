// on creer un tableau vide
let menfou;

function generateTicket(place, nombre) {
    console.log(place);
    console.log(nombre);
    let ticket = [];
    // on defin que l'on veut 10 nombres aleatoires
    for(i=0; i<place; i++)
    {
        // on genere un nombre aleatoire entre 1 et 50
        let numbers = Math.ceil(Math.random() * nombre);

        //on verfie si il y a un correspondance avec 
        //les nombres que l'on a deja
        //si c'est le cas c'est egal a true donc on retire ce nombre
        //et on decremente pour en rajouter un nouveau
        if(ticket.includes(numbers) == true) {
            i--;
        }
        //on verfie si il y a un correspondance avec 
        //les nombres que l'on a deja
        //si ce n'est pas le cas c'est egal a false donc on ajoute ce nombre
        //et on cremente pour arriver a 10 nombres
        else if(ticket.includes(numbers) == false){
            ticket.push(numbers);
        }
        
    }
    return ticket;
};


menfou = generateTicket(12, 60);
console.log(menfou);