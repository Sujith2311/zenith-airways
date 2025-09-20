import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Cloud, 
  Eye, 
  ArrowLeft,
  Zap,
  Wind,
  Thermometer,
  Droplets,
  Sun,
  CloudSnow,
  Map,
  Layers,
  Settings
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import RadarAnimation from './RadarAnimation';

const InteractiveWeatherRadarFull = () => {
  const navigate = useNavigate();
  const [activeLayer, setActiveLayer] = useState('precipitation');
  const [layers, setLayers] = useState({
    precipitation: true,
    temperature: false,
    wind: true,
    turbulence: true,
    storms: true
  });

  const weatherConditions = [
    { location: 'LAX', condition: 'Clear', temp: 72, wind: 15, visibility: 10, icon: Sun },
    { location: 'SFO', condition: 'Partly Cloudy', temp: 65, wind: 12, visibility: 8, icon: Cloud },
    { location: 'SEA', condition: 'Light Rain', temp: 58, wind: 18, visibility: 6, icon: Droplets },
    { location: 'DEN', condition: 'Snow', temp: 35, wind: 22, visibility: 4, icon: CloudSnow },
    { location: 'PHX', condition: 'Clear', temp: 85, wind: 8, visibility: 10, icon: Sun },
  ];

  const flightImpacts = [
    { flight: 'ZA451', route: 'LAX-SFO', impact: 'None', delay: 0, recommendation: 'On schedule' },
    { flight: 'ZA203', route: 'SFO-SEA', impact: 'Light turbulence', delay: 5, recommendation: 'Monitor conditions' },
    { flight: 'ZA128', route: 'SEA-DEN', impact: 'Moderate snow', delay: 15, recommendation: 'Consider alternate route' },
    { flight: 'ZA330', route: 'DEN-PHX', impact: 'High winds', delay: 10, recommendation: 'Adjust approach' },
  ];

  const weatherAlerts = [
    { id: 1, type: 'Storm', location: 'Pacific Northwest', severity: 'High', eta: '2 hours', description: 'Severe thunderstorm developing' },
    { id: 2, type: 'Turbulence', location: 'Rocky Mountains', severity: 'Medium', eta: '30 minutes', description: 'Moderate to severe turbulence expected' },
    { id: 3, type: 'Wind Shear', location: 'DEN Approach', severity: 'High', eta: 'Active', description: 'Wind shear detected on final approach' },
  ];

  const toggleLayer = (layer: string) => {
    setLayers(prev => ({
      ...prev,
      [layer]: !prev[layer]
    }));
  };

  const getImpactColor = (impact: string) => {
    if (impact === 'None') return 'text-success';
    if (impact.includes('Light')) return 'text-warning';
    return 'text-destructive';
  };

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" onClick={() => navigate('/weather')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Weather Center
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Interactive Weather Radar</h1>
            <p className="text-muted-foreground">Live weather monitoring with interactive layers and flight impact analysis</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Configure Alerts
          </Button>
          <Button>
            <Map className="mr-2 h-4 w-4" />
            Fullscreen Mode
          </Button>
        </div>
      </div>

      {/* Main Radar Display */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Radar Map */}
        <div className="lg:col-span-3">
          <Card className="mission-control-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  Live Weather Radar
                </CardTitle>
                <div className="flex gap-2">
                  <Badge variant="default" className="bg-success text-success-foreground">Live</Badge>
                  <Badge variant="outline">Last updated: 2 min ago</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative">
                {/* Large Radar Display */}
                <div className="h-96 bg-gradient-to-br from-muted/20 to-muted/40 rounded-lg border relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <RadarAnimation size="lg" className="scale-150" />
                  </div>
                  
                  {/* Weather Overlays */}
                  {layers.storms && (
                    <div className="absolute top-4 left-16 w-8 h-8 rounded-full bg-destructive/60 animate-pulse border-2 border-destructive">
                      <Zap className="h-4 w-4 text-white m-2" />
                    </div>
                  )}
                  
                  {layers.precipitation && (
                    <div className="absolute bottom-12 right-20 w-12 h-8 rounded-full bg-primary/40 border border-primary">
                      <Droplets className="h-4 w-4 text-primary m-2" />
                    </div>
                  )}
                  
                  {layers.turbulence && (
                    <div className="absolute top-20 right-12 w-6 h-6 rounded-full bg-warning/60 animate-bounce">
                      <Wind className="h-3 w-3 text-warning m-1.5" />
                    </div>
                  )}
                </div>

                {/* Layer Controls */}
                <div className="mt-4 flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <Switch 
                      id="precipitation" 
                      checked={layers.precipitation} 
                      onCheckedChange={() => toggleLayer('precipitation')}
                    />
                    <Label htmlFor="precipitation" className="flex items-center gap-1">
                      <Droplets className="h-4 w-4 text-primary" />
                      Precipitation
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch 
                      id="wind" 
                      checked={layers.wind} 
                      onCheckedChange={() => toggleLayer('wind')}
                    />
                    <Label htmlFor="wind" className="flex items-center gap-1">
                      <Wind className="h-4 w-4 text-primary" />
                      Wind Patterns
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch 
                      id="turbulence" 
                      checked={layers.turbulence} 
                      onCheckedChange={() => toggleLayer('turbulence')}
                    />
                    <Label htmlFor="turbulence" className="flex items-center gap-1">
                      <Wind className="h-4 w-4 text-warning" />
                      Turbulence
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch 
                      id="storms" 
                      checked={layers.storms} 
                      onCheckedChange={() => toggleLayer('storms')}
                    />
                    <Label htmlFor="storms" className="flex items-center gap-1">
                      <Zap className="h-4 w-4 text-destructive" />
                      Storm Systems
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch 
                      id="temperature" 
                      checked={layers.temperature} 
                      onCheckedChange={() => toggleLayer('temperature')}
                    />
                    <Label htmlFor="temperature" className="flex items-center gap-1">
                      <Thermometer className="h-4 w-4 text-primary" />
                      Temperature
                    </Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Side Panel */}
        <div className="space-y-6">
          {/* Current Conditions */}
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cloud className="h-5 w-5 text-primary" />
                Current Conditions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {weatherConditions.slice(0, 3).map((condition, index) => {
                const IconComponent = condition.icon;
                return (
                  <div key={index} className="p-3 rounded-lg border bg-card/50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <IconComponent className="h-4 w-4 text-primary" />
                        <span className="font-medium">{condition.location}</span>
                      </div>
                      <Badge variant="outline">{condition.condition}</Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <p className="text-muted-foreground">Temp</p>
                        <p className="font-medium">{condition.temp}°F</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Wind</p>
                        <p className="font-medium">{condition.wind} mph</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Vis</p>
                        <p className="font-medium">{condition.visibility} mi</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Weather Alerts */}
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-destructive" />
                Active Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {weatherAlerts.map((alert) => (
                <div key={alert.id} className="p-3 rounded-lg border bg-card/50">
                  <div className="flex items-center justify-between mb-1">
                    <Badge variant={getSeverityColor(alert.severity)}>{alert.type}</Badge>
                    <span className="text-xs text-muted-foreground">ETA: {alert.eta}</span>
                  </div>
                  <p className="text-sm font-medium">{alert.location}</p>
                  <p className="text-xs text-muted-foreground">{alert.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Flight Impact Analysis */}
      <Card className="mission-control-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wind className="h-5 w-5 text-primary" />
            Flight Impact Analysis
          </CardTitle>
          <CardDescription>
            Real-time weather impact assessment for active flights
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {flightImpacts.map((impact, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-card/50">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-medium text-foreground">{impact.flight}</span>
                    <Badge variant="outline">{impact.route}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{impact.recommendation}</p>
                </div>
                <div className="text-right">
                  <p className={`font-medium ${getImpactColor(impact.impact)}`}>{impact.impact}</p>
                  {impact.delay > 0 && (
                    <p className="text-sm text-destructive">+{impact.delay} min delay</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveWeatherRadarFull;