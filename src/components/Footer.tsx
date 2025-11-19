const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Forma Labs</h3>
            <p className="text-sm text-muted-foreground">
              Elite design & engineering for exceptional products
            </p>
          </div>
          
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#work" className="hover:text-accent transition-colors">Work</a>
            <a href="#services" className="hover:text-accent transition-colors">Services</a>
            <a href="#team" className="hover:text-accent transition-colors">Team</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 Forma Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
