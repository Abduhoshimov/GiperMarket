import { useQuery } from "@tanstack/react-query"
import { Request } from "../../config/request"

export const useGetAll = () => {
    return (
        useQuery({
            queryKey: ['all'],
            queryFn: () => Request.get('/all').then((res) => res.data)
        })
    )
}