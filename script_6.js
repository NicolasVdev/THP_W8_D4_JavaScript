const arn1 = "CCGUCGUUGCGCUACAGC";
const arn2 = "CCUCGCCGGUACUUCUCG";

const codonsArray = [];

for (let i = 0; i < arn1.length; i += 3) {
  const codon = arn1.slice(i, i + 3);
  codonsArray.push(codon);
}

for(let i in codonsArray){
    switch (codonsArray[i]){
        case "UCU": case "UCC": case "UCA": case "UCG": case "AGU": case "AGC" :
            codonsArray[i] = "Sérine";
            break;
        case "CCU": case "CCC": case "CCA": case "CCG":
            codonsArray[i] = "Proline";
            break;
        case "UUA": case "UUG":
            codonsArray[i] = "Leucine";
            break;
        case "UUU": case "UUC":
            codonsArray[i] = "Phénylalanine";
            break;
        case "CGU": case "CGC": case "CGA": case "CGG": case "AGA": case "AGG":
            codonsArray[i] = "Arginine";
            break;
        case "UAU": case "UAC":
            codonsArray[i] = "Tyrosine";
            break;
        default:
            console.log("Cette entrée n'est pas reconnue");
        break;
    }
}

console.log("Voici la séquence de protéines correspondante: ");
finalString = codonsArray.join("-")
console.log(finalString)