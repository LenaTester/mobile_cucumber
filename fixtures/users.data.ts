export interface IUser {
    [property: string]: {[key: string]: string}
}

export const users: IUser = {
        // correct creds for login
        user1: {
            identifier: '783904520',
            password: 'SO-GoodNews1@',
        },

        // incorrect phone
        'incorrect phone': {
            identifier: '111111111',
            password: 'SO-GoodNews1@',
        },

        // invalid email format
        'incorrect email': {
            identifier: 'test-test.gmail.com',
            password: 'SO-GoodNews1@',
        },

        // week password
        'week password': {
            identifier: 'test.gmail.com',
            password: '123',
        },

        // empty creds
        'empty creds': {
            identifier: '',
            password: '',
        },
}