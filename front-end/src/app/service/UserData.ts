
// requisição de front para back https
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

export default class UserData {
    public static async getUserData(id: number) {
        try {
            const response = await fetch(`http://localhost:3000/api/user/${id}`);
            const json = await response.json();

            return json;
        }
        catch (error: any) {
            console.error(error.message)
        }
    }

    public static async getTransactionsData(id: number) {
        try {
            const response = await fetch(`http://localhost:3000/api/transaction/${id}`);
            const json = await response.json();
            return json;
        }
        catch (error: any) {
            console.error(error.message)
        }
    }

    public static async addTransaction(id: number, description: string, amount: number, notes: string, isPaid: boolean, transactionType: number, inComeCategoryId: number, outComeCategoryId: number) {
        try {        
            const newTransaction = {
                UserId: id,
                Description: description,
                Amount: amount,
                Notes: notes,
                IsPaid: isPaid,
                TransactionType: transactionType,
                InComeCategoryId: inComeCategoryId,
                OutComeCategoryId: outComeCategoryId,
            }
            

            const response = await fetch(`http://localhost:3000/api/transaction/${id}`, {
                method: 'POST',
                body: JSON.stringify(newTransaction)
            });

            const json = response.json()
            console.log(json)

            return json
        }
        catch(error: any) {
            console.error(error.message)
        }
    }
}


