import { LockExtension } from "./LockExtension";
import { UnsplashPhoto } from "./UnsplashPhoto";
import { User } from "./User";

export type Lock = {
    "_id": string,
    "minDuration": number,
    "maxDuration": number,
    "calculatedMaxLimitDuration": number,
    "user": User,
    "unsplashPhoto": UnsplashPhoto,
    "extensions": LockExtension[],
    "createdAt": string,
    "updatedAt": string,
    "deletedAt": string,
    "archivedAt": string,
    "locks": unknown[
        // {
        //     "_id": "string",
        //     "endDate": "2021-10-21T11:51:08.297Z",
        //     "title": "string",
        //     "totalDuration": 0,
        //     "isAllowedToViewTime": true,
        //     "canBeUnlocked": true,
        //     "canBeUnlockedByMaxLimitDate": true,
        //     "isFrozen": true,
        //     "role": "keyholder",
        //     "extensions": [
        //         {
        //             "slug": "string",
        //             "config": {},
        //             "_id": "string",
        //             "displayName": "string",
        //             "summary": "string",
        //             "subtitle": "string",
        //             "icon": "string",
        //             "mode": "cumulative",
        //             "regularity": 0,
        //             "userData": {},
        //             "nbActionsRemaining": 0,
        //             "nextActionDate": "string",
        //             "isPartner": true,
        //             "textConfig": "string",
        //             "createdAt": "string",
        //             "updatedAt": "string"
        //         }
        //     ],
        //     "combination": "string",
        //     "availableHomeActions": [
        //         {
        //             "extensionPartyId": "string",
        //             "slug": "string",
        //             "title": "string",
        //             "description": "string",
        //             "icon": "string",
        //             "badge": "string"
        //         }
        //     ],
        //     "reasonsPreventingUnlocking": [
        //         {
        //             "reason": "string",
        //             "icon": "string"
        //         }
        //     ],
        //     "extensionsAllowUnlocking": true,
        //     "createdAt": "2021-10-21T11:51:08.298Z",
        //     "updatedAt": "2021-10-21T11:51:08.298Z",
        //     "startDate": "2021-10-21T11:51:08.298Z",
        //     "minDate": "2021-10-21T11:51:08.298Z",
        //     "maxDate": "2021-10-21T11:51:08.298Z",
        //     "maxLimitDate": "2021-10-21T11:51:08.298Z",
        //     "displayRemainingTime": true,
        //     "limitLockTime": true,
        //     "status": "locked",
        //     "deletedAt": "2021-10-21T11:51:08.298Z",
        //     "unlockedAt": "2021-10-21T11:51:08.298Z",
        //     "archivedAt": "2021-10-21T11:51:08.298Z",
        //     "frozenAt": "2021-10-21T11:51:08.298Z",
        //     "keyholderArchivedAt": "2021-10-21T11:51:08.298Z",
        //     "allowSessionOffer": true,
        //     "isTestLock": true,
        //     "offerToken": "string",
        //     "hideTimeLogs": true
        // }
    ],
    "requirePassword": boolean,
    "durationMode": string,
    "maxLimitDuration": number,
    "minDate": string,
    "maxDate": string,
    "maxLimitDate": string,
    "displayRemainingTime": boolean,
    "limitLockTime": boolean,
    "maxLockedUsers": number,
    "isPublic": boolean,
    "requireContact": boolean,
    "name": string,
    "description": string,
    "hideTimeLogs": boolean,
    "lastSavedAt": string
};