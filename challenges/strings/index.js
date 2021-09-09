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