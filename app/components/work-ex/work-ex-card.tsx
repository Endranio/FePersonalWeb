import Image from "next/image";


export default function WorkCard(){
    return(
        <div className="flex gap-20 bg-white dark:bg-gray-800 p-10 rounded-xl mb-12 ">
            <div className="shrink-0 p-3">

            <Image  src="/logo.png" width={64} height={64} alt={"company"}/>
            </div>
            <div className="flex justify-between w-full">

            <div>
            <h1 className="font-bold text-3xl">Fullstack Developer</h1>
            <p className="text-green-600">DumbWays Indonesia</p>
            
            <ul className="list-disc list-inside mt-3 space-y-2">
                <li>Develop and maintain web</li>
                <li>Develop and maintain web</li>
                <li>Develop and maintain web</li>
            </ul>
                
            

            <div className="flex gap-5 mt-5">
            <div className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-m font-medium text-gray-600 dark:text-gray-400">Node.js</div>
            <div className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-m font-medium text-gray-600 dark:text-gray-400">React.js</div>
            <div className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-m font-medium text-gray-600 dark:text-gray-400">Next.js</div>
            </div>
            </div>

            <p>2024-present</p>
            </div>



        </div>
    )
}