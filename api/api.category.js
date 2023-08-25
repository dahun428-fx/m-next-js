import axiosApi from '../lib/axiosInterceptor';

export const categorySearchApi = async (categoryCode) => {
    return await axiosApi({
        method : 'get',
        url : '/category/search',
        params: {
            categoryCode,
            field:'@default',
            ancesterType : 1,
            categoryLevel : 0,
            page : 1,
            pageSize : 30,
            filterType : 1,
            requestNarrowingType : 1,
        }
    })
}