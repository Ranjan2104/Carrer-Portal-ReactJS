import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { loginAPI } from './Middleware/api/loginAPI';
import { otpAPI } from './Middleware/api/otpAPI';
import { resendOTPAPI } from './Middleware/api/resendAPI';
import { resumeUploadAPI } from './Middleware/api/resumeUploadAPI';
import { dashboardAPI } from './Middleware/api/dashboardAPI';
import { jobApplyAPI } from './Middleware/api/jobApplyAPI';
import { appliedJobApi } from './Middleware/api/getAppliedJobAPI';
import { getCategoryApi } from './Middleware/api/getAllcategoryAPI';

export const store = configureStore({
    reducer: {
        [loginAPI.reducerPath]: loginAPI.reducer,
        [otpAPI.reducerPath]: otpAPI.reducer,
        [resendOTPAPI.reducerPath]: resendOTPAPI.reducer,
        [resumeUploadAPI.reducerPath]: resumeUploadAPI.reducer,
        [dashboardAPI.reducerPath]: dashboardAPI.reducer,
        [jobApplyAPI.reducerPath]: jobApplyAPI.reducer,
        [appliedJobApi.reducerPath]: appliedJobApi.reducer,
        [getCategoryApi.reducerPath]: getCategoryApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
        loginAPI.middleware,
        otpAPI.middleware,
        resendOTPAPI.middleware,
        resumeUploadAPI.middleware,
        dashboardAPI.middleware,
        jobApplyAPI.middleware,
        appliedJobApi.middleware,
        getCategoryApi.middleware
    )
})

setupListeners(store.dispatch);