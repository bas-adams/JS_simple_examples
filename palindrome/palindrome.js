(function(){

function isPalindrome(str){
	return str == str.split('').reverse().join('');
}

isPalindrome('kopytko');
console.log(isPalindrome('kopytko'));


function isPalindromeWithoutReversMethod(str){
	var newStr = str.split(''),
		  lastElementInStr = str.length - 1,
			reversArr = [],
			strLength = str.length;

	for(let i = 0; i < strLength; i++){
		reversArr[i] = newStr[lastElementInStr];		
		lastElementInStr = lastElementInStr - 1;
	}
	return str == reversArr.join('');
}

isPalindromeWithoutReversMethod("text");
console.log(isPalindromeWithoutReversMethod("lioil"));

}());



