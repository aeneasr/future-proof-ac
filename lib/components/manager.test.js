'use strict';

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _enzyme = require('enzyme');

var _manager = require('./manager');

var _manager2 = _interopRequireDefault(_manager);

var _range = require('lodash/range');

var _range2 = _interopRequireDefault(_range);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _mockContext = function _mockContext(slide, routeParams) {
  return {
    styles: {
      global: {
        body: []
      },
      controls: {},
      progress: {
        pacman: []
      }
    },
    store: {
      getState: function getState() {
        return {
          route: {
            params: routeParams,
            slide: slide
          },
          style: {
            globalStyleSet: []
          },
          fragment: {
            fragments: []
          }
        };
      },
      dispatch: function dispatch() {},
      subscribe: function subscribe() {}
    }
  };
};

var _ref = (0, _jsx3.default)('div', {}, void 0, 'Slide Content');

var MockSlide = function (_Component) {
  (0, _inherits3.default)(MockSlide, _Component);

  function MockSlide() {
    (0, _classCallCheck3.default)(this, MockSlide);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  MockSlide.prototype.render = function render() {
    return _ref;
  };

  return MockSlide;
}(_react.Component);

var MockSlideSet = function (_Component2) {
  (0, _inherits3.default)(MockSlideSet, _Component2);

  function MockSlideSet() {
    (0, _classCallCheck3.default)(this, MockSlideSet);
    return (0, _possibleConstructorReturn3.default)(this, _Component2.apply(this, arguments));
  }

  MockSlideSet.prototype.render = function render() {
    return (0, _jsx3.default)('div', {}, void 0, this.props.children);
  };

  return MockSlideSet;
}(_react.Component);

MockSlideSet.defaultProps = {
  hasSlideChildren: true
};


var _mockChildContext = function _mockChildContext() {
  return { styles: function styles() {} };
};

var origLocalStorage = window.localStorage;

var _ref2 = (0, _jsx3.default)(MockSlide, {});

var _ref3 = (0, _jsx3.default)(MockSlide, {});

var _ref4 = (0, _jsx3.default)(_manager2.default, {}, void 0, (0, _jsx3.default)(MockSlide, {}), (0, _jsx3.default)(MockSlide, {}));

var _ref5 = (0, _jsx3.default)(_manager2.default, {}, void 0, (0, _jsx3.default)(MockSlide, {}), (0, _jsx3.default)(MockSlide, {}));

var _ref6 = (0, _jsx3.default)(_manager2.default, {}, void 0, (0, _jsx3.default)(MockSlide, {}), (0, _jsx3.default)(MockSlideSet, {}, void 0, (0, _jsx3.default)(MockSlide, {}), (0, _jsx3.default)(MockSlide, {})));

var _ref7 = (0, _jsx3.default)(_manager2.default, {}, void 0, (0, _jsx3.default)(MockSlide, {}), (0, _jsx3.default)(MockSlide, {
  goTo: 4
}), (0, _jsx3.default)(MockSlide, {}), (0, _jsx3.default)(MockSlide, {
  goTo: 3
}), (0, _jsx3.default)(MockSlide, {}));

var _ref8 = (0, _jsx3.default)(_manager2.default, {}, void 0, (0, _jsx3.default)(MockSlide, {}), (0, _jsx3.default)(MockSlide, {
  goTo: 4
}), (0, _jsx3.default)(MockSlide, {}), (0, _jsx3.default)(MockSlide, {
  goTo: 3
}), (0, _jsx3.default)(MockSlide, {}));

describe('<Manager />', function () {
  beforeAll(function () {
    window.localStorage = { setItem: function setItem() {} };
  });

  afterAll(function () {
    window.localStorage = origLocalStorage;
  });

  test('should render correctly.', function () {
    var wrapper = (0, _enzyme.mount)((0, _jsx3.default)(_manager2.default, {
      transition: ['zoom', 'slide'],
      transitionDuration: 500
    }, void 0, _ref2, _ref3), { context: _mockContext(0, []), childContextTypes: _mockChildContext() });
    expect(wrapper).toMatchSnapshot();
  });

  test('should render the export configuration when specified.', function () {
    var wrapper = (0, _enzyme.mount)(_ref4, {
      context: _mockContext(0, ['export']),
      childContextTypes: _mockChildContext()
    });
    expect(wrapper).toMatchSnapshot();
  });

  test('should render the overview configuration when specified.', function () {
    var wrapper = (0, _enzyme.mount)(_ref5, {
      context: _mockContext(0, ['overview']),
      childContextTypes: _mockChildContext()
    });
    expect(wrapper).toMatchSnapshot();
  });

  test('should render with slideset slides', function () {
    var wrapper = (0, _enzyme.mount)(_ref6, { context: _mockContext(1, []), childContextTypes: _mockChildContext() });
    expect(wrapper).toMatchSnapshot();
  });

  test('should get the next index when using out-of-order viewing', function () {
    var wrapper = (0, _enzyme.mount)((0, _jsx3.default)(_manager2.default, {}, void 0, (0, _range2.default)(0, 10).map(function (value) {
      return (0, _jsx3.default)(MockSlide, {}, value);
    })), { context: _mockContext(5, []), childContextTypes: _mockChildContext() });
    var managerInstance = wrapper.instance().getWrappedInstance();
    managerInstance.viewedIndexes = new _set2.default([0, 1, 2, 5, 4, 3]);
    // The next unviwed index should sort the set and figure out the next
    // best slide to go to, since 0 through 5 have been visited, 6 is the best.
    expect(managerInstance._nextUnviewedIndex()).toEqual(6);
  });

  test('should not exceed the maximum number of slides for next index', function () {
    var wrapper = (0, _enzyme.mount)((0, _jsx3.default)(_manager2.default, {}, void 0, (0, _range2.default)(0, 11).map(function (value) {
      return (0, _jsx3.default)(MockSlide, {}, value);
    })), { context: _mockContext(10, []), childContextTypes: _mockChildContext() });
    var managerInstance = wrapper.instance().getWrappedInstance();
    managerInstance.viewedIndexes = new _set2.default([0, 1, 2, 5, 4, 3, 6, 9, 10, 7, 8]);
    // Even though we are on index 10, index 10 is still the next best index
    // because there are no more slides in the deck.
    expect(managerInstance._nextUnviewedIndex()).toEqual(10);
  });

  test('should calc a negative offset when routing from a higher index slide to lower', function () {
    var wrapper = (0, _enzyme.mount)(_ref7, { context: _mockContext(3, []), childContextTypes: _mockChildContext() });
    var managerInstance = wrapper.instance().getWrappedInstance();
    managerInstance.viewedIndexes = new _set2.default([0, 1, 3]);
    // We are at slide 4 (index 3) which directs us to go to
    // slide 3 (index 2) the delta should be 2 - 3, thus -1.
    expect(managerInstance._getOffset(3)).toEqual(-1);
  });

  test('should calc a positive offset when routing from a lower index slide to higher', function () {
    var wrapper = (0, _enzyme.mount)(_ref8, { context: _mockContext(1, []), childContextTypes: _mockChildContext() });
    var managerInstance = wrapper.instance().getWrappedInstance();
    managerInstance.viewedIndexes = new _set2.default([0, 1]);
    // We are at slide 2 (index 1) which directs us to go to
    // slide 4 (index 3) the delta should be 3 - 1, thus 2.
    expect(managerInstance._getOffset(1)).toEqual(2);
  });
});