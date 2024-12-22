import { NextResponse } from "next/server";
import { createProduct, deleteProduct, getProduct, getProducts, setProduct } from "./servies";



export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)

    const products = await getProducts()
    const isLearn = await searchParams.has('islearn')
    const noisLearn = await searchParams.has('noisLearn')
    const count = await searchParams.has('count')
    const id = await searchParams.get('id')
    const len = await searchParams.get('len')

    if(id){
        const product = await getProduct(id)
        return NextResponse.json(product)
    }


    if (isLearn && count) {
        return NextResponse.json(products.filter(item => item.isLearn).length)
    } else if (isLearn) {
        return NextResponse.json(products.filter(item => item.isLearn))
    } else if (noisLearn && count) {
        return NextResponse.json(products.filter(item => !item.isLearn).length)
    } else if (noisLearn) {
        return NextResponse.json(products.filter(item => !item.isLearn))
    }



    if (len) {
        let arr = []
        for (let index = 0; index < +len; index++) {
            if (+len > products.length) break
            arr.push(products[index])
        }
        return NextResponse.json(arr)
    }

    if (count) {
        return NextResponse.json(products.length)
    }



    return NextResponse.json(products)
}


export async function POST(req: Request) {
    const data = await req.json()
    createProduct(data.title, data.desc).then(() => {
        return NextResponse.json({ mes: "good" })
    }).catch(() => {
    })
    return NextResponse.json({ mes: "pizda" })

}
export async function PATCH(req: Request) {
    const data = await req.json()
    
    setProduct(data.id, data.isLearn, data.desc).then(() => {
        return NextResponse.json({ mes: "good" })
    })
    return NextResponse.json({ mes: "pizda" })
}

export async function DELETE(req: Request) {
    const data = await req.json()
    deleteProduct(data.id).then(() => {
        return NextResponse.json({ mes: "good" })
    })
    return NextResponse.json({ mes: "pizda" })
}