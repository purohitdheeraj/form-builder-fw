import { createFileRoute } from '@tanstack/react-router'
import ErrorBoundary from '../ErrorBoundary';

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
  return <div>Hello World!</div>
}
