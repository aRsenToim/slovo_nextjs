import axios from "axios"
import { IProduct } from "../store/types"




export const productApi = {
    async getCount() {
        const data = await axios.get<number>('http://localhost:3000/api/products?count')
        return data.data
    },
    async getIsLearnCount() {
        const data = await axios.get<number>('http://localhost:3000/api/products?islearn&count')
        return data.data
    },
    async getIsnoLearnCount() {
        const data = await axios.get<number>('http://localhost:3000/api/products?noisLearn&count')
        return data.data
    },
    async getProducts(id: string){
        let str = `${id == 'all' ? '' : `${id == 'learn' ? '?islearn' : '?noisLearn'}`}` 
        const data = await axios.get<IProduct[]>(`http://localhost:3000/api/products${str}`)
        return data.data
    },
    async createProduct(title: string, desc: string){
        const data = await axios.post('http://localhost:3000/api/products', {title, desc})
        return data.data
    },
    async getProduct(id: string){
        const data = await axios.get<IProduct>(`http://localhost:3000/api/products?id=${id}`)
        return data.data
    },
    async deleteProduct(id: string){
        const data = await axios.delete(`http://localhost:3000/api/products`, {data: {id}})
        return data.data
    },
    async changeProduct(desc: string, id: string){
        const data = await axios.patch('http://localhost:3000/api/products', {id, desc})
    }
}