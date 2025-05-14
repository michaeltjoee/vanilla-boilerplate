// src/types/global.d.ts
export {};

interface BrazeUser {
  setCustomUserAttribute: (
    key: string,
    value: Record<string, unknown>
  ) => void;
  getUserId?: () => string;
}

declare global {
  interface Window {
    appboyBridge: {
      logClick: (buttonId: string) => void;
      logCustomEvent: (
        eventName: string,
        props?: Record<string, unknown>
      ) => void;
      closeMessage: () => void;
    };
    brazeBridge: {
      getUser: () => BrazeUser;
    };
  }
}
