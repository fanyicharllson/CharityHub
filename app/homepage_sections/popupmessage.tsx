import Link from 'next/link';

const WelcomePopup = ({ showPopup, setShowPopup }) => {
  return (
    showPopup && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
        <div className="bg-white rounded-lg p-6 shadow-xl max-w-sm w-full animate-fade-in">
          <h2 className="text-xl font-bold text-gray-800">Welcome to CharityHub!</h2>
          <p className="text-gray-600 mt-2">
            Create an account to track your donations, save your preferences, and unlock additional features.
          </p>
          <p className="text-red-500 font-medium mt-2">
            Note: Donations made without an account will not be saved.
          </p>
          <div className="mt-6 flex justify-between gap-4">
            <Link href="/signup">
              <button
                className="bg-teal-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-teal-600 transition-all"
              >
                Create Account
              </button>
            </Link>
            <button
              className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md shadow-md hover:bg-gray-400 transition-all"
              onClick={() => setShowPopup(false)} // Close the popup
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default WelcomePopup;
