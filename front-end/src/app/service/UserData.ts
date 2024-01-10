
// requisição de front para back https
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

export default class UserData {
    public static async balance(id: number) {
        const response = await fetch(`https://localhost:7229/user/${id}`);
        const json = await response.json();
        return json;
    }

    public static async transactions(id: number) {
        try {
            const response = await fetch(`http://localhost:3000/api/transaction/${id}`);
            const json = await response.json();
            console.log(json)
            return json;
        }
        catch (error: any) {
            console.error(error.message)
        }
    }
}


