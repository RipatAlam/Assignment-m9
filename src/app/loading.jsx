import React from 'react';

const loading = () => {
    return (
        <div className="flex justify-center items-center h-screen gap-2">
            <h1 className="text-3xl font-bold">Loading...</h1>
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    );
};

export default loading;