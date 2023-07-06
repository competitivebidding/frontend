import { gql } from '@shared/lib/types/__generated-types__/gql'
export const ALL_NEWS = gql(`
	query GetAllNews($sortBy: String, $sortOrder: String, $skip: Int, $take: Int, $search: String) {
		news: getAllNews(sortBy: $sortBy, sortOrder: $sortOrder, skip: $skip, take: $take, search: $search) {
		  totalCount
		  items {
			id
			title
			text: description
			updatedAt
			date: createdAt
			images: imageUrl
			userId
		}
	 }
  } 
`)
