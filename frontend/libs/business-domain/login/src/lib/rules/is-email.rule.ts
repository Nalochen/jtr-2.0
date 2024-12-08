export function isEmail(value: string | null) {
    return typeof value === 'string' && value.includes('@');
}
