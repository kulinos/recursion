function convertToBinary(number,strOfBinary) {
	if(number==0) {
	return strOfBinary;
	}
strOfBinary = number % 2 + strOfBinary;
return convertToBinary(Math.floor(number / 2), strOfBinary)

}