import React, { useState } from 'react';
import { 
  Settings, 
  Users, 
  Shield, 
  Bell,
  Palette,
  Moon,
  Sun,
  Monitor,
  Save,
  RefreshCw
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const SystemSettings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState({
    critical: true,
    warnings: true,
    maintenance: false,
    weather: true
  });

  const userRoles = [
    { name: 'Operations Manager', users: 3, permissions: 'Full Access', color: 'destructive' },
    { name: 'Crew Coordinator', users: 8, permissions: 'Crew Management', color: 'default' },
    { name: 'Safety Officer', users: 2, permissions: 'Safety & Security', color: 'secondary' },
    { name: 'Ground Control', users: 12, permissions: 'Gate & Traffic', color: 'outline' },
    { name: 'Maintenance', users: 6, permissions: 'Aircraft Systems', color: 'default' }
  ];

  const systemHealth = [
    { component: 'Database', status: 'Operational', uptime: '99.9%', color: 'success' },
    { component: 'Weather API', status: 'Operational', uptime: '98.7%', color: 'success' },
    { component: 'Crew Management', status: 'Warning', uptime: '97.2%', color: 'warning' },
    { component: 'Flight Tracking', status: 'Operational', uptime: '99.5%', color: 'success' },
    { component: 'Security Systems', status: 'Operational', uptime: '100%', color: 'success' }
  ];

  const alertRules = [
    { name: 'Crew Fatigue Threshold', value: '8.0', unit: 'hours', enabled: true },
    { name: 'Weather Severity Level', value: 'Medium', unit: 'alert', enabled: true },
    { name: 'Gate Congestion Limit', value: '85%', unit: 'capacity', enabled: true },
    { name: 'Fuel Anomaly Tolerance', value: '15%', unit: 'variance', enabled: false },
    { name: 'Response Time SLA', value: '5', unit: 'minutes', enabled: true }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Operational': return 'text-success';
      case 'Warning': return 'text-warning';
      case 'Critical': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">System Settings</h1>
          <p className="text-muted-foreground">Platform configuration and administrative controls</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </div>

      {/* Quick Settings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="mission-control-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Palette className="h-5 w-5 text-primary" />
                <span className="font-medium">Theme Mode</span>
              </div>
              <div className="flex items-center gap-2">
                <Sun className="h-4 w-4 text-muted-foreground" />
                <Switch 
                  checked={darkMode}
                  onCheckedChange={setDarkMode}
                />
                <Moon className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mission-control-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-primary" />
                <span className="font-medium">Notifications</span>
              </div>
              <Switch 
                checked={notifications.critical}
                onCheckedChange={(checked) => 
                  setNotifications(prev => ({...prev, critical: checked}))
                }
              />
            </div>
          </CardContent>
        </Card>

        <Card className="mission-control-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Monitor className="h-5 w-5 text-primary" />
                <span className="font-medium">Auto Refresh</span>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Settings */}
      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="alerts">Alert Rules</TabsTrigger>
          <TabsTrigger value="system">System Health</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle>Platform Configuration</CardTitle>
              <CardDescription>General system settings and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium text-foreground">Display Settings</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Auto-refresh dashboard</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Show detailed tooltips</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Enable animations</span>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium text-foreground">Data Settings</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Real-time updates</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Historical data retention</span>
                      <Badge variant="outline">90 days</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Auto-backup</span>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                User Roles & Permissions
              </CardTitle>
              <CardDescription>Manage user access levels and role assignments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {userRoles.map((role, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-card/50">
                  <div className="flex items-center gap-4">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-foreground">{role.name}</p>
                      <p className="text-sm text-muted-foreground">{role.permissions}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">{role.users} users</span>
                    <Badge variant={role.color as any}>{role.permissions}</Badge>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Alert Configuration
              </CardTitle>
              <CardDescription>Configure alert thresholds and notification rules</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {alertRules.map((rule, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-card/50">
                  <div className="flex items-center gap-4">
                    <Switch 
                      checked={rule.enabled}
                      onCheckedChange={() => {}}
                    />
                    <div>
                      <p className="font-medium text-foreground">{rule.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Threshold: {rule.value} {rule.unit}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={rule.enabled ? 'default' : 'outline'}>
                      {rule.enabled ? 'Active' : 'Disabled'}
                    </Badge>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Monitor className="h-5 w-5" />
                System Health Monitor
              </CardTitle>
              <CardDescription>Real-time system status and performance metrics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {systemHealth.map((system, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-card/50">
                  <div className="flex items-center gap-4">
                    <div className={`h-3 w-3 rounded-full ${
                      system.color === 'success' ? 'bg-success' : 
                      system.color === 'warning' ? 'bg-warning' : 'bg-destructive'
                    }`} />
                    <div>
                      <p className="font-medium text-foreground">{system.component}</p>
                      <p className={`text-sm ${getStatusColor(system.status)}`}>
                        {system.status}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">Uptime: {system.uptime}</span>
                    <Button variant="outline" size="sm">View Logs</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security Configuration
              </CardTitle>
              <CardDescription>Security policies and access control settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium text-foreground">Authentication</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Two-factor authentication</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Biometric login</span>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Session timeout</span>
                      <Badge variant="outline">30 min</Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium text-foreground">Access Control</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Role-based access</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">IP restrictions</span>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Audit logging</span>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SystemSettings;