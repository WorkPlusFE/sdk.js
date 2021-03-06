"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 单选联系人
 *
 * @export
 * @param {SingleContactParams & ContactOption<SingleContactRes>} [options]
 * @returns {Promise<SingleContactRes>}
 */
function getSingleContact(options) {
    var args = {
        hideMe: (options === null || options === void 0 ? void 0 : options.hideMe) || false,
        filterSenior: (options === null || options === void 0 ? void 0 : options.filterSenior) || 1,
    };
    return core.exec(constants_1.WORKPLUS_CONTACT, 'getContact', [args], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail, false);
}
exports.default = getSingleContact;
