import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Shield, 
  Fuel, 
  AlertTriangle, 
  Activity,
  TrendingUp,
  TrendingDown,
  Users,
  Wrench,
  Timer,
  Gauge
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const SafetyCenter = () => {
  const navigate = useNavigate();
  const safetyMetrics = [
    { 
      label: 'Fuel Health Index', 
      value: 92, 
      status: 'optimal',
      trend: 'up',
      icon: Fuel,
      color: 'text-success'
    },
    { 
      label: 'Crew Fatigue Score', 
      value: 68, 
      status: 'warning',
      trend: 'down',
      icon: Users,
      color: 'text-warning'
    },
    { 
      label: 'Mechanical Risk Index', 
      value: 85, 
      status: 'good',
      trend: 'up',
      icon: Wrench,
      color: 'text-success'
    },
    { 
      label: 'Weather Severity', 
      value: 45, 
      status: 'moderate',
      trend: 'down',
      icon: Activity,
      color: 'text-primary'
    }
  ];

  const criticalSafetyAlerts = [
    {
      id: 1,
      title: 'High Crew Fatigue Detected',
      description: 'Flight ZA-452 crew exceeding 12-hour duty limit',
      severity: 'high',
      timeAgo: '5 min ago',
      recommendation: 'Immediate crew rotation required'
    },
    {
      id: 2,
      title: 'Fuel Anomaly Warning',
      description: 'Aircraft N747ZA showing irregular fuel consumption',
      severity: 'medium',
      timeAgo: '12 min ago',
      recommendation: 'Schedule immediate fuel system inspection'
    },
    {
      id: 3,
      title: 'Maintenance Overdue',
      description: 'Engine check overdue for Aircraft N845ZA',
      severity: 'high',
      timeAgo: '1 hour ago',
      recommendation: 'Ground aircraft until inspection complete'
    }
  ];

  const systemHealthMetrics = [
    { system: 'Flight Control Systems', health: 98, status: 'operational' },
    { system: 'Navigation Equipment', health: 94, status: 'operational' },
    { system: 'Communication Arrays', health: 89, status: 'warning' },
    { system: 'Weather Detection', health: 92, status: 'operational' },
    { system: 'Emergency Systems', health: 96, status: 'operational' },
    { system: 'Fuel Management', health: 87, status: 'warning' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Safety Center</h1>
          <p className="text-muted-foreground">Real-time safety analytics and risk management dashboard</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Timer className="mr-2 h-4 w-4" />
            Safety Log
          </Button>
          <Button>
            <AlertTriangle className="mr-2 h-4 w-4" />
            Emergency Protocols
          </Button>
        </div>
      </div>

      {/* Safety Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {safetyMetrics.map((metric) => (
          <Card 
            key={metric.label} 
            className="mission-control-card cursor-pointer hover:bg-muted/50 transition-colors"
            onClick={() => navigate('/safety-analytics')}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <metric.icon className={`h-8 w-8 ${metric.color}`} />
                <Badge variant={metric.trend === 'up' ? 'default' : 'secondary'}>
                  {metric.trend === 'up' ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                </Badge>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
                <p className="text-3xl font-bold text-foreground">{metric.value}</p>
                <Progress value={metric.value} className="h-2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Critical Safety Alerts */}
        <Card className="mission-control-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-destructive" />
              Critical Safety Alerts
            </CardTitle>
            <CardDescription>Real-time safety incidents requiring immediate attention</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {criticalSafetyAlerts.map((alert) => (
              <div key={alert.id} className="p-4 rounded-lg border bg-card/50">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3">
                    <div className={`h-3 w-3 rounded-full mt-1 ${
                      alert.severity === 'high' ? 'bg-destructive alert-pulse' : 'bg-warning'
                    }`} />
                    <div>
                      <h3 className="font-medium text-foreground">{alert.title}</h3>
                      <p className="text-sm text-muted-foreground">{alert.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">{alert.timeAgo}</p>
                    </div>
                  </div>
                  <Badge variant={alert.severity === 'high' ? 'destructive' : 'secondary'}>
                    {alert.severity}
                  </Badge>
                </div>
                <div className="pl-6">
                  <p className="text-xs text-success mb-2">Recommendation:</p>
                  <p className="text-sm text-muted-foreground mb-3">{alert.recommendation}</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Acknowledge</Button>
                    <Button size="sm">Take Action</Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* System Health Dashboard */}
        <Card className="mission-control-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gauge className="h-5 w-5 text-primary" />
              System Health Dashboard
            </CardTitle>
            <CardDescription>Critical system monitoring and performance metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {systemHealthMetrics.map((system) => (
              <div key={system.system} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{system.system}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{system.health}%</span>
                    <Badge variant={system.status === 'operational' ? 'default' : 'secondary'}>
                      {system.status}
                    </Badge>
                  </div>
                </div>
                <Progress value={system.health} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Safety Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="mission-control-card">
          <CardHeader>
            <CardTitle className="text-lg">Fatigue vs Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 flex items-center justify-center border rounded-lg bg-muted/20">
              <div className="text-center">
                <Activity className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Correlation Analysis</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mission-control-card">
          <CardHeader>
            <CardTitle className="text-lg">Fuel Efficiency Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 flex items-center justify-center border rounded-lg bg-muted/20">
              <div className="text-center">
                <Fuel className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Efficiency Analytics</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mission-control-card">
          <CardHeader>
            <CardTitle className="text-lg">Mechanical Risk Assessment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 flex items-center justify-center border rounded-lg bg-muted/20">
              <div className="text-center">
                <Wrench className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Risk Prediction Model</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SafetyCenter;