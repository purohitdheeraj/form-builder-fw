import { createFileRoute } from '@tanstack/react-router'
import ErrorBoundary from '../ErrorBoundary';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

export const Route = createFileRoute("/")({
  component: ErrorBoundaryWrappedIndexRoute,
});

function ErrorBoundaryWrappedIndexRoute() {
  return (
    <ErrorBoundary>
      <Index />
    </ErrorBoundary>
  );
}

function Index() {
  return (
    <>
      <main className="h-full max-w-[620px] px-6 py-8 space-y-6 mx-auto">
        <section className="space-y-4">
          <p className="text-gray-1k text-base leading-relaxed">
            Welcome to our advanced <span className="font-semibold">Form Builder</span>, designed to streamline the creation, management, and distribution of job applications. Whether you're a recruiter or a business owner, our intuitive tool empowers you to:
          </p>
        </section>

        <ul className="space-y-2 list-disc pl-6 text-gray-1k text-base">
          <li>
            <span className="font-semibold">Craft Customized Job Forms:</span> Add various question types such as short answers, long answers, single select options, and more to meet your specific hiring requirements.
          </li>
          <li>
            <span className="font-semibold">Preview with Confidence:</span> Seamlessly switch to a preview mode to see exactly how your job application form will appear to applicants.
          </li>
          <li>
            <span className="font-semibold">Track Completion:</span> Monitor form completeness in real-time with a dynamic progress bar, ensuring every field is properly addressed before publishing.
          </li>
          <li>
            <span className="font-semibold">Simplify Application Submission:</span> Provide candidates with a smooth experience through thoughtfully structured forms that guide them step by step.
          </li>
        </ul>

        <div className="flex justify-center mt-8">
          <Link to="/about">
            <Button size={'sm'} className='bg-gray-900 text-white  hover:bg-black' >Get Started</Button>
          </Link>
        </div>
      </main>
    </>
  );
}
