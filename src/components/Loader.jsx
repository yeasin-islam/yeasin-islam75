const Loader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
            <div className="text-center">
                <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-white mx-auto"></div>
                <p className="mt-4">Loading...</p>
            </div>
        </div>
    );
};

export default Loader;