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

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

toExport = toExport.concat(mensHairLoss, mensAlopecia, transplant, womensHairLoss, womensAlopecia, eyebrows, threeDEyebrows, eyeliner, lips);

shuffleArray(toExport);

export default toExport;
