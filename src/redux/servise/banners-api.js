import { useQuery } from "@tanstack/react-query"
import { Request } from "../../config/request"

export const useGetBanner = () => {
    return (
        useQuery({
            queryKey: ['banners'],
            queryFn: () => Request.get('/banners').then((res) => res.data)
        })
    )
}