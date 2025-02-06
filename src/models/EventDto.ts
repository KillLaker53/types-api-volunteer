export interface EventPageDto {
    _id: string,
    eventName: string,
    eventType: string,
    date: string,
    address: string,
    description: string,
    requirements: string[],
    funding: number,
    status: string,
}

export interface EventLocationDto{
    _id: string,
    type: string,
    longitude: number,
    latitude: number
}

export interface SidebarEventDto {
    _id: string,
    eventName: string,
    eventType: string,
    startDate: string,
    endDate: string,
    location: [number, number],
    status: string
}

export interface UserEventDto {
    _id: string;
    eventName: string,
    eventType: string, 
    date: string,
    status: string,
}