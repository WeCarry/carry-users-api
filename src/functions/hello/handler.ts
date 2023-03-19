import {
	Context,
	APIGatewayProxyEvent,
	APIGatewayProxyResult,
} from "aws-lambda";

export async function handler(
	event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
	// Access request data from the event object
	const queryStringParameters = event.queryStringParameters;
	const pathParameters = event.pathParameters;
	const headers = event.headers;

	// Your logic here

	const response: APIGatewayProxyResult = {
		statusCode: 200,
		body: JSON.stringify({
			message: "Hello, welcome to the serverless world!",
		}),
	};
	return response;
}
