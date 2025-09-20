import React from 'react';
import { 
  AlertTriangle, 
  Users, 
  Plane, 
  Cloud, 
  Shield,
  MapPin,
  Clock,
  Settings,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AlertCenter = () => {
  const criticalAlerts = [
    {
      id: 1,
      type: 'crew',
      title: 'Crew Fatigue Violation',
      description: 'Captain exceeded maximum duty hours - Flight ZA451',
      severity: 'high',
      timestamp: '5 minutes ago',
      actions: [
        { label: 'Assign Relief Crew', type: 'primary' },
        { label: 'Delay Flight', type: 'secondary' }
      ]
    },
    {
      id: 2,
      type: 'weather',
      title: 'Severe Turbulence Alert',
      description: 'Category 5 turbulence reported on SFO-LAX corridor',
      severity: 'high',
      timestamp: '12 minutes ago',
      actions: [
        { label: 'Reroute Flights', type: 'primary' },
        { label: 'Issue Advisory', type: 'secondary' }
      ]
    },
    {
      id: 3,
      type: 'mechanical',
      title: 'Engine Maintenance Required',
      description: 'Critical engine parameters detected - Aircraft N747ZA',
      severity: 'high',
      timestamp: '18 minutes ago',
      actions: [
        { label: 'Ground Aircraft', type: 'primary' },
        { label: 'Schedule Maintenance', type: 'secondary' }
      ]
    },
    {
      id: 4,
      type: 'security',
      title: 'Suspicious Activity Detected',
      description: 'Unusual passenger behavior flagged at Gate B12',
      severity: 'medium',
      timestamp: '25 minutes ago',
      actions: [
        { label: 'Deploy Security', type: 'primary' },
        { label: 'Monitor Situation', type: 'secondary' }
      ]
    },
    {
      id: 5,
      type: 'gate',
      title: 'Gate Congestion Warning',
      description: 'Terminal A approaching capacity limits',
      severity: 'medium',
      timestamp: '32 minutes ago',
      actions: [
        { label: 'Redistribute Traffic', type: 'primary' },
        { label: 'Open Backup Gates', type: 'secondary' }
      ]
    }
  ];

  const alertStats = [
    { label: 'Critical Alerts', value: '3', color: 'text-destructive', icon: AlertTriangle },
    { label: 'Medium Priority', value: '7', color: 'text-warning', icon: Clock },
    { label: 'Resolved Today', value: '24', color: 'text-success', icon: CheckCircle },
    { label: 'Response Time', value: '2.3min', color: 'text-foreground', icon: Settings }
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'crew': return Users;
      case 'weather': return Cloud;
      case 'mechanical': return Plane;
      case 'security': return Shield;
      case 'gate': return MapPin;
      default: return AlertTriangle;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      case 'low': return 'outline';
      default: return 'default';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Alert Center</h1>
          <p className="text-muted-foreground">Centralized monitoring and response coordination</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Alert Rules
          </Button>
          <Button>
            <CheckCircle className="mr-2 h-4 w-4" />
            Resolve All
          </Button>
        </div>
      </div>

      {/* Alert Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {alertStats.map((stat) => (
          <Card key={stat.label} className="mission-control-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <Tabs defaultValue="active" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="active">Active Alerts</TabsTrigger>
          <TabsTrigger value="recommendations">AI Recommendations</TabsTrigger>
          <TabsTrigger value="history">Alert History</TabsTrigger>
          <TabsTrigger value="analytics">Alert Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                Critical Operations Alerts
              </CardTitle>
              <CardDescription>
                Real-time monitoring of safety-critical events and operational risks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {criticalAlerts.map((alert) => {
                const AlertIcon = getAlertIcon(alert.type);
                return (
                  <div key={alert.id} className="flex items-start justify-between p-4 rounded-lg border bg-card/50">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center gap-3">
                        <div className={`h-3 w-3 rounded-full ${
                          alert.severity === 'high' ? 'bg-destructive alert-pulse' : 'bg-warning'
                        }`} />
                        <AlertIcon className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium text-foreground">{alert.title}</h3>
                          <Badge variant={getSeverityColor(alert.severity)} className="text-xs">
                            {alert.severity}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {alert.description}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {alert.timestamp}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      {alert.actions.map((action, index) => (
                        <Button 
                          key={index}
                          variant={action.type === 'primary' ? 'default' : 'outline'} 
                          size="sm"
                        >
                          {action.label}
                        </Button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle>AI-Powered Recommendations</CardTitle>
              <CardDescription>Smart suggestions for alert resolution and prevention</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg border bg-card/50">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-foreground">Flight ZA451 - Crew Reassignment</h3>
                  <Badge variant="outline">Recommended</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Assign Captain Smith (currently on standby) to replace fatigued crew member. 
                  This will maintain schedule with minimal delay.
                </p>
                <div className="flex gap-2">
                  <Button size="sm">Accept Recommendation</Button>
                  <Button variant="outline" size="sm">Modify</Button>
                  <Button variant="ghost" size="sm">
                    <XCircle className="h-4 w-4 mr-1" />
                    Decline
                  </Button>
                </div>
              </div>

              <div className="p-4 rounded-lg border bg-card/50">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-foreground">Terminal A - Traffic Redistribution</h3>
                  <Badge variant="outline">Recommended</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Redirect 3 incoming flights to Terminal B to reduce congestion. 
                  Estimated time savings: 15 minutes per flight.
                </p>
                <div className="flex gap-2">
                  <Button size="sm">Accept Recommendation</Button>
                  <Button variant="outline" size="sm">Modify</Button>
                  <Button variant="ghost" size="sm">
                    <XCircle className="h-4 w-4 mr-1" />
                    Decline
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle>Resolved Alerts</CardTitle>
              <CardDescription>Recently resolved alerts and response times</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center border rounded-lg bg-muted/20">
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-success mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Alert History Timeline</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="mission-control-card">
              <CardHeader>
                <CardTitle>Alert Frequency Trends</CardTitle>
                <CardDescription>Alert patterns over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center border rounded-lg bg-muted/20">
                  <div className="text-center">
                    <AlertTriangle className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Alert Analytics Dashboard</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mission-control-card">
              <CardHeader>
                <CardTitle>Response Performance</CardTitle>
                <CardDescription>Average resolution times by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center border rounded-lg bg-muted/20">
                  <div className="text-center">
                    <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Response Time Analytics</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AlertCenter;