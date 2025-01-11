export interface EventPageDto {
    id: string,
    eventName: string,
    eventType: string,
    date: string,
    address: string,
    description: string,
    requirements: string,
    funding: number,
    status: string,
}

export interface EventLocationDto{
    id: string,
    type: string,
    longitude: number,
    latitude: number
}

export interface SidebarEventDto {
    id: string,
    eventName: string,
    eventType: string,
    startDate: string,
    endDate: string,
    location: [number, number],
    status: string
}