import { expect } from 'chai';
import { Bank } from "./bank";
import { suite, test} from "mocha-typescript";

@suite
class BankTests {

    @test 'should throw error when creating duplicate name account'() {
        const bank = new Bank();
        bank.createNewAccount('Danny');

        expect(bank.createNewAccount.bind(bank, 'Danny')).throws('account already exist');
    }

    @test 'should get 0 balance amount for new account'() {
        const bank = new Bank();
        bank.createNewAccount('Danny');

        expect(bank.getBalance('Danny')).to.be.equal(0);
    }

    @test 'should throw error for getBalance for unknown account'() {
        const bank = new Bank();

        expect(bank.getBalance.bind(bank, 'Danny')).throws('account not found');
    }

    @test 'should withdraw 100 and set balance to -100 for new account'() {
        const bank = new Bank();
        bank.createNewAccount('Danny');

        bank.withdrawMoney('Danny', 100);

        expect(bank.getBalance('Danny')).to.be.equal(-100);
    }

    @test 'should throw error for withdraw for unknown account'() {
        const bank = new Bank();

        expect(bank.withdrawMoney.bind(bank, 'Danny', 100)).throws('account not found');
    }
}