// // "use client"

// import { api } from "@/lib/api"
// import { DashboardDTO } from "@/types/type"
// import { useQuery } from "@tanstack/react-query"
// import Dashboard from "./page"
// import Spinner from "@/components/ui/spiner"
// import DashboardView from "./page"

// export default function DashboardData(){
//      const {data,isPending} = useQuery<any>({
//     queryKey:["dashboard"],
//     queryFn:async()=>{
//       const res = await api.get("/dashboard")
//       console.log(res.data,"data")
//       return res.data

//     }
//   })

//   return(
//     <>
//     {isPending && <Spinner/>}
//     <DashboardView data={data}/>
//     </>
//   )
// }