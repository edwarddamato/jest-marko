const component = require('./fixtures/the-component.marko');

describe('component', () => {
  it('should have a renderToString function', () => {
    expect(component.renderToString).toBeDefined();
  });

  it('should render correctly', () => {
    component.renderToString({
      id: 'txtMoo',
      label: 'Moo',
      placeholder: 'E.g: cow'
    }, (err, html) => {
      expect(html).toMatchSnapshot();
    });
  });

  it.skip('should getValue() correctly', () => {
    const render = component.render({
      id: 'woo',
      label: 'aaa',
      placeholder: 'aaa'
    });
    return render.then(renderResult => {
      renderResult.appendTo(document.body);
      expect(renderResult.getComponent().getValue()).toBe('dd');
    });
  });
});
