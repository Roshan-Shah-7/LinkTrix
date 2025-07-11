"use client";

import { CpuArchitecture } from "@/app/components/ui/cpu-architecture"

interface LoadingProps {
    isLoading: boolean;
}

const Loading = ({ isLoading }: LoadingProps) => {
    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 flex items-center bg-gray-100 justify-center z-50">
            <div className="p-4 rounded-xl w-[40%]">
                <CpuArchitecture />
            </div>
        </div>
    )
}

export default Loading