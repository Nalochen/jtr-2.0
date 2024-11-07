export const IDLE: unique symbol = Symbol('Loading State: Idle');
export const LOADING: unique symbol = Symbol('Loading State: Loading');
export const FAILED: unique symbol = Symbol('Loading State: Failed');

export type LoadingState = typeof IDLE | typeof LOADING | typeof FAILED;

export function isLoaded<T>(value: LoadingState | T): value is T {
  return value !== IDLE && value !== LOADING && value !== FAILED;
}

export function isFailed(
  value: LoadingState | unknown
): value is typeof FAILED {
  return value === FAILED;
}
