'use strict';

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_list2.default, {});

var _ref2 = (0, _jsx3.default)(_list2.default, {
  ordered: true
});

describe('<List />', function () {
  it('creates an unordered list <ul> by default', function () {
    var context = { styles: { components: { list: {} } } };
    var wrapper = (0, _enzyme.shallow)(_ref, { context: context });
    expect(wrapper.name()).toBe('Styled(ul)');
  });

  it('creates an ordered list <ol> when specified', function () {
    var context = { styles: { components: { list: {} } } };
    var wrapper = (0, _enzyme.shallow)(_ref2, { context: context });
    expect(wrapper.name()).toBe('Styled(ol)');
  });

  it('applies contextual styles to the rendered component', function () {
    var context = { styles: { components: { list: {
            background: '#fff',
            color: '#ff0'
          } } } };
    var wrapper = (0, _enzyme.shallow)((0, _jsx3.default)(_list2.default, {
      style: { fontWeight: 'bold' }
    }), { context: context });
    expect(wrapper.prop('styles')).toEqual([context.styles.components.list, {}, { fontWeight: 'bold' }]);
  });
});