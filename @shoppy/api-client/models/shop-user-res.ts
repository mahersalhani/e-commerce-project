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
import { AccountType } from './account-type';
// May contain unused imports in some cases
// @ts-ignore
import { SignInProvider } from './sign-in-provider';

/**
 * 
 * @export
 * @interface ShopUserRes
 */
export interface ShopUserRes {
    /**
     * The unique identifier of a user
     * @type {number}
     * @memberof ShopUserRes
     */
    'id': number;
    /**
     * The long unique identifier of a user
     * @type {string}
     * @memberof ShopUserRes
     */
    'uid': string;
    /**
     * Email of a user
     * @type {string}
     * @memberof ShopUserRes
     */
    'email': string;
    /**
     * Display name of a user
     * @type {string}
     * @memberof ShopUserRes
     */
    'displayName': string;
    /**
     * Is user disabled
     * @type {boolean}
     * @memberof ShopUserRes
     */
    'isBlocked': boolean;
    /**
     * Is email verified
     * @type {boolean}
     * @memberof ShopUserRes
     */
    'emailVerified': boolean;
    /**
     * Phone number of a user
     * @type {string}
     * @memberof ShopUserRes
     */
    'profileImage': string;
    /**
     * 
     * @type {AccountType}
     * @memberof ShopUserRes
     */
    'accountType': AccountType;
    /**
     * Phone number of a user
     * @type {string}
     * @memberof ShopUserRes
     */
    'phone': string;
    /**
     * 
     * @type {SignInProvider}
     * @memberof ShopUserRes
     */
    'signInProvider': SignInProvider;
}



