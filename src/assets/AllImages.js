import mensHairLoss from './mens-hairloss.js';
import mensAlopecia from './mens-alopecia.js';
import transplant from './mens-transplant.js';
import womensHairLoss from './women-hairloss.js';
import womensAlopecia from './women-alopecia.js';
import eyebrows from './eyebrows.js';
import threeDEyebrows from './3deyebrows.js';
import eyeliner from './eyeliner.js';
import lips from './lips.js';

let toExport = [];

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

toExport = toExport.concat(mensHairLoss, mensAlopecia, transplant, womensHairLoss, womensAlopecia, eyebrows, threeDEyebrows, eyeliner, lips);

toExport = shuffle(toExport);


export default toExport;
