import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosPrivate from "./useAxiosPrivate";

function useFetchData(url) {
    const[data, setData] = useState(null);
    const[isPending, setIsPending] = useState(true);
    const[error, setError] = useState(null);
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();

    useEffect( async () =>{
        try{
            const respone = await axiosPrivate.get(url);

            setData(respone.data);
            setIsPending(false);
            setError(null);
        }
        catch(err){
            setError(err);
            setIsPending(false);

            if(err.respone.status == 401 || err.respone.status == 403){
                navigate("/unothorized");
            }
        }
    }, [url])

    return {data, isPending, error};
}

export default useFetchData;