
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, BookOpen, Home, User, ListCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link to="/" className="text-2xl font-semibold text-herb-600">
            Ayushherb
          </Link>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-herb-700 hover:text-herb-500 flex items-center gap-2">
              <Home size={18} />
              Home
            </Link>
            <Link to="/login" className="text-herb-700 hover:text-herb-500 flex items-center gap-2">
              <User size={18} />
              Login
            </Link>
            <Link to="/register" className="text-herb-700 hover:text-herb-500">
              Register
            </Link>
            <Link to="/health" className="text-herb-700 hover:text-herb-500">
              Health
            </Link>
            <Link to="/bookmarks" className="text-herb-700 hover:text-herb-500 flex items-center gap-2">
              <BookOpen size={18} />
              Bookmarks
            </Link>
          </div>

          {/* Search and Actions */}
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input
                type="search"
                placeholder="Search for plants..."
                className="w-[250px] pl-10 bg-herb-50/50 border-herb-100 focus:border-herb-200"
              />
            </div>
            <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2">
              <Filter size={16} />
              Filter
            </Button>
            <Button variant="default" size="sm" className="hidden md:flex items-center gap-2 bg-herb-600 hover:bg-herb-700">
              <ListCheck size={16} />
              Quiz
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
            >
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
