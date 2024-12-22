import { prisma } from './../../../../lib/prisma';


export async function getProducts() {
    return prisma.product.findMany({

    })
}
export async function createProduct(title: string, desc: string) {
    return prisma.product.create({
        data: {
            title, 
            desc,
            id: `${Math.ceil(Math.random()* 100003012)}ads`,
            isLearn: false
        }
    })
}

export async function setProduct(id: string, isLearn?: boolean, desc?: string) {
    if(desc){
        return prisma.product.update({
            where: {id},
            data: {
                desc,
            }
        })
    }
    return prisma.product.update({
        where: {id},
        data: {
            isLearn: isLearn,
        }
    })
}

export async function deleteProduct(id: string) {
    return prisma.product.delete({
        where:{id}
    })
}


export async function getProduct(id: string) {
    return prisma.product.findFirst({
        where: {id}
    })
}