import ProtectRoute from "@/Hoc/ProtectRoute";
import Layout from "@/Layout/layout";
import { AxiosInterceptor } from "@/lib/axiosInterceptor";
import { Suspense } from "react";
import '../styles/common.css';

const MyApp = ({Component, pageProps}) => {

    return (
        <Suspense>
            <AxiosInterceptor>
                <ProtectRoute >
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ProtectRoute>
            </AxiosInterceptor>
        </Suspense>
    )
}

export default MyApp;