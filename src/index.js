//单个组件
import Input from '../packages/input/index.js';


//模块级组件（每个项目可能都不一样）
import example from './itemsModules/example';


const components = [
  Input,
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
//   Input,
// };

// module.exports.default = module.exports;

export default{
  version: '0.0.1',
  install,
  Input,
  ...Object.values(example)
}
