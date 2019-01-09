import mensHairLoss from './mens-hairloss.js';
import womensHairLoss from './women-hairloss.js';

let toExport = [];

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

toExport = toExport.concat(mensHairLoss, womensHairLoss);

toExport = shuffle(toExport);


export default toExport;
