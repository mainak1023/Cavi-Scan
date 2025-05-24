
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, LogIn, LogOut, User } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Logged out successfully');
      navigate('/');
    } catch (error) {
      toast.error('Failed to log out');
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-display text-2xl font-bold text-caviscan-blue">
              Cavi-Scan<span className="text-caviscan-teal"></span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-caviscan-blue transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-caviscan-blue transition-colors">
              About
            </Link>
            {/* <div className="relative group">
          <button className="flex items-center text-foreground hover:text-caviscan-blue transition-colors">
            Documentation <ChevronDown className="ml-1 w-4 h-4" />
          </button>
          <div className="absolute left-0 mt-2 w-48 bg-card rounded-md shadow-lg overflow-hidden z-20 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 transform origin-top-left">
            <Link to="/documentation" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-caviscan-blue transition-colors">
              Overview
            </Link>
            <Link to="/documentation#technical" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-caviscan-blue transition-colors">
              Technical Details
            </Link>
            <Link to="/documentation#usage" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-caviscan-blue transition-colors">
              Usage Guide
            </Link>
          </div> */}
          </nav>

          {/* Right Side Items */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />

            {/* Login and signup buttons have been removed */}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <button
              className="p-2 rounded-md text-foreground focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden transition-all duration-300 overflow-hidden',
            isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          )}
        >
          <div className="flex flex-col space-y-4 pt-2">
            <Link
              to="/"
              className="px-4 py-2 rounded-md text-foreground hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 rounded-md text-foreground hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/documentation"
              className="px-4 py-2 rounded-md text-foreground hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Documentation
            </Link>

            {/* Login and signup buttons have been removed from mobile menu */}
          </div>
        </div>
      </div >
    </header >
  );
};

export default Navbar;
