import React, { useState } from 'react';
import { 
  Route, 
  Navigation, 
  Fuel, 
  Clock,
  TrendingUp,
  TrendingDown,
  Plane,
  Wind,
  MapPin,
  Zap,
  Target,
  BarChart3
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const RouteOptimization = () => {
  const [selectedRoute, setSelectedRoute] = useState('');

  const optimizationMetrics = [
    { 
      label: 'Fuel Savings', 
      value: '12.3%', 
      change: '+2.1%',
      trend: 'up',
      icon: Fuel,
      description: 'vs standard routes'
    },
    { 
      label: 'Time Efficiency', 
      value: '8.7%', 
      change: '+1.4%',
      trend: 'up',
      icon: Clock,
      description: 'average time saved'
    },
    { 
      label: 'Route Accuracy', 
      value: '94.2%', 
      change: '+0.8%',
      trend: 'up',
      icon: Target,
      description: 'prediction accuracy'
    },
    { 
      label: 'Cost Reduction', 
      value: '15.6%', 
      change: '+3.2%',
      trend: 'up',
      icon: TrendingDown,
      description: 'operational savings'
    }
  ];

  const activeRoutes = [
    {
      flight: 'ZA-451',
      route: 'LAX → SFO',
      currentPath: 'Standard Corridor',
      optimizedPath: 'Northern Wind Route',
      fuelSaving: '8.2%',
      timeSaving: '12 min',
      weatherImpact: 'Favorable tailwinds',
      status: 'optimized',
      recommendation: 'Use optimized route'
    },
    {
      flight: 'ZA-782',
      route: 'SEA → LAX',
      currentPath: 'Direct Route',
      optimizedPath: 'Storm Avoidance Path',
      fuelSaving: '15.3%',
      timeSaving: '8 min',
      weatherImpact: 'Thunderstorm avoidance',
      status: 'rerouting',
      recommendation: 'Immediate reroute required'
    },
    {
      flight: 'ZA-334',
      route: 'DEN → LAX',
      currentPath: 'Mountain Route',
      optimizedPath: 'High Altitude Jet Stream',
      fuelSaving: '22.1%',
      timeSaving: '25 min',
      weatherImpact: 'Jet stream utilization',
      status: 'analyzing',
      recommendation: 'Climb to FL410 for optimization'
    },
    {
      flight: 'ZA-891',
      route: 'LAX → PHX',
      currentPath: 'Desert Corridor',
      optimizedPath: 'Current path optimal',
      fuelSaving: '0%',
      timeSaving: '0 min',
      weatherImpact: 'Clear conditions',
      status: 'optimal',
      recommendation: 'Maintain current route'
    }
  ];

  const routeFactors = [
    {
      factor: 'Weather Conditions',
      impact: 'High',
      status: 'Variable',
      description: 'Thunderstorms affecting 3 major corridors'
    },
    {
      factor: 'Air Traffic Congestion',
      impact: 'Medium',
      status: 'Moderate',
      description: 'Delayed departures from LAX causing backlog'
    },
    {
      factor: 'Fuel Prices',
      impact: 'High',
      status: 'Stable',
      description: 'Current fuel costs favor longer, more efficient routes'
    },
    {
      factor: 'Wind Patterns',
      impact: 'High',
      status: 'Favorable',
      description: 'Strong jet streams available at FL350-410'
    },
    {
      factor: 'Restricted Airspace',
      impact: 'Low',
      status: 'Clear',
      description: 'No active military operations affecting routes'
    }
  ];

  const suggestedOptimizations = [
    {
      id: 1,
      title: 'Jet Stream Utilization - Eastbound Flights',
      description: 'Strong jet stream at FL390 can reduce flight times by up to 45 minutes',
      potentialSavings: '18-25% fuel savings',
      affectedFlights: 8,
      implementation: 'Request FL390 clearance for eastbound departures',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Storm System Avoidance - Southwest Routes',
      description: 'Large storm system requires 200nm deviation but saves turbulence delays',
      potentialSavings: '12% time savings',
      affectedFlights: 5,
      implementation: 'Coordinate with ATC for southern routing',
      priority: 'high'
    },
    {
      id: 3,
      title: 'Congestion Mitigation - LAX Departures',
      description: 'Delay departures by 15-20 minutes to avoid holding patterns',
      potentialSavings: '8% fuel savings',
      affectedFlights: 12,
      implementation: 'Adjust departure slots in coordination with ground control',
      priority: 'medium'
    }
  ];

  const routeComparisons = [
    {
      route: 'LAX → JFK',
      standard: { time: '5h 42m', fuel: '18,500 gal', cost: '$24,500' },
      optimized: { time: '5h 28m', fuel: '17,200 gal', cost: '$22,800' },
      savings: { time: '14 min', fuel: '7.0%', cost: '$1,700' }
    },
    {
      route: 'SFO → ORD',
      standard: { time: '4h 18m', fuel: '14,200 gal', cost: '$18,800' },
      optimized: { time: '4h 05m', fuel: '13,100 gal', cost: '$17,300' },
      savings: { time: '13 min', fuel: '7.7%', cost: '$1,500' }
    },
    {
      route: 'SEA → MIA',
      standard: { time: '6h 15m', fuel: '22,800 gal', cost: '$30,200' },
      optimized: { time: '5h 52m', fuel: '20,400 gal', cost: '$27,000' },
      savings: { time: '23 min', fuel: '10.5%', cost: '$3,200' }
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Route Optimization Dashboard</h1>
          <p className="text-muted-foreground">AI-powered route planning based on weather, traffic, and efficiency metrics</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <BarChart3 className="mr-2 h-4 w-4" />
            Optimization Report
          </Button>
          <Button>
            <Navigation className="mr-2 h-4 w-4" />
            Manual Route Planning
          </Button>
        </div>
      </div>

      {/* Optimization Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {optimizationMetrics.map((metric) => (
          <Card key={metric.label} className="mission-control-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <metric.icon className="h-8 w-8 text-primary" />
                <Badge variant={metric.trend === 'up' ? 'default' : 'secondary'}>
                  {metric.trend === 'up' ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                </Badge>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
                <p className="text-3xl font-bold text-foreground">{metric.value}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-success">{metric.change}</span>
                  <span className="text-xs text-muted-foreground">{metric.description}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Dashboard */}
      <Tabs defaultValue="active" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="active">Active Routes</TabsTrigger>
          <TabsTrigger value="optimization">Route Suggestions</TabsTrigger>
          <TabsTrigger value="factors">Optimization Factors</TabsTrigger>
          <TabsTrigger value="analytics">Performance Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Route className="h-5 w-5 text-primary" />
                Active Flight Route Optimization
              </CardTitle>
              <CardDescription>Real-time route analysis and optimization recommendations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {activeRoutes.map((route) => (
                <div key={route.flight} className="p-4 rounded-lg border bg-card/50">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-medium text-foreground">{route.flight}</h3>
                        <span className="text-sm text-muted-foreground">{route.route}</span>
                        <Badge variant={
                          route.status === 'optimized' ? 'default' : 
                          route.status === 'rerouting' ? 'destructive' : 
                          route.status === 'optimal' ? 'default' : 'secondary'
                        }>
                          {route.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-3">
                        <div>
                          <p className="text-xs text-muted-foreground">Current Path</p>
                          <p className="text-sm font-medium text-foreground">{route.currentPath}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Optimized Path</p>
                          <p className="text-sm font-medium text-foreground">{route.optimizedPath}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6 text-sm">
                        <span className="text-success">Fuel: -{route.fuelSaving}</span>
                        <span className="text-success">Time: -{route.timeSaving}</span>
                        <span className="text-muted-foreground">{route.weatherImpact}</span>
                      </div>
                      <p className="text-xs text-primary mt-2">{route.recommendation}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">View Route</Button>
                      <Button size="sm">Apply Optimization</Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="optimization" className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                AI-Powered Route Suggestions
              </CardTitle>
              <CardDescription>Machine learning recommendations for optimal routing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {suggestedOptimizations.map((suggestion) => (
                <div key={suggestion.id} className="p-4 rounded-lg border bg-card/50">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-medium text-foreground">{suggestion.title}</h3>
                        <Badge variant={suggestion.priority === 'high' ? 'destructive' : 'secondary'}>
                          {suggestion.priority} priority
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{suggestion.description}</p>
                      <div className="grid grid-cols-2 gap-4 mb-2">
                        <div>
                          <p className="text-xs text-muted-foreground">Potential Savings</p>
                          <p className="text-sm font-medium text-success">{suggestion.potentialSavings}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Affected Flights</p>
                          <p className="text-sm font-medium text-foreground">{suggestion.affectedFlights} flights</p>
                        </div>
                      </div>
                      <p className="text-xs text-primary">{suggestion.implementation}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Analyze</Button>
                      <Button size="sm">Implement</Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="factors" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="mission-control-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wind className="h-5 w-5 text-primary" />
                  Route Optimization Factors
                </CardTitle>
                <CardDescription>Real-time conditions affecting route planning decisions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {routeFactors.map((factor) => (
                  <div key={factor.factor} className="flex items-center justify-between p-3 rounded-lg border bg-card/50">
                    <div>
                      <p className="font-medium text-foreground">{factor.factor}</p>
                      <p className="text-sm text-muted-foreground">{factor.description}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={factor.impact === 'High' ? 'destructive' : factor.impact === 'Medium' ? 'secondary' : 'outline'}>
                        {factor.impact}
                      </Badge>
                      <Badge variant="outline">{factor.status}</Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="mission-control-card">
              <CardHeader>
                <CardTitle>Route Comparison Tool</CardTitle>
                <CardDescription>Standard vs optimized route performance comparison</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Select value={selectedRoute} onValueChange={setSelectedRoute}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a route to compare" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lax-jfk">LAX → JFK</SelectItem>
                    <SelectItem value="sfo-ord">SFO → ORD</SelectItem>
                    <SelectItem value="sea-mia">SEA → MIA</SelectItem>
                  </SelectContent>
                </Select>

                {routeComparisons.map((comparison) => (
                  <div key={comparison.route} className="p-3 rounded-lg border bg-card/50">
                    <h4 className="font-medium text-foreground mb-2">{comparison.route}</h4>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <p className="text-muted-foreground">Standard</p>
                        <p>Time: {comparison.standard.time}</p>
                        <p>Fuel: {comparison.standard.fuel}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Optimized</p>
                        <p>Time: {comparison.optimized.time}</p>
                        <p>Fuel: {comparison.optimized.fuel}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Savings</p>
                        <p className="text-success">-{comparison.savings.time}</p>
                        <p className="text-success">-{comparison.savings.fuel}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="mission-control-card">
              <CardHeader>
                <CardTitle>Route Efficiency Trends</CardTitle>
                <CardDescription>Historical optimization performance analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center border rounded-lg bg-muted/20">
                  <div className="text-center">
                    <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Efficiency Trend Chart</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mission-control-card">
              <CardHeader>
                <CardTitle>Fuel Savings Analysis</CardTitle>
                <CardDescription>Cost savings from route optimization over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center border rounded-lg bg-muted/20">
                  <div className="text-center">
                    <Fuel className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Fuel Savings Chart</p>
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

export default RouteOptimization;