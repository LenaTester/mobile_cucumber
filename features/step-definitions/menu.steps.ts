import { When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import { MenuScreen } from '../pageobjects/menuScreen';

const menuScreen = new MenuScreen()

When(/^I add store$/, async () => {
    await menuScreen.selectMyStore()
})

When(/^I delete store$/, async () => {
    await menuScreen.deleteMyStore()
})

Then(/^I see the name of shop$/, async () => {
    await expect(await menuScreen.myShopTitle.element).toBeExisting()
    await expect(await menuScreen.myShopName.element.getText()).toContain('Carrefour Express')
});

Then(/^I'm notified, that no shop is selected$/, async () => {
    await expect(await menuScreen.noStoreMessage.element.getText()).toEqual('Nie wybrałeś jeszcze sklep')
});