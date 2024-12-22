"use client"

import { learnStore, ProductCard } from "@/entities/products"
import React, { useEffect } from "react"




export default function ({ params }: { params: { id: string } }) {
    const {id} = React.use(params)
    const { setProducts, products, productType } = learnStore()
    useEffect(() => {
        setProducts(id)
    }, [])
    return <div style={{margin: "10px 10px"}}>
        {products && <div style={{display: "flex", flexWrap: "wrap"}}>{products.map(item => <ProductCard id={item.id} key={item.id} title={item.title} isLearn={item.isLearn}/>)}</div>}
    </div>
}