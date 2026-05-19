const StyleDictionary = require('style-dictionary').default;

const sd = new StyleDictionary({
  source: ['orbit-typography-tokens.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/css/',
      files: [{
        destination: 'typography.css',
        format: 'css/variables'
      }]
    }
  }
});

sd.buildAllPlatforms();
console.log('✅ Typography tokens transformed successfully!');
