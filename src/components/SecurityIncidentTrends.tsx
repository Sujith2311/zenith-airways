import React from 'react';
import { 
  Shield, 
  AlertOctagon, 
  UserX, 
  Camera,
  TrendingUp,
  TrendingDown,
  Clock,
  MapPin,
  Eye,
  Lock
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SecurityIncidentTrends = () => {
  const incidentMetrics = [
    { 
      label: 'Hijacking Attempts', 
      value: 0, 
      change: '±0%',
      trend: 'neutral',
      timeframe: 'Last 30 days',
      icon: AlertOctagon 
    },
    { 
      label: 'Unauthorized Access', 
      value: 3, 
      change: '-40%',
      trend: 'down',
      timeframe: 'Last 7 days',
      icon: UserX 
    },
    { 
      label: 'Runway Incursions', 
      value: 1, 
      change: '-67%',
      trend: 'down',
      timeframe: 'Last 14 days',
      icon: MapPin 
    },
    { 
      label: 'Security Breaches', 
      value: 2, 
      change: '+100%',
      trend: 'up',
      timeframe: 'Last 30 days',
      icon: Lock 
    }
  ];

  const recentIncidents = [
    {
      id: 1,
      type: 'Runway Incursion',
      description: 'Unauthorized vehicle entered runway 24L during active operations',
      severity: 'high',
      timestamp: '2024-01-15 14:23:00',
      location: 'Terminal A - Runway 24L',
      status: 'resolved',
      responseTime: '2:15 minutes'
    },
    {
      id: 2,
      type: 'Perimeter Breach',
      description: 'Motion detected at fence line sector 7',
      severity: 'medium',
      timestamp: '2024-01-14 22:45:00',
      location: 'Security Zone 7',
      status: 'investigating',
      responseTime: '1:32 minutes'
    },
    {
      id: 3,
      type: 'Suspicious Behavior',
      description: 'Individual observed loitering near restricted area',
      severity: 'low',
      timestamp: '2024-01-14 16:18:00',
      location: 'Terminal B - Gate 15',
      status: 'resolved',
      responseTime: '0:58 minutes'
    }
  ];

  const threatCategories = [
    { category: 'Physical Security', incidents: 5, trend: -20, riskLevel: 'low' },
    { category: 'Cyber Threats', incidents: 8, trend: +15, riskLevel: 'medium' },
    { category: 'Insider Threats', incidents: 2, trend: -50, riskLevel: 'low' },
    { category: 'Aviation Security', incidents: 1, trend: -75, riskLevel: 'low' },
    { category: 'Access Control', incidents: 4, trend: +33, riskLevel: 'medium' },
    { category: 'Surveillance', incidents: 6, trend: -10, riskLevel: 'low' }
  ];

  const emergencyProtocols = [
    { name: 'Code Red - Security Breach', status: 'active', lastTested: '2024-01-10' },
    { name: 'Code Blue - Medical Emergency', status: 'active', lastTested: '2024-01-08' },
    { name: 'Code Yellow - Suspicious Activity', status: 'active', lastTested: '2024-01-12' },
    { name: 'Code Black - Bomb Threat', status: 'active', lastTested: '2024-01-05' },
    { name: 'Code White - Severe Weather', status: 'active', lastTested: '2024-01-11' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Security Incident Trends</h1>
          <p className="text-muted-foreground">Comprehensive security monitoring and threat analysis dashboard</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Eye className="mr-2 h-4 w-4" />
            Live Monitoring
          </Button>
          <Button>
            <Camera className="mr-2 h-4 w-4" />
            Security Feed
          </Button>
        </div>
      </div>

      {/* Security Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {incidentMetrics.map((metric) => (
          <Card key={metric.label} className="mission-control-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <metric.icon className="h-8 w-8 text-primary" />
                <Badge variant={metric.trend === 'down' ? 'default' : metric.trend === 'up' ? 'destructive' : 'secondary'}>
                  {metric.trend === 'up' ? <TrendingUp className="h-3 w-3" /> : 
                   metric.trend === 'down' ? <TrendingDown className="h-3 w-3" /> : '±'}
                </Badge>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
                <p className="text-3xl font-bold text-foreground">{metric.value}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${
                    metric.trend === 'down' ? 'text-success' : 
                    metric.trend === 'up' ? 'text-destructive' : 'text-muted-foreground'
                  }`}>
                    {metric.change}
                  </span>
                  <span className="text-xs text-muted-foreground">{metric.timeframe}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Analytics */}
      <Tabs defaultValue="incidents" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="incidents">Recent Incidents</TabsTrigger>
          <TabsTrigger value="trends">Threat Analysis</TabsTrigger>
          <TabsTrigger value="protocols">Emergency Protocols</TabsTrigger>
          <TabsTrigger value="analytics">Security Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="incidents" className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-destructive" />
                Recent Security Incidents
              </CardTitle>
              <CardDescription>Chronological list of security events and response actions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentIncidents.map((incident) => (
                <div key={incident.id} className="p-4 rounded-lg border bg-card/50">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant={incident.severity === 'high' ? 'destructive' : 
                                     incident.severity === 'medium' ? 'secondary' : 'outline'}>
                          {incident.type}
                        </Badge>
                        <Badge variant={incident.status === 'resolved' ? 'default' : 'secondary'}>
                          {incident.status}
                        </Badge>
                      </div>
                      <h3 className="font-medium text-foreground">{incident.description}</h3>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {incident.timestamp}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {incident.location}
                        </span>
                        <span>Response: {incident.responseTime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">View Details</Button>
                    <Button variant="outline" size="sm">Generate Report</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="mission-control-card">
              <CardHeader>
                <CardTitle>Threat Category Analysis</CardTitle>
                <CardDescription>Security incident breakdown by category and trend analysis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {threatCategories.map((threat) => (
                  <div key={threat.category} className="flex items-center justify-between p-3 rounded-lg border bg-card/50">
                    <div>
                      <p className="font-medium text-foreground">{threat.category}</p>
                      <p className="text-sm text-muted-foreground">{threat.incidents} incidents this month</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-sm font-medium ${
                        threat.trend > 0 ? 'text-destructive' : 'text-success'
                      }`}>
                        {threat.trend > 0 ? '+' : ''}{threat.trend}%
                      </span>
                      <Badge variant={threat.riskLevel === 'high' ? 'destructive' : 
                                    threat.riskLevel === 'medium' ? 'secondary' : 'outline'}>
                        {threat.riskLevel} risk
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="mission-control-card">
              <CardHeader>
                <CardTitle>Security Trend Analytics</CardTitle>
                <CardDescription>Monthly security incident patterns and predictions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center border rounded-lg bg-muted/20">
                  <div className="text-center">
                    <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Security Trend Chart</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="protocols" className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                Emergency Response Protocols
              </CardTitle>
              <CardDescription>Security protocol status and testing schedule</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {emergencyProtocols.map((protocol) => (
                <div key={protocol.name} className="flex items-center justify-between p-4 rounded-lg border bg-card/50">
                  <div>
                    <p className="font-medium text-foreground">{protocol.name}</p>
                    <p className="text-sm text-muted-foreground">Last tested: {protocol.lastTested}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="default">{protocol.status}</Badge>
                    <Button variant="outline" size="sm">Test Protocol</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="mission-control-card">
              <CardHeader>
                <CardTitle>Response Time Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48 flex items-center justify-center border rounded-lg bg-muted/20">
                  <div className="text-center">
                    <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Response Time Trends</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mission-control-card">
              <CardHeader>
                <CardTitle>Security Zone Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48 flex items-center justify-center border rounded-lg bg-muted/20">
                  <div className="text-center">
                    <Camera className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Coverage Heatmap</p>
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

export default SecurityIncidentTrends;