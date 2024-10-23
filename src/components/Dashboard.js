import LoginPage from './LoginPage';
import userImage from '../images/student.jpg';
const Dashboard = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-green-600 text-white">
        <div className="p-6">
          <img src={userImage} alt="Admin" className="rounded-full w-20 mx-auto mb-4" />
          <p className="text-center">Admin user</p>
          <p className="text-center text-green-300">Online</p>
        </div>
        <nav className="mt-6">
          <a href="#dashboard" className="block py-2.5 px-4 hover:bg-green-500">
            Dashboard
          </a>
          <a href="#teachers" className="block py-2.5 px-4 hover:bg-green-500">
            Teachers
          </a>
          <a href="#students" className="block py-2.5 px-4 hover:bg-green-500">
            Students
          </a>
          <a href="#reports" className="block py-2.5 px-4 hover:bg-green-500">
            Reports
          </a>
          <a href="#users" className="block py-2.5 px-4 hover:bg-green-500">
            Users
          </a>
          <a href={LoginPage} className="block py-2.5 px-4 hover:bg-green-500">
            Log Out
          </a>
        </nav>
      </aside>

      {/* Main Dashboard Content */}
      <div className="flex-1 bg-gray-100">
        {/* Top Navbar */}
        <header className="bg-white shadow-md py-4 px-6 flex justify-center items-center">
  {/* <button onClick={toggleSidebar} className="text-green-600 lg:hidden absolute left-4">
    <i className="fas fa-bars text-2xl"></i>
  </button> */}
  <h1 className="text-green-600 text-3xl font-bold text-center">AL-Irshaad School</h1>
  <div className="flex items-center absolute right-4">
    <button className="relative mr-6">
      <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-red-600 rounded-full"></span>
      <i className="fas fa-bell"></i>
    </button>
    <button className="relative mr-6">
      <i className="fas fa-envelope"></i>
    </button>
    <div className="flex items-center">
      <img src={userImage} alt="Admin" className="rounded-full w-10" />
      <p className="ml-2">Admin user</p>
    </div>
  </div>
</header>


        {/* Dashboard Overview */}
        <main className="p-6">
          <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

          {/* Stats Overview */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-white shadow rounded-lg p-4 text-center">
              <div className="text-orange-500">
                <i className="fas fa-user text-3xl"></i>
              </div>
              <p className="mt-2 text-lg font-bold">2500</p>
              <p className="text-gray-500">Form One</p>
            </div>

            <div className="bg-white shadow rounded-lg p-4 text-center">
              <div className="text-blue-500">
                <i className="fas fa-user text-3xl"></i>
              </div>
              <p className="mt-2 text-lg font-bold">123.50</p>
              <p className="text-gray-500">Form Two</p>
            </div>

            <div className="bg-white shadow rounded-lg p-4 text-center">
              <div className="text-green-500">
                <i className="fas fa-user text-3xl"></i>
              </div>
              <p className="mt-2 text-lg font-bold">1805</p>
              <p className="text-gray-500">Form Three</p>
            </div>

            <div className="bg-white shadow rounded-lg p-4 text-center">
              <div className="text-red-500">
                <i className="fas fa-graduation-cap text-3xl"></i>
              </div>
              <p className="mt-2 text-lg font-bold">1254</p>
              <p className="text-gray-500">Form Four</p>
            </div>
          </div>

          {/* Social Stats Overview */}
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-blue-700 text-white rounded-lg p-4 text-center">
              <p className="text-lg font-bold">35k</p>
              <p className="text-gray-300">Friends</p>
            </div>

            <div className="bg-blue-500 text-white rounded-lg p-4 text-center">
              <p className="text-lg font-bold">584k</p>
              <p className="text-gray-300">Followers</p>
            </div>

            <div className="bg-blue-800 text-white rounded-lg p-4 text-center">
              <p className="text-lg font-bold">758+</p>
              <p className="text-gray-300">Contacts</p>
            </div>

            <div className="bg-red-500 text-white rounded-lg p-4 text-center">
              <p className="text-lg font-bold">450</p>
              <p className="text-gray-300">Followers</p>
            </div>
          </div>

          {/* Extra Area Chart Section */}
          <div className="mt-8 bg-white shadow rounded-lg p-4">
            <h3 className="text-lg font-bold">Extra Area Chart</h3>
            <div className="h-64 bg-gray-200 rounded-lg"></div> {/* Placeholder for a chart */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
