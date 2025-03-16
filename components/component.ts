import { WaitForOptions} from 'webdriverio'
import { browser } from '@wdio/globals'

export class Component {
    private componentOptions

    constructor(props: {selector: string} ) {
        this.componentOptions = props
    }

    get selector() {
        return this.componentOptions.selector
    }

    get element() {
        return browser.$(this.selector)
    }

    get elements() {
        return browser.$$(this.selector)
    }

    async click() {
        await this.element.click()
    }

    async getText() {
        await this.element.getText()
    }

    async setValue(value: string) {
        await this.element.setValue(value)
    }

    async waitForDisplayed(options?: WaitForOptions) {
        await this.element.waitForDisplayed(options)
    }

    async isDisplayed() {
        return this.element.isDisplayed()
    }
 }

