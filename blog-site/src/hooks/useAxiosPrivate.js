import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";

const useAxiosPrivate = () => {

    useEffect(() => {

        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
        }
    }, [])

    return axiosPrivate;
}

export default useAxiosPrivate;