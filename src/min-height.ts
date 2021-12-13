import { MIN_HEIGHT } from './constants/css-property-keyword';
import { MasterStyle } from '@master/style';

export class MinHeightStyle extends MasterStyle {
    static override prefixes =  /^min-h:/;
    static override properties = [MIN_HEIGHT];
}