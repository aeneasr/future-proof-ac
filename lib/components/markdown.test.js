'use strict';

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _markdown = require('./markdown');

var _markdown2 = _interopRequireDefault(_markdown);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_markdown2.default, {}, void 0, 'This should `work`');

describe('<Markdown>', function () {
  test('should render correctly when using inline code', function () {
    var wrapper = (0, _enzyme.shallow)(_ref);

    expect(wrapper).toMatchSnapshot();
  });
});