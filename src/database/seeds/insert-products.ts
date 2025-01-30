import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("products").del()

    // Inserts seed entries
    await knex("products").insert([
        { name: "Nhoque quatro queijos", price: 45 },
        { name: "Isca de Frango", price: 60 },
        { name: "Tilápia com Alcaparras", price: 75 },
        { name: "Bolinho de Mandioca", price: 36 },
        { name: "Escondidinho de carne de sol", price: 50 },
        { name: "Executivo de frango grelhado", price: 80 },
        { name: "Caldo de palmito", price: 15 },
        { name: "Refrigerante Lata", price: 7 },
    ]);
};
