export interface SidebarEventDto {
    id: string,
    eventName: string,
    eventType: string,
    startDate: string,
    endDate: string,
    location: [number, number],
    status: string
}