const StyleDictionary = require('style-dictionary').default;

const sd = new StyleDictionary({
  source: ['orbit-typography-tokens.json'],
  platforms: {
    // Web (for Grameenphone website)
    css: {
      transformGroup: 'css',
      buildPath: 'dist/web/',
      files: [{
        destination: 'typography.css',
        format: 'css/variables'
      }]
    },
    
    // Android (MyGP native)
    android: {
      transformGroup: 'android',
      buildPath: 'dist/android/',
      files: [{
        destination: 'typography.xml',
        format: 'android/resources'
      }]
    },
    
    // iOS (MyGP native)
    ios: {
      transformGroup: 'ios-swift',
      buildPath: 'dist/ios/',
      files: [{
        destination: 'Typography.swift',
        format: 'ios-swift/class.swift',
        className: 'OrbitTypography'
      }]
    }
  }
});

sd.buildAllPlatforms();
console.log('✅ Web, Android, and iOS tokens generated!');
