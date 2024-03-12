import { useQuery } from "@tanstack/react-query"
import { Request } from "../../config/request"

export const useGetAds = () => {
    return (
        useQuery({
            queryKey: ['ads'],
            queryFn: () => Request.get('/ads').then((res) => res.data)
        })
    )
}