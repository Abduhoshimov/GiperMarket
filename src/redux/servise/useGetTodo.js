import { useQuery } from '@tanstack/react-query'
import React from 'react'

export const useGetTodo = (search = "") => {
  return useQuery({
    queryKey: ["apiloop", search],
    queryFn: () => {
        return Request.get('/all', {params: {title: search}})
        .then((res) => res.data)
    }
  })
}
