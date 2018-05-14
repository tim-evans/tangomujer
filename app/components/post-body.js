import RenderMobiledoc from './render-mobiledoc';

export default RenderMobiledoc.extend({
  cardNameToComponentName(name) {
    return 'post-cards/' + name;
  }
})