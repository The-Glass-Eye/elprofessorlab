import professorImage from "@/assets/professor-silhouette.jpg";
import DaliMask from "@/components/DaliMask";
import GlitchText from "@/components/GlitchText";
import TerminalText from "@/components/TerminalText";
import HeistCard from "@/components/HeistCard";

const Index = () => {
  const terminalLines = [
    "Initializing secure connection...",
    "Encryption protocol: BELLA_CIAO",
    "Welcome to the resistance.",
    "The plan is simple. Trust the Professor.",
  ];

  const crewMembers = [
    { name: "Tokyo", status: "ACTIVE" },
    { name: "Berlin", status: "LEGEND" },
    { name: "Nairobi", status: "IMMORTAL" },
    { name: "Denver", status: "ACTIVE" },
    { name: "Rio", status: "ACTIVE" },
    { name: "Helsinki", status: "ACTIVE" },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden scan-overlay">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-heist-gradient opacity-60" />
      
      {/* Floating Dali masks */}
      <DaliMask className="absolute top-20 left-10 w-16 h-20 opacity-10 animate-flicker" />
      <DaliMask className="absolute bottom-40 right-20 w-24 h-28 opacity-5" />
      
      {/* Main content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
          {/* Professor image background */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url(${professorImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            {/* Title */}
            <div className="mb-8">
              <p className="text-accent font-mono text-sm tracking-[0.3em] mb-4 animate-flicker">
                [ CLASSIFIED TRANSMISSION ]
              </p>
              <h1 className="font-display text-6xl md:text-8xl font-black mb-4 tracking-tight">
                <GlitchText text="THE PROFESSOR" className="text-foreground" />
              </h1>
              <div className="w-32 h-1 bg-primary mx-auto mb-6" />
              <p className="text-xl md:text-2xl font-display italic text-muted-foreground">
                "The plan always works. Because I've planned for everything."
              </p>
            </div>
            
            {/* Terminal */}
            <HeistCard className="max-w-xl mx-auto mt-12 text-left">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <div className="w-3 h-3 rounded-full bg-accent" />
                <div className="w-3 h-3 rounded-full bg-muted" />
                <span className="ml-4 text-xs text-muted-foreground font-mono">professor@heist:~$</span>
              </div>
              <TerminalText lines={terminalLines} />
            </HeistCard>
            
            {/* CTA */}
            <div className="mt-12">
              <button className="px-8 py-4 bg-primary text-primary-foreground font-mono text-lg tracking-wider hover:bg-primary/90 transition-all duration-300 glow-red">
                JOIN THE RESISTANCE
              </button>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-primary rounded-full" />
            </div>
          </div>
        </section>
        
        {/* Crew Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-primary font-mono text-sm tracking-widest mb-2">OPERATION MEMBERS</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold">
                <GlitchText text="THE CREW" />
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {crewMembers.map((member, index) => (
                <HeistCard 
                  key={member.name}
                  className="text-center py-8 hover:scale-105 transition-transform duration-300"
                  glow={member.status === "ACTIVE"}
                >
                  <DaliMask className="w-16 h-20 mx-auto mb-4 opacity-80" />
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <span className={`font-mono text-xs tracking-widest ${
                    member.status === "ACTIVE" ? "text-primary" : 
                    member.status === "LEGEND" ? "text-accent" : "text-muted-foreground"
                  }`}>
                    [{member.status}]
                  </span>
                </HeistCard>
              ))}
            </div>
          </div>
        </section>
        
        {/* Message Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-4xl mx-auto">
            <HeistCard className="text-center py-12" glow>
              <DaliMask className="w-20 h-24 mx-auto mb-6 opacity-90" />
              <blockquote className="font-display text-2xl md:text-3xl italic text-foreground mb-6">
                "Bella Ciao, Bella Ciao, Bella Ciao Ciao Ciao..."
              </blockquote>
              <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
              <p className="font-mono text-sm text-muted-foreground tracking-wider">
                THIS IS NOT A ROBBERY. THIS IS A RESISTANCE.
              </p>
            </HeistCard>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-8 border-t border-border">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">{'<'}</span>
              {' CTF CHALLENGE '}
              <span className="text-primary">{'>'}</span>
              {' // '}
              <span className="text-accent">LA CASA DE PAPEL</span>
            </p>
            <p className="font-mono text-xs text-muted-foreground/50 mt-2">
              /* The plan has been set in motion */
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
