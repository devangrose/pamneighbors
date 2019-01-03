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

toExport = toExport.concat(mensHairLoss, mensAlopecia, transplant, womensHairLoss, womensAlopecia, eyebrows, threeDEyebrows, eyeliner, lips);


export default toExport;
