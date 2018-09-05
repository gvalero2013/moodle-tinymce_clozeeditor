// JavaScript Document

// Parse Answer

// This function will retrieve an answer
function getAnswer(string, count) {
    var temp = getAnswerCode(string);

    // Delete the first percentage
    temp = deleteTillChar(temp, '%');
    temp = deleteTillChar(temp, '%');

    for (var i = 1; i <= countAnswers(); i++) {
        if (i == count) {
            temp = deleteAfterString(temp, '#');

            if (isStringInString(temp, ':')) {
                // Indicates throttle values
                temp = deleteAfterString(temp, ':');
            }
            if (typeof(temp) == 'string') {
                return temp;
            } else {
                return '';
            }
        } else {
            temp = deleteInbetweenAnswers(temp);
        }
    }
}

// Delete messy stuff between two answers
function deleteInbetweenAnswers(string) {
    var temp = string;
    // temp = strstr(string, '#');
    // temp = strstr(temp, '~');

    temp = deleteTillChar(temp, '~');

    if (temp.length > 0) {
        if (temp.charAt(1) == '%') {
            temp = deleteTillChar(temp, '%');
        }
        temp = substr(temp, 1);

        if ((temp.charAt(1) == '%') || (temp.charAt(2) == '%') || (temp.charAt(3) == '%')) {
            // When should this be the case? :-/
            temp = deleteTillChar(temp, '%');
        }
    }

    return temp;
}
