import { useQuery } from "@tanstack/react-query"
import { Request } from "../../config/request"

export const useGetNotebooks = () => {
    return (
        useQuery({
            queryKey: ['notebook'],
            queryFn: () => Request.get('/notebook').then((res) => res.data)
        })
    )
}