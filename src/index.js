import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './style/var.scss'
import './style/1px.scss'

Vue.use(MintUI)

//单个组件
import FsButton from '../packages/button/index.js';

//模块级组件（每个项目可能都不一样）
import cockpit from './itemsModules/cockpit';


const components = [
  FsButton,
  ...Object.values(cockpit)
];


const install = function(Vue, opts = {}) {

  components.forEach(component => {
    Vue.component(component.name, component);
  });

};

// console.log(321)
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

// module.exports = {
//   version: '1.0.3',
//   install,
// };

// module.exports.default = module.exports;

export default{
  version: '1.0.3',
  install,
  FsButton,
  ...Object.values(cockpit)
}
