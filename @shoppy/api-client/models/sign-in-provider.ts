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



/**
 * The sign in provider
 * @export
 * @enum {string}
 */

export const SignInProvider = {
    Password: 'password',
    Google: 'google'
} as const;

export type SignInProvider = typeof SignInProvider[keyof typeof SignInProvider];



