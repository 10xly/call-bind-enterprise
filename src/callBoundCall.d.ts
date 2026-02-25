declare const callBoundCall: {
  <T, A extends readonly unknown[], R>(
    target: (this: T, ...args: A) => R,
    thisArg: T,
    ...args: A
  ): R
}

export = callBoundCall
