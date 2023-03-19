import { ExecutionResult } from "graphql";
import { JwtSession } from "../lib/jwt/jwt.session";
// import { Container } from "typedi";

export type GraphqlRequest = {
	_authToken?: string;
	_session?: JwtSession;
	query: string;
	variables: null | undefined | { readonly [variable: string]: unknown };
};

export type ExecuteOptions = {
	apiUrl: string;
	request: GraphqlRequest;
	db: {
		uri: string;
		dbName: string;
		poolSize: number;
	};
};

export async function execute({
	apiUrl,
	request,
	db,
}: ExecuteOptions): Promise<void> {
	// const connection = await getConnection()
	// Container;
	// return;
}
