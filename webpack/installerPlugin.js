const path = require('path');
const fs = require('fs/promises');

class InstallerPlugin {
  apply(compiler) {
    compiler.hooks.done.tapAsync('InstallerPlugin', async (stats, next) => {
      let dest = process.env['SERVER_DEST'];
      if (!dest) {
        console.error('SERVER_DEST environment variable is not set, skipping installation.');
        next();
        return;
      }

      let comp = stats.compilation;
      let outPath = comp.outputOptions.path;
      let assets = [...comp.emittedAssets.values(), ...comp.comparedForEmitAssets.values()]

      // NOTE: it assumes there's only one asset, the js bundle
      let bundlePath = path.resolve(outPath, assets[0]);

      await fs.cp(bundlePath, dest);
      console.log(`Copied bundle to ${dest}`);

      next();
    });
  }
}

module.exports = InstallerPlugin;
