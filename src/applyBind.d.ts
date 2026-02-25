declare function applyBind<F extends (...args: any[]) => any>(
  fn: F,
): (thisArg: ThisParameterType<F>, args?: Parameters<F>) => ReturnType<F>

declare function applyBind<F extends (...args: any[]) => any>(
  fn: F,
  thisArg: ThisParameterType<F>,
): (args?: Parameters<F>) => ReturnType<F>

declare function applyBind<F extends (...args: any[]) => any>(
  fn: F,
  thisArg: ThisParameterType<F>,
  args: Parameters<F>,
): () => ReturnType<F>

export = applyBind
