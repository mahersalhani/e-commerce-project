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
 * The type of account
 * @export
 * @enum {string}
 */

export const AccountType = {
    Customer: 'customer',
    Admin: 'admin'
} as const;

export type AccountType = typeof AccountType[keyof typeof AccountType];



