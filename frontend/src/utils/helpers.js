export function generateToken() {
    let token = localStorage.token
    if (!token) token = localStorage.token = Math.random().toString(36).substr(-8)
    return token
}

export function formatTimestamp(timestamp) {
    return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp)
}

export function objectToArray(object) {
    return object ? Object.values(object) : []
}

export const token = generateToken()