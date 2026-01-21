export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-neutral-900">
      <div
        className="h-12 w-12 animate-spin rounded-full border-4 border-neutral-300 border-t-black dark:border-neutral-700 dark:border-t-white"
        aria-label="Loading"
        role="status"
      />
    </div>
  );
}
    