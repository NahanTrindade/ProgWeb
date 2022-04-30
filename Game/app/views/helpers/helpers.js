export function printError(errors, campo) {
    let message
    if (errors) {
        errors.errors.forEach(error => {
            if (error.path === campo) {
                message = error.message;
            }
        })
    }
    return message;
}

export function toLower(value) {
    return value.toLowerCase();
}

export function checked(areaId, id) {
    if (id == areaId) {
        return 'checked';
    } else {
        return '';
    }
}
