function _arrayLikeToArray(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,a=new Array(t);e<t;e++)a[e]=r[e];return a}function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||_unsupportedIterableToArray(r)||_nonIterableSpread()}function _unsupportedIterableToArray(r,t){if(r){if("string"==typeof r)return _arrayLikeToArray(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(r,t):void 0}}var inputs=document.querySelectorAll(".number__form--input"),arr=[];inputs.forEach((function(r){r.addEventListener("blur",(function(){var r;arr.length=0,inputs.forEach((function(r){arr.push(parseFloat(r.value))}));var t=(r=Math).max.apply(r,_toConsumableArray(arr));document.getElementById("biggestNumber").textContent=t}))}));
//# sourceMappingURL=index.a6c594b0.js.map
