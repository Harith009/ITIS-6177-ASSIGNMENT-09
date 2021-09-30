exports.handler = async (event) => {
    // TODO implement
    const msg = "Hari Says " + event.keyword
    const response = {
        statusCode: 200,
        //body: JSON.stringify(msg),
        body: msg
    };
    return response;
};