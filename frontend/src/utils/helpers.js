export function generateToken () {
    let token = localStorage.token
    if (!token) token = localStorage.token = Math.random().toString(36).substr(-8)
    return token
}

export const token = generateToken()