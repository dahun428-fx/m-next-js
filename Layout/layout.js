import Navbar from "@/Components/Common/Navbar";
import WindowResizeCustom from "@/common/function/windowResizeCustom";

const Layout = (props) => {

    WindowResizeCustom();

    return (
        <>
            <div className="l-wrapper">
                <Navbar {...props} />
                {props.children}
            </div>
        </>
    )
}
export default Layout;