export class Fetcher {
    public static async fetchJSONFromSource<T>(
        source: string,
        params: {},
    ): Promise<T> {
        const req = await fetch(source, params);
        const data = await req.json();
        return data as T;
    }

    public static async fetchStringFromSource(
        source: string,
        params: {},
    ): Promise<string> {
        try {
            const req = await fetch(source, params);
            return await req.text()
        } catch (e) {
            return e as string
        }
    }
}
