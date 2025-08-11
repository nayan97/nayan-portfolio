const Spinner = () => {
    return (
      <div className="flex justify-center items-center h-screen text-7xl">
        <span className="loading loading-dots loading-xs"></span>
        <span className="loading loading-dots loading-sm"></span>
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-lg"></span>
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  };
  
  export default Spinner;