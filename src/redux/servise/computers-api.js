import { useQuery } from "@tanstack/react-query"
import { Request } from "../../config/request"

export const useGetComputers = () => {
    return (
        useQuery({
            queryKey: ['computers'],
            queryFn: () => Request.get('/computers').then((res) => res.data)
        })
    )
}