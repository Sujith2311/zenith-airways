import React from 'react';
import { 
  Shield, 
  AlertTriangle, 
  Eye, 
  Radio,
  Lock,
  Fuel,
  Plane,
  Users,
  Activity,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SecurityCenter = () => {
  const securityAlerts = [
    {
      id: 1,
      type: 'suspicious_activity',
      title: 'Suspicious Passenger Behavior',
      location: 'Gate B12',
      severity: 'high',
      timestamp: '3 minutes ago',
      status: 'investigating',
      details: 'Individual exhibiting unusual behavior patterns near boarding area'
    },
    {
      id: 2,
      type: 'fuel_anomaly',
      title: 'Fuel System Anomaly',
      location: 'Aircraft N847ZA',
      severity: 'medium',
      timestamp: '15 minutes ago',
      status: 'monitoring',
      details: 'Irregular fuel consumption patterns detected during pre-flight check'
    },
    {
      id: 3,
      type: 'runway_incursion',
      title: 'Runway Incursion Alert',
      location: 'Runway 28R',
      severity: 'high',
      timestamp: '28 minutes ago',
      status: 'resolved',
      details: 'Unauthorized vehicle detected on active runway - situation contained'
    }
  ];

  const emergencyProtocols = [
    { code: 'Code 7500', description: 'Hijacking Emergency', status: 'armed' },
    { code: 'Code 7600', description: 'Communication Loss', status: 'monitoring' },
    { code: 'Code 7700', description: 'General Emergency', status: 'standby' }
  ];

  const securityMetrics = [
    { label: 'Threat Level', value: 'ELEVATED', color: 'text-warning', icon: Shield },
    { label: 'Active Monitors', value: '47', color: 'text-success', icon: Eye },
    { label: 'Security Personnel', value: '23', color: 'text-foreground', icon: Users },
    { label: 'System Status', value: 'ONLINE', color: 'text-success', icon: Activity }
  ];

  const mechanicalAlerts = [
    { aircraft: 'N747ZA', issue: 'Engine Parameter Alert', severity: 'medium', eta: '2 hours' },
    { aircraft: 'N832ZA', issue: 'Hydraulic System Check', severity: 'low', eta: '4 hours' },
    { aircraft: 'N945ZA', issue: 'Avionics Maintenance', severity: 'high', eta: '1 hour' }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      case 'low': return 'outline';
      default: return 'default';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'investigating': return 'destructive';
      case 'monitoring': return 'secondary';
      case 'resolved': return 'default';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Security Center</h1>
          <p className="text-muted-foreground">Comprehensive security monitoring and threat detection</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Eye className="mr-2 h-4 w-4" />
            Surveillance
          </Button>
          <Button variant="destructive">
            <AlertTriangle className="mr-2 h-4 w-4" />
            Emergency Protocol
          </Button>
        </div>
      </div>

      {/* Security Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {securityMetrics.map((metric) => (
          <Card key={metric.label} className="mission-control-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
                  <p className={`text-2xl font-bold ${metric.color}`}>{metric.value}</p>
                </div>
                <metric.icon className={`h-8 w-8 ${metric.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Emergency Protocols Quick Access */}
      <Card className="mission-control-card border-destructive/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <Radio className="h-5 w-5" />
            Emergency Protocol System
          </CardTitle>
          <CardDescription>Pilot emergency codes and rapid response activation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {emergencyProtocols.map((protocol) => (
              <div key={protocol.code} className="p-4 rounded-lg border bg-card/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-destructive">{protocol.code}</span>
                  <Badge variant={protocol.status === 'armed' ? 'destructive' : 'outline'}>
                    {protocol.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{protocol.description}</p>
                <Button 
                  size="sm" 
                  variant={protocol.status === 'armed' ? 'destructive' : 'outline'}
                  className="w-full"
                >
                  {protocol.status === 'armed' ? 'ACTIVATED' : 'Activate'}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <Tabs defaultValue="threats" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="threats">Active Threats</TabsTrigger>
          <TabsTrigger value="mechanical">Aircraft Safety</TabsTrigger>
          <TabsTrigger value="surveillance">Surveillance</TabsTrigger>
          <TabsTrigger value="analytics">Security Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="threats" className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-destructive" />
                Active Security Threats
              </CardTitle>
              <CardDescription>Real-time security incidents and threat assessments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {securityAlerts.map((alert) => (
                <div key={alert.id} className="flex items-start justify-between p-4 rounded-lg border bg-card/50">
                  <div className="flex items-start gap-4">
                    <div className={`h-3 w-3 rounded-full mt-2 ${
                      alert.severity === 'high' ? 'bg-destructive alert-pulse' : 'bg-warning'
                    }`} />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-foreground">{alert.title}</h3>
                        <Badge variant={getSeverityColor(alert.severity)} className="text-xs">
                          {alert.severity}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{alert.details}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{alert.location}</span>
                        <span>{alert.timestamp}</span>
                        <Badge variant={getStatusColor(alert.status)} className="text-xs">
                          {alert.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      Monitor
                    </Button>
                    <Button size="sm">
                      <Shield className="h-4 w-4 mr-1" />
                      Respond
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mechanical" className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plane className="h-5 w-5 text-primary" />
                Aircraft Safety Monitoring
              </CardTitle>
              <CardDescription>Mechanical condition alerts and maintenance requirements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {mechanicalAlerts.map((alert, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-card/50">
                  <div className="flex items-center gap-4">
                    <Plane className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-foreground">{alert.aircraft}</p>
                      <p className="text-sm text-muted-foreground">{alert.issue}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">ETA: {alert.eta}</span>
                    <Badge variant={getSeverityColor(alert.severity)}>
                      {alert.severity}
                    </Badge>
                    <Button variant="outline" size="sm">Schedule</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="mission-control-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Fuel className="h-5 w-5 text-warning" />
                  Fuel System Monitoring
                </CardTitle>
                <CardDescription>Real-time fuel anomaly detection</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-32 flex items-center justify-center border rounded-lg bg-muted/20">
                  <div className="text-center">
                    <Fuel className="h-6 w-6 text-warning mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">All systems normal</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mission-control-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-success" />
                  Runway Security Status
                </CardTitle>
                <CardDescription>Runway incursion detection system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-32 flex items-center justify-center border rounded-lg bg-muted/20">
                  <div className="text-center">
                    <CheckCircle className="h-6 w-6 text-success mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">All runways secure</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="surveillance" className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-primary" />
                Surveillance Network
              </CardTitle>
              <CardDescription>Live security camera feeds and monitoring stations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Terminal A - Main Concourse',
                  'Terminal B - Security Checkpoint', 
                  'Terminal C - Gate Area',
                  'Runway 28L - Approach',
                  'Ground Operations - West',
                  'Cargo Area - Restricted Zone'
                ].map((location, index) => (
                  <div key={index} className="relative">
                    <div className="aspect-video bg-muted rounded-lg border flex items-center justify-center">
                      <Eye className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 text-center">{location}</p>
                    <div className="absolute top-2 right-2">
                      <div className="h-2 w-2 bg-success rounded-full animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="mission-control-card">
              <CardHeader>
                <CardTitle>Security Incident Trends</CardTitle>
                <CardDescription>Historical threat analysis and patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center border rounded-lg bg-muted/20">
                  <div className="text-center">
                    <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Security Analytics Dashboard</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mission-control-card">
              <CardHeader>
                <CardTitle>Response Performance</CardTitle>
                <CardDescription>Security team response times and efficiency</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center border rounded-lg bg-muted/20">
                  <div className="text-center">
                    <Activity className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Response Analytics</p>
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

export default SecurityCenter;