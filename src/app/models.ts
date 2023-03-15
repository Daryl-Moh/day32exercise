export interface Inventory {
    name: string
    unitPrice: number
    image: string
}

export interface Selection extends Inventory {
    quantity: number
}

export interface Cart {
    name: string
    address: number
    delivery: string
}