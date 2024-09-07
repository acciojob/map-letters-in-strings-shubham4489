//your JS code here. If required.
function mapLetters(word){
	let letterMap={};
	for(let i=0;i<word.length;i++){
		let char=word[i];
		if(letterMap[char]){
			letterMap[char].push(i);
		}
			else{
			letterMap[char]=[i];
			}
		}
	return letterMap;
}