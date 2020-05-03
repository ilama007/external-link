function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var reactPortal = require('react-portal');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var styles = {"button":"_2hTXI","overlay":"_3qw0K","overlayBackground":"_OK5K3","modal":"_Xt-75"};

function ExternalLink(_ref) {
  var classNameLink = _ref.classNameLink,
      classNameOverlay = _ref.classNameOverlay,
      externalURL = _ref.externalURL,
      messageBody = _ref.messageBody,
      messageTitle = _ref.messageTitle,
      buttonOkTitle = _ref.buttonOkTitle,
      buttonCancelTitle = _ref.buttonCancelTitle,
      children = _ref.children,
      onOpenHandler = _ref.onOpenHandler,
      onOkHandler = _ref.onOkHandler,
      onCancelHandler = _ref.onCancelHandler,
      props = _objectWithoutPropertiesLoose(_ref, ["classNameLink", "classNameOverlay", "externalURL", "messageBody", "messageTitle", "buttonOkTitle", "buttonCancelTitle", "children", "onOpenHandler", "onOkHandler", "onCancelHandler"]);

  var _useState = React.useState(false),
      isModalOpen = _useState[0],
      setIsModalOpen = _useState[1];

  var returnObj = {
    children: children,
    url: externalURL
  };

  var handleOpenModalClick = function handleOpenModalClick() {
    setIsModalOpen(true);
    onOpenHandler && onOpenHandler(returnObj);
  };

  var handleOKClick = function handleOKClick() {
    onOkHandler && onOkHandler(returnObj);
    typeof window !== 'undefined' && window.open(externalURL);
    setIsModalOpen(false);
  };

  var handleCancelClick = function handleCancelClick() {
    onCancelHandler && onCancelHandler(returnObj);
    setIsModalOpen(false);
  };

  return /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement("button", _extends({}, props, {
    className: styles.button + " " + classNameLink,
    onClick: handleOpenModalClick
  }), children), isModalOpen && /*#__PURE__*/React__default.createElement(reactPortal.Portal, null, /*#__PURE__*/React__default.createElement("div", {
    className: styles.overlayBackground + " " + classNameOverlay + " " + styles.overlay
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles.modal + " modal-container"
  }, messageTitle && /*#__PURE__*/React__default.createElement("div", {
    className: "modal-title"
  }, /*#__PURE__*/React__default.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: messageTitle
    }
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React__default.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: messageBody
    }
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "modal-actions"
  }, /*#__PURE__*/React__default.createElement("button", {
    onClick: handleOKClick
  }, buttonOkTitle || 'Ok'), /*#__PURE__*/React__default.createElement("button", {
    onClick: handleCancelClick
  }, buttonCancelTitle || 'Cancel'))))));
}
ExternalLink.propTypes = {
  externalURL: PropTypes.string.isRequired,
  messageBody: PropTypes.string.isRequired,
  messageTitle: PropTypes.string,
  buttonOkTitle: PropTypes.string,
  buttonCancelTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  onOpenHandler: PropTypes.func,
  onOkHandler: PropTypes.func,
  onCancelHandler: PropTypes.func,
  classNameLink: PropTypes.string,
  classNameOverlay: PropTypes.string
};

module.exports = ExternalLink;
//# sourceMappingURL=index.js.map
