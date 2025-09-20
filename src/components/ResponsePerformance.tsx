import React from 'react';
import { 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  TrendingUp,
  TrendingDown,
  Users,
  Target,
  Timer,
  Activity,
  BarChart3
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ResponsePerformance = () => {
  const performanceMetrics = [
    { 
      label: 'Avg Response Time', 
      value: '2:34', 
      target: '< 3:00',
      percentage: 85,
      trend: 'up',
      icon: Timer 
    },
    { 
      label: 'Resolution Rate', 
      value: '94.2%', 
      target: '> 90%',
      percentage: 94,
      trend: 'up',
      icon: CheckCircle 
    },
    { 
      label: 'SLA Compliance', 
      value: '91.7%', 
      target: '> 95%',
      percentage: 92,
      trend: 'down',
      icon: Target 
    },
    { 
      label: 'Team Efficiency', 
      value: '87.5%', 
      target: '> 85%',
      percentage: 88,
      trend: 'up',
      icon: Activity 
    }
  ];

  const responseTeams = [
    {
      team: 'Security Response Unit',
      avgResponseTime: '1:45',
      incidents: 23,
      resolutionRate: 96,
      efficiency: 92,
      status: 'excellent'
    },
    {
      team: 'Medical Emergency Team',
      avgResponseTime: '2:12',
      incidents: 15,
      resolutionRate: 100,
      efficiency: 94,
      status: 'excellent'
    },
    {
      team: 'Operations Crisis Team',
      avgResponseTime: '3:28',
      incidents: 41,
      resolutionRate: 89,
      efficiency: 78,
      status: 'good'
    },
    {
      team: 'Maintenance Response',
      avgResponseTime: '4:15',
      incidents: 67,
      resolutionRate: 92,
      efficiency: 85,
      status: 'good'
    },
    {
      team: 'Weather Response Unit',
      avgResponseTime: '1:33',
      incidents: 8,
      resolutionRate: 100,
      efficiency: 96,
      status: 'excellent'
    }
  ];

  const recentResponses = [
    {
      id: 1,
      incident: 'Crew Fatigue Violation - Flight ZA451',
      responseTime: '1:23',
      resolution: 'Crew rotation completed',
      team: 'Operations Crisis Team',
      severity: 'high',
      status: 'resolved',
      timestamp: '2024-01-15 14:23'
    },
    {
      id: 2,
      incident: 'Aircraft Mechanical Alert - N747ZA',
      responseTime: '2:45',
      resolution: 'Maintenance crew dispatched',
      team: 'Maintenance Response',
      severity: 'medium',
      status: 'in-progress',
      timestamp: '2024-01-15 13:18'
    },
    {
      id: 3,
      incident: 'Weather Delay - Storm System Approach',
      responseTime: '0:58',
      resolution: 'Flight rescheduling initiated',
      team: 'Weather Response Unit',
      severity: 'medium',
      status: 'resolved',
      timestamp: '2024-01-15 12:05'
    },
    {
      id: 4,
      incident: 'Security Perimeter Breach - Zone 7',
      responseTime: '1:12',
      resolution: 'All-clear confirmed, false alarm',
      team: 'Security Response Unit',
      severity: 'high',
      status: 'resolved',
      timestamp: '2024-01-15 11:32'
    }
  ];

  const slaMetrics = [
    { category: 'Critical Incidents', target: '< 2:00', actual: '1:45', compliance: 98 },
    { category: 'High Priority', target: '< 5:00', actual: '3:12', compliance: 94 },
    { category: 'Medium Priority', target: '< 15:00', actual: '8:34', compliance: 96 },
    { category: 'Low Priority', target: '< 30:00', actual: '18:22', compliance: 89 },
    { category: 'Emergency Response', target: '< 1:00', actual: '0:42', compliance: 100 }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Response Performance</h1>
          <p className="text-muted-foreground">Incident response analytics and team performance metrics</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <BarChart3 className="mr-2 h-4 w-4" />
            Performance Report
          </Button>
          <Button>
            <Activity className="mr-2 h-4 w-4" />
            Live Dashboard
          </Button>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceMetrics.map((metric) => (
          <Card key={metric.label} className="mission-control-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <metric.icon className="h-8 w-8 text-primary" />
                <Badge variant={metric.trend === 'up' ? 'default' : 'secondary'}>
                  {metric.trend === 'up' ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                </Badge>
              </div>
              <div className="space-y-3">
                <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
                <p className="text-3xl font-bold text-foreground">{metric.value}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Target: {metric.target}</span>
                    <span>{metric.percentage}%</span>
                  </div>
                  <Progress value={metric.percentage} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Analytics */}
      <Tabs defaultValue="teams" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="teams">Team Performance</TabsTrigger>
          <TabsTrigger value="responses">Recent Responses</TabsTrigger>
          <TabsTrigger value="sla">SLA Compliance</TabsTrigger>
          <TabsTrigger value="analytics">Performance Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="teams" className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Response Team Performance
              </CardTitle>
              <CardDescription>Individual team metrics and efficiency ratings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {responseTeams.map((team) => (
                <div key={team.team} className="p-4 rounded-lg border bg-card/50">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-medium text-foreground">{team.team}</h3>
                      <p className="text-sm text-muted-foreground">{team.incidents} incidents handled this month</p>
                    </div>
                    <Badge variant={team.status === 'excellent' ? 'default' : 'secondary'}>
                      {team.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Avg Response</p>
                      <p className="text-lg font-bold text-foreground">{team.avgResponseTime}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Resolution Rate</p>
                      <p className="text-lg font-bold text-foreground">{team.resolutionRate}%</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Efficiency</p>
                      <p className="text-lg font-bold text-foreground">{team.efficiency}%</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="responses" className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Recent Response History
              </CardTitle>
              <CardDescription>Chronological incident responses and outcomes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentResponses.map((response) => (
                <div key={response.id} className="p-4 rounded-lg border bg-card/50">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant={response.severity === 'high' ? 'destructive' : 'secondary'}>
                          {response.severity}
                        </Badge>
                        <Badge variant={response.status === 'resolved' ? 'default' : 'secondary'}>
                          {response.status}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{response.timestamp}</span>
                      </div>
                      <h3 className="font-medium text-foreground mb-1">{response.incident}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{response.resolution}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>Response Time: <span className="font-medium">{response.responseTime}</span></span>
                        <span>Team: <span className="font-medium">{response.team}</span></span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {response.status === 'resolved' ? 
                        <CheckCircle className="h-5 w-5 text-success" /> : 
                        <AlertCircle className="h-5 w-5 text-warning" />
                      }
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sla" className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                SLA Compliance Metrics
              </CardTitle>
              <CardDescription>Service level agreement performance by incident category</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {slaMetrics.map((sla) => (
                <div key={sla.category} className="p-4 rounded-lg border bg-card/50">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium text-foreground">{sla.category}</h3>
                    <Badge variant={sla.compliance >= 95 ? 'default' : sla.compliance >= 85 ? 'secondary' : 'destructive'}>
                      {sla.compliance}% Compliance
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-3">
                    <div>
                      <p className="text-xs text-muted-foreground">Target Response</p>
                      <p className="font-medium text-foreground">{sla.target}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Actual Average</p>
                      <p className="font-medium text-foreground">{sla.actual}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Performance</p>
                      <p className={`font-medium ${sla.compliance >= 95 ? 'text-success' : 
                                   sla.compliance >= 85 ? 'text-warning' : 'text-destructive'}`}>
                        {sla.compliance}%
                      </p>
                    </div>
                  </div>
                  <Progress value={sla.compliance} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="mission-control-card">
              <CardHeader>
                <CardTitle>Response Time Trends</CardTitle>
                <CardDescription>Historical response performance analysis</CardDescription>
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

            <Card className="mission-control-card">
              <CardHeader>
                <CardTitle>Team Efficiency Comparison</CardTitle>
                <CardDescription>Comparative analysis of response team performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center border rounded-lg bg-muted/20">
                  <div className="text-center">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Team Performance Chart</p>
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

export default ResponsePerformance;