export default function BlogPostSkeleton() {
  return (
    <div className="overflow-hidden bg-white shadow-xl border-0 rounded-2xl h-full flex flex-col">
      <div className="relative overflow-hidden">
        <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
      </div>

      <div className="p-6 sm:p-8 flex-grow flex flex-col">
        <div className="space-y-4 flex-grow">
          <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-gray-500 pt-4 mt-4 border-t border-gray-100">
          <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
        </div>

        <div className="flex items-center justify-between pt-4 mt-auto">
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <div className="h-4 bg-gray-200 rounded w-1/5 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-1/5 animate-pulse"></div>
          </div>
          <div className="h-8 w-16 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}