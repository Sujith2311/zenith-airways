import React from 'react';
import { 
  Plane, 
  Users, 
  AlertTriangle, 
  MapPin, 
  Cloud, 
  Shield,
  Settings,
  BarChart3,
  Radio,
  Gauge
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import heroImage from '@/assets/zenith-hero.jpg';

const Dashboard = () => {
  const criticalAlerts = [
    { id: 1, type: 'crew', message: 'Crew fatigue violation - Flight ZA451', severity: 'high' },
    { id: 2, type: 'weather', message: 'Severe turbulence reported - Route SFO-LAX', severity: 'medium' },
    { id: 3, type: 'mechanical', message: 'Engine maintenance required - Aircraft N747ZA', severity: 'high' }
  ];

  const quickStats = [
    { label: 'Active Flights', value: '127', change: '+5', icon: Plane },
    { label: 'Crew On Duty', value: '340', change: '+12', icon: Users },
    { label: 'Critical Alerts', value: '3', change: '±0', icon: AlertTriangle },
    { label: 'Gates Available', value: '18/45', change: '+2', icon: MapPin }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Zenith Airways Control Center" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl">
              <h1 className="text-6xl font-bold text-foreground mb-4 tracking-tight">
                Zenith Airways
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Mission Control Dashboard - Ensuring safety, efficiency, and operational excellence 
                through intelligent airline management systems.
              </p>
              
              <div className="flex gap-4">
                <Button size="lg" className="bg-gradient-radar text-primary-foreground hover:opacity-90">
                  <Radio className="mr-2 h-5 w-5" />
                  Station Operations
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                  <Shield className="mr-2 h-5 w-5" />
                  Safety Center
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Analytics Hub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStats.map((stat) => (
              <Card key={stat.label} className="mission-control-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                      <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-sm text-success font-medium">{stat.change}</p>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Dashboard Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Critical Alerts */}
            <Card className="mission-control-card lg:col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                      Critical Operations Alert Center
                    </CardTitle>
                    <CardDescription>
                      Real-time monitoring of safety-critical events and operational risks
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {criticalAlerts.map((alert) => (
                  <div key={alert.id} className="flex items-center justify-between p-4 rounded-lg border bg-card/50">
                    <div className="flex items-center gap-3">
                      <div className={`h-3 w-3 rounded-full ${
                        alert.severity === 'high' ? 'bg-destructive alert-pulse' : 'bg-warning'
                      }`} />
                      <div>
                        <p className="font-medium text-foreground">{alert.message}</p>
                        <p className="text-sm text-muted-foreground capitalize">{alert.type} • {alert.severity} priority</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">View Details</Button>
                      <Button variant="default" size="sm">Take Action</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* System Status */}
            <Card className="mission-control-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gauge className="h-5 w-5 text-primary" />
                  System Status
                </CardTitle>
                <CardDescription>
                  Real-time operational health monitoring
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Flight Operations</span>
                    <Badge variant="default" className="bg-success text-success-foreground">Operational</Badge>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-success h-2 rounded-full" style={{ width: '98%' }} />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Crew Management</span>
                    <Badge variant="outline" className="border-warning text-warning">Warning</Badge>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-warning h-2 rounded-full" style={{ width: '73%' }} />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Gate Operations</span>
                    <Badge variant="default" className="bg-success text-success-foreground">Optimal</Badge>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-success h-2 rounded-full" style={{ width: '94%' }} />
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Weather Conditions</span>
                    <Badge variant="outline" className="border-warning text-warning">Moderate</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Cloud className="h-4 w-4" />
                    Partly cloudy, 15 mph winds
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;