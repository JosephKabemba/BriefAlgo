let texte =  `Bonjour tout le monde,je suis Christian Lisangola,développeur logiciels à Kinshasa Digital. Mon numéro de téléphone est le +243840964176 qui un numéro vodacom,et mon adresse email privé est le christian.lisangola@gmail.com. Par le passé j'ai eu à utiliser d'autres numéros de téléphones à l'instar d'un numéro Airtel qui fut le +243971151294 mais qui ne passe plus je suppose et aussi un numéro Tigo,le +243895602911. Ici à Kinshasa Digital,j'utilise une adresse mail d'entreprise qui est le christian@kinshasadigital.com.`;

texte = texte.split(/[ ,']/);


const supprimerLePoint = (tableauNumero)=>{
    for(let i = 0; i < tableauNumero.length; i++){
        if(tableauNumero[i].endsWith('.')){
            tableauNumero[i] = tableauNumero[i].slice(0, tableauNumero[i].length-1);      
        }
    }
};

//1. Trouver le nombre des adresses et les lister
const listDesEmails = texte.filter(mot => /\w.\.?\w?@\w.\.?\w./i.test(mot));
supprimerLePoint(listDesEmails);
const nombreDesEmails = listDesEmails.length;

console.log('1. Trouver le nombre des adresses et les lister');
console.log(('-----------------------------------------------'))
console.log('* Nombre d\'emails: ' + nombreDesEmails);
console.log('* Liste des emails :');
listDesEmails.forEach(email => console.log('\t' + email));


//2.Trouver le nombre de numéros de téléphone et les lister
const listDesNumerosTelephone = texte.filter(mot => /\+243\d{9}/.test(mot));
supprimerLePoint(listDesNumerosTelephone)
const nombreDesNumero = listDesNumerosTelephone.length;

console.log('\n2. Trouver le nombre de numéros de téléphone et les lister');
console.log(('---------------------------------------------------------'))
console.log('* Nombre de numéros: ' + nombreDesNumero);
console.log('* Liste des numéros :');
listDesNumerosTelephone.forEach(numero => console.log('\t' + numero));



//3.Liste des numéros Vodacom
const numerosVodacom = listDesNumerosTelephone.filter(numero => /\+2438[12]\d{7}/.test(numero))
console.log("\n3. Numéros Vodacom : ");
console.log('-------------------')
numerosVodacom.forEach(numero => console.log('\t' + numero));


//4. Liste des numéros Tigo
const numerosTigo = listDesNumerosTelephone.filter(numero => /\+24389\d{7}/.test(numero));
console.log("\n4. Numéros Tigo : ");
console.log('-----------------')
numerosTigo.forEach(numero => console.log(numero))

//5. Liste des numéros Orange
const numerosOrange = listDesNumerosTelephone.filter(numero => /\+2438[45]\d{7}/.test(numero));
console.log("\n4. Numéros Orange : ");
console.log('-----------------');
numerosOrange.forEach(numero => console.log(numero));

//6. Adresses de messageries professionnelles
const emailsProfessionnels = listDesEmails.filter(email => ! email.includes('gmail'));
console.log("\n4. Adresses email professionnels : ");
console.log('--------------------------------');
emailsProfessionnels.forEach(email => console.log(email));

//7. Adresses de messageries privées
const emailsPrives = listDesEmails.filter(email => email.includes('gmail'))
console.log("\n4. Adresses email privés : ");
console.log('---------------------------');
emailsPrives.forEach(email => console.log(email));


/*8. Nombre total des mots sans compter :
    - Les adresses emails
    - Les numéros de téléphones
    - Les articles
    - Les prépositions
    - Les pronoms personnels
    - Les pronoms relatifs
*/

const nombreDesMots = texte.filter(mot => !/^[djlà]$|^le$|^de$|^qui$|\+243\d{9}|\w.\.?\w?@\w.\.?\w./i.test(mot)).length;
console.log('\nNombre total de mots: ' + nombreDesMots);







