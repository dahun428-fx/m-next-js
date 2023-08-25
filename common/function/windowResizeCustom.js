import { useState } from "react";
import { useEffect } from "react";

const WindowResizeCustom = () => {
    const addBodyClass = className => document.body.classList.add(className);
    const removeBodyClass = className => document.body.classList.remove(className);

    const [VNwindowNarrowWide, setVNwindowNarrowWide] = useState(false);
    const [VNwindowNarrow, setVNwindowNarrow] = useState(false);
    const VNwindowSwithBorder = 1380;

    useEffect(()=>{
        // if(typeof window !== 'undefined') {
            window.addEventListener('resize', VNwindowSizeFit);
            return()=>{
                window.removeEventListener('resize', VNwindowSizeFit);
            }
        // }
    },[]);

    const VNwindowSizeFit = () => {
        let windowInnerWidth = window.innerWidth + 17;
        // console.log('VNwindowSizeFit ', windowInnerWidth, windowInnerWidth < VNwindowSwithBorder)
        if(windowInnerWidth < VNwindowSwithBorder) {
            // if(!VNwindowNarrow) {
            //     setVNwindowNarrow(true);
                addBodyClass('page1');
                removeBodyClass('page2');
            // }
        } else {
            // if(VNwindowNarrow) {
                setVNwindowNarrow(false);
                addBodyClass('page2');
                removeBodyClass('page1');
            // }
        }

    }
}
export default WindowResizeCustom;