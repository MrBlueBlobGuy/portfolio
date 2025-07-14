import Image from "next/image"

export default function footer(){
    return (
        <div className="relative flex flex-col mx-2 py-7 border-t-2">
            <div className="flex flex-row justify-between">
                <div>
                    Built With: <Image className="inline" src={"https://victoreke.com/_next/static/media/nextjs.4942ae50.svg"} width={32} height={32} alt = {"Next.js"} /> Next.js
                </div>                    
                <div>
                    Copyright &copy; Debojyoti Ganguly 2025 All Rights Reserved 
                </div>
            </div>
        </div>
    )
}