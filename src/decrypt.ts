import { fileExists } from "./utils";
import execute from "./spawn";

export default async (
  input: string,
  password?: string,
  output?: string
): Promise<string> => {
  if (!input) return "Please specify input file";
  if (!fileExists(input)) return "Input file doesn't exist";

  const callArguments = ["--decrypt"];

  // Password
  if(password){
    callArguments.push(`--password=${password}`);
  }

  // Input file path
  callArguments.push(input);

  // Print PDF on stdout
  if (output) {
    callArguments.push(output);
  } else {
    callArguments.push("-");
  }

  return execute(callArguments);
};
