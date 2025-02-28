import { queryOptions } from '@tanstack/react-query'
import { fetchParts } from '../../../fetch/fetch'

export const partsQuery = queryOptions({
    queryKey: ['parts'],
    queryFn: fetchParts,
})
