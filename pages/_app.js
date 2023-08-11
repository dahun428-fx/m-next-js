import ProtectRoute from "@/Hoc/ProtectRoute";
import { AxiosInterceptor } from "@/lib/axiosInterceptor";
import { Suspense } from "react";

const MyApp = ({Component, pageProps}) => {

    return (
        <Suspense>
            <AxiosInterceptor>
                <ProtectRoute >
                    <Component {...pageProps} />
                </ProtectRoute>
            </AxiosInterceptor>
        </Suspense>
    )
}

export default MyApp;