(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--13-3!./src/styles.scss ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n@font-face {\n  font-family: \"Roboto\";\n  src: url('Roboto-Regular.woff2') format(\"woff2\"), url('Roboto-Regular.woff') format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto-Regular\";\n  src: url('Roboto-Regular.woff2') format(\"woff2\"), url('Roboto-Regular.woff') format(\"woff\");\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url('Roboto-RegularItalic.woff2') format(\"woff2\"), url('Roboto-RegularItalic.woff') format(\"woff\");\n  font-weight: 400;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Roboto-RegularItalic\";\n  src: url('Roboto-RegularItalic.woff2') format(\"woff2\"), url('Roboto-RegularItalic.woff') format(\"woff\");\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url('Roboto-Light.woff2') format(\"woff2\"), url('Roboto-Light.woff') format(\"woff\");\n  font-weight: 300;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto-Light\";\n  src: url('Roboto-Light.woff2') format(\"woff2\"), url('Roboto-Light.woff') format(\"woff\");\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url('Roboto-LightItalic.woff2') format(\"woff2\"), url('Roboto-LightItalic.woff') format(\"woff\");\n  font-weight: 300;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Roboto-LightItalic\";\n  src: url('Roboto-LightItalic.woff2') format(\"woff2\"), url('Roboto-LightItalic.woff') format(\"woff\");\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url('Roboto-Thin.woff2') format(\"woff2\"), url('Roboto-Thin.woff') format(\"woff\");\n  font-weight: 100;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto-Thin\";\n  src: url('Roboto-Thin.woff2') format(\"woff2\"), url('Roboto-Thin.woff') format(\"woff\");\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url('Roboto-ThinItalic.woff2') format(\"woff2\"), url('Roboto-ThinItalic.woff') format(\"woff\");\n  font-weight: 100;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Roboto-ThinItalic\";\n  src: url('Roboto-ThinItalic.woff2') format(\"woff2\"), url('Roboto-ThinItalic.woff') format(\"woff\");\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url('Roboto-Medium.woff2') format(\"woff2\"), url('Roboto-Medium.woff') format(\"woff\");\n  font-weight: 500;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto-Medium\";\n  src: url('Roboto-Medium.woff2') format(\"woff2\"), url('Roboto-Medium.woff') format(\"woff\");\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url('Roboto-MediumItalic.woff2') format(\"woff2\"), url('Roboto-MediumItalic.woff') format(\"woff\");\n  font-weight: 500;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Roboto-MediumItalic\";\n  src: url('Roboto-MediumItalic.woff2') format(\"woff2\"), url('Roboto-MediumItalic.woff') format(\"woff\");\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url('Roboto-Bold.woff2') format(\"woff2\"), url('Roboto-Bold.woff') format(\"woff\");\n  font-weight: 700;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto-Bold\";\n  src: url('Roboto-Bold.woff2') format(\"woff2\"), url('Roboto-Bold.woff') format(\"woff\");\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url('Roboto-BoldItalic.woff2') format(\"woff2\"), url('Roboto-BoldItalic.woff') format(\"woff\");\n  font-weight: 700;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Roboto-BoldItalic\";\n  src: url('Roboto-BoldItalic.woff2') format(\"woff2\"), url('Roboto-BoldItalic.woff') format(\"woff\");\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url('Roboto-Black.woff2') format(\"woff2\"), url('Roboto-Black.woff') format(\"woff\");\n  font-weight: 900;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto-Black\";\n  src: url('Roboto-Black.woff2') format(\"woff2\"), url('Roboto-Black.woff') format(\"woff\");\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url('Roboto-BlackItalic.woff2') format(\"woff2\"), url('Roboto-BlackItalic.woff') format(\"woff\");\n  font-weight: 900;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Roboto-BlackItalic\";\n  src: url('Roboto-BlackItalic.woff2') format(\"woff2\"), url('Roboto-BlackItalic.woff') format(\"woff\");\n}\n/* Scroll bar scustomization */\nbody::-webkit-scrollbar {\n  width: 1rem;\n}\nbody::-webkit-scrollbar-track {\n  background-color: white;\n}\nbody::-webkit-scrollbar-thumb {\n  background-color: #1976D2;\n  border-radius: 0.5rem;\n}\n/* Scroll bar scustomization */\nbody {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", \"sans-serif\";\n}\n.horizontal-line {\n  background-color: gainsboro;\n  margin: 20px 0px;\n  height: 2px;\n}\n.vertical-line {\n  background-color: gainsboro;\n  margin: 0px 10px;\n  width: 2px;\n}\n.pageContainer {\n  padding: 0px 1rem;\n  margin-bottom: 50px;\n}\n.page-title-container {\n  margin: 2rem 12rem 4rem;\n}\n.page-title-container .pageTitle {\n  font-size: 22px;\n  font-weight: 600;\n  margin-bottom: 5px;\n  color: #565656;\n}\n.page-title-container .pageSubtitle {\n  font-size: 14px;\n  color: #aaaaaa;\n}\n.pageContent {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.mandatory {\n  color: #dd0031;\n}\n.textFeild label {\n  display: block;\n  font-size: 14px;\n  margin: 5px 0px;\n  color: #565656;\n  font-weight: 700;\n  margin-left: 15px;\n}\n.textFeild input {\n  height: 40px;\n  margin-right: 20px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #1976D2;\n  padding-left: 16px;\n  border: 1.5px solid gainsboro;\n  outline: none;\n  border-radius: 18px;\n}\n.unactiveButton {\n  height: 43px;\n  width: 8.5rem;\n  margin-top: 1.7rem;\n  background: #aaaaaa;\n  border: none;\n  color: black;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 18px;\n  outline: none;\n}\n.activeButton {\n  height: 43px;\n  width: 8.5rem;\n  margin-top: 1.7rem;\n  background-color: #1976D2;\n  border: none;\n  color: white;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 18px;\n  outline: none;\n  cursor: pointer;\n}\n.icon-button {\n  background-color: transparent;\n  border: none;\n  outline: none;\n  border-radius: 50%;\n  width: 45px;\n  height: 36px;\n  margin: 6px 25px 5px 0px;\n  cursor: pointer;\n}\n.icon-button:hover {\n  background-color: #f0f0f0;\n}\n.icon-button img {\n  max-width: 18px;\n}", "",{"version":3,"sources":["/Users/kininge007/Documents/Work/Angular/IMDB-Clone/src/styles.scss","/Users/kininge007/Documents/Work/Angular/IMDB-Clone/node_modules/roboto-fontface/css/mixins.scss","/Users/kininge007/Documents/Work/Angular/IMDB-Clone/node_modules/roboto-fontface/css/roboto/sass/roboto-fontface-regular.scss","styles.scss","/Users/kininge007/Documents/Work/Angular/IMDB-Clone/node_modules/roboto-fontface/css/roboto/sass/roboto-fontface-regular-italic.scss","/Users/kininge007/Documents/Work/Angular/IMDB-Clone/node_modules/roboto-fontface/css/roboto/sass/roboto-fontface-light.scss","/Users/kininge007/Documents/Work/Angular/IMDB-Clone/node_modules/roboto-fontface/css/roboto/sass/roboto-fontface-light-italic.scss","/Users/kininge007/Documents/Work/Angular/IMDB-Clone/node_modules/roboto-fontface/css/roboto/sass/roboto-fontface-thin.scss","/Users/kininge007/Documents/Work/Angular/IMDB-Clone/node_modules/roboto-fontface/css/roboto/sass/roboto-fontface-thin-italic.scss","/Users/kininge007/Documents/Work/Angular/IMDB-Clone/node_modules/roboto-fontface/css/roboto/sass/roboto-fontface-medium.scss","/Users/kininge007/Documents/Work/Angular/IMDB-Clone/node_modules/roboto-fontface/css/roboto/sass/roboto-fontface-medium-italic.scss","/Users/kininge007/Documents/Work/Angular/IMDB-Clone/node_modules/roboto-fontface/css/roboto/sass/roboto-fontface-bold.scss","/Users/kininge007/Documents/Work/Angular/IMDB-Clone/node_modules/roboto-fontface/css/roboto/sass/roboto-fontface-bold-italic.scss","/Users/kininge007/Documents/Work/Angular/IMDB-Clone/node_modules/roboto-fontface/css/roboto/sass/roboto-fontface-black.scss","/Users/kininge007/Documents/Work/Angular/IMDB-Clone/node_modules/roboto-fontface/css/roboto/sass/roboto-fontface-black-italic.scss"],"names":[],"mappings":"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","file":"styles.scss","sourcesContent":["\n/* You can add global styles to this file, and also import other style files */\n$roboto-font-path: \"~roboto-fontface/fonts\" !default;\n@import \"~roboto-fontface/css/roboto/sass/roboto-fontface\";\n\n/* Scroll bar scustomization */\n  body::-webkit-scrollbar\n  {\n    width: 1rem;\n  }\n\n  body::-webkit-scrollbar-track\n  {\n    background-color: white; \n  }\n\n  body::-webkit-scrollbar-thumb\n  {\n    background-color: #1976D2; \n    border-radius: 0.5rem;\n  }\n/* Scroll bar scustomization */\n\nbody\n{\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", \"sans-serif\";\n}\n\n.horizontal-line\n{\n  background-color: rgb(220, 220, 220);\n  margin: 20px 0px;\n  height: 2px;\n}\n\n.vertical-line\n{\n  background-color: rgb(220, 220, 220);\n  margin: 0px 10px;\n  width: 2px;\n}\n\n.pageContainer\n{\n  padding: 0px 1rem;\n  margin-bottom: 50px;\n}\n\n.page-title-container\n{\n  margin: 2rem 12rem 4rem;\n\n  .pageTitle\n  {\n    font-size: 22px;\n    font-weight: 600;\n    margin-bottom: 5px;\n    color: #565656;\n  }\n\n  .pageSubtitle\n  {\n    font-size: 14px;\n    color: #aaaaaa;\n  }\n\n}\n\n\n\n.pageContent\n{\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px\n}\n\n.mandatory\n{\n  color: rgb(221, 0, 49);\n}\n\n.textFeild label\n{\n    display: block;\n    font-size: 14px;\n    margin: 5px 0px;\n    color: #565656;\n    font-weight: 700;\n    margin-left: 15px;\n}\n\n.textFeild input\n{\n    height: 40px;\n    margin-right: 20px;\n    font-size: 16px;\n    font-weight: 600;\n    color: #1976D2;\n    padding-left: 16px;\n    border: 1.5px solid gainsboro;\n    outline: none;\n    border-radius: 18px;\n}\n\n.unactiveButton\n{\n    height: 43px;\n    width: 8.5rem;\n    margin-top: 1.7rem;\n    background: #aaaaaa;\n    border: none;\n    color: black;\n    font-size: 16px;\n    font-weight: 600;\n    border-radius: 18px;\n    outline: none;\n}\n\n.activeButton\n{\n    height: 43px;\n    width: 8.5rem;\n    margin-top: 1.7rem;\n    background-color: #1976D2;\n    border: none;\n    color: white;\n    font-size: 16px;\n    font-weight: 600;\n    border-radius: 18px;\n    outline: none;\n    cursor: pointer;\n}\n\n.icon-button\n{\n  background-color: transparent;\n  border: none;\n  outline: none;\n  border-radius: 50%;\n  width: 45px;\n  height: 36px;\n  margin: 6px 25px 5px 0px;\n  cursor: pointer;\n\n  &:hover\n  {\n    background-color: #f0f0f0;\n  }\n\n  img\n  {\n    max-width: 18px;\n  }\n}\n","$roboto-font-path: '../../../fonts' !default;\n\n@mixin roboto-font($folder, $variant, $type, $weight, $style) {\n\n    $font-full-path: '#{$roboto-font-path}/#{$folder}/#{$variant}';\n\n    @font-face {\n        font-family: '#{$variant}';\n        src: url('#{$font-full-path}-#{$type}.woff2') format('woff2'),\n             url('#{$font-full-path}-#{$type}.woff') format('woff');\n        font-weight: $weight;\n        font-style: $style;\n    }\n\n    @font-face {\n        font-family: '#{$variant}-#{$type}';\n        src: url('#{$font-full-path}-#{$type}.woff2') format('woff2'),\n             url('#{$font-full-path}-#{$type}.woff') format('woff');\n    }\n}\n","@import \"../../mixins\";\n\n@include roboto-font('roboto', 'Roboto', 'Regular', 400, normal);\n","/* You can add global styles to this file, and also import other style files */\n@font-face {\n  font-family: \"Roboto\";\n  src: url(\"~roboto-fontface/fonts/roboto/Roboto-Regular.woff2\") format(\"woff2\"), url(\"~roboto-fontface/fonts/roboto/Roboto-Regular.woff\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto-Regular\";\n  src: url(\"~roboto-fontface/fonts/roboto/Roboto-Regular.woff2\") format(\"woff2\"), url(\"~roboto-fontface/fonts/roboto/Roboto-Regular.woff\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url(\"~roboto-fontface/fonts/roboto/Roboto-RegularItalic.woff2\") format(\"woff2\"), url(\"~roboto-fontface/fonts/roboto/Roboto-RegularItalic.woff\") format(\"woff\");\n  font-weight: 400;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Roboto-RegularItalic\";\n  src: url(\"~roboto-fontface/fonts/roboto/Roboto-RegularItalic.woff2\") format(\"woff2\"), url(\"~roboto-fontface/fonts/roboto/Roboto-RegularItalic.woff\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url(\"~roboto-fontface/fonts/roboto/Roboto-Light.woff2\") format(\"woff2\"), url(\"~roboto-fontface/fonts/roboto/Roboto-Light.woff\") format(\"woff\");\n  font-weight: 300;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto-Light\";\n  src: url(\"~roboto-fontface/fonts/roboto/Roboto-Light.woff2\") format(\"woff2\"), url(\"~roboto-fontface/fonts/roboto/Roboto-Light.woff\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url(\"~roboto-fontface/fonts/roboto/Roboto-LightItalic.woff2\") format(\"woff2\"), url(\"~roboto-fontface/fonts/roboto/Roboto-LightItalic.woff\") format(\"woff\");\n  font-weight: 300;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Roboto-LightItalic\";\n  src: url(\"~roboto-fontface/fonts/roboto/Roboto-LightItalic.woff2\") format(\"woff2\"), url(\"~roboto-fontface/fonts/roboto/Roboto-LightItalic.woff\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url(\"~roboto-fontface/fonts/roboto/Roboto-Thin.woff2\") format(\"woff2\"), url(\"~roboto-fontface/fonts/roboto/Roboto-Thin.woff\") format(\"woff\");\n  font-weight: 100;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto-Thin\";\n  src: url(\"~roboto-fontface/fonts/roboto/Roboto-Thin.woff2\") format(\"woff2\"), url(\"~roboto-fontface/fonts/roboto/Roboto-Thin.woff\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url(\"~roboto-fontface/fonts/roboto/Roboto-ThinItalic.woff2\") format(\"woff2\"), url(\"~roboto-fontface/fonts/roboto/Roboto-ThinItalic.woff\") format(\"woff\");\n  font-weight: 100;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Roboto-ThinItalic\";\n  src: url(\"~roboto-fontface/fonts/roboto/Roboto-ThinItalic.woff2\") format(\"woff2\"), url(\"~roboto-fontface/fonts/roboto/Roboto-ThinItalic.woff\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url(\"~roboto-fontface/fonts/roboto/Roboto-Medium.woff2\") format(\"woff2\"), url(\"~roboto-fontface/fonts/roboto/Roboto-Medium.woff\") format(\"woff\");\n  font-weight: 500;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto-Medium\";\n  src: url(\"~roboto-fontface/fonts/roboto/Roboto-Medium.woff2\") format(\"woff2\"), url(\"~roboto-fontface/fonts/roboto/Roboto-Medium.woff\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url(\"~roboto-fontface/fonts/roboto/Roboto-MediumItalic.woff2\") format(\"woff2\"), url(\"~roboto-fontface/fonts/roboto/Roboto-MediumItalic.woff\") format(\"woff\");\n  font-weight: 500;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Roboto-MediumItalic\";\n  src: url(\"~roboto-fontface/fonts/roboto/Roboto-MediumItalic.woff2\") format(\"woff2\"), url(\"~roboto-fontface/fonts/roboto/Roboto-MediumItalic.woff\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url(\"~roboto-fontface/fonts/roboto/Roboto-Bold.woff2\") format(\"woff2\"), url(\"~roboto-fontface/fonts/roboto/Roboto-Bold.woff\") format(\"woff\");\n  font-weight: 700;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto-Bold\";\n  src: url(\"~roboto-fontface/fonts/roboto/Roboto-Bold.woff2\") format(\"woff2\"), url(\"~roboto-fontface/fonts/roboto/Roboto-Bold.woff\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url(\"~roboto-fontface/fonts/roboto/Roboto-BoldItalic.woff2\") format(\"woff2\"), url(\"~roboto-fontface/fonts/roboto/Roboto-BoldItalic.woff\") format(\"woff\");\n  font-weight: 700;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Roboto-BoldItalic\";\n  src: url(\"~roboto-fontface/fonts/roboto/Roboto-BoldItalic.woff2\") format(\"woff2\"), url(\"~roboto-fontface/fonts/roboto/Roboto-BoldItalic.woff\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url(\"~roboto-fontface/fonts/roboto/Roboto-Black.woff2\") format(\"woff2\"), url(\"~roboto-fontface/fonts/roboto/Roboto-Black.woff\") format(\"woff\");\n  font-weight: 900;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto-Black\";\n  src: url(\"~roboto-fontface/fonts/roboto/Roboto-Black.woff2\") format(\"woff2\"), url(\"~roboto-fontface/fonts/roboto/Roboto-Black.woff\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url(\"~roboto-fontface/fonts/roboto/Roboto-BlackItalic.woff2\") format(\"woff2\"), url(\"~roboto-fontface/fonts/roboto/Roboto-BlackItalic.woff\") format(\"woff\");\n  font-weight: 900;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Roboto-BlackItalic\";\n  src: url(\"~roboto-fontface/fonts/roboto/Roboto-BlackItalic.woff2\") format(\"woff2\"), url(\"~roboto-fontface/fonts/roboto/Roboto-BlackItalic.woff\") format(\"woff\");\n}\n/* Scroll bar scustomization */\nbody::-webkit-scrollbar {\n  width: 1rem;\n}\n\nbody::-webkit-scrollbar-track {\n  background-color: white;\n}\n\nbody::-webkit-scrollbar-thumb {\n  background-color: #1976D2;\n  border-radius: 0.5rem;\n}\n\n/* Scroll bar scustomization */\nbody {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", \"sans-serif\";\n}\n\n.horizontal-line {\n  background-color: gainsboro;\n  margin: 20px 0px;\n  height: 2px;\n}\n\n.vertical-line {\n  background-color: gainsboro;\n  margin: 0px 10px;\n  width: 2px;\n}\n\n.pageContainer {\n  padding: 0px 1rem;\n  margin-bottom: 50px;\n}\n\n.page-title-container {\n  margin: 2rem 12rem 4rem;\n}\n.page-title-container .pageTitle {\n  font-size: 22px;\n  font-weight: 600;\n  margin-bottom: 5px;\n  color: #565656;\n}\n.page-title-container .pageSubtitle {\n  font-size: 14px;\n  color: #aaaaaa;\n}\n\n.pageContent {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\n.mandatory {\n  color: #dd0031;\n}\n\n.textFeild label {\n  display: block;\n  font-size: 14px;\n  margin: 5px 0px;\n  color: #565656;\n  font-weight: 700;\n  margin-left: 15px;\n}\n\n.textFeild input {\n  height: 40px;\n  margin-right: 20px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #1976D2;\n  padding-left: 16px;\n  border: 1.5px solid gainsboro;\n  outline: none;\n  border-radius: 18px;\n}\n\n.unactiveButton {\n  height: 43px;\n  width: 8.5rem;\n  margin-top: 1.7rem;\n  background: #aaaaaa;\n  border: none;\n  color: black;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 18px;\n  outline: none;\n}\n\n.activeButton {\n  height: 43px;\n  width: 8.5rem;\n  margin-top: 1.7rem;\n  background-color: #1976D2;\n  border: none;\n  color: white;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 18px;\n  outline: none;\n  cursor: pointer;\n}\n\n.icon-button {\n  background-color: transparent;\n  border: none;\n  outline: none;\n  border-radius: 50%;\n  width: 45px;\n  height: 36px;\n  margin: 6px 25px 5px 0px;\n  cursor: pointer;\n}\n.icon-button:hover {\n  background-color: #f0f0f0;\n}\n.icon-button img {\n  max-width: 18px;\n}","@import \"../../mixins\";\n\n@include roboto-font('roboto', 'Roboto', 'RegularItalic', 400, italic);\n","@import \"../../mixins\";\n\n@include roboto-font('roboto', 'Roboto', 'Light', 300, normal);\n","@import \"../../mixins\";\n\n@include roboto-font('roboto', 'Roboto', 'LightItalic', 300, italic);\n","@import \"../../mixins\";\n\n@include roboto-font('roboto', 'Roboto', 'Thin', 100, normal);\n","@import \"../../mixins\";\n\n@include roboto-font('roboto', 'Roboto', 'ThinItalic', 100, italic);\n","@import \"../../mixins\";\n\n@include roboto-font('roboto', 'Roboto', 'Medium', 500, normal);\n","@import \"../../mixins\";\n\n@include roboto-font('roboto', 'Roboto', 'MediumItalic', 500, italic);\n","@import \"../../mixins\";\n\n@include roboto-font('roboto', 'Roboto', 'Bold', 700, normal);\n","@import \"../../mixins\";\n\n@include roboto-font('roboto', 'Roboto', 'BoldItalic', 700, italic);\n","@import \"../../mixins\";\n\n@include roboto-font('roboto', 'Roboto', 'Black', 900, normal);\n","@import \"../../mixins\";\n\n@include roboto-font('roboto', 'Roboto', 'BlackItalic', 900, italic);\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/dist/cjs.js??ref--13-3!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kininge007/Documents/Work/Angular/IMDB-Clone/src/styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map