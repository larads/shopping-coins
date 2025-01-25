import { api } from "@/lib/axios"

export interface NotificationProps {
    id: string
    userId: string
    message: string
    send_date: string
    estimated_arrival_date: string
}

export async function getNotifications(userId: string): Promise<NotificationProps[]> {
    const response = await api.get(`/notifications?userId=${userId}`)
    return response.data
}
