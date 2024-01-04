
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

export default class UserData {
    public static async balance(id: number) {
        const response = await fetch(`https://localhost:7229/user/${id}`);
        const json = await response.json();
        return json;
    }

    public static async transactions(id: number) {
        const response = await fetch(`https://localhost:7229/transaction/${id}`);
        const json = await response.json();
        return json;
    }
}