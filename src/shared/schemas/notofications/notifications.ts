import {gql} from "@shared/lib/types/__generated-types__";

export const NOTIFICATIONS = gql(`
subscription Notification($userId: Float!) {
  notification(userId: $userId) {
    id
    auctionId
    userId
    message
    isRead
    typeNotifi
  }
}`)