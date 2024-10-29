let park='brynant parking kodaikanal parking';

//finding length of string
let stringlength=park.length;

//substring of the string
let substringwithend=park.substring(9,11);
let substringwithoutend=park.substring(9);

//trim the whitespace
let trimmedstring=park.trim();

//find a word in the string
let foundSearchedword=park.includes('kodaikanal');
let foundSearchedwordwithposition=park.includes('kodaikanal',18);

//find the index of the string
let indexofsearchedkeywithoutposition=park.indexOf('parking');
let indexofsearchedkeywithposition=park.indexOf('parking',20);  
