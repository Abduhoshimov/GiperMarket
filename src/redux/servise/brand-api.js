import { useQuery } from "@tanstack/react-query"
import { Request } from "../../config/request"

export const useGetBrand = () => {
    return (
        useQuery({
            queryKey: ['brand'],
            queryFn: () => Request.get('/brand').then((res) => res.data)
        })
    )
}