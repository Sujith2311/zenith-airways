import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  Users,
  Plane,
  Clock,
  Fuel,
  Download,
  Calendar
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AnalyticsHub = () => {
  const navigate = useNavigate();
  const kpiMetrics = [
    { 
      label: 'On-Time Performance', 
      value: '87.3%', 
      change: '+2.1%', 
      trend: 'up',
      target: '90%',
      icon: Clock 
    },
    { 
      label: 'Fuel Efficiency', 
      value: '4.2L/km', 
      change: '-0.3L', 
      trend: 'up',
      target: '4.0L/km',
      icon: Fuel 
    },
    { 
      label: 'Crew Utilization', 
      value: '84.7%', 
      change: '+1.8%', 
      trend: 'up',
      target: '85%',
      icon: Users 
    },
    { 
      label: 'Fleet Availability', 
      value: '94.1%', 
      change: '-0.5%', 
      trend: 'down',
      target: '95%',
      icon: Plane 
    }
  ];

  const predictiveInsights = [
    {
      title: 'Crew Fatigue vs Flight Delays',
      insight: 'Strong correlation detected between crew fatigue scores above 7.5 and delays exceeding 15 minutes',
      impact: 'High',
      recommendation: 'Implement proactive crew rotation when fatigue scores reach 7.0'
    },
    {
      title: 'Gate Congestion Weather Impact',
      insight: 'Gate congestion increases by 23% during adverse weather conditions',
      impact: 'Medium',
      recommendation: 'Pre-position aircraft at alternative gates when weather alerts are issued'
    },
    {
      title: 'Maintenance Schedule Optimization',
      insight: 'Current maintenance windows can be optimized to increase availability by 3.2%',
      impact: 'High',
      recommendation: 'Shift maintenance to low-demand periods between 2-6 AM'
    }
  ];

  const performanceWidgets = [
    { title: 'Weekly Flight Operations', type: 'line', status: 'trending_up' },
    { title: 'Delay Cause Analysis', type: 'pie', status: 'stable' },
    { title: 'Crew Performance Metrics', type: 'bar', status: 'trending_up' },
    { title: 'Gate Utilization Heatmap', type: 'heatmap', status: 'stable' },
    { title: 'Weather Impact Timeline', type: 'timeline', status: 'trending_down' },
    { title: 'Maintenance Compliance', type: 'gauge', status: 'trending_up' }
  ];

  const exportOptions = [
    { format: 'PDF Report', description: 'Comprehensive performance report' },
    { format: 'Excel Data', description: 'Raw data export for analysis' },
    { format: 'PowerBI Dataset', description: 'Business intelligence integration' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Analytics Hub</h1>
          <p className="text-muted-foreground">Comprehensive performance analytics and predictive insights</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Date Range
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>
        </div>
      </div>

      {/* KPI Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiMetrics.map((metric) => (
          <Card 
            key={metric.label} 
            className="mission-control-card cursor-pointer hover:bg-muted/50 transition-colors"
            onClick={() => {
              if (metric.label.includes('Performance')) navigate('/delay-analysis');
              else if (metric.label.includes('Crew')) navigate('/crew');
              else navigate('/analytics');
            }}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <metric.icon className="h-5 w-5 text-muted-foreground" />
                <Badge variant={metric.trend === 'up' ? 'default' : 'secondary'}>
                  {metric.trend === 'up' ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                </Badge>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
                <p className="text-3xl font-bold text-foreground">{metric.value}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${
                    metric.trend === 'up' ? 'text-success' : 'text-warning'
                  }`}>
                    {metric.change}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Target: {metric.target}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Predictive Insights */}
      <Card className="mission-control-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            AI-Powered Predictive Insights
          </CardTitle>
          <CardDescription>Machine learning analysis of operational patterns and recommendations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {predictiveInsights.map((insight, index) => (
            <div key={index} className="p-4 rounded-lg border bg-card/50">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-medium text-foreground">{insight.title}</h3>
                <Badge variant={insight.impact === 'High' ? 'destructive' : 'secondary'}>
                  {insight.impact} Impact
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{insight.insight}</p>
              <div className="flex items-start gap-2">
                <span className="text-xs font-medium text-success">Recommendation:</span>
                <span className="text-xs text-muted-foreground">{insight.recommendation}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Main Analytics */}
      <Tabs defaultValue="performance" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="performance">Performance Dashboard</TabsTrigger>
          <TabsTrigger value="operational">Operational Insights</TabsTrigger>
          <TabsTrigger value="predictive">Predictive Models</TabsTrigger>
          <TabsTrigger value="reports">Custom Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {performanceWidgets.map((widget, index) => (
              <Card 
                key={index} 
                className="mission-control-card cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => {
                  if (widget.title.includes('Delay')) navigate('/delay-analysis');
                  else if (widget.title.includes('Gate')) navigate('/gate-utilization');
                  else if (widget.title.includes('Crew')) navigate('/crew');
                  else navigate('/analytics');
                }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium">{widget.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {widget.status.replace('_', ' ')}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-32 flex items-center justify-center border rounded-lg bg-muted/20">
                    <div className="text-center">
                      <BarChart3 className="h-6 w-6 text-primary mx-auto mb-2" />
                      <p className="text-xs text-muted-foreground">{widget.type} chart</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="operational" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="mission-control-card">
              <CardHeader>
                <CardTitle>Crew Fatigue Analysis</CardTitle>
                <CardDescription>Correlation between crew fatigue and operational delays</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center border rounded-lg bg-muted/20">
                  <div className="text-center">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Crew Performance Analytics</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card 
              className="mission-control-card cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => navigate('/delay-analysis')}
            >
              <CardHeader>
                <CardTitle>Weather Impact Analysis</CardTitle>
                <CardDescription>Weather patterns vs operational disruptions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center border rounded-lg bg-muted/20">
                  <div className="text-center">
                    <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Weather Impact Dashboard</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="predictive" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="mission-control-card">
              <CardHeader>
                <CardTitle>Delay Prediction Model</CardTitle>
                <CardDescription>AI-powered flight delay forecasting</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center border rounded-lg bg-muted/20">
                  <div className="text-center">
                    <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Predictive Delay Analytics</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mission-control-card">
              <CardHeader>
                <CardTitle>Maintenance Forecasting</CardTitle>
                <CardDescription>Predictive maintenance scheduling optimization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center border rounded-lg bg-muted/20">
                  <div className="text-center">
                    <Plane className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Maintenance Prediction Model</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle>Data Export & Reporting</CardTitle>
              <CardDescription>Generate custom reports and export data for external analysis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {exportOptions.map((option, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-card/50">
                  <div>
                    <p className="font-medium text-foreground">{option.format}</p>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="mission-control-card">
              <CardHeader>
                <CardTitle>Report Scheduler</CardTitle>
                <CardDescription>Automated report generation and distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-32 flex items-center justify-center border rounded-lg bg-muted/20">
                  <div className="text-center">
                    <Calendar className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Scheduled Reports</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mission-control-card">
              <CardHeader>
                <CardTitle>Custom Dashboard Builder</CardTitle>
                <CardDescription>Create personalized analytics dashboards</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-32 flex items-center justify-center border rounded-lg bg-muted/20">
                  <div className="text-center">
                    <BarChart3 className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Dashboard Builder</p>
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

export default AnalyticsHub;