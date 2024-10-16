const baseURL = 'https://choose-me-3yyy.vercel.app/?vercelToolbarCode=d-6iFIqQ-VZ7T8N';

async function requester(method, url, data = null) {
    const options = {
        method,
        headers: { 'X-Requested-With': 'XMLHttpRequest' }
    };

    if (data) {
        options.headers = {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        };
        options.body = JSON.stringify(data);
    }

    // Use AbortController for request timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    options.signal = controller.signal;

    try {
        const response = await fetch(baseURL + url, options);
        clearTimeout(timeoutId);  // Clear timeout when response is received

        if (!response.ok) {
            const errorData = await response.json();
            return { error: errorData.error || 'Request failed' };  // Return error data instead of throwing
        }

        return await response.json();  // Return data on success
    } catch (error) {
        // Return error message instead of throwing it
        if (error.name === 'AbortError') {
            return { error: 'Request timed out' };
        }
        return { error: error.message || 'Unknown error occurred' };
    }
}

// Export reusable functions for GET, POST, PUT, DELETE requests
export const POST = requester.bind(null, 'POST');
export const GET = requester.bind(null, 'GET');
export const PUT = requester.bind(null, 'PUT');
export const DELETE = requester.bind(null, 'DELETE');
