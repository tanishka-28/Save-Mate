import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Home, TrendingUp, Trophy, Target, Settings as SettingsIcon, Edit, LogOut, Bell, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const navItems = [
    { icon: Home, label: "Home", path: "/dashboard" },
    { icon: TrendingUp, label: "Transactions", path: "/transactions" },
    { icon: Trophy, label: "Achievements", path: "/achievements" },
    { icon: Target, label: "Goals", path: "/goals" },
    { icon: SettingsIcon, label: "Profile", path: "/profile", active: true },
  ];

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="gradient-accent p-6 rounded-b-3xl shadow-lg">
        <h1 className="text-3xl font-bold text-foreground mb-4">Profile ⚙️</h1>
        
        {/* Profile Card */}
        <div className="glass-card rounded-3xl p-6 text-center">
          <div className="relative inline-block mb-4">
            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-5xl border-4 border-white shadow-lg">
              🐷
            </div>
            <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg">
              <Edit className="text-primary" size={16} />
            </button>
          </div>
          
          <h2 className="text-2xl font-bold text-foreground mb-1">Student User</h2>
          <p className="text-sm text-muted-foreground mb-2">IIT Delhi</p>
          
          <div className="flex justify-center gap-6 mt-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">7</p>
              <p className="text-xs text-muted-foreground">Day Streak</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-secondary">₹450</p>
              <p className="text-xs text-muted-foreground">Total Saved</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-warning">3</p>
              <p className="text-xs text-muted-foreground">Badges</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 space-y-6">
        {/* Settings Section */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Settings</h3>
          
          <div className="glass-card rounded-2xl divide-y-2 divide-border">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="text-primary" size={20} />
                <div>
                  <p className="font-semibold text-foreground">Notifications</p>
                  <p className="text-xs text-muted-foreground">Get daily reminders</p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="text-primary" size={20} />
                <div>
                  <p className="font-semibold text-foreground">Email Updates</p>
                  <p className="text-xs text-muted-foreground">Weekly progress reports</p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>

        {/* Account Section */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Account</h3>
          
          <div className="glass-card rounded-2xl divide-y-2 divide-border">
            <button className="p-4 w-full text-left hover:bg-muted/50 transition-colors rounded-t-2xl">
              <p className="font-semibold text-foreground">Edit Profile</p>
              <p className="text-xs text-muted-foreground">Update your information</p>
            </button>
            
            <button className="p-4 w-full text-left hover:bg-muted/50 transition-colors">
              <p className="font-semibold text-foreground">Change Password</p>
              <p className="text-xs text-muted-foreground">Update your security</p>
            </button>
            
            <button className="p-4 w-full text-left hover:bg-muted/50 transition-colors rounded-b-2xl">
              <p className="font-semibold text-foreground">Reset Goals</p>
              <p className="text-xs text-muted-foreground">Start fresh</p>
            </button>
          </div>
        </div>

        {/* Logout Button */}
        <Button 
          variant="destructive" 
          size="lg" 
          className="w-full"
          onClick={handleLogout}
        >
          <LogOut size={20} />
          Logout
        </Button>

        {/* App Info */}
        <div className="text-center space-y-1 pt-4">
          <p className="text-xs text-muted-foreground">Piggy v1.0.0</p>
          <p className="text-xs text-muted-foreground">Made with 💖 for students</p>
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

export default Profile;
