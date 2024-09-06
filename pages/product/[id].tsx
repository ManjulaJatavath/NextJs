import { useRouter } from "next/router";


const Product=()=>{
    const router =useRouter();
    const { id } = router.query

    return (
        <div className="items-center justify-center">
        <h1 className="text-4xl">Product ID: {id}</h1>
      </div>
    )
}
export default Product;