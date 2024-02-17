const Header = () => {
  return (
    <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start  p-3">
            
            {/* start logo */}
            <svg
              className="h-8 w-8 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>

            {/* end logo */}

            <div className="text-xl font-bold flex items-center lg:ml-2.5">
              <span className="self-center whitespace-nowrap">
                Point Of Sales
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
