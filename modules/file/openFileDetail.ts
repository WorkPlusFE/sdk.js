import * as core from '../core';
import { WORKPLUS_FILE } from '../constants';
import { ShowFileParams } from '../types/file';

/**
 * 打开文件详情
 * @description 通过指定 mediaId, fileName 等参数, 打开文件详情界面
 * @param {ShowFileParams} [options]
 * @returns {void}
 */
export default function openFileDetail(options: ShowFileParams): void {
  return core.execSync<ShowFileParams>(WORKPLUS_FILE, 'showFile', [options]);
}
