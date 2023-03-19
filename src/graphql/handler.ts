import { Context } from "aws-lambda";

export async function handler(request: any, context: Context): Promise<any> {
	return JSON.stringify("Hello My name is Joohn");
}
