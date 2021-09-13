//===============================================
// Longest Substring Without Repeating Characters

function lengthOfLongestSubstring(s) {
    let longestSubstring = 1;
    
    if(s.length === 0){
        return 0
    }
    
    if(s.length === 1){
        return 1
    }
    
   for(let i = 0; i < s.length; i++){
       let length = 1
        let substring = ""
       
       for(let j = i+1;j < s.length; j++ ){
           
           substring = s.substring(i, j)
           
           
           if(substring.includes(s[j])){
               break;
           } else {
               length = j - i+1
               if(length > longestSubstring){
                   longestSubstring = length
               }
           }
           
       }
      
       
   }
    
    return longestSubstring
};

//===============================================
// Find longest palindrome in a string

function longestPalindrome(s) {
    
    if(isPalindrome(s)){
        return s
    }
    
    let longestPalindrome = s[0]
    
    
    for(let i=0; i < s.length; i++){
        
        let substring = ""
                
        //inner loop
        for(let j = i+1; j < s.length; j++ ){
             substring = s.substring(i, j+1)
                        
            if(isPalindrome(substring)){
                if(substring.length > longestPalindrome.length){
                    longestPalindrome = substring
                }
            }
        }
        
    }
    
    return longestPalindrome

};

const isPalindrome = (s) => {
    if (s.length < 2) {
      return true;
    }   
    if(s[0] !== s[s.length-1]){
      return false
    }
    
    return isPalindrome(s.slice(1,-1))
    
}

//===============================================
// Zigzag of a string

function convert(s, numRows) {
    
    const arr = []
    
    if (numRows == 1) return s;
    
    // the cycle at which the new row starts
    let cycle = numRows*2 -2
    
    for(let i = 0;i < numRows; i++){
        for(let j = 0; j < s.length; j=j+cycle){
            arr.push(s[i+j]);
            
            if(i!==0 && i!==numRows - 1){
                arr.push(s[j+cycle-i])
            }
        }   
    }
        
    return arr.join("")
}


//===============================================
// Palindrome of AlphaNumeric string (ignore cases)

function isPalindrome(s) {
    
    const strArr = s.replace(/([^a-zA-Z0-9])/g,"")
    
    if(strArr.length < 2){
        return true
    }
    
    if( strArr[0].localeCompare(strArr[strArr.length - 1], undefined, {
        sensitivity: 'base',
      }) !== 0){
        
        return false   
    }
    
    return isPalindrome(strArr.slice(1, -1))
};
    
    
