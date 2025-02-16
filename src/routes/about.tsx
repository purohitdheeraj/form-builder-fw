import { createFileRoute } from '@tanstack/react-router'
import toast from 'react-hot-toast'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return <div>
    Hello "/about"!
    <button onClick={() => {
      toast("Hare krishna")
    }}>

      hello
    </button>
  </div>
}
