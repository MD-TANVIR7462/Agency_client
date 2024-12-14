export const HeroImage = () => {
  return (
    <div className="relative h-full w-full">
      <div className="relative h-[600px] w-full overflow-hidden rounded-2xl">
        <img
          src="https://images.unsplash.com/photo-1581472723648-909f4851d4ae?auto=format&fit=crop&q=80"
          alt="Modern software development"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-[2px]" />
        
        {/* Floating Elements */}
        <div className="absolute -right-4 top-10 h-20 w-20 rounded-xl bg-purple-500/30 backdrop-blur-md" />
        <div className="absolute bottom-10 right-10 h-16 w-16 rounded-full bg-blue-500/30 backdrop-blur-md" />
        <div className="absolute left-10 top-20 h-24 w-24 rounded-full bg-indigo-500/20 backdrop-blur-md" />
      </div>
    </div>
  );
};