export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('apollo:error', (error) => {
        // Handle different error cases
        throw createError({
            status: 500,
            statusCode: 404,
            message: error.response?.errors![0].message || 'Page not found',
        });
    })
})
