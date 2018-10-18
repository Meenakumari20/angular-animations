import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation, group } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces'

const zoomOutLeft = animation(group([
  animate(
    '{{duration}}ms',
    keyframes([
      style({ opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)', easing: 'ease', offset: 0.4 }),
      style({ opacity: 0, transform: 'scale3d(0.1, 0.1, 0.1) translate3d(-2000px, 0, 0)', easing: 'ease', offset: 1 }),
    ])
  ),
  animate(
    '{{duration}}ms',
    keyframes([
      style({'transform-origin': 'center center', offset: 0 }),
      style({'transform-origin': 'left center', offset: 0.4 }),
    ])
  ),
]));

const DEFAULT_DURATION = 1000;

export function zoomOutLeftAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger(options && options.anchor || 'zoomOutLeft', [
    transition(
      '0 <=> 1',
      [
        useAnimation(zoomOutLeft, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION
        }
      })]
    )
  ]);
}