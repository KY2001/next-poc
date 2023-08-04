/* tslint:disable */
/* eslint-disable */
/**
 * openapi template
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface GetPingResponse
 */
export interface GetPingResponse {
    /**
     * Server status.
     * @type {string}
     * @memberof GetPingResponse
     */
    status: string;
}

/**
 * Check if a given object implements the GetPingResponse interface.
 */
export function instanceOfGetPingResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "status" in value;

    return isInstance;
}

export function GetPingResponseFromJSON(json: any): GetPingResponse {
    return GetPingResponseFromJSONTyped(json, false);
}

export function GetPingResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetPingResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': json['status'],
    };
}

export function GetPingResponseToJSON(value?: GetPingResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
    };
}
