const getObjectValue = <T, K extends keyof T>(obj: T, key: K) => {
    return obj[key]
}


/**
 * example
 */
const value = getObjectValue({
    id: 1,
    name: 'YYY',
    role: ['developer']
}, 'role')
