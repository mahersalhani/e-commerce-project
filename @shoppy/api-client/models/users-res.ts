/* tslint:disable */
/* eslint-disable */
/**
 * shoppy
 * An API to do awesome things
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { UserRes } from './user-res';

/**
 * 
 * @export
 * @interface UsersRes
 */
export interface UsersRes {
    /**
     * 
     * @type {number}
     * @memberof UsersRes
     */
    'total': number;
    /**
     * 
     * @type {Array<UserRes>}
     * @memberof UsersRes
     */
    'users': Array<UserRes>;
}
