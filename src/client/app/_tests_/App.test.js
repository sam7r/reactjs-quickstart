import test from 'blue-tape';
import { mount } from 'enzyme';
import { componentSetup } from '../../../common/test-helper.js';
import App from '../App';

const props = {};

/** @test {App} */
test('App renders', t => {
  const component = mount(componentSetup(App, props));
  t.ok(!!component.render().find('#app-container').length,'app container rendered');
  t.end();
});
