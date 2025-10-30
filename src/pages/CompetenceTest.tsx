import { useState } from 'react';
import { ChevronRight, RotateCcw, Trophy, ArrowLeft, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface CandidateResult {
  id: string;
  name: string;
  party: string;
  color: string;
  score: number;
  percentage: number;
}

const CompetenceTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState<CandidateResult[]>([]);
  const [isTestComplete, setIsTestComplete] = useState(false);

  const scenarios = [
    {
      id: 1,
      scenario: "Economic Crisis Scenario",
      question: "A severe economic recession hits the country with rising unemployment and business closures. Which candidate's response demonstrates the best competence and leadership?",
      options: [
        { 
          id: 'a', 
          text: 'Sarah Johnson proposes immediate federal aid packages for struggling families, infrastructure investment to create jobs, and regulatory oversight to prevent corporate exploitation during the crisis.', 
          weight: { sarah: 3, michael: 1, elena: 2 } 
        },
        { 
          id: 'b', 
          text: 'Michael Chen advocates for tax cuts for businesses to stimulate growth, reducing regulations to encourage private sector recovery, and limited government intervention.', 
          weight: { sarah: 1, michael: 3, elena: 1 } 
        },
        { 
          id: 'c', 
          text: 'Elena Rodriguez calls for a balanced approach with targeted relief for small businesses and workers, community-based economic development programs, and fiscal responsibility.', 
          weight: { sarah: 2, michael: 2, elena: 3 } 
        }
      ]
    },
    {
      id: 2,
      scenario: "Natural Disaster Response",
      question: "A catastrophic hurricane devastates a coastal region, leaving thousands homeless and infrastructure destroyed. Which candidate shows the most competent crisis management approach?",
      options: [
        { 
          id: 'a', 
          text: 'Sarah Johnson mobilizes comprehensive federal disaster response teams, secures emergency funding, establishes temporary housing programs, and coordinates with state agencies for long-term rebuilding.', 
          weight: { sarah: 3, michael: 1, elena: 2 } 
        },
        { 
          id: 'b', 
          text: 'Michael Chen emphasizes state-level response with federal support only where necessary, encourages private sector involvement in rebuilding, and focuses on reducing bureaucratic delays.', 
          weight: { sarah: 1, michael: 3, elena: 2 } 
        },
        { 
          id: 'c', 
          text: 'Elena Rodriguez proposes immediate local relief coordination, community-driven rebuilding efforts with federal resources, and climate-resilient infrastructure planning for future disasters.', 
          weight: { sarah: 2, michael: 2, elena: 3 } 
        }
      ]
    },
    {
      id: 3,
      scenario: "Public Health Emergency",
      question: "A new infectious disease outbreak threatens public health nationwide. Which candidate demonstrates the strongest competence in protecting citizens?",
      options: [
        { 
          id: 'a', 
          text: 'Sarah Johnson implements nationwide testing programs, vaccine development funding, mask mandates in public spaces, and economic support for affected workers and businesses.', 
          weight: { sarah: 3, michael: 1, elena: 2 } 
        },
        { 
          id: 'b', 
          text: 'Michael Chen prioritizes individual freedom while encouraging voluntary safety measures, supports pharmaceutical innovation through deregulation, and opposes federal mandates.', 
          weight: { sarah: 1, michael: 3, elena: 1 } 
        },
        { 
          id: 'c', 
          text: 'Elena Rodriguez advocates for science-based policies with community input, targeted interventions in high-risk areas, transparent communication, and support for local health systems.', 
          weight: { sarah: 2, michael: 2, elena: 3 } 
        }
      ]
    },
    {
      id: 4,
      scenario: "Education System Crisis",
      question: "National test scores drop significantly while teacher shortages worsen and school funding gaps widen. Which candidate's plan shows the most effective competence in addressing education?",
      options: [
        { 
          id: 'a', 
          text: 'Sarah Johnson proposes increased federal funding for public schools, higher teacher salaries, smaller class sizes, universal pre-K, and student debt relief programs.', 
          weight: { sarah: 3, michael: 1, elena: 2 } 
        },
        { 
          id: 'b', 
          text: 'Michael Chen supports school choice initiatives, charter school expansion, performance-based teacher pay, and reducing federal education mandates to give states more control.', 
          weight: { sarah: 1, michael: 3, elena: 1 } 
        },
        { 
          id: 'c', 
          text: 'Elena Rodriguez focuses on equitable funding formulas, community schools with wraparound services, teacher recruitment from diverse backgrounds, and modernized curriculum standards.', 
          weight: { sarah: 2, michael: 2, elena: 3 } 
        }
      ]
    },
    {
      id: 5,
      scenario: "National Security Threat",
      question: "Intelligence reports indicate a credible cyber-attack threat against critical infrastructure. Which candidate demonstrates the strongest national security competence?",
      options: [
        { 
          id: 'a', 
          text: 'Sarah Johnson proposes increased cybersecurity funding, partnerships with tech companies, international cooperation agreements, and protection of critical infrastructure through federal oversight.', 
          weight: { sarah: 3, michael: 2, elena: 2 } 
        },
        { 
          id: 'b', 
          text: 'Michael Chen emphasizes private sector cybersecurity solutions, reduced regulations to allow faster response, strong military cyber capabilities, and limited government involvement.', 
          weight: { sarah: 2, michael: 3, elena: 1 } 
        },
        { 
          id: 'c', 
          text: 'Elena Rodriguez advocates for balanced public-private cybersecurity partnerships, community resilience programs, transparent threat communication, and protection of civil liberties.', 
          weight: { sarah: 2, michael: 2, elena: 3 } 
        }
      ]
    },
    {
      id: 6,
      scenario: "Housing Affordability Crisis",
      question: "Housing costs skyrocket while homelessness increases in major cities. Which candidate shows the most competent approach to solving this crisis?",
      options: [
        { 
          id: 'a', 
          text: 'Sarah Johnson proposes federal affordable housing construction programs, rent control measures, tenant protection laws, and increased funding for homeless services and mental health support.', 
          weight: { sarah: 3, michael: 1, elena: 2 } 
        },
        { 
          id: 'b', 
          text: 'Michael Chen advocates for zoning reform to increase housing supply, tax incentives for developers, reduced building regulations, and letting market forces address pricing.', 
          weight: { sarah: 1, michael: 3, elena: 2 } 
        },
        { 
          id: 'c', 
          text: 'Elena Rodriguez supports community land trusts, mixed-income housing development, local zoning flexibility, and coordinated services addressing root causes of homelessness.', 
          weight: { sarah: 2, michael: 2, elena: 3 } 
        }
      ]
    },
    {
      id: 7,
      scenario: "Immigration System Breakdown",
      question: "The immigration system faces a humanitarian crisis at the border with overwhelmed facilities and lengthy asylum processing times. Which candidate demonstrates the most competent immigration leadership?",
      options: [
        { 
          id: 'a', 
          text: 'Sarah Johnson proposes comprehensive immigration reform with pathway to citizenship, increased resources for humane border processing, asylum system improvements, and addressing root causes in origin countries.', 
          weight: { sarah: 3, michael: 1, elena: 2 } 
        },
        { 
          id: 'b', 
          text: 'Michael Chen emphasizes border security enhancement, stricter enforcement of existing laws, limits on asylum claims, and merit-based immigration system prioritizing economic contributions.', 
          weight: { sarah: 1, michael: 3, elena: 1 } 
        },
        { 
          id: 'c', 
          text: 'Elena Rodriguez advocates for streamlined legal immigration pathways, humane border management, community integration support, and bipartisan solutions addressing both security and humanitarian concerns.', 
          weight: { sarah: 2, michael: 2, elena: 3 } 
        }
      ]
    }
  ];

  const candidates = [
    { 
      id: 'sarah', 
      name: 'Sarah Johnson', 
      party: 'Democratic Party',
      color: 'bg-blue-500'
    },
    { 
      id: 'michael', 
      name: 'Michael Chen', 
      party: 'Republican Party',
      color: 'bg-red-500'
    },
    { 
      id: 'elena', 
      name: 'Elena Rodriguez', 
      party: 'Independent',
      color: 'bg-green-500'
    }
  ];

  const handleAnswerChange = (value: string) => {
    setAnswers({
      ...answers,
      [currentQuestion]: value
    });
  };

  const handleNext = () => {
    if (currentQuestion < scenarios.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    const scores: Record<string, number> = { sarah: 0, michael: 0, elena: 0 };
    
    Object.entries(answers).forEach(([questionIndex, answer]) => {
      const scenario = scenarios[parseInt(questionIndex)];
      const selectedOption = scenario.options.find(opt => opt.id === answer);
      
      if (selectedOption) {
        Object.entries(selectedOption.weight).forEach(([candidate, weight]) => {
          scores[candidate] += weight;
        });
      }
    });

    const maxScore = scenarios.length * 3;
    const results = candidates.map(candidate => ({
      ...candidate,
      score: scores[candidate.id],
      percentage: Math.round((scores[candidate.id] / maxScore) * 100)
    }));

    results.sort((a, b) => b.percentage - a.percentage);
    setShowResults(results);
    setIsTestComplete(true);
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults([]);
    setIsTestComplete(false);
  };

  const progress = ((currentQuestion + 1) / scenarios.length) * 100;

  if (isTestComplete) {
    return (
      <div className="min-h-screen bg-gradient-card pt-20">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Card className="shadow-elegant">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Trophy className="h-16 w-16 text-accent" />
              </div>
              <CardTitle className="text-3xl text-primary">Competence Assessment Results</CardTitle>
              <p className="text-muted-foreground">
                Based on your scenario responses, here are candidates whose competencies align with your choices:
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {showResults.map((candidate, index) => (
                  <div key={candidate.id} className="border rounded-lg p-4 hover:shadow-card transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Badge variant={index === 0 ? "default" : "secondary"}>
                          #{index + 1} Match
                        </Badge>
                        <div>
                          <h3 className="font-semibold text-primary">{candidate.name}</h3>
                          <p className="text-sm text-muted-foreground">{candidate.party}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-accent">{candidate.percentage}%</div>
                        <div className="text-sm text-muted-foreground">alignment</div>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${candidate.color.replace('bg-', 'bg-')} transition-all duration-1000`}
                        style={{ width: `${candidate.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-muted/50 border border-border rounded-lg p-4 mt-8">
                <div className="flex gap-3">
                  <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Understanding Your Results</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      This competence test evaluates candidates based on their proposed responses to real-world crises and challenges. 
                      Your selections indicate which candidates' leadership styles and problem-solving approaches align with your expectations for effective governance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button onClick={resetTest} variant="outline" size="lg">
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Retake Test
                </Button>
                <Button asChild variant="civic" size="lg">
                  <Link to="/candidates">
                    View Candidate Profiles
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-card pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-primary">Voter Competence Test</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Assess candidate responses to real-world political scenarios
              </p>
            </div>
            <div className="text-sm text-muted-foreground">
              Scenario {currentQuestion + 1} of {scenarios.length}
            </div>
          </div>
          <Progress value={progress} className="w-full" />
        </div>

        <Card className="shadow-elegant">
          <CardHeader>
            <div className="mb-2">
              <Badge variant="outline" className="text-xs">
                {scenarios[currentQuestion].scenario}
              </Badge>
            </div>
            <CardTitle className="text-xl text-primary leading-relaxed">
              {scenarios[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={answers[currentQuestion] || ''}
              onValueChange={handleAnswerChange}
            >
              <div className="space-y-4">
                {scenarios[currentQuestion].options.map((option) => (
                  <div key={option.id} className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value={option.id} id={option.id} className="mt-1" />
                    <Label htmlFor={option.id} className="flex-1 cursor-pointer leading-relaxed text-sm">
                      {option.text}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>

            <div className="flex justify-between mt-8">
              <Button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                variant="outline"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              
              <Button
                onClick={handleNext}
                disabled={!answers[currentQuestion]}
                variant={currentQuestion === scenarios.length - 1 ? "hero" : "default"}
              >
                {currentQuestion === scenarios.length - 1 ? 'See Results' : 'Next'}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CompetenceTest;