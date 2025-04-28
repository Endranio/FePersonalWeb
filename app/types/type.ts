export type WorkExDTO={
    image:string
    position:string
    company:string
    jobDesk:Array<string> 
    tech:Array<string>
    date:string
}

export type ProjectDTO={
    image:string
    title:string
    description:string
    tech:Array<string>
    isDemo:boolean
    isPrivate:boolean
}