export class AppError extends Error {
  public code: string;

  constructor(code: string, message?: string) {
    super(message);
    this.code = code;
  }
}
