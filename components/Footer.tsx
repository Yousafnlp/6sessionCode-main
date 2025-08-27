import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2025 Yousaf Ijaz Munawar. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Button variant="ghost" size="icon">
            f
          </Button>
          <Button variant="ghost" size="icon">
            x
          </Button>
          <Button variant="ghost" size="icon">
            in
          </Button>
        </div>
      </div>
    </footer>
  )
}

