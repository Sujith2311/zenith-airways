oimport React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Clock, 
  TrendingUp, 
  TrendingDown,
  Plane,
  MapPin,
  ArrowLeft,
  Calendar,
  BarChart3
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const DelayAnalysisDashbard = () => {
  const navigate = useNavigate();

  const delayCategories = [
    { 
      category: 'Weather Related', 
      incidents: 23, 
      avgDelay: '42 min', 
      trend: '+15%',
      impact: 'High'
    },
    { 
      category: 'Crew Issues', 
      incidents: 18, 
      avgDelay: '28 min', 
      trend: '-8%',
      impact: 'Medium'
    },
    { 
      category: 'Mechanical', 
      incidents: 12, 
      avgDelay: '35 min', 
      trend: '+3%',
      impact: 'Medium'
    },
    { 
      category: 'Air Traffic Control', 
      incidents: 31, 
      avgDelay: '22 min', 
      trend: '+12%',
      impact: 'High'
    }
  ];

  const recentDelays = [
    { 
      flight: 'ZA-451', 
      route: 'LAX → SFO', 
      delay: '45 min', 
      cause: 'Thunderstorm avoidance',
      gate: 'B12',
      passengers: 187,
      status: 'Departed'
    },
    { 
      flight: 'ZA-782', 
      route: 'SEA → LAX', 
      delay: '28 min', 
      cause: 'Crew replacement',
      gate: 'A7',
      passengers: 156,
      status: 'Boarding'
    },
    { 
      flight: 'ZA-334', 
      route: 'DEN → LAX', 
      delay: '22 min', 
      cause: 'Ground equipment issue',
      gate: 'C15',
      passengers: 198,
      status: 'Delayed'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={() => navigate(-1)}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Delay Analysis Dashboard</h1>
            <p className="text-muted-foreground">Comprehensive delay tracking and root cause analysis</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Date Range
          </Button>
          <Button>
            <BarChart3 className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Delay Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {delayCategories.map((category, index) => (
          <Card key={index} className="mission-control-card">
            <CardHeader>
              <CardTitle className="text-base">{category.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-2xl font-bold text-primary">{category.incidents}</div>
                <div className="text-sm text-muted-foreground">incidents this week</div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Avg Delay</span>
                    <span className="font-medium">{category.avgDelay}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Trend</span>
                    <span className={`font-medium ${category.trend.startsWith('+') ? 'text-destructive' : 'text-success'}`}>
                      {category.trend}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Impact</span>
                    <Badge variant={category.impact === 'High' ? 'destructive' : 'secondary'}>
                      {category.impact}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed Analysis */}
      <Tabs defaultValue="recent" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="recent">Recent Delays</TabsTrigger>
          <TabsTrigger value="trends">Trend Analysis</TabsTrigger>
          <TabsTrigger value="predictions">Predictive Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="recent" className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle>Recent Flight Delays</CardTitle>
              <CardDescription>Detailed breakdown of recent delay incidents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentDelays.map((delay, index) => (
                  <div key={index} className="p-4 rounded-lg border bg-card/50">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="font-medium text-foreground">{delay.flight}</p>
                          <p className="text-sm text-muted-foreground">{delay.route}</p>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Gate {delay.gate} • {delay.passengers} passengers
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <p className="text-lg font-bold text-destructive">{delay.delay}</p>
                          <p className="text-xs text-muted-foreground">delay</p>
                        </div>
                        <Badge variant={
                          delay.status === 'Departed' ? 'default' : 
                          delay.status === 'Boarding' ? 'secondary' : 'destructive'
                        }>
                          {delay.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">Cause:</span>
                      <span className="text-foreground">{delay.cause}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle>Delay Trend Analysis</CardTitle>
              <CardDescription>Historical delay patterns and seasonal trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center border rounded-lg bg-muted/20">
                <div className="text-center">
                  <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Interactive Delay Trends Chart</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="predictions" className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle>Predictive Delay Analysis</CardTitle>
              <CardDescription>AI-powered delay predictions and prevention recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-lg border bg-card/50">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="h-5 w-5 text-warning" />
                    <p className="font-medium">High Delay Risk Detected</p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Weather patterns suggest 40% increase in delays for afternoon departures
                  </p>
                  <Button size="sm">View Recommendations</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DelayAnalysisDashboard;