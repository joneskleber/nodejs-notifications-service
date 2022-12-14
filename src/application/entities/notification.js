"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.Notification = void 0;
var Notification = /** @class */ (function () {
    function Notification(props) {
        var _a;
        this.props = __assign(__assign({}, props), { createdAt: (_a = props.createdAt) !== null && _a !== void 0 ? _a : new Date() });
    }
    Object.defineProperty(Notification.prototype, "recipientId", {
        get: function () {
            return this.props.recipientId;
        },
        //   recipientId
        set: function (recipientId) {
            this.props.recipientId = recipientId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Notification.prototype, "content", {
        get: function () {
            return this.props.content;
        },
        // content
        set: function (content) {
            this.props.content = content;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Notification.prototype, "category", {
        get: function () {
            return this.props.category;
        },
        // category
        set: function (category) {
            this.props.category = category;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Notification.prototype, "readAt", {
        get: function () {
            return this.props.readAt;
        },
        // readAt
        set: function (readAt) {
            this.props.readAt = readAt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Notification.prototype, "createdAt", {
        // createdAt
        get: function () {
            return this.props.createdAt;
        },
        enumerable: false,
        configurable: true
    });
    return Notification;
}());
exports.Notification = Notification;
