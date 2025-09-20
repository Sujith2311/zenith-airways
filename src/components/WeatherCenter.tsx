import React from 'react';
import { 
  Cloud, 
  CloudRain, 
  Wind, 
  Thermometer,
  Eye,
  AlertTriangle,
  TrendingDown,
  Activity
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const WeatherCenter = () => {
  const currentConditions = [
    { label: 'Temperature', value: '72°F', icon: Thermometer, status: 'good' },
    { label: 'Wind Speed', value: '15 mph', icon: Wind, status: 'warning' },
    { label: 'Visibility', value: '8 miles', icon: Eye, status: 'good' },
    { label: 'Precipitation', value: '0%', icon: CloudRain, status: 'good' }
  ];

  const weatherAlerts = [
    { 
      id: 1, 
      type: 'Severe Turbulence', 
      route: 'SFO-LAX Corridor', 
      severity: 'high',
      impact: 'Flight delays expected',
      duration: '2-4 hours'
    },
    { 
      id: 2, 
      type: 'Low Visibility', 
      route: 'JFK Approach', 
      severity: 'medium',
      impact: 'Extended approach times',
      duration: '1-2 hours'
    },
    { 
      id: 3, 
      type: 'Wind Shear', 
      route: 'ORD Runway 28L', 
      severity: 'high',
      impact: 'Runway closure possible',
      duration: '30-60 minutes'
    }
  ];

  const flightImpacts = [
    { flight: 'ZA101', route: 'LAX → SFO', impact: 'Turbulence', delay: '15min', severity: 'medium' },
    { flight: 'ZA204', route: 'JFK → DEN', impact: 'Headwinds', delay: '25min', severity: 'low' },
    { flight: 'ZA318', route: 'ORD → ATL', impact: 'Storm Cell', delay: '45min', severity: 'high' },
    { flight: 'ZA427', route: 'DFW → SEA', impact: 'Low Visibility', delay: '20min', severity: 'medium' }
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
      case 'good': return 'text-success';
      case 'warning': return 'text-warning';
      case 'danger': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Weather Center</h1>
          <p className="text-muted-foreground">Live weather radar and flight impact monitoring</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Activity className="mr-2 h-4 w-4" />
            Live Radar
          </Button>
          <Button>
            <TrendingDown className="mr-2 h-4 w-4" />
            Forecast
          </Button>
        </div>
      </div>

      {/* Current Conditions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {currentConditions.map((condition) => (
          <Card key={condition.label} className="mission-control-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{condition.label}</p>
                  <p className={`text-3xl font-bold ${getStatusColor(condition.status)}`}>
                    {condition.value}
                  </p>
                </div>
                <condition.icon className={`h-8 w-8 ${getStatusColor(condition.status)}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Weather Alerts */}
      <Card className="mission-control-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            Active Weather Alerts
          </CardTitle>
          <CardDescription>Critical weather conditions affecting operations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {weatherAlerts.map((alert) => (
            <div key={alert.id} className="flex items-center justify-between p-4 rounded-lg border bg-card/50">
              <div className="flex items-center gap-4">
                <div className={`h-3 w-3 rounded-full ${
                  alert.severity === 'high' ? 'bg-destructive alert-pulse' : 'bg-warning'
                }`} />
                <div>
                  <p className="font-medium text-foreground">{alert.type} - {alert.route}</p>
                  <p className="text-sm text-muted-foreground">
                    {alert.impact} • Duration: {alert.duration}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={getSeverityColor(alert.severity)}>
                  {alert.severity}
                </Badge>
                <Button variant="outline" size="sm">View Details</Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Main Content */}
      <Tabs defaultValue="radar" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="radar">Weather Radar</TabsTrigger>
          <TabsTrigger value="impacts">Flight Impact</TabsTrigger>
          <TabsTrigger value="forecast">48hr Forecast</TabsTrigger>
          <TabsTrigger value="analytics">Weather Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="radar" className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle>Interactive Weather Radar</CardTitle>
              <CardDescription>Real-time precipitation, turbulence, and wind patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-96 bg-radar-background rounded-lg border flex items-center justify-center">
                <div className="radar-sweep"></div>
                <div className="text-center">
                  <Cloud className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Weather Radar Active</p>
                  <p className="text-sm text-muted-foreground">Monitoring continental weather patterns</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="impacts" className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle>Flight Weather Impact Assessment</CardTitle>
              <CardDescription>Current flight delays and weather-related disruptions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {flightImpacts.map((impact, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-card/50">
                  <div className="flex items-center gap-4">
                    <Cloud className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-foreground">
                        {impact.flight} - {impact.route}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {impact.impact} causing {impact.delay} delay
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={getSeverityColor(impact.severity)}>
                      {impact.severity}
                    </Badge>
                    <Button variant="outline" size="sm">Reroute</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="forecast" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="mission-control-card">
              <CardHeader>
                <CardTitle>Extended Forecast</CardTitle>
                <CardDescription>48-hour weather prediction</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center border rounded-lg bg-muted/20">
                  <div className="text-center">
                    <Cloud className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Extended Weather Forecast</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mission-control-card">
              <CardHeader>
                <CardTitle>Delay Prediction Model</CardTitle>
                <CardDescription>AI-powered delay forecasting</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center border rounded-lg bg-muted/20">
                  <div className="text-center">
                    <TrendingDown className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Predictive Analytics Dashboard</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="mission-control-card">
              <CardHeader>
                <CardTitle>Weather Impact Trends</CardTitle>
                <CardDescription>Historical weather delay patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center border rounded-lg bg-muted/20">
                  <div className="text-center">
                    <Activity className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Weather Analytics Chart</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mission-control-card">
              <CardHeader>
                <CardTitle>Route Optimization</CardTitle>
                <CardDescription>Weather-aware flight path recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center border rounded-lg bg-muted/20">
                  <div className="text-center">
                    <Wind className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Route Optimization Dashboard</p>
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

export default WeatherCenter;