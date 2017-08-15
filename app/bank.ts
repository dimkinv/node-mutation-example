import { Account } from './account';

export class Bank {
    private accounts: Account[];

    constructor() {
        this.accounts = [];
    }

    createNewAccount(owner: string) {
        this.accounts.push(new Account(owner));
    }

    getBalance(owner: string): number {
        const account = this.getAccount(owner);
        if (!account) {
            throw new Error('account not found');
        }

        return account.balance;
    }

    withdrawMoney(owner: string, amount: number): void {
        const account = this.getAccount(owner);
        if (!account) {
            throw new Error('account not found');
        }

        account.balance -= amount;
    }

    private getAccount(owner: string): Account | null {
        const accounts = this.accounts.filter(a => a.owner === owner);
        return accounts.length > 0 ? accounts[0] : null;
    }
}