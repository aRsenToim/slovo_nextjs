import { create } from "zustand"
import { productApi } from "../api/productsApi"
import { IProduct } from "./types"

interface IState {
    count: number
    isLearnCount: number
    noisLearnCount: number
    products: IProduct[] | null
    productType: string
    product: IProduct | null
}

interface IAction {
    setInfo: () => void
    setProducts: (id: string) => void
    createProduct: (title: string, desc: string) => void
    setProduct: (id: string) => void
    deleteProduct: (id: string) => void
    changeProduct: (desc: string, id: string) => void
}

export const learnStore = create<IState & IAction>((set) => ({
    count: 0,
    isLearnCount: 0,
    productType: "",
    noisLearnCount: 0,
    products: null,
    product: null,
    setInfo: () => {
        productApi.getCount().then(data => set({ count: data }))
        productApi.getIsLearnCount().then(data => set({ isLearnCount: data }))
        productApi.getIsnoLearnCount().then(data => set({ noisLearnCount: data }))
    },
    setProducts: (id: string) => {

        productApi.getProducts(id).then(data => set({ products: data, productType: id }))
    },
    createProduct: (title: string, desc: string) => {
        productApi.createProduct(title, desc).then(() => {
        })
    },
    setProduct: (id: string) => {
        productApi.getProduct(id).then((data) => {
            set({ product: data })
        })
    },
    deleteProduct: (id: string) => {
        productApi.deleteProduct(id).then(() => {})
    },
    changeProduct(desc: string, id: string){
        productApi.changeProduct(desc, id).then(() => {
        })
    }
}))