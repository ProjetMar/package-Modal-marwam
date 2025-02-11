"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/* eslint-disable react/prop-types */
function Modal(_ref) {
  var closeModal = _ref.closeModal,
    title = _ref.title,
    children = _ref.children,
    _ref$footerButtons = _ref.footerButtons,
    footerButtons = _ref$footerButtons === void 0 ? [] : _ref$footerButtons;
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 rounded-lg shadow-lg w-96 relative"
  }, /*#__PURE__*/React.createElement("button", {
    className: "absolute top-2 right-2 text-xl",
    onClick: function onClick() {
      return closeModal(false);
    }
  }, " \xD7 "), /*#__PURE__*/React.createElement("div", {
    className: "text-lg font-semibold mb-4"
  }, /*#__PURE__*/React.createElement("h2", null, title)), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, children), footerButtons.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center space-x-2 mt-4"
  }, footerButtons.map(function (btn, index) {
    return /*#__PURE__*/React.createElement("button", {
      key: index,
      className: "px-4 py-2 rounded ".concat(btn.className),
      onClick: btn.onClick
    }, btn.label);
  }))));
}
var _default = exports["default"] = Modal;