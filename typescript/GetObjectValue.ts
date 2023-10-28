
const getObjectValue = <T, K extends keyof K>(object: T, key: K): T[K] => {
    return object[key]
}


/**
 * example
 */
const value = getObjectValue({
    id: 1,
    name: 'YYY',
    role: ['developer']
}, 'id')
