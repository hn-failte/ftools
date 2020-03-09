const responseSuccess = (data = {}, msg = 'OK', errCode = 0) => ({
    errCode,
    msg,
    data
})

const responseError = (data = {}, msg = 'Error', errCode = 4) => ({
    errCode,
    msg,
    data
})

const responseRedirect = (data = {}, msg = 'Wait', errCode = 3) => ({
    errCode,
    msg,
    data
})

module.exports = {
    responseSuccess,
    responseError,
    responseRedirect
}