import FsButton from './src/button';

/* istanbul ignore next */
FsButton.install = function(Vue) {
  Vue.component(FsButton.name, FsButton);
};

export default FsButton;
