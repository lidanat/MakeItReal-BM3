function checkEquals(arr1, arr2) { 
    if(arr1.length != arr2.length) {
        console.log('false')
        return
    }
    for(let i = 0; i< arr1.length; i++){
        if (arr1[i] !== arr2[i]){
            console.log('false')
            return
            
        } 
     }
     console.log('true')
     
}


checkEquals([1, 2], [1, 3])
checkEquals([1, 2], [1, 2])
checkEquals([4, 5, 6], [4, 5, 6]) 
checkEquals([4, 7, 6], [4, 5, 6]) 
checkEquals([4, 7, 6], [4, 6, 7]) 
    