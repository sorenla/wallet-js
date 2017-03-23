// polyfill for setPrototypeOf
Object.setPrototypeOf = Object.setPrototypeOf || function(obj, proto) {
  obj.__proto__ = proto;
  return obj;
};

export class ConnectionError extends Error {
    constructor(message?: string) {
        super(message); // 'Error' breaks prototype chain here
        Object.setPrototypeOf(this, new.target.prototype); /* tslint:disable-line */// restore prototype chain
    }
};

export class NoResponseError extends Error {
    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype); // tslint:disable-line
    }
};

export class AuthorizationError extends Error {
    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype); // tslint:disable-line
    }
};

// tslint:disable
declare global {
    interface ObjectConstructor {
        setPrototypeOf: Function;
    }
}
// tslint:enable
