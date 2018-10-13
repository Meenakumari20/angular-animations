import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces'

const bounce = animation([
  animate(
    '{{duration}}ms',
    keyframes([
      style({transform: 'translate3d(0, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0  }),
      style({transform: 'translate3d(0, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.2  }),
      style({transform: 'translate3d(0, -30px, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.4  }),
      style({transform: 'translate3d(0, -30px, 0)', easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)', offset: 0.43  }),
      style({transform: 'translate3d(0, 0, 0)', easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)', offset: 0.53  }),
      style({transform: 'translate3d(0, -15px, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.7  }),
      style({transform: 'translate3d(0, 0, 0)', easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)', offset: 0.8  }),
      style({transform: 'translate3d(0, -4px, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.9  }),
      style({transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1  })
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function bounceAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger(options && options.anchor || 'bounce', [
    transition(
      '0 <=> 1',
      [
        style({  'transform-origin': 'center bottom' }),
        useAnimation(bounce, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION
        }
      })]
    )
  ]);
}
