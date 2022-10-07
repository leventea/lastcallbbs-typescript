import typescript from '@rollup/plugin-typescript';
import { cp } from 'fs/promises';

const hooks = {
  // got the idea from https://gist.github.com/mtone/c7cb55aaaa2c2702d7b1861d7e2fdbd8
  // deletes the exports from the bundle
  async renderChunk(bundle) {
    const code = bundle.replace(/^export.*/gm, "");
    return { code, map: null };
  },
  async writeBundle(options, bundle) {
    let dest = process.env['SERVER_DEST'];
    if (!dest) {
      console.error('SERVER_DEST environment variable is not set, skipping installation.');
      return;
    }

    // we assume there's only one bundle
    let b = Object.values(bundle)[0];
    cp(b.fileName, dest);
    console.log(`Copied bundle to ${dest}`);
  }
};

export default {
  input: 'src/index.ts',
  output: {
    file: 'bundle.js',
    format: 'es',
    generatedCode: 'es5'
  },
  plugins: [
    typescript(),
    hooks
  ]
};
