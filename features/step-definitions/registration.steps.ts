import { When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import { RegistrationScreen } from '../pageobjects/registrationScreen';
import { users} from '../../fixtures/users.data'

const registrationScreen = new RegistrationScreen()

When(/^I try to register with (incorrect|week|empty) (phone|email|password|creds)$/, async (wrong:string, type:string) => {
    switch(`${wrong} ${type}`) {
        case 'incorrect phone':
            await registrationScreen.registrationWithPhone(users[`${wrong} ${type}`].identifier, users[`${wrong} ${type}`].password);
            break;
        case 'incorrect email':
            await registrationScreen.registrationWithEmail(users[`${wrong} ${type}`].identifier, users[`${wrong} ${type}`].password);
            break;
        case 'week password':
            await registrationScreen.registrationWithEmail(users[`${wrong} ${type}`].identifier, users[`${wrong} ${type}`].password);
            break;
        case 'empty creds':
            await registrationScreen.registrationWithPhone(users[`${wrong} ${type}`].identifier, users[`${wrong} ${type}`].password);
            break;
        default:
            throw new Error(`Unsupported registration type: ${wrong+' '+type}`);
    }
});

Then(/^wrong phone number message is shown$/, async () => {
    await expect(await registrationScreen.wrongPhoneEmailMessage.element.getText()).toEqual('Niepoprawny numer telefonu')
    await driver.back()
});

Then(/^registration is not possible$/, async () => {
    await expect(await registrationScreen.createAccountButton.element).not.toBeEnabled()
    await driver.back()
});

