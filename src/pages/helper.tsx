/* eslint-disable */
function formatApiResponse(response: any, defaultData: any): any {
    // Append default data to the response
    const formattedResponse = response.map((item: any, index: number): any => {
        return {
            ...response[index],
            ...defaultData[index],
        };
    });

    return formattedResponse;
}

export {
    formatApiResponse,
} 