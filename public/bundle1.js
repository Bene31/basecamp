"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Car = /*#__PURE__*/function () {
  function Car(marca, preco) {
    _classCallCheck(this, Car);

    this._marca = marca;
    this._preco = preco;
  }

  _createClass(Car, [{
    key: "marca",
    get: function get() {
      return this._marca;
    },
    set: function set(newMarca) {
      this._marca = newMarca;
    }
  }]);

  return Car;
}();

var civic = new Car('honda', 130);
console.log(civic.marca);

var Calculator = /*#__PURE__*/function () {
  function Calculator() {
    _classCallCheck(this, Calculator);
  }

  _createClass(Calculator, null, [{
    key: "sum",
    value: function sum(a, b) {
      return a + b;
    }
  }]);

  return Calculator;
}();

console.log(Calculator.sum(10, 20));

var Person = /*#__PURE__*/function () {
  function Person(firstName, secondName) {
    _classCallCheck(this, Person);

    this.firstName = firstName;
    this.secondName = secondName;
  }

  _createClass(Person, [{
    key: "fullName",
    get: function get() {
      return Person.joinNames(this.firstName, this.secondName);
    }
  }], [{
    key: "joinNames",
    value: function joinNames(firstName, secondName) {
      return "".concat(firstName, " ").concat(secondName);
    }
  }]);

  return Person;
}();

var person = new Person('Arthur', 'Terra');
console.log(person.fullName);

var Veiculo = /*#__PURE__*/function () {
  function Veiculo(rodas) {
    _classCallCheck(this, Veiculo);

    this.rodas = rodas;
  }

  _createClass(Veiculo, [{
    key: "acelerar",
    value: function acelerar() {
      console.log('acelerou');
    }
  }]);

  return Veiculo;
}();

var Moto = /*#__PURE__*/function (_Veiculo) {
  _inherits(Moto, _Veiculo);

  var _super = _createSuper(Moto);

  function Moto(rodas, capacete) {
    var _this;

    _classCallCheck(this, Moto);

    _this = _super.call(this);
    _this.capacete = capacete;
    return _this;
  }

  _createClass(Moto, [{
    key: "empinar",
    value: function empinar() {
      console.log("empinou com ".concat(this.rodas, " rodas"));
    }
  }, {
    key: "acelerar",
    value: function acelerar() {
      _get(_getPrototypeOf(Moto.prototype), "acelerar", this).call(this);

      console.log('acelerou muuuuuuuuuuuito');
    }
  }, {
    key: "taUsandoCapacete",
    value: function taUsandoCapacete() {
      if (this.capacete == true) {
        console.log('Tá usando capacete');
      } else {
        console.log('Não tá usando capacete');
      }
    }
  }]);

  return Moto;
}(Veiculo);

var bross = new Moto(2, false);
bross.empinar();
bross.acelerar();
bross.taUsandoCapacete();
