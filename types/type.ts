export type WorkExDTO={
    image:string
    position:string
    company:string
    jobDesk:Array<string> 
    tech:Array<string>
    startDate:string
    endDate:string
}

export type ProjectDTO={
    image:string
    title:string
    description:string
    tech:Array<string>
    linkGithub:string | ""
    linkDemo:string | ""
    isDemo:boolean
    isGithub:boolean
}
export type ProfileDTO={
    image:string
    headers: string
    description:string
    location:string
    position:string
    available:boolean
    whatsapp:string
    cv:string

}

export type TechStack={
    tech:string
    name:string

}