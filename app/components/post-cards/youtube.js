import Component from '@ember/component';
import { computed, get } from '@ember/object';
import { bind } from '@ember/runloop';

export default Component.extend({

  classNames: ['youtube-card'],

  videoId: computed('payload.url', function () {
    let url = get(this, 'payload.url');
    return (
      url.match(/youtube\.com\/watch\?v=([^/]+)/) ||
      url.match(/youtu.be\/([^/]+)/) ||
      url.match(/youtube\.com\/embed\/([^/]+)/)
    )[1];
  }),

  didInsertElement() {
    this._resize = bind(this, 'didResize');
    window.addEventListener('resize', this._resize);
  },

  willDestroyElement() {
    window.removeEventListener('resize', this._resize);
  },

  didResize() {
    this.notifyPropertyChange('width');
    this.notifyPropertyChange('height');
  },

  aspectRatio: computed('payload.width', 'payload.height', function () {
    return this.payload.height / this.payload.width;
  }),

  width: computed('aspectRatio', function () {
    return this.element.getBoundingClientRect().width - 32;
  }),

  height: computed('aspectRatio', 'width', function () {
    return this.aspectRatio * this.width;
  }),

  origin: computed(function () {
    return window.location.protocol + '//' + window.location.hostname;
  })
});
