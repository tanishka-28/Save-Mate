import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Home, TrendingUp, Trophy, Settings as SettingsIcon, ArrowDownCircle, ArrowUpCircle, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import circleLogo from "@/assets/circle-piggy-logo.png";
import coinsImage from "@/assets/coins.png";

const Dashboard = () => {
  const navigate = useNavigate();
  const [savingsToday] = useState(9);
  const [streak] = useState(7);
  const [totalSavings] = useState(450);
  const [goalAmount] = useState(2000);
  const [goalName] = useState("Headphones");

  const progress = (totalSavings / goalAmount) * 100;

  const navItems = [
    { icon: Home, label: "Home", path: "/dashboard", active: true },
    { icon: TrendingUp, label: "Transactions", path: "/transactions" },
    { icon: Trophy, label: "Achievements", path: "/achievements" },
    { icon: Target, label: "Goals", path: "/goals" },
    { icon: SettingsIcon, label: "Profile", path: "/profile" },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="gradient-primary p-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Hey there! 👋</h1>
            <p className="text-foreground/80 text-sm">Keep up the great work!</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2 flex items-center gap-2">
            <span className="text-2xl">🔥</span>
            <div>
              <p className="text-xs text-foreground/80">Streak</p>
              <p className="text-xl font-bold text-foreground">{streak} days</p>
            </div>
          </div>
        </div>

        {/* Savings Today Card */}
        <div className="glass-card rounded-3xl p-6 text-center">
          <img 
            src={coinsImage} 
            alt="Coins" 
            className="w-16 h-16 mx-auto mb-2 coin-drop"
          />
          <p className="text-foreground/80 text-sm mb-1">Today's Deposit</p>
          <p className="text-4xl font-bold text-foreground">₹{savingsToday}</p>
          <p className="text-foreground/60 text-xs mt-2">Keep your streak alive! 🔥</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 space-y-6">
        {/* Piggy Bank Visual */}
        <div className="glass-card rounded-3xl p-6 text-center">
          <p className="text-sm text-muted-foreground mb-4">Your Virtual Wallet</p>
          <div className="relative">
            <img 
              src={circleLogo} 
              alt="Piggy Bank" 
              className="w-32 h-32 mx-auto animate-pulse-circle"
            />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full px-4 py-1 text-sm font-bold shadow-lg">
              ₹{totalSavings}
            </div>
          </div>
        </div>

        {/* Goal Progress */}
        <div className="glass-card rounded-3xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Current Goal</p>
              <p className="text-xl font-bold text-foreground">{goalName}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-primary">₹{totalSavings}</p>
              <p className="text-xs text-muted-foreground">of ₹{goalAmount}</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <Progress value={progress} className="h-3" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{Math.round(progress)}% complete</span>
              <span>₹{goalAmount - totalSavings} to go</span>
            </div>
          </div>

          <Button 
            variant="gradient" 
            size="lg" 
            className="w-full"
            onClick={() => navigate("/goals")}
          >
            View Goal Details 🎯
          </Button>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Button 
            variant="default" 
            className="h-24 flex flex-col gap-2"
            onClick={() => navigate("/transactions")}
          >
            <ArrowDownCircle size={24} />
            <span>Deposit via UPI</span>
          </Button>
          <Button 
            variant="secondary" 
            className="h-24 flex flex-col gap-2"
            onClick={() => navigate("/transactions")}
          >
            <ArrowUpCircle size={24} />
            <span>Withdraw via UPI</span>
          </Button>
        </div>
        
        {/* Daily Streak Info */}
        <div className="glass-card rounded-2xl p-4 bg-warning/20">
          <p className="text-sm text-center text-foreground/80">
            💡 <span className="font-semibold">Keep your streak!</span> Deposit at least ₹1 daily to maintain your streak 🔥
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

export default Dashboard;
