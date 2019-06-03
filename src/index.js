import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

//单个组件
import FsInput from '../packages/input/index.js';
import FsTable from '../packages/table/index.js';
import FsButton from '../packages/button/index.js';

//模块级组件（每个项目可能都不一样）
import example from './itemsModules/example';


const components = [
  FsInput,
  FsTable,
  FsButton,
  ...Object.values(example)
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
//   version: '0.0.1',
//   install,
//   FsInput,
// };

// module.exports.default = module.exports;

export default{
  version: '1.0.1',
  install,
  FsInput,
  FsTable,
  FsButton,
  ...Object.values(example)
}
