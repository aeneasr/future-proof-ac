'use strict';

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _slide = require('./slide');

var _slide2 = _interopRequireDefault(_slide);

var _appear = require('./appear');

var _appear2 = _interopRequireDefault(_appear);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _mockContext = function _mockContext() {
  return {
    styles: {
      global: {
        body: {
          background: '#eee'
        }
      },
      components: {
        content: {}
      }
    },
    store: {
      getState: function getState() {
        return { route: { params: '', slide: 0 } };
      },
      subscribe: function subscribe() {},
      dispatch: function dispatch() {}
    }
  };
};

var _ref = (0, _jsx3.default)(_slide2.default, {}, void 0, (0, _jsx3.default)('div', {}, void 0, 'Slide Content'));

var _ref2 = (0, _jsx3.default)('div', {}, void 0, 'Slide Content');

var _ref3 = (0, _jsx3.default)('div', {}, void 0, 'Slide Content');

var _ref4 = (0, _jsx3.default)('div', {}, void 0, 'Slide Content');

var _ref5 = (0, _jsx3.default)('div', {
  className: 'second'
}, void 0, 'This shows second');

var _ref6 = (0, _jsx3.default)('div', {
  className: 'third'
}, void 0, 'This shows third');

var _ref7 = (0, _jsx3.default)('div', {
  className: 'first'
}, void 0, 'This shows first');

var _ref8 = (0, _jsx3.default)('div', {
  className: 'first'
}, void 0, 'This shows second');

var _ref9 = (0, _jsx3.default)('div', {
  className: 'no-order'
}, void 0, 'This shows third');

var _ref10 = (0, _jsx3.default)('div', {
  className: 'second'
}, void 0, 'This shows first');

describe('<Slide />', function () {
  beforeEach(function () {
    window.watchMedia = jest.fn();
    window.matchMedia = jest.fn().mockReturnValue({ matches: [] });
  });

  afterEach(function () {
    window.watchMedia = null;
    window.matchMedia = null;
  });

  test('should render correctly without transitions.', function () {
    var wrapper = (0, _enzyme.mount)(_ref, { context: _mockContext() });
    expect(wrapper).toMatchSnapshot();
  });

  test('should render correctly with transitions.', function () {
    var wrapper = (0, _enzyme.mount)((0, _jsx3.default)(_slide2.default, {
      transition: ['slide', 'spin']
    }, void 0, _ref2), { context: _mockContext() });
    expect(wrapper).toMatchSnapshot();
  });

  test('should return the correct transition keys', function () {
    var wrapper = (0, _enzyme.mount)((0, _jsx3.default)(_slide2.default, {
      transitionIn: ['slide'],
      transitionOut: ['fade']
    }, void 0, _ref3), { context: _mockContext() });

    expect(wrapper.instance().getTransitionKeys()).toEqual(['slide']);
    wrapper.setState({ reverse: true });
    expect(wrapper.instance().getTransitionKeys()).toEqual(['fade']);
  });

  test('should call optional callback when slide becomes active', function () {
    var spy = jest.fn();
    (0, _enzyme.mount)((0, _jsx3.default)(_slide2.default, {
      onActive: spy,
      slideIndex: 5
    }, void 0, _ref4), { context: _mockContext() });
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toBeCalledWith(5);
  });

  test('should create <Appear /> fragments with their appearance in order', function () {
    var spy = jest.fn();
    (0, _enzyme.mount)((0, _jsx3.default)(_slide2.default, {
      slideIndex: 4,
      dispatch: spy,
      hash: 4
    }, void 0, (0, _jsx3.default)(_appear2.default, {
      order: 2,
      fragment: { fragments: [] }
    }, void 0, _ref5), (0, _jsx3.default)(_appear2.default, {
      order: 3,
      fragment: { fragments: [] }
    }, void 0, _ref6), (0, _jsx3.default)(_appear2.default, {
      order: 1,
      fragment: { fragments: [] }
    }, void 0, _ref7)), { context: _mockContext() });
    expect(spy).toHaveBeenCalledTimes(3);
    expect(spy.mock.calls).toEqual([[{
      payload: { slide: 4, id: '4-0', visible: false, className: 'fragment first' },
      type: 'ADD_FRAGMENT'
    }], [{
      payload: { slide: 4, id: '4-1', visible: false, className: 'fragment second' },
      type: 'ADD_FRAGMENT'
    }], [{
      payload: { slide: 4, id: '4-2', visible: false, className: 'fragment third' },
      type: 'ADD_FRAGMENT'
    }]]);
  });

  test('should order <Appear /> fragments without an order first', function () {
    var spy = jest.fn();
    (0, _enzyme.mount)((0, _jsx3.default)(_slide2.default, {
      slideIndex: 7,
      dispatch: spy,
      hash: 7
    }, void 0, (0, _jsx3.default)(_appear2.default, {
      order: 1,
      fragment: { fragments: [] }
    }, void 0, _ref8), (0, _jsx3.default)(_appear2.default, {
      fragment: { fragments: [] }
    }, void 0, _ref9), (0, _jsx3.default)(_appear2.default, {
      order: 2,
      fragment: { fragments: [] }
    }, void 0, _ref10)), { context: _mockContext() });
    expect(spy).toHaveBeenCalledTimes(3);
    expect(spy.mock.calls).toEqual([[{
      payload: { slide: 7, id: '7-0', visible: false, className: 'fragment no-order' },
      type: 'ADD_FRAGMENT'
    }], [{
      payload: { slide: 7, id: '7-1', visible: false, className: 'fragment first' },
      type: 'ADD_FRAGMENT'
    }], [{
      payload: { slide: 7, id: '7-2', visible: false, className: 'fragment second' },
      type: 'ADD_FRAGMENT'
    }]]);
  });
});