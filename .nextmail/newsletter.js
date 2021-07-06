"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Newsletter;

var _react = _interopRequireDefault(require("react"));

var _mjmlReact = require("nextmail/mjml-react");

function Newsletter(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/_react["default"].createElement(_mjmlReact.Mjml, null, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlBody, {
    backgroundColor: "rgb(244, 244, 244)"
  }, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlWrapper, null, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlSection, {
    backgroundColor: "white",
    backgroundSize: "center",
    paddingTop: "50px"
  }, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlColumn, {
    paddingTop: "0px"
  }, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlImage, {
    width: "100px",
    src: "https://drive.google.com/uc?export=view&id=1P0oVjPA9dfO3Yq7SSukPOCfXidAracpQ"
  }), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlText, {
    fontWeight: "bold",
    color: "black",
    fontSize: "20px",
    align: "center"
  }, "Newsletter Notification"), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlDivider, {
    borderColor: "#F45E43"
  }), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlText, {
    fontSize: "18px",
    color: "black",
    lineHeight: "25px",
    fontFamily: "helvetica"
  }, "I'm so happy right now \uD83D\uDE00", ' '), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlText, {
    fontSize: "18px",
    color: "black",
    lineHeight: "25px",
    fontFamily: "helvetica"
  }, "Dear ", data.email, " , thank you for subscribing to my newsletter get to hear about new wigs \uD83D\uDC69 and wig treatment."), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlText, {
    fontSize: "18px",
    color: "black",
    lineHeight: "30px",
    fontFamily: "helvetica"
  }, "I promise not to bore you."), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlText, {
    fontSize: "18px",
    color: "black",
    lineHeight: "10px",
    fontFamily: "helvetica"
  }, "Best Regards."), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlText, {
    fontSize: "18px",
    color: "black",
    lineHeight: "10px",
    fontFamily: "helvetica",
    "font-style": "italic"
  }, "Jenjen's Luxury wigs."))), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlSection, {
    backgroundColor: "pink"
  }, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlColumn, null, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlSocial, {
    fontSize: "15px",
    align: "center",
    "icon-size": "30px",
    mode: "horizontal"
  }, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlSocialElement, {
    name: "instagram",
    href: "https://www.instagram.com/jenjensluxurywigs/"
  }), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlSocialElement, {
    name: "facebook",
    href: "https://web.facebook.com/jenjensluxurywigs.azonobi"
  }))), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlColumn, null, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlText, {
    fontWeight: "bold",
    align: "center",
    fontSize: "16px"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    style: {
      color: 'blue'
    },
    href: "https://www.jenjensluxury.com"
  }, "Jenjensluxury.com")), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlText, {
    fontWeight: "bold",
    align: "center",
    fontSize: "16px"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    style: {
      color: 'blue'
    },
    href: "tel:+1 (267) 403-8663"
  }, "+1 (267) 403-8663")))))));
}