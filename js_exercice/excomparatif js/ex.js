const result = [10, 9, 12, 50, 61];
let ticketrom = [50, 9, 12, 24, 11];
let check = 0;
let match = 0;
for (i = 0; i < result.length; i++) {
    check = result[i];


    for (ti = 0; ti < ticketrom.length; ti++) {
        if (check == ticketrom[ti]){
            match++;
        }
        
        
    }
    
}
console.log(match);