

export abstract class HttpAdapter {

  abstract get<T> (url: string, options?: Record<string, unknown>): Promise<T>;
  abstract post<T> (url: string, body?: any): Promise<T>;

}