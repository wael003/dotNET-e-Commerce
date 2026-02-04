import { fetchBaseQuery, type BaseQueryApi, type FetchArgs } from "@reduxjs/toolkit/query";
import { startLoading, stopLoading } from "../layout/uiSlice";
import { toast } from "react-toastify";
import { router } from "../routes/Routes";

type ErrorResponse = | string | { title: string } | { error: [] }

const customBaseQuery = fetchBaseQuery({
    baseUrl: '/api'
});

const sleep = () => new Promise<void>(resolve => setTimeout(resolve, 1000));

export const baseQueryWithErrorHandling = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: object) => {

    api.dispatch(startLoading());

    await sleep();
    const result = await customBaseQuery(args, api, extraOptions);

    api.dispatch(stopLoading());


    if (result.error) {
        const { status, data } = result.error;
        const responseData = data as ErrorResponse;
        switch (status) {
            case 400:
                if (typeof responseData === 'string') { toast.error(responseData); }
                else if ('errors' in responseData) {
                    throw Object.values(responseData.errors).flat().join(', ');
                }
                else toast.error(responseData.title);
                break;
            case 401:
                if (typeof responseData === 'object' && 'title' in responseData)
                    toast.error((responseData.title))
                break;
            case 404:
                if (typeof responseData === 'object' && 'title' in responseData)
                    router.navigate('/not-found')
                break;
            case 500:
                if (typeof responseData === 'object')
                    router.navigate('/server-error', {state: {error: responseData}})
                break;
            default:
                break;


        }

    }

    return result;
}