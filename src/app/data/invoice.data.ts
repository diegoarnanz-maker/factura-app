import { Invoice } from "../models/invoice";

export const invoiceData: any = {
    // any es un tipo de dato generico

// Introducimos los datos manualmente de la factura

    id: 1,
    name: 'Componentes de PC',
    client: {
        name: 'Andres',
        lastname: 'Doe',
        address: {
            country: 'USA',
            city: 'Los Angeles',
            street: 'One Street',
            number: 15,
        }
    },
    company: {
        name: 'New Age',
        fiscalNumber: 3123123,
    },
    items: [
        {
            id: 1,
            product: 'Cpu Intel i9',
            price: 499,
            quantity: 1
        },
        {
            id: 2,
            product: 'Corsair Teclado Mecanico',
            price: 199,
            quantity: 2
        },
        {
            id: 3,
            product: 'Monitor Asus',
            price: 499,
            quantity: 5
        },
    ]
}