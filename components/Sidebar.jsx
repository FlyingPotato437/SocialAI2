const Sidebar = () => {
    return (
      <div className="bg-dark-green w-64 min-h-screen p-5 text-white">
        {/* Logo and user info */}
        <div className="my-4">
          <div className="text-3xl font-bold mb-6">DEFLAB</div>
          <div className="flex items-center mb-6">
            <img className="h-12 w-12 rounded-full border-2 border-white mr-3" src="/user-avatar.jpg" alt="User avatar" />
            <div>
              <div className="font-bold">Esther Howard</div>
              <div className="text-xs text-light-green">PRO</div>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex flex-col mt-4">
          {/* Repeat this block for each nav item, adjusting the icon and label as necessary */}
          <a href="#" className="flex items-center px-4 py-2 mt-5 hover:bg-light-green hover:bg-opacity-25 rounded-md">
            {/* Icon */}
            DeFi
          </a>
          {/* ...other nav items */}
        </nav>
        
        {/* Logout */}
        <div className="mt-auto">
          <a href="#" className="flex items-center px-4 py-2 mt-5 hover:bg-light-green hover:bg-opacity-25 rounded-md">
            {/* Icon */}
            Log out
          </a>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  