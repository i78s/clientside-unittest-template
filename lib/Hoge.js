"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hoge = (function () {
    function Hoge(hoge) {
        _classCallCheck(this, Hoge);

        this.hoge = hoge;
    }

    _createClass(Hoge, [{
        key: "setHoge",
        value: function setHoge(val) {
            this.hoge = val;
        }
    }, {
        key: "getHoge",
        value: function getHoge() {
            return this.hoge;
        }
    }]);

    return Hoge;
})();

exports["default"] = Hoge;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Ib2dlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTSxJQUFJO0FBQ0ssYUFEVCxJQUFJLENBQ00sSUFBSSxFQUFFOzhCQURoQixJQUFJOztBQUVGLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0tBQ3BCOztpQkFIQyxJQUFJOztlQUlDLGlCQUFDLEdBQUcsRUFBRTtBQUNULGdCQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztTQUNuQjs7O2VBQ00sbUJBQUc7QUFDTixtQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3BCOzs7V0FUQyxJQUFJOzs7cUJBWUssSUFBSSIsImZpbGUiOiJIb2dlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgSG9nZSB7XG4gICAgY29uc3RydWN0b3IoaG9nZSkge1xuICAgICAgICB0aGlzLmhvZ2UgPSBob2dlO1xuICAgIH1cbiAgICBzZXRIb2dlKHZhbCkge1xuICAgICAgICB0aGlzLmhvZ2UgPSB2YWw7XG4gICAgfVxuICAgIGdldEhvZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhvZ2U7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb2dlOyJdfQ==