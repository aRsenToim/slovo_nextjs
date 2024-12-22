"use client"

import { learnStore, Product } from "@/entities/products"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"




export default function ({ params }: { params: { id: string } }) {
    const { id } = React.use(params)
    const { setProduct, product, changeProduct, deleteProduct } = learnStore()
    const par = useRouter();



    const handleDelete = () => {
        deleteProduct(id)
        par.push('/')
    }

    useEffect(() => {
        setProduct(id)
    }, [])

    return <div>
        {product ? <Product changeProduct={(desc: string) => {
            changeProduct(desc, id)
            setProduct(id)
            }} deleteProduct={handleDelete} title={product.title} desc={product.desc} isLearn={product.isLearn}/> : <div>test</div>}
    </div>
}