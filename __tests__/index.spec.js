const component = require('./fixtures/foo-component.marko');

describe('stuff', () => {
  it('moo', () => {
    component.renderToString({
      foo: 'woo'
    }, (err, html) => {
      expect(html).toMatchSnapshot();
    });
  })
});
