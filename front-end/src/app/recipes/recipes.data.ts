export interface Recipe {
    title: string,
    method: string,
    ingredients: { name: string, amount: number, measurement: string }[], // Array of objects
    image?: string // URL
};
