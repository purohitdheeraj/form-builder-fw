import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, Send } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/create-form')({
  component: About,
})

function About() {
  const [formTitle, setFormTitle] = useState('')

  return <div>
    <header className="py-3 px-6 flex items-center space-x-2 justify-between border-b sticky top-0 z-10 backdrop-blur-sm ">
      <input
        type="text"
        placeholder="Untitled form"
        value={formTitle}
        onChange={(e) => setFormTitle(e.target.value)}
        className={`font-semibold ${formTitle ? "text-gray-1k" : "text-gray-400"
          } bg-transparent border-none outline-none w-full`}
      />
      <div className='flex items-center gap-3'>

        <Button
          size={"sm"}
          onClick={() => {
          }}
          variant={"outline"}
          className="shadow-none font-semibold"
        >
          <span>Preview</span>
          <ArrowUpRight size={16} />
        </Button>
        <Button
          size={"sm"}
          onClick={() => {
          }}
          className="shadow-none font-semibold"
        >
          <span>Publish</span>
          <Send size={16} />
        </Button>
      </div>
    </header>
  </div>
}
