import { create } from "zustand"
import { IProduct } from "./types"


interface IState {
    products: IProduct[]
    len: number
}

interface IAction {
    addProduct: () => {}
}

export const learnStore = create<IState & IAction>((set) => ({
   products: [],
   len: 0,
   addProduct: () => {}
}))