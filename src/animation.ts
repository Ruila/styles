import { ANIMATION } from './constants/css-property-keyword';
import { MasterStyle } from '@master/style';

export class AnimationStyle extends MasterStyle {
    static override prefixes =  /^animation:/;
    static override symbol = '*'; 
    static override properties = [ANIMATION];
}