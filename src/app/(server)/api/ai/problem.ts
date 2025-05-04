export type ProblemData = {
  problemStatement: string;
  constraints: string[];
  exampleInput: string;
  exampleOutput: string;
};

export function extract(jsonString: string): ProblemData {
  try {
    // Extract JSON content from code blocks if present
    const jsonMatch = jsonString.match(/```(?:json)?\n([\s\S]*?)\n```/);
    const jsonContent = jsonMatch ? jsonMatch[1] : jsonString;
    
    const data = JSON.parse(jsonContent);

    const problemStatement = data.problem_statement || '';
    const constraints = Array.isArray(data.constraints) ? data.constraints : [];
    const exampleInput = data.example_input || '';
    const exampleOutput = data.example_output || '';

    return {
      problemStatement,
      constraints,
      exampleInput,
      exampleOutput,
    };
  } catch (error) {
    throw new Error("Invalid JSON input");
  }
}