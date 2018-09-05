// JavaScript Document

// Parse Feedback

// Delete messy stuff between comments
function deleteInbetweenComments(string) {
    var temp = string;
    temp = strstr(temp, '~');
    temp = strstr(temp, '#');
    return temp;
}

// Retrieve comment
function getComment(string, count) {
    var temp = getAnswerCode(string);
    // Alert(temp);

    for (var i = 1; i <= countAnswers(); i++) {
        if (i == count) {
            // The last comment is not followed by a ~, as this marks an answer
            if (i != countAnswers()) {
                temp = deleteAfterString(temp, '~');
            }
            temp = deleteTillChar(temp, '#');

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
