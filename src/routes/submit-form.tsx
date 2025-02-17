import { Button } from '@/components/ui/button'
import usePersistentState from '@/hooks/usePersistentState';
import { FormQuestion } from '@/model/form-model';
import { createFileRoute } from '@tanstack/react-router'
import { useNavigate } from "@tanstack/react-router";


export const Route = createFileRoute('/submit-form')({
  component: RouteComponent,
})

function RouteComponent() {

  const navigate = useNavigate();


  const [, , clearTitle,] = usePersistentState(
    "form-title",
    "",
  );

  const [, , clearForm,] = usePersistentState<
    FormQuestion[]
  >("form-questions", []);


  const clearApplication = () => {
    clearTitle();
    clearForm();

    navigate({ to: '/' })
  }


  return <div>
    <>
      <div className="flex flex-col justify-between">

        <header className="py-3 px-6 flex items-center justify-between border-b sticky top-0 z-10 backdrop-blur-sm">
          <h2 className='text-xl font-semibold'>Application Submitted</h2>
        </header>
        <main className="space-y-4 flex flex-col p-6 min-h-screen text-center items-center">

          <svg width="120" height="120" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40.5" cy="40" r="32" className="animate-pulse" fill="#E2F6EA"></circle><path d="M30.9299 28.9494C36.4231 24.1921 44.5769 24.1921 50.0701 28.9494C52.5499 31.0969 54.2352 34.0161 54.8552 37.2373C56.2285 44.3733 52.1516 51.4346 45.2851 53.8133C42.1854 54.887 38.8146 54.887 35.7149 53.8133C28.8484 51.4346 24.7715 44.3733 26.1448 37.2373C26.7648 34.0161 28.4502 31.0969 30.9299 28.9494Z" fill="#00AA45" stroke="#1E874B"></path><path d="M32.168 40.8334L37.168 45.8334L48.8346 34.1667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>

          <p className="text-sm">
            Form Submitted Successfully!
          </p>

          <Button size={'sm'} variant={'outline'} onClick={clearApplication}>Explore more</Button>

        </main>
      </div>
    </>
  </div>
}
