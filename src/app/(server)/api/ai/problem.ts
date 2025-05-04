export type ProblemData = {
     problemStatement: string;
     constraints: string[];
     exampleInput: string;
     exampleOutput: string;
   };
   
   export function extract(jsonString: string): ProblemData {
     try {
       const data = JSON.parse(jsonString);
   
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
   