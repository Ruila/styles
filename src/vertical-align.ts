import { ALIGN, DASH, VERTICAL } from './constants/css-property-keyword';
import { Style } from '@master/style';

export class VerticalAlignStyle extends Style {
    static override matches =  /^v:./;
    static override key = VERTICAL + DASH + ALIGN;
}