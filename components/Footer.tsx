
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <a href="#" className="font-serif text-4xl font-bold text-white mb-6 block">
              LUMINA<span className="text-amber-500">.</span>
            </a>
            <p className="text-white/40 max-w-sm mb-8">
              A symphony of flavors served in a setting of timeless luxury. Join us for an unforgettable dining experience.
            </p>
            <div className="flex space-x-6">
              {['Instagram', 'Facebook', 'Twitter'].map(social => (
                <a key={social} href="#" className="text-white/60 hover:text-amber-500 transition-colors text-sm uppercase tracking-widest">{social}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-white/40">
              <li><a href="#menu" className="hover:text-amber-500 transition-colors">Menu</a></li>
              <li><a href="#reservation" className="hover:text-amber-500 transition-colors">Reservation</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-sm">Contact Info</h4>
            <p className="text-white/40 mb-4">info@luminagastronomy.com</p>
            <p className="text-white/40 mb-4">+1 (555) 123-4567</p>
            <p className="text-white/40">123 Culinary Way, NYC</p>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:row items-center justify-between text-white/20 text-sm">
          <p>© 2024 Lumina Gastronomy. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
