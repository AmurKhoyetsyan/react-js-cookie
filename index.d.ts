/**
 * react-js-cookie created in 2023
 * @constructor
 */
declare function Cookie(): void;

declare namespace Cookie {
    export var get: (key: any) => string;
    export var set: (key: any, value: any, exdays?: number) => void;
    export var contains: (key: any) => boolean;
    var _a: (key: any) => void;
    export { _a as delete };
}

export default Cookie;
