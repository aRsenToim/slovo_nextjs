'use client'

import { CreateForm, learnStore } from "@/entities/products";



export default function() {
    const {createProduct} = learnStore()
    return <CreateForm createProduct={createProduct}/>  
}


