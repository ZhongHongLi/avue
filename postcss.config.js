module.exports = {
  plugins: {
    'autoprefixer': {},
    'postcss-salad': {
      browsers: ['ie > 8', 'last 2 versions'],
      features: {
        bem: {
          shortcuts: {
            component: 'b',
            modifier: 'm',
            descendent: 'e'
          },
          separators: {
            descendent: '__',
            modifier: '--'
          }
        }
      }
    }
  }
};
