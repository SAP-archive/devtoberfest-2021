/**
 * formats phone number into (###) ###-####
 * @param {*} phoneNumberString string of 10 numbers
 * @returns formatted number or original string
 */
export function formatPhoneNumber(phoneNumberString) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return phoneNumberString;
}

/**
 * formats an address object into a single line address
 * @param {*} details object as described below:
 * {
 *   street: 'Street Address', // Ex. 744 Greenville Lane
 *   apt: 'Apt, Suite, Unit, Building', // Ex. Apt G
 *   city: 'City', // Ex. San Francisco
 *   state: 'State', // Ex. CA
 *   zipCode: 'Zipcode', // Ex. 94100
 * }
 * @returns single line string with address
 */
export function formatSingleLineAddress(details) {
  return `${details.street}, ${details.apt}, ${details.city}, ${details.state} ${details.zipCode}`;
}


