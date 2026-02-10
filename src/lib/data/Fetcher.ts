export class Fetcher {
  public static async fetchJSONFromSource<T>(
    source: string,
    params: {},
  ): Promise<T> {
    const req = await fetch(source, params);
    const data = await req.json();
    return data as T;
  }
}
