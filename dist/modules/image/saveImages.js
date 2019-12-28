"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 保存图片
 * @description 传输图片地址，保存图片
 * @param {ExecSyncOptions<SaveImageItem[]>} options
 * @returns {void}
 */
function saveImages(options) {
    return core.execSync(constants_1.WORKPLUS_IMAGE, 'saveImages', options.data);
}
exports.default = saveImages;
