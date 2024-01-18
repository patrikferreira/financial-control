
// requisição de front para back https
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

export default class UserData {
    public static async getUserData(id: number) {
        try {
            const response = await fetch(`https://localhost:7229/user/${id}`);
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
            
            const response = await fetch(`https://localhost:7229/transaction/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Secret': "H%vWA<XW?4IkH5Fm",
                },
                body: JSON.stringify(newTransaction)
            });

            const json = await response.json()

            return json
        }
        catch(error: any) {
            console.error(error.message)
        }
    }

    public static async deleteTransaction(idTransaction: number) {
        try {
            const response = await fetch(`https://localhost:7229/transaction/${idTransaction}`, {
                method: 'DELETE',
                headers: {
                    'Secret': "H%vWA<XW?4IkH5Fm",
                }
            })

            return true;
        }
        catch (error: any) {
            console.error(error.message)
            return false;
        }
    }
}


