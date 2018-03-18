'use strict';

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _goToAction = require('./go-to-action');

var _goToAction2 = _interopRequireDefault(_goToAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_goToAction2.default, {
  slide: 2
}, void 0, 'Slide 2');

var _ref2 = (0, _jsx3.default)(_goToAction2.default, {});

describe('<GoToAction />', function () {
  test('should call the context function with the slide prop when it has a child', function () {
    var stub = jest.fn();
    var context = {
      styles: { components: { goToAction: {} } },
      goToSlide: stub
    };
    var wrapper = (0, _enzyme.mount)(_ref, { context: context });
    wrapper.simulate('click');
    expect(stub).toHaveBeenCalledTimes(1);
    expect(stub).toHaveBeenCalledWith(2);
  });

  test('should call the context function when providing a custom component', function () {
    var stub = jest.fn();
    var context = {
      styles: { components: { goToAction: {} } },
      goToSlide: stub
    };
    var wrapper = (0, _enzyme.mount)((0, _jsx3.default)(_goToAction2.default, {
      render: function render(goToSlide) {
        return (0, _jsx3.default)('button', {
          id: 'inner-btn',
          onClick: function onClick() {
            return goToSlide('wait-what');
          }
        }, void 0, 'WAIT WUT');
      }
    }), { context: context });
    wrapper.find('button#inner-btn').simulate('click');
    expect(stub).toHaveBeenCalledTimes(1);
    expect(stub).toHaveBeenCalledWith('wait-what');
  });

  test('should just render a div when no props are provided', function () {
    var context = {
      styles: { components: { goToAction: {} } },
      goToSlide: function goToSlide() {}
    };
    var wrapper = (0, _enzyme.mount)(_ref2, { context: context });
    expect(wrapper).toMatchSnapshot();
  });
});