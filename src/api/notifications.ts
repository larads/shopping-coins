import { api } from "@/lib/axios"

export interface NotificationProps {
    id: string
    userId: string
    message: string
    send_date: string
    estimated_arrival_date: string
}

export async function getNotifications(userId: string) {
    const response = await api.get('notifications', {
        params: {
            user_id: userId,
        },
    })
    return response.data
}
