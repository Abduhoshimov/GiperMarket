import { useQuery } from "@tanstack/react-query"
import { Request } from "../../config/request"

export const useGetwashingM = () => {
    return (
        useQuery({
            queryKey: ['washingM'],
            queryFn: () => Request.get('/washingM').then((res) => res.data)
        })
    )
}