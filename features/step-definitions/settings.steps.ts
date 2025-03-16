import { Given } from '@wdio/cucumber-framework';

import { Screen } from '../pageobjects/screen'; 
import { MenuScreen } from '../pageobjects/menuScreen';

Given(/^I allow permissions$/, async () => {
    const screen = new Screen();
    //const menuScreen = new MenuScreen();

    try {
        const isPermissionDisplayed = await screen.allowPermissionsOption.element.waitForExist({ timeout: 5000 });
        if (isPermissionDisplayed) {
            await screen.allowPermissionsOption.click();
            await screen.updateLater.click();
        }
    } 
    catch (error) {
        return;
    }
});