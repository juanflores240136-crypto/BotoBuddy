import { useState } from 'react';
import { ChevronRight, RotateCcw, Trophy, ArrowLeft } from 'lucide-react';
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

const SampleTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState<CandidateResult[]>([]);
  const [isTestComplete, setIsTestComplete] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What should be the government's role in the economy?",
      options: [
        { id: 'a', text: 'Minimal government intervention, free market solutions', weight: { sarah: 1, michael: 3, elena: 1 } },
        { id: 'b', text: 'Moderate regulation with public-private partnerships', weight: { sarah: 3, michael: 2, elena: 2 } },
        { id: 'c', text: 'Strong government programs to address inequality', weight: { sarah: 2, michael: 1, elena: 3 } }
      ]
    },
    {
      id: 2,
      question: "How should we address climate change?",
      options: [
        { id: 'a', text: 'Market-based solutions and gradual transition', weight: { sarah: 2, michael: 3, elena: 1 } },
        { id: 'b', text: 'Aggressive government action and regulations', weight: { sarah: 3, michael: 1, elena: 3 } },
        { id: 'c', text: 'Balance environmental and economic concerns', weight: { sarah: 2, michael: 2, elena: 2 } }
      ]
    },
    {
      id: 3,
      question: "What's your priority for healthcare policy?",
      options: [
        { id: 'a', text: 'Universal healthcare access for all', weight: { sarah: 2, michael: 1, elena: 3 } },
        { id: 'b', text: 'Market-based insurance reforms', weight: { sarah: 1, michael: 3, elena: 1 } },
        { id: 'c', text: 'Expanded public options with private choice', weight: { sarah: 3, michael: 2, elena: 2 } }
      ]
    },
    {
      id: 4,
      question: "How should education be funded and managed?",
      options: [
        { id: 'a', text: 'Increased public funding and teacher support', weight: { sarah: 3, michael: 1, elena: 2 } },
        { id: 'b', text: 'School choice and performance-based funding', weight: { sarah: 1, michael: 3, elena: 1 } },
        { id: 'c', text: 'Community-centered schools with equitable funding', weight: { sarah: 2, michael: 1, elena: 3 } }
      ]
    },
    {
      id: 5,
      question: "What's your view on tax policy?",
      options: [
        { id: 'a', text: 'Lower taxes to stimulate economic growth', weight: { sarah: 1, michael: 3, elena: 1 } },
        { id: 'b', text: 'Progressive taxation to fund public services', weight: { sarah: 3, michael: 1, elena: 3 } },
        { id: 'c', text: 'Balanced approach with targeted tax incentives', weight: { sarah: 2, michael: 2, elena: 2 } }
      ]
    },
    {
      id: 6,
      question: "What should be the government's role in the economy?",
      options: [
        { id: 'a', text: 'Minimal government intervention, free market solutions', weight: { sarah: 1, michael: 3, elena: 1 } },
        { id: 'b', text: 'Moderate regulation with public-private partnerships', weight: { sarah: 3, michael: 2, elena: 2 } },
        { id: 'c', text: 'Strong government programs to address inequality', weight: { sarah: 2, michael: 1, elena: 3 } }
      ]
    },
    {
      id: 7,
      question: "What should be the government's role in the economy?",
      options: [
        { id: 'a', text: 'Minimal government intervention, free market solutions', weight: { sarah: 1, michael: 3, elena: 1 } },
        { id: 'b', text: 'Moderate regulation with public-private partnerships', weight: { sarah: 3, michael: 2, elena: 2 } },
        { id: 'c', text: 'Strong government programs to address inequality', weight: { sarah: 2, michael: 1, elena: 3 } }
      ]
    },
    {
      id: 8,
      question: "What should be the government's role in the economy?",
      options: [
        { id: 'a', text: 'Minimal government intervention, free market solutions', weight: { sarah: 1, michael: 3, elena: 1 } },
        { id: 'b', text: 'Moderate regulation with public-private partnerships', weight: { sarah: 3, michael: 2, elena: 2 } },
        { id: 'c', text: 'Strong government programs to address inequality', weight: { sarah: 2, michael: 1, elena: 3 } }
      ]
    },
    {
      id: 9,
      question: "What should be the government's role in the economy?",
      options: [
        { id: 'a', text: 'Minimal government intervention, free market solutions', weight: { sarah: 1, michael: 3, elena: 1 } },
        { id: 'b', text: 'Moderate regulation with public-private partnerships', weight: { sarah: 3, michael: 2, elena: 2 } },
        { id: 'c', text: 'Strong government programs to address inequality', weight: { sarah: 2, michael: 1, elena: 3 } }
      ]
    },
    {
      id: 10,
      question: "What should be the government's role in the economy?",
      options: [
        { id: 'a', text: 'Minimal government intervention, free market solutions', weight: { sarah: 1, michael: 3, elena: 1 } },
        { id: 'b', text: 'Moderate regulation with public-private partnerships', weight: { sarah: 3, michael: 2, elena: 2 } },
        { id: 'c', text: 'Strong government programs to address inequality', weight: { sarah: 2, michael: 1, elena: 3 } }
      ]
    }
  ];

  const candidates = [
    { 
      id: 'Adelin Acosta', 
      name: 'Adelin Acosta', 
      party: 'Democratic Party',
      color: 'bg-blue-500'
    },
    { 
      id: 'Santhrielle Sevillal', 
      name: 'Santhrielle Sevilla', 
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
    if (currentQuestion < questions.length - 1) {
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
      const question = questions[parseInt(questionIndex)];
      const selectedOption = question.options.find(opt => opt.id === answer);
      
      if (selectedOption) {
        Object.entries(selectedOption.weight).forEach(([candidate, weight]) => {
          scores[candidate] += weight;
        });
      }
    });

    const maxScore = questions.length * 3;
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

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (isTestComplete) {
    return (
      <div className="min-h-screen bg-gradient-card pt-20">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Card className="shadow-elegant">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Trophy className="h-16 w-16 text-accent" />
              </div>
              <CardTitle className="text-3xl text-primary">Your Results</CardTitle>
              <p className="text-muted-foreground">
                Based on your answers, here are your candidate matches:
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
                        <div className="text-sm text-muted-foreground">match</div>
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
            <h1 className="text-3xl font-bold text-primary">Voter Alignment Test</h1>
            <div className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </div>
          </div>
          <Progress value={progress} className="w-full" />
        </div>

        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="text-xl text-primary">
              {questions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={answers[currentQuestion] || ''}
              onValueChange={handleAnswerChange}
            >
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option) => (
                  <div key={option.id} className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value={option.id} id={option.id} className="mt-1" />
                    <Label htmlFor={option.id} className="flex-1 cursor-pointer leading-relaxed">
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
                variant={currentQuestion === questions.length - 1 ? "hero" : "default"}
              >
                {currentQuestion === questions.length - 1 ? 'See Results' : 'Next'}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SampleTest;