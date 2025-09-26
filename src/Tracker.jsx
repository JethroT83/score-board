import { useState, useCallback } from 'react';

export default function Tracker() {
    const [attempts, setAttempts] = useState(0);
    const [success, setSuccess] = useState(0);

    function successfulAttempt()
    {
        setAttempts(() => attempts + 1);
        setSuccess(() => success + 1);
    }

    function failedAttempt()
    {
        setAttempts(() => attempts + 1);
    }

    let failed = useCallback(() => {
        return attempts - success;
    }, [success, attempts]);

    let percentage = useCallback(() => {
        return attempts === 0 ? 0 : (success/attempts * 100).toFixed(2);
    }, [success, attempts]);
    let total = success * 3;

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
            <h1 className="text-3xl font-bold text-center text-gray-600 mb-6">
            Scoring Tracker
            </h1>

            <div className="grid grid-cols-2 gap-4 text-center mb-8">
                <div className="col-span-2 p-4 bg-gray-50 rounded-lg shadow-sm">
                    <span className="block text-sm text-gray-500">Attempts</span>
                    <span className="text-2xl font-semibold text-gray-600">{attempts}</span>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                    <span className="block text-sm text-gray-500">Success</span>
                    <span className="text-2xl font-semibold text-green-600">{success}</span>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                    <span className="block text-sm text-gray-500">Failed</span>
                    <span className="text-2xl font-semibold text-red-600">{failed()}</span>
                </div>
                <div className="col-span-2 p-4 bg-gray-50 rounded-lg shadow-sm">
                    <span className="block text-sm text-gray-500">Percentage</span>
                    <span className="text-2xl font-semibold text-blue-600">
                    {percentage()}%
                    </span>
                </div>
                <div className="col-span-2 p-4 bg-gray-50 rounded-lg shadow-sm">
                    <span className="block text-sm text-gray-500">Total Points</span>
                    <span className="text-2xl font-semibold text-gray-600">{total}</span>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-2xl font-bold text-center text-gray-600 mb-6">Attempts</h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
                <div
                    onClick={successfulAttempt}
                    className="flex-1 px-4 py-3 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition-colors inline-flex items-center justify-center"
                    >
                        Successful
                </div>
                <div
                    onClick={failedAttempt}
                    className="flex-1 px-4 py-3 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600 transition-colors inline-flex items-center justify-center"
                    >
                        Failed
                </div>
            </div>
        </div>
    )
}