import { POST } from "../api/auth/route"

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

export default class AuthService {
    private static baseUrl: string = 'https://localhost:7229/Auth'

    constructor() {
    }

    public static async login(username: string, password: string) {
        const form = new FormData()
        form.append('login', username)
        form.append('password', password)
        const response = await fetch(this.baseUrl, {method: 'POST', body: form})
        const json = await response.json()
        
        return json;

    }
}