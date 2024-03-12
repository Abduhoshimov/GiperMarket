import { useQuery } from "@tanstack/react-query"
import { Request } from "../../config/request"

export const useGetSteeringWheel = () => {
    return (
        useQuery({
            queryKey: ['steeringWheel'],
            queryFn: () => Request.get('/steeringWheel').then((res) => res.data)
        })
    )
}