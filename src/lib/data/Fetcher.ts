export class Fetcher {
  public static async fetchJSONFromSource<T>(
    source: string,
    params: {},
  ): Promise<T> {
    const req = await fetch(source, {
        ...params,
        cache: "reload"
    });
    const data = await req.json();
    return data as T;
  }

  public static async fetchStringFromSource(
    source: string,
    params: {},
  ): Promise<string | null> {
    try {
      const req = await fetch(source, params);
      if (req.status != 200) {
        return null;
      }
      return await req.text();
    } catch (e) {
      return null;
    }
  }
}
