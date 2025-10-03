import { Button } from "@/components/ui/button";
import { Home, TrendingUp, Trophy, Target, Settings as SettingsIcon, Lock, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Achievements = () => {
  const navigate = useNavigate();

  const badges = [
    { id: 1, name: "Baby Piggy", description: "Made your first save", icon: "🐷", unlocked: true, color: "bg-primary" },
    { id: 2, name: "Bronze Saver", description: "Saved ₹100 total", icon: "🥉", unlocked: true, color: "bg-warning" },
    { id: 3, name: "Week Warrior", description: "7 day streak", icon: "🔥", unlocked: true, color: "bg-destructive" },
    { id: 4, name: "Silver Saver", description: "Saved ₹500 total", icon: "🥈", unlocked: false, color: "bg-muted" },
    { id: 5, name: "Golden Hog", description: "Saved ₹1000 total", icon: "🥇", unlocked: false, color: "bg-muted" },
    { id: 6, name: "Goal Getter", description: "Reached your first goal", icon: "🎯", unlocked: false, color: "bg-muted" },
    { id: 7, name: "Consistency King", description: "30 day streak", icon: "👑", unlocked: false, color: "bg-muted" },
    { id: 8, name: "Master Saver", description: "Saved ₹5000 total", icon: "💎", unlocked: false, color: "bg-muted" },
  ];

  const unlockedCount = badges.filter(b => b.unlocked).length;

  const navItems = [
    { icon: Home, label: "Home", path: "/dashboard" },
    { icon: TrendingUp, label: "Transactions", path: "/transactions" },
    { icon: Trophy, label: "Achievements", path: "/achievements", active: true },
    { icon: Target, label: "Goals", path: "/goals" },
    { icon: SettingsIcon, label: "Profile", path: "/profile" },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="gradient-warm p-6 rounded-b-3xl shadow-lg">
        <h1 className="text-3xl font-bold text-foreground mb-2">Achievements 🏆</h1>
        <div className="glass-card rounded-2xl p-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-foreground/80">Badges Unlocked</p>
            <p className="text-2xl font-bold text-foreground">{unlockedCount} / {badges.length}</p>
          </div>
          <div className="flex items-center gap-1">
            <Star className="text-warning fill-warning" size={24} />
            <Star className="text-warning fill-warning" size={24} />
            <Star className="text-warning fill-warning" size={24} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 space-y-6">
        {/* Badge Grid */}
        <div className="grid grid-cols-2 gap-4">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className={`glass-card rounded-3xl p-6 text-center space-y-3 transition-all ${
                badge.unlocked 
                  ? "hover:scale-105 cursor-pointer" 
                  : "opacity-60 grayscale"
              }`}
            >
              <div className={`${badge.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto relative ${
                badge.unlocked ? "animate-bounce-slow" : ""
              }`}>
                {badge.unlocked ? (
                  <span className="text-4xl">{badge.icon}</span>
                ) : (
                  <Lock className="text-white" size={32} />
                )}
              </div>
              
              <div>
                <h3 className="font-bold text-foreground text-sm">{badge.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{badge.description}</p>
              </div>
              
              {badge.unlocked && (
                <div className="pt-2 border-t-2 border-border">
                  <span className="text-xs font-semibold text-primary">UNLOCKED ✓</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Motivation Card */}
        <div className="glass-card rounded-3xl p-6 bg-secondary/20 text-center">
          <p className="text-2xl mb-2">🎉</p>
          <p className="text-sm text-foreground font-semibold mb-1">Keep going!</p>
          <p className="text-xs text-muted-foreground">
            You're just <span className="font-bold text-secondary-foreground">₹50</span> away from unlocking Silver Saver!
          </p>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-border shadow-lg">
        <div className="flex justify-around items-center h-20 px-4">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center gap-1 transition-all ${
                item.active 
                  ? "text-primary scale-110" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <item.icon size={24} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Achievements;
