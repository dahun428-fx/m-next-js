import { categorySearchApi } from "@/api/api.category";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";

const CategoryPage = ({categoryCode, categoryList}) => {

    const router = useRouter();
    const [topCategoryCode, setTopCategoryCode] = useState("");
    const [topCategoryList, setTopCategoryList] = useState(null);

    useEffect(()=>{
        setTopCategoryCode(categoryCode);
        setTopCategoryList(categoryList);
        console.log(categoryList);
    },[]);

    return (
        <div>categoryPage {topCategoryCode}</div>
    )
}


export async function getServerSideProps (context) {

    const categoryValidList = ['mech', 'mech_screw', 'mech_material', 'el_wire', 'el_control', 'fs_machining', 'fs_processing', 'fs_logistics', 'fs_health', 'fs_lab', 'press', 'mold', 'injection'];
        
    try {
        const {categoryCode} = context.query;
        if (!categoryCode || !categoryValidList.includes(categoryCode)) {
            return {
                notFound:true,
            }
        }
        
        const {data} = await categorySearchApi(categoryCode);

        return {
            props : {
                categoryCode,
                categoryList : data,
            }
        }
    } catch (error) {

        
        return Promise.reject(error);
    }
    
} 
export default CategoryPage;