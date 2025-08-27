
import logo from "@/assets/logo.png"
import Image from "next/image"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#dea203]/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      
        <div className="flex space-x-8">
        <Image
                  src={logo || "/placeholder.svg"}
                  alt="Professional Coach"
                  style={{ width: "200px" }}
                  quality={100}
                  priority
                />
        </div>
     
      </div>
    </header>
  )
}

