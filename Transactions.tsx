import { Button } from "@/components/ui/button";
import { Home, TrendingUp, Trophy, Settings as SettingsIcon, ArrowDownCircle, ArrowUpCircle, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Transactions = () => {
  const navigate = useNavigate();

  const transactions = [
    { id: 1, name: "UPI Deposit", amount: 500, type: "deposit", icon: ArrowDownCircle, time: "10:30 AM", upiId: "user@paytm" },
    { id: 2, name: "Daily Streak Deposit", amount: 50, type: "deposit", icon: ArrowDownCircle, time: "9:15 AM", upiId: "user@paytm" },
    { id: 3, name: "UPI Withdrawal", amount: 200, type: "withdraw", icon: ArrowUpCircle, time: "Yesterday 5:00 PM", upiId: "user@paytm" },
    { id: 4, name: "UPI Deposit", amount: 1000, type: "deposit", icon: ArrowDownCircle, time: "2 days ago", upiId: "user@paytm" },
  ];

  const totalBalance = transactions.reduce((sum, t) => t.type === "deposit" ? sum + t.amount : sum - t.amount, 0);

  const navItems = [
    { icon: Home, label: "Home", path: "/dashboard" },
    { icon: TrendingUp, label: "Transactions", path: "/transactions", active: true },
    { icon: Trophy, label: "Achievements", path: "/achievements" },
    { icon: Target, label: "Goals", path: "/goals" },
    { icon: SettingsIcon, label: "Profile", path: "/profile" },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="gradient-secondary p-6 rounded-b-3xl shadow-lg">
        <h1 className="text-3xl font-bold text-foreground mb-2">Transactions 💰</h1>
        <div className="glass-card rounded-2xl p-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-foreground/80">Current Balance</p>
            <p className="text-2xl font-bold text-foreground">₹{totalBalance}</p>
          </div>
          <div className="text-4xl">🐷</div>
        </div>
      </header>

      {/* Filters */}
      <div className="p-6 space-y-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {["Today", "Week", "Month"].map((filter) => (
            <Button
              key={filter}
              variant={filter === "Today" ? "default" : "outline"}
              size="sm"
              className="whitespace-nowrap"
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Transaction List */}
        <div className="space-y-3">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="glass-card rounded-2xl p-4 flex items-center gap-4"
            >
              <div className={`${transaction.type === "deposit" ? "bg-primary/10" : "bg-secondary/10"} rounded-2xl p-3`}>
                <transaction.icon className={transaction.type === "deposit" ? "text-primary" : "text-secondary"} size={24} />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-semibold text-foreground">{transaction.name}</p>
                  <p className={`font-bold ${transaction.type === "deposit" ? "text-primary" : "text-secondary"}`}>
                    {transaction.type === "deposit" ? "+" : "-"}₹{transaction.amount}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">{transaction.time}</p>
                  <p className="text-xs text-muted-foreground">{transaction.upiId}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="default" className="h-16 flex flex-col gap-1">
            <ArrowDownCircle size={20} />
            <span className="text-xs">Deposit Money</span>
          </Button>
          <Button variant="secondary" className="h-16 flex flex-col gap-1">
            <ArrowUpCircle size={20} />
            <span className="text-xs">Withdraw Money</span>
          </Button>
        </div>

        {/* Info Card */}
        <div className="glass-card rounded-2xl p-4 bg-warning/20">
          <p className="text-sm text-center text-foreground/80">
            💡 <span className="font-semibold">Deposit at least ₹1 daily</span> to keep your streak alive and earn badges!
          </p>
        </div>
      </div>

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

export default Transactions;
