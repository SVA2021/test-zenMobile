export type UserT = {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    url: string | null,
}

export type TaigaTabsT = {
    label: string,
    value: string,
    icon: string,
}

export const fakeUser: UserT = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'aaa@bbb.com',
    phone: '+7123456789',
    url: 'www.test.com'
}

export type LoginBodyT = {
    email: string,
    password: string,
}
