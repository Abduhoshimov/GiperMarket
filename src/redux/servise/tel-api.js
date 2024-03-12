import { useQuery } from "@tanstack/react-query"
import { Request } from "../../config/request"

export const useGetTels = () => {
    return (
        useQuery({
            queryKey: ['phones'],
            queryFn: () => Request.get('/phones').then((res) => res.data)
        })
    )
}