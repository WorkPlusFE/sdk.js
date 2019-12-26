export default class CordovaImportLib {
    private config;
    constructor(host?: string);
    get userAgent(): string;
    /**
     * 返回注入的地址
     *
     * 默认使用 local模式，当检测到是 https协议 (安卓) 或在 iframe 中打开时，强制使用 http 模式
     */
    getImportUri(): string;
    mustUseHttpModel(): boolean;
    getCurrentPlatformByUserAgent(): string;
}
