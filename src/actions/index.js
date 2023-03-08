export const incNumber = (num) => {
    return {
        type: "Increment",
        payload: num
    }
}
export const decNumber = (num) => {
    return {
        type: "Decrement",
        payload: num
    }
}
export const multNumber = (num) => {
    return {
        type: "Multiplication",
        payload: num
    }
}
export const divNumber = (num) => {
    return {
        type: "Division",
        payload: num
    }
}