import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Home, TrendingUp, Trophy, Target, Settings as SettingsIcon, Headphones, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import piggyMascot from "@/assets/piggy-mascot.png";

const Goals = () => {
  const navigate = useNavigate();
  const goalAmount = 2000;
  const currentAmount = 450;
  const progress = (currentAmount / goalAmount) * 100;
  const daysToGoal = Math.ceil((goalAmount - currentAmount) / 50);

  const navItems = [
    { icon: Home, label: "Home", path: "/dashboard" },
    { icon: TrendingUp, label: "Transactions", path: "/transactions" },
    { icon: Trophy, label: "Achievements", path: "/achievements" },
    { icon: Target, label: "Goals", path: "/goals", active: true },
    { icon: SettingsIcon, label: "Profile", path: "/profile" },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="gradient-accent p-6 rounded-b-3xl shadow-lg">
        <h1 className="text-3xl font-bold text-foreground mb-2">Your Goal 🎯</h1>
        <p className="text-foreground/80">You're doing amazing! Keep it up!</p>
      </header>

      {/* Main Content */}
      <main className="p-6 space-y-6">
        {/* Goal Card */}
        <div className="glass-card rounded-3xl p-6 space-y-6">
          {/* Goal Image/Icon */}
          <div className="relative">
            <div className="bg-primary/10 rounded-3xl p-8 flex items-center justify-center">
              <Headphones className="text-primary" size={80} />
            </div>
            <div className="absolute -top-2 -right-2">
              <img 
                src={piggyMascot} 
                alt="Piggy cheering" 
                className="w-16 h-16 animate-wiggle"
              />
            </div>
          </div>

          {/* Goal Details */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-foreground">Wireless Headphones</h2>
            <div className="flex items-center justify-center gap-2">
              <p className="text-3xl font-bold text-primary">₹{currentAmount}</p>
              <p className="text-xl text-muted-foreground">/ ₹{goalAmount}</p>
            </div>
          </div>

          {/* Progress */}
          <div className="space-y-3">
            <Progress value={progress} className="h-4" />
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">{Math.round(progress)}% completed</span>
              <span className="font-semibold text-foreground">₹{goalAmount - currentAmount} to go</span>
            </div>
          </div>
        </div>

        {/* Planner Card */}
        <div className="glass-card rounded-3xl p-6 space-y-4 bg-warning/10">
          <div className="flex items-center gap-2">
            <Sparkles className="text-warning-foreground" size={24} />
            <h3 className="text-xl font-bold text-foreground">Smart Planner</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white rounded-2xl">
              <span className="text-sm text-muted-foreground">Daily savings target</span>
              <span className="font-bold text-foreground">₹50/day</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-white rounded-2xl">
              <span className="text-sm text-muted-foreground">Estimated time</span>
              <span className="font-bold text-foreground">{daysToGoal} days</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-white rounded-2xl">
              <span className="text-sm text-muted-foreground">Expected completion</span>
              <span className="font-bold text-foreground">
                {new Date(Date.now() + daysToGoal * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
              </span>
            </div>
          </div>

          <div className="p-4 bg-secondary/20 rounded-2xl">
            <p className="text-sm text-center text-foreground">
              💡 Save <span className="font-bold">₹50 per day</span> and you'll reach your goal in just <span className="font-bold">{daysToGoal} days</span>!
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button variant="gradient" size="lg" className="w-full">
            Edit Goal ✏️
          </Button>
          <Button variant="outline" size="lg" className="w-full">
            Create New Goal 🎯
          </Button>
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

export default Goals;
