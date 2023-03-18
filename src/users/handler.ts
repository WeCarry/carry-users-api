import { Context } from "aws-lambda";

type UserRequest = {
	[key: string]: any;
};

async function handler(request: UserRequest, context: Context) {}
