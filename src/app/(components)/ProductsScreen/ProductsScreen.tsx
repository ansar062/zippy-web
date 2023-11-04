import ProductItemCard from "../Cards/ProductItemCard";

const DESC = 'Sesame-seed bun embraces spicy krunch fillet, lettuce, and mayo perfection'

export default function ProductsScreen(){
    return (
        //just checking the ProductCard design
        <div className="flex justify-center items-center min-h-screen bg-white py-[10rem] px-5 space-x-10">
            <ProductItemCard name='Krunch Burger' desc={DESC} price='300' imgUrl='/images/screenshot-202308021130211.png'/>
            <ProductItemCard name='Twister' desc={DESC} price='300' imgUrl='/images/image-10.png'/>
            <ProductItemCard name='Rice N Chicken' desc={DESC} price='500' imgUrl='/images/image-9.png'/>
            
        </div>
    )
}