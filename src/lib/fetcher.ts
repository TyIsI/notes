import { FetcherException } from './exceptions/FetcherException'

export const fetcher = async (
    resource: RequestInfo | URL,
    init?: RequestInit
): Promise<unknown> => {
    const result = await fetch(resource, init)

    if (!result.ok) {
        const error = new FetcherException('Error while fetching')

        // eslint-disable-next-line @typescript-eslint/prefer-destructuring -- Fuck that
        error.info = result.statusText

        throw error
    } else {
        return result.headers.has('Content-Type') &&
            result.headers.get('Content-Type') === 'application/json'
            ? await result.json()
            : await result.text()
    }
}
