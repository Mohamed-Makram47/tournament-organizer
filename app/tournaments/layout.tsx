import { PlusIcon, ArrowLeft } from "lucide-react";

 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full flex-row items-end justify-between flex items-center gap-4 ">
        <div className="flex items-center gap-2 ">
          <a href="/tournaments" className="flex transition-colors duration-200 hover:bg-blue-600 justify-center p-1 bg-blue-500 rounded-full">
          <ArrowLeft className="standalone-icon"/>

          </a>
<p className="text-2xl font-bold">Tournaments</p>

        </div>
        <a href="/tournaments/new" className="text-sm md:text-lg button-primary flex items-center flex-row gap-1">
          <PlusIcon className="plain-icon" />
          NEW</a>
      </div>
      {children}
    </div>
  );
}