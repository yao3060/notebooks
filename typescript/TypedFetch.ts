const TFetch = <T>(url: string): Promise<T> => {
    return fetch(url).then(res => res.json())
}

/**
 * example
 */
const response =  await TFetch<{id: number}>('/test')