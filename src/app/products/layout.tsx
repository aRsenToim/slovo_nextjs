import { NavbarProduct } from "@/entities/products";



export default function({children}: {children: React.ReactNode;}){
    return <div style={{display: "flex", alignItems: "flex-start", margin: "10px"}}>
        <NavbarProduct/>
        <div>
            {children}
        </div>
    </div>
}