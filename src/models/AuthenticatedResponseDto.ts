export interface AuthenticatedResponseDto<T> {
    token: string;
    data: T;
}