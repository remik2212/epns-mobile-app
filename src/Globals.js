export default {

  LINKS: {
    APPBOT_NAME: 'App Bot',
    APP_WEBSITE: 'https://epns.io',
  },

  // For Async Storage --> Represents Key and some Constants
  STORAGE: {
    IS_SIGNED_IN: 'IsUserSignedIn',
    SIGNED_IN_TYPE: 'SignedInType',
    FIRST_SIGN_IN: 'FirstSignInByUser',
    USER_LOCKED: 'UserLocked',
    PASSCODE_ATTEMPTS: 'MaxPasscodeAttempts',

    STORED_WALLET_OBJ: 'StoredWalletObject',
    ENCRYPTED_PKEY: 'EncryptedPrivateKey',

    HASHED_PASSCODE: 'HashedPasscode',

    PUSH_TOKEN: 'PushToken',
    PUSH_TOKEN_TO_REMOVE: 'PushTokenToRemove',
    PUSH_TOKEN_SERVER_SYNCED: 'PushTokenServerSynced',
    PUSH_BADGE_COUNT: 'PushBadgeCount',
    PUSH_BADGE_COUNT_PREVIOUS: 'PreviousPushBadgeCount',
  },

  CONSTANTS: {
    CRED_TYPE_WALLET: "TypeWallet",
    CRED_TYPE_PRIVATE_KEY: "TypePrivateKey",

    NULL_EXCEPTION: "NULL",

    MAX_PASSCODE_ATTEMPTS: 5,

    PUSH_TYPE_NORMAL_MSG: 1,
    PUSH_TYPE_ENCRYPTED_MSG: 2,

    FEED_ITEMS_TO_PULL: 20,
  },

  ADJUSTMENTS: {
    SCREEN_GAP_HORIZONTAL: 10,
    SCREEN_GAP_VERTICAL: 10,

    DEFAULT_BIG_RADIUS: 10,
    DEFAULT_MID_RADIUS: 8,
    FEED_ITEM_RADIUS: 8,
  },

  COLORS: {
    PRIMARY: 'rgba(27.0, 150.0, 227.0, 1.0)',

    LINKS: 'rgba(20.0, 126.0, 251.0, 1.0)',

    GRADIENT_PRIMARY: 'rgba(226.0, 8.0, 128.0, 1.0)',
    GRADIENT_SECONDARY: 'rgba(53.0, 197.0, 243.0, 1.0)',
    GRADIENT_THIRD: 'rgba(103.0, 76.0, 159.0, 1.0)',

    TRANSPARENT: 'transparent',

    WHITE: 'rgba(255.0, 255.0, 255.0, 1.0)',
    DARK_WHITE: 'rgba(255.0, 255.0, 255.0, 0.75)',
    MID_WHITE: 'rgba(255.0, 255.0, 255.0, 0.5)',
    LIGHT_WHITE: 'rgba(255.0, 255.0, 255.0, 0.25)',

    SLIGHTER_GRAY: 'rgba(250.0, 250.0, 250.0, 1)',
    SLIGHT_GRAY: 'rgba(231.0, 231.0, 231.0, 1)',
    LIGHT_GRAY: 'rgba(225.0, 225.0, 225.0, 1)',
    MID_GRAY: 'rgba(200.0, 200.0, 200.0, 1)',
    DARK_GRAY: 'rgba(160.0, 160.0, 160.0, 1)',
    DARKER_GRAY: 'rgba(100.0, 100.0, 100.0, 1)',

    LIGHT_BLACK_TRANS: 'rgba(0.0, 0.0, 0.0, 0.1)',
    SEMI_MID_BLACK_TRANS: 'rgba(0.0, 0.0, 0.0, 0.25)',
    MID_BLACK_TRANS: 'rgba(0.0, 0.0, 0.0, 0.5)',
    DARK_BLACK_TRANS: 'rgba(0.0, 0.0, 0.0, 0.75)',
    BLACK: 'rgba(0.0, 0.0, 0.0, 1.0)',

    CONFIRM: 'rgba(34.0, 139.0, 34.0, 1.0)',
    WARNING: 'rgba(255.0, 153.0, 0.0, 1.0)',

    SUBLIME_RED: 'rgba(237.0, 59.0, 72.0, 1.0)',
    BADGE_RED: 'rgba(208.0, 44.0, 30.0, 1.0)',
    LIGHT_MAROON: 'rgba(159.0, 0.0, 0.0, 1.0)',
    LIGHTER_MAROON: 'rgba(129.0, 0.0, 0.0, 1.0)',
  },
};
