const compiler = require('marko/compiler');

module.exports = {
  process(src, filepath) {
    const compiledSrc = compiler.compileFile(filepath);
    return compiledSrc;
  }
};
