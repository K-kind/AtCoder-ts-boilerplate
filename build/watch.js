const ncc = require('@vercel/ncc');
const path = require('path');
const inputPath = path.resolve(process.cwd(), process.argv[2]);
const { handler, rebuild, close } = ncc(inputPath, {
  // provide a custom cache path or disable caching
  // cache: "./custom/cache/path" | false,
  // externals to leave as requires of the build
  // externals: ["externalpackage"],
  // directory outside of which never to emit assets
  // filterAssetBase: process.cwd(), // default
  // minify: false, // default
  // sourceMap: true, // default: false
  // sourceMapBasePrefix: '../', // default treats sources as output-relative
  // when outputting a sourcemap, automatically include
  // source-map-support in the output file (increases output by 32kB).
  // sourceMapRegister: true, // default
  watch: true, // default: false
  // license: '', // default does not generate a license file
  // v8cache: false, // default
  // quiet: false, // default
  // debugLog: false // default
});

handler(({ err, code, _map, _assets}) => {
  if (err) return console.error(err);

  try {
    eval(code);
  } catch (e) {
    console.error(e);
  }
});
