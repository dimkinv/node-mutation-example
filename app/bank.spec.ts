import { expect } from 'chai';
import { Bank } from "./bank";
import { suite, test } from "mocha-typescript";

@suite
class BankTests {
    @test 'should get 0 balance amount for new account'() {
        const bank = new Bank();
        bank.createNewAccount('Danny');

        expect(bank.getBalance('Danny')).to.be.equal(0);
    }

    @test 'should throw error on get balance when account not found'(){
        const bank = new Bank();

        expect(bank.getBalance.bind(bank, 'Danny')).to.throw('account not found');
    }

    @test 'should withdraw 100 and set balance to -100 for new account'() {
        const bank = new Bank();
        bank.createNewAccount('Danny');

        bank.withdrawMoney('Danny', 100);

        expect(bank.getBalance('Danny')).to.be.equal(-100);
    }

    @test 'should withdraw throw error on withdrawMoney when account not found'() {
        const bank = new Bank();

        expect(bank.withdrawMoney.bind(bank, 'Danny', 100)).to.throw('account not found');
    }
}