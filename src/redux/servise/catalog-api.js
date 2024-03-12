import { useQuery } from "@tanstack/react-query"
import { Request } from "../../config/request"

export const useGetCatalog = () => {
    return (
        useQuery({
            queryKey: ['catalog'],
            queryFn: () => Request.get('/catalog').then((res) => res.data)
        })
    )
}