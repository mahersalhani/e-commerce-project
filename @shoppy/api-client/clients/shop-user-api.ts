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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { BadRes } from '../models';
// @ts-ignore
import { OkRes } from '../models';
// @ts-ignore
import { ValidationErrorRes } from '../models';
/**
 * ShopUserApi - axios parameter creator
 * @export
 */
export const ShopUserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Update user profile
         * @param {string} [username] Username
         * @param {string} [phone] Phone number
         * @param {File} [avatar] Avatar
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateProfile: async (username?: string, phone?: string, avatar?: File, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/shop-user/update-profile`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();


            if (username !== undefined) { 
                localVarFormParams.append('username', username as any);
            }
    
            if (phone !== undefined) { 
                localVarFormParams.append('phone', phone as any);
            }
    
            if (avatar !== undefined) { 
                localVarFormParams.append('avatar', avatar as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ShopUserApi - functional programming interface
 * @export
 */
export const ShopUserApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ShopUserApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Update user profile
         * @param {string} [username] Username
         * @param {string} [phone] Phone number
         * @param {File} [avatar] Avatar
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateProfile(username?: string, phone?: string, avatar?: File, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OkRes>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateProfile(username, phone, avatar, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ShopUserApi.updateProfile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ShopUserApi - factory interface
 * @export
 */
export const ShopUserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ShopUserApiFp(configuration)
    return {
        /**
         * 
         * @summary Update user profile
         * @param {string} [username] Username
         * @param {string} [phone] Phone number
         * @param {File} [avatar] Avatar
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateProfile(username?: string, phone?: string, avatar?: File, options?: any): AxiosPromise<OkRes> {
            return localVarFp.updateProfile(username, phone, avatar, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ShopUserApi - object-oriented interface
 * @export
 * @class ShopUserApi
 * @extends {BaseAPI}
 */
export class ShopUserApi extends BaseAPI {
    /**
     * 
     * @summary Update user profile
     * @param {string} [username] Username
     * @param {string} [phone] Phone number
     * @param {File} [avatar] Avatar
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShopUserApi
     */
    public updateProfile(username?: string, phone?: string, avatar?: File, options?: RawAxiosRequestConfig) {
        return ShopUserApiFp(this.configuration).updateProfile(username, phone, avatar, options).then((request) => request(this.axios, this.basePath));
    }
}

