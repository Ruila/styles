import { MasterStyle } from '@master/style';
import { BREAK, DASH, INSIDE } from './constants/css-property-keyword';

export class BreakInsideStyle extends MasterStyle {
    static override prefixes =  /^break-inside:/;
    static override properties = [BREAK + DASH + INSIDE];
}