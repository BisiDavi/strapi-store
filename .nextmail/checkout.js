"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Checkout;

var _react = _interopRequireDefault(require("react"));

var _mjmlReact = require("nextmail/mjml-react");

function Checkout(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/_react["default"].createElement(_mjmlReact.Mjml, null, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlBody, {
    backgroundColor: "rgb(244, 244, 244)"
  }, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlWrapper, null, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlSection, {
    backgroundColor: "white"
  }, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlColumn, null, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlImage, {
    width: "100px",
    src: "https://drive.google.com/uc?export=view&id=1P0oVjPA9dfO3Yq7SSukPOCfXidAracpQ"
  }), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlText, {
    fontWeight: "bold",
    color: "black",
    fontSize: "20px",
    align: "center"
  }, "Checkout Notification"), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlDivider, {
    borderColor: "#F45E43"
  }), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlText, {
    fontSize: "18px",
    color: "black",
    lineHeight: "25px",
    fontFamily: "helvetica"
  }, "Hello Jenjen's Luxury Wigs, a customer,", ' ', data.name, " just checked out some wigs \uD83D\uDE00"))), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlSection, {
    backgroundColor: "white"
  }, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlColumn, null, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlTable, {
    containerBackgroundColor: "pink"
  }, /*#__PURE__*/_react["default"].createElement("tr", {
    style: {
      borderBottom: '1px solid white',
      textAlign: 'left',
      padding: '15px 0'
    }
  }, /*#__PURE__*/_react["default"].createElement("th", {
    style: {
      padding: '10px 15px',
      fontSize: '20px'
    }
  }, "Wig"), /*#__PURE__*/_react["default"].createElement("th", {
    style: {
      padding: '10px 15px',
      fontSize: '20px'
    }
  }, "Price")), data.products.map(function (product, index) {
    return /*#__PURE__*/_react["default"].createElement("tr", {
      style: {
        borderBottom: '1px solid white'
      },
      key: index
    }, /*#__PURE__*/_react["default"].createElement("td", {
      style: {
        padding: '10px 15px',
        fontSize: '18px'
      }
    }, product.name), /*#__PURE__*/_react["default"].createElement("td", {
      style: {
        padding: '10px 15px',
        fontSize: '18px'
      }
    }, "$", product.price));
  }), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
    style: {
      padding: '10px 15px',
      fontWeight: 'bold',
      fontSize: '20px'
    }
  }, "Total"), /*#__PURE__*/_react["default"].createElement("td", {
    style: {
      padding: '10px 15px',
      fontWeight: 'bold',
      fontSize: '20px'
    }
  }, "$", product.total))))), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlSection, {
    backgroundColor: "pink"
  }, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlColumn, null, /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlSocial, {
    fontSize: "15px",
    align: "center",
    iconSize: "30px",
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
    target: "_blank",
    href: "https://www.jenjensluxury.com/"
  }, "Jenjensluxury.com")), /*#__PURE__*/_react["default"].createElement(_mjmlReact.MjmlText, {
    fontWeight: "bold",
    align: "center",
    fontSize: "16px"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    style: {
      color: 'blue'
    },
    href: "tel:+12674038663"
  }, "+1 (267) 403-8663")))))));
}