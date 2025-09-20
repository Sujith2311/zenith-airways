import React, { useState } from 'react';
import { 
  Cloud, 
  CloudRain, 
  Wind, 
  Zap,
  Eye,
  Thermometer,
  Gauge,
  Navigation,
  Layers,
  MapPin,
  Calendar,
  RefreshCw
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';

const InteractiveWeatherRadar = () => {
  const navigate = useNavigate();
  const [activeLayer, setActiveLayer] = useState('precipitation');
  const [showTurbulence, setShowTurbulence] = useState(true);
  const [showStorms, setShowStorms] = useState(true);
  const [showWind, setShowWind] = useState(false);

  const weatherConditions = [
    { 
      location: 'Terminal A', 
      condition: 'Partly Cloudy',
      temp: '72°F',
      wind: '15 mph NW',
      visibility: '10 mi',
      status: 'good',
      icon: Cloud
    },
    { 
      location: 'Runway 24L/R', 
      condition: 'Light Rain',
      temp: '68°F',
      wind: '22 mph W',
      visibility: '6 mi',
      status: 'caution',
      icon: CloudRain
    },
    { 
      location: 'Terminal B', 
      condition: 'Clear',
      temp: '75°F',
      wind: '8 mph E',
      visibility: '10+ mi',
      status: 'excellent',
      icon: Eye
    },
    { 
      location: 'Approach Path', 
      condition: 'Thunderstorm',
      temp: '65°F',
      wind: '35 mph SW',
      visibility: '2 mi',
      status: 'severe',
      icon: Zap
    }
  ];

  const weatherAlerts = [
    {
      id: 1,
      type: 'Severe Thunderstorm Warning',
      description: 'Approaching from southwest, expected arrival in 45 minutes',
      severity: 'high',
      affectedFlights: 12,
      recommendation: 'Divert incoming flights to alternate airports'
    },
    {
      id: 2,
      type: 'Wind Shear Alert',
      description: 'Moderate wind shear detected on Runway 24L approach',
      severity: 'medium',
      affectedFlights: 3,
      recommendation: 'Use Runway 32R for landings until conditions improve'
    },
    {
      id: 3,
      type: 'Visibility Reduced',
      description: 'Fog reducing visibility to 3 miles in eastern sectors',
      severity: 'low',
      affectedFlights: 5,
      recommendation: 'Monitor ILS approach procedures'
    }
  ];

  const flightImpacts = [
    { flight: 'ZA-451', route: 'LAX → SFO', delay: '15 min', reason: 'Thunderstorm avoidance', status: 'rerouted' },
    { flight: 'ZA-782', route: 'SEA → LAX', delay: '8 min', reason: 'Wind conditions', status: 'delayed' },
    { flight: 'ZA-334', route: 'DEN → LAX', delay: '22 min', reason: 'Weather holding pattern', status: 'holding' },
    { flight: 'ZA-891', route: 'LAX → PHX', delay: '0 min', reason: 'Clear conditions', status: 'on-time' },
    { flight: 'ZA-256', route: 'SFO → LAX', delay: '35 min', reason: 'Severe turbulence route', status: 'diverted' }
  ];

  const radarLayers = [
    { id: 'precipitation', name: 'Precipitation', enabled: true },
    { id: 'turbulence', name: 'Turbulence', enabled: showTurbulence },
    { id: 'storms', name: 'Storm Cells', enabled: showStorms },
    { id: 'wind', name: 'Wind Patterns', enabled: showWind },
    { id: 'temperature', name: 'Temperature', enabled: false },
    { id: 'pressure', name: 'Pressure Systems', enabled: false }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Interactive Weather Radar</h1>
          <p className="text-muted-foreground">Real-time weather monitoring and flight impact analysis</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Historical Data
          </Button>
          <Button>
            <RefreshCw className="mr-2 h-4 w-4" />
            Update Radar
          </Button>
        </div>
      </div>

      {/* Weather Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {weatherConditions.map((condition) => (
          <Card key={condition.location} className="mission-control-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <condition.icon className="h-8 w-8 text-primary" />
                <Badge variant={
                  condition.status === 'excellent' ? 'default' : 
                  condition.status === 'good' ? 'secondary' : 
                  condition.status === 'caution' ? 'secondary' : 'destructive'
                }>
                  {condition.status}
                </Badge>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">{condition.location}</p>
                <p className="text-lg font-bold text-foreground">{condition.condition}</p>
                <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Thermometer className="h-3 w-3" />
                    {condition.temp}
                  </div>
                  <div className="flex items-center gap-1">
                    <Wind className="h-3 w-3" />
                    {condition.wind}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    {condition.visibility}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Radar Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Radar Display */}
        <div className="lg:col-span-3">
          <Card className="mission-control-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Navigation className="h-5 w-5 text-primary" />
                  Live Weather Radar
                </CardTitle>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Last Update: 2 min ago</span>
                  <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-96 relative border rounded-lg bg-gradient-to-b from-sky-900/20 to-blue-900/30 overflow-hidden">
                {/* Simulated Radar Interface */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Radar Rings */}
                    <div className="absolute inset-0 border-2 border-primary/20 rounded-full w-80 h-80" />
                    <div className="absolute inset-4 border border-primary/10 rounded-full" />
                    <div className="absolute inset-8 border border-primary/10 rounded-full" />
                    <div className="absolute inset-12 border border-primary/10 rounded-full" />
                    
                    {/* Weather Systems */}
                    <div className="absolute top-8 left-12 w-16 h-16 bg-red-500/60 rounded-full blur-sm" />
                    <div className="absolute bottom-16 right-8 w-24 h-24 bg-yellow-500/40 rounded-full blur-sm" />
                    <div className="absolute top-1/2 left-8 w-12 h-12 bg-blue-500/50 rounded-full blur-sm" />
                    
                    {/* Center Point */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full" />
                  </div>
                </div>
                
                {/* Overlay Controls */}
                <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-sm font-medium text-foreground mb-2">Active Layers</p>
                  <div className="space-y-2">
                    {radarLayers.slice(0, 4).map((layer) => (
                      <div key={layer.id} className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded ${layer.enabled ? 'bg-primary' : 'bg-muted'}`} />
                        <span className="text-xs text-foreground">{layer.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Radar Controls */}
        <div className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-primary" />
                Radar Layers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Turbulence</span>
                <Switch 
                  checked={showTurbulence} 
                  onCheckedChange={setShowTurbulence}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Storm Cells</span>
                <Switch 
                  checked={showStorms} 
                  onCheckedChange={setShowStorms}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Wind Patterns</span>
                <Switch 
                  checked={showWind} 
                  onCheckedChange={setShowWind}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="text-sm">Weather Legend</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded" />
                <span className="text-xs">Severe Storms</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-500 rounded" />
                <span className="text-xs">Moderate Rain</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded" />
                <span className="text-xs">Light Precipitation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-purple-500 rounded" />
                <span className="text-xs">Turbulence</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Weather Analysis */}
      <Tabs defaultValue="alerts" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="alerts">Weather Alerts</TabsTrigger>
          <TabsTrigger value="impacts">Flight Impacts</TabsTrigger>
          <TabsTrigger value="forecast">Forecast Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="alerts" className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-destructive" />
                Active Weather Alerts
              </CardTitle>
              <CardDescription>Current weather warnings and operational recommendations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {weatherAlerts.map((alert) => (
                <div key={alert.id} className="p-4 rounded-lg border bg-card/50">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant={alert.severity === 'high' ? 'destructive' : 
                                      alert.severity === 'medium' ? 'secondary' : 'outline'}>
                          {alert.type}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {alert.affectedFlights} flights affected
                        </span>
                      </div>
                      <p className="text-sm text-foreground mb-2">{alert.description}</p>
                      <div className="flex items-start gap-2">
                        <span className="text-xs font-medium text-success">Recommendation:</span>
                        <span className="text-xs text-muted-foreground">{alert.recommendation}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">View Details</Button>
                    <Button size="sm">Implement Action</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="impacts" className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Flight Weather Impacts
              </CardTitle>
              <CardDescription>Real-time weather effects on flight operations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {flightImpacts.map((impact, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border bg-card/50">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="font-medium text-foreground">{impact.flight}</p>
                      <p className="text-sm text-muted-foreground">{impact.route}</p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {impact.reason}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-sm font-medium ${
                      impact.status === 'on-time' ? 'text-success' : 
                      impact.status === 'delayed' ? 'text-warning' : 'text-destructive'
                    }`}>
                      {impact.delay}
                    </span>
                    <Badge variant={
                      impact.status === 'on-time' ? 'default' : 
                      impact.status === 'delayed' ? 'secondary' : 'destructive'
                    }>
                      {impact.status}
                    </Badge>
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
                <CardTitle>24-Hour Forecast</CardTitle>
                <CardDescription>Predicted weather patterns and operational impacts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center border rounded-lg bg-muted/20">
                  <div className="text-center">
                    <Cloud className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Weather Forecast Chart</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mission-control-card">
              <CardHeader>
                <CardTitle>Storm Tracking</CardTitle>
                <CardDescription>Active storm system movement and intensity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center border rounded-lg bg-muted/20">
                  <div className="text-center">
                    <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Storm Path Analysis</p>
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

export default InteractiveWeatherRadar;