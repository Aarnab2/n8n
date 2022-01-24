/* eslint-disable import/no-cycle */
import express = require('express');
import { User } from './databases/entities/User';
import { IPersonalizationSurveyAnswers } from './Interfaces';

export type AuthenticatedRequest<
	RouteParams = {},
	ResponseBody = {},
	RequestBody = {},
	RequestQuery = {},
> = express.Request<RouteParams, ResponseBody, RequestBody, RequestQuery> & { user: User };

export declare namespace OAuthRequest {
	type OAuth1CredentialAuth = AuthenticatedRequest<{}, {}, {}, { id: string }>;
	type OAuth2CredentialAuth = OAuth1CredentialAuth;
	type OAuth1CredentialCallback = AuthenticatedRequest<
		{},
		{},
		{},
		{ oauth_verifier: string; oauth_token: string; cid: string }
	>;
	type OAuth2CredentialCallback = AuthenticatedRequest<{}, {}, {}, { code: string; state: string }>;
}

export type NodeParameterOptionsRequest = AuthenticatedRequest<
	{},
	{},
	{},
	{
		nodeTypeAndVersion: string;
		methodName: string;
		path: string;
		currentNodeParameters: string;
		credentials: string;
	}
>;

export type UserSurveyRequest = AuthenticatedRequest<{}, {}, IPersonalizationSurveyAnswers>;
