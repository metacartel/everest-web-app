export interface ErrorWithCode extends Error {
  code?: string | number | undefined;
}
