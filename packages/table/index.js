import FsTable from './src/table';

/* istanbul ignore next */
FsTable.install = function(Vue) {
  Vue.component(FsTable.name, FsTable);
};

export default FsTable;
