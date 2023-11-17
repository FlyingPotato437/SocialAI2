const FooterSection = () => {
    return (
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex justify-start">
              {/* Footer logo and/or text here */}
              <img src="/social-ai-logo-footer.svg" alt="Social AI" className="h-8 w-auto sm:h-10" />
            </div>
            <div className="flex justify-end">
              {/* Footer navigation or social media links */}
              <nav className="flex space-x-4">
                {/* Navigation items here */}
              </nav>
            </div>
          </div>
          <div className="mt-8 md:flex md:justify-between">
            <p className="text-center text-gray-400 text-sm md:text-left">
              &copy; {new Date().getFullYear()} Social AI. All rights reserved.
            </p>
            <div className="mt-8 md:mt-0">
              <p className="text-sm text-gray-400 text-center md:text-right">
                Made with love by the Social AI team.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default FooterSection;
  