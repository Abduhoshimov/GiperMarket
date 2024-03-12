import { useQuery } from "@tanstack/react-query"
import { Request } from "../../config/request"

export const useGetSports = () => {
    return (
        useQuery({
            queryKey: ['sport'],
            queryFn: () => Request.get('/sport').then((res) => res.data)
        })
    )
}