function extractEmails(data) {
    let pattern = /\b(?<=\s|^)[A-Za-z0-9]+([\.\_\-]?[A-Za-z0-9])+@([A-Za-z]+[-]?[A-Za-z]+)+(\.[a-z]{2,})+\b/g;

    let match = data.match(pattern);
    if (match !== null) {
        console.log(match.join('\n'));
    }
}

extractEmails('Please contact us at: support@github.com.');
extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');
extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.');

extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- -11steve.parker@softuni.de.');