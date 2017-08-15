import { Account } from './account';

export class Bank {
    private accounts: Map<string, Account>;

    constructor() {
        this.accounts = new Map();
    }

    createNewAccount(owner: string) {
        if (this.accounts.has(owner)) {
            throw new Error('account already exist');
        }

        this.accounts.set(owner, new Account('owner'));
    }

    getBalance(owner: string): number {
        const account = this.accounts.get(owner);
        if (!account) {
            throw new Error('account not found');
        }

        return account.balance;
    }

    withdrawMoney(owner: string, amount: number): void {
        const account = this.accounts.get(owner);
        if (!account) {
            throw new Error('account not found');
        }

        account.balance -= amount;
    }
}