import { DASH, FONT, STYLE } from './constants/css-property-keyword';
import { Style } from '@master/style';

export class FontStyleStyle extends Style {
    static override matches =  /^f(ont)?:(normal|italic|oblique)(?!;)/;
    static override key = FONT + DASH + STYLE;
    static override unit = 'deg';
}