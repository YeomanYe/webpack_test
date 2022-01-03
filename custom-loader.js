function customLoader(source, sourceMap, state) {
    console.log(...arguments);
    // this.callback(new Error('错误测试'));
    this.callback(null, source, sourceMap);
    return ;
}
customLoader.pitch = function () {
    console.log('customrLoaer1 pitch trigger', ...arguments);
    return '.root{background: #000;}';
};

module.exports = customLoader;