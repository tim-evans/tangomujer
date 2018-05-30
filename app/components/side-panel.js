import Component from '@ember/component';
import { setProperties, set } from '@ember/object';
import RSVP from 'rsvp';
import { fadeIn, fadeOut } from 'ember-animated/motions/opacity';
import move from 'ember-animated/motions/move';
import { easeIn, easeOut } from 'ember-animated/easings/cosine';

export default Component.extend({
  tagName: '',

  named: 'side-panel',

  /**
    `ondismiss` is triggered when the dialog is dismissed.
    The action taken by this handler should remove the
    `{{dialog-box}}` component from the page.

    @event ondismiss
   */
  ondismiss: null,

  didReceiveAttrs() {
    let send = {
      className: this.named,
      dismiss: this.ondismiss
    };

    // Set properties when `component` is set to prevent
    // a reanimation of the side panel
    if (this.send && this.send.component) {
      setProperties(this, 'send', send);
    } else {
      send.component = this.component;
      set(this, 'send', send);
    }
  },

  *fadeIn({ insertedSprites, removedSprites }) {
    if (insertedSprites.length) {
      yield RSVP.all(insertedSprites.map(fadeIn)).then(() => {
        document.body.classList.add('drawer-open');
      });
    }
    if (removedSprites.length) {
      yield RSVP.all(removedSprites.map(fadeOut)).then(() => {
        document.body.classList.remove('drawer-open');
      });
    }
  },

  *show({ insertedSprites, removedSprites }) {
    yield RSVP.all(insertedSprites.map((sprite) => {
      sprite.startAtPixel({ x: window.innerWidth });
      return move(sprite, { easing: easeOut });
    }));
    yield RSVP.all(removedSprites.map((sprite) => {
      sprite.endAtPixel({ x: window.innerWidth });
      return move(sprite, { easing: easeIn });
    }));
  }

}).reopenClass({
  positionalParams: ['component']
});
