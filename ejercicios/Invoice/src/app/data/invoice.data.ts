import { Invoice } from "../model/Invoice";

export const invoiceData:Invoice={
    id:"001" ,
    company:{
        ruc:"179229574001",
        name:"Clear Minds Consultores",
        direccion:{
            city:"Quito",
            principalStreet:"Juan Pablo Sanz",
            secondaryStreet:"Inaquito",
            code:"N-57",
        },
    },
    customer:{
        id:"1722813332",
        name:"Jose",
        surname:"Valdez",
        adress:{
            city:"Sangolqui",
            principalStreet:"Av. Luis Cordero",
            secondaryStreet:"Pasaje Bobonaza",
            code:"N-117",
        },
    },
    item:[
        {   id:100,
            product:{
                id:500,
                name:"Papas Rufles",
                price:0.50,
                description:"Las papas mas sabrosonas",
                category:{
                    id:12,
                    name:"Papas",
                },
            },
            quantity:23,
        },
        {   id:101,
            product:{
                id:550,
                name:"Doritos",
                price:0.60,
                description:"De queso",
                category:{
                    id:13,
                    name:"Nachos",
                },
            },
            quantity:50,
        },
        {   id:102,
            product:{
                id:570,
                name:"Cachitos",
                price:0.30,
                description:"Para Kchudos",
                category:{
                    id:14,
                    name:"Frituras",
                },
            },
            quantity:100,
        },
    ],
}