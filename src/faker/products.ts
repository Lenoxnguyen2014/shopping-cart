import { faker } from '@faker-js/faker';

export const product = () => {
    const product = { isbn: faker.commerce.isbn(), name: faker.commerce.product(), price: faker.commerce.price() }
    return product
}

export const generateProducts = (amount: number) => {
    const list_of_prodcts = []
    for (let i = 0; i < amount; i++) {
        list_of_prodcts.push(product())
    }
    return list_of_prodcts
}