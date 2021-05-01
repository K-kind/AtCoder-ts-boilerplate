require('esbuild')
  .build({
    target: 'es2015',
    platform: 'node',
    entryPoints: ['src/main.prod.ts'],
    outdir: 'dist',
    bundle: true,
    // minify: true,
    sourcemap: false,
  })
  .catch(error => {
    console.error(JSON.stringify(error, null, 2));
  })
  .then(_event => {
    console.log('============================');
    console.log('Compile start... ', new Date().toLocaleDateString());
  });
