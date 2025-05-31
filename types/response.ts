
import { ProfileDTO, ProjectDTO, TechStack, WorkExDTO } from "./type"

type ApiResponse<T>={
    message:string
    data:T
}

export type ProfileResponse = ApiResponse<ProfileDTO>
export type ProjectResponse = ApiResponse<ProjectDTO>;
export type WorkExResponse = ApiResponse<WorkExDTO>;
export type TechResponse = ApiResponse<TechStack>;

export type DeleteResponse = {
    message:string
}